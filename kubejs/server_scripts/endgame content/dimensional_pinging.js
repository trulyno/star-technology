ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.vibration_laser_engraver(id('coordinate_crystal'))
        .itemInputs('2x gtceu:exquisite_echo_shard_gem')
        .notConsumable('gtceu:nether_star_lens')
        .notConsumable('gtceu:echo_shard_lens')
        .inputFluids('gtceu:glowstone 256000','gtceu:ice 128000','gtceu:pcb_coolant 16000')
        .outputFluids('gtceu:steam 192000','gtceu:hot_pcb_coolant 19200')
        .itemOutputs('kubejs:coordinate_crystal')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UV]);

    //Dimensional Finder Controller
    
    // Machine recipes
    
    event.recipes.gtceu.assembly_line(id('dimensional_finder'))
        .itemInputs(
            'gtceu:uv_scanner','16x gtceu:uv_sensor','16x gtceu:uv_sensor','16x gtceu:uv_sensor','16x gtceu:uv_sensor',
            '64x gtceu:fine_trinaquadalloy_wire','64x gtceu:fine_trinaquadalloy_wire', '8x #gtceu:circuits/uv'
        )
        .inputFluids(
            'gtceu:naquadria 34992',
            'gtceu:neutronium 13248',
            'gtceu:echo_r 11520'
        )
        .itemOutputs('gtceu:dimensional_finder')
        .duration(36000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:coordinate_crystal'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VHA[GTValues.UV]); 

    //Coordinate Crystals
    
    if (global.packmode !== 'abydos'){
        (() => { 
        event.recipes.gtceu.dimensional_finder(id('abydos_coordinate_crystal'))
            .itemInputs('kubejs:coordinate_crystal', 'minecraft:sand', 'gtceu:uv_sensor')
            .inputFluids('gtceu:naquadria 9072')
            .chancedOutput('kubejs:abydos_coordinate_crystal', 250, 50)
            .duration(12000)
            .EUt(GTValues.VHA[GTValues.UV])
            .dimension('minecraft:overworld'); 
        })()
    }   

    if (global.packmode == 'abydos'){
        (() => {
        event.recipes.gtceu.dimensional_finder(id('abydos_coordinate_crystal'))
            .itemInputs('kubejs:coordinate_crystal', 'minecraft:sand', 'gtceu:uv_sensor')
            .inputFluids('gtceu:naquadria 9072')
            .chancedOutput('kubejs:abydos_coordinate_crystal', 9900, 0)
            .duration(120)
            .EUt(GTValues.VHA[GTValues.UV])
            .dimension('sgjourney:abydos');
        })()
    }   
    
    event.recipes.gtceu.dimensional_finder(id('nether_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:netherrack', 'gtceu:uhv_sensor')
        .inputFluids('minecraft:lava 5000')
        .chancedOutput('kubejs:nether_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UHV])
        .dimension('sgjourney:abydos');

    event.recipes.gtceu.dimensional_finder(id('end_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:end_stone', 'gtceu:uhv_sensor')
        .inputFluids('gtceu:echo_r 5000')
        .chancedOutput('kubejs:end_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UHV])
        .dimension('sgjourney:abydos');

    /*event.recipes.gtceu.dimensional_finder(id('lantea_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:prismarine', 'gtceu:uev_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:lantea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UEV])
        .dimension('minecraft:the_nether');

    event.recipes.gtceu.dimensional_finder(id('cavum_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:obsidian', 'gtceu:uiv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:cavum_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UIV])
        .dimension('minecraft:the_end');
        
    event.recipes.gtceu.dimensional_finder(id('sea_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:water_bucket', 'gtceu:uxv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:sea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UXV])
        .dimension('minecraft:lantea');

    event.recipes.gtceu.dimensional_finder(id('void_coordinate_crystal'))
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:stone', 'gtceu:opv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:void_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(4*GTValues.VHA[GTValues.UXV])
        .dimension('minecraft:cavum_tenebrae');*/

    const CrystalDuping = (type,eutScale) => {
        event.recipes.gtceu.scanner(`${type}_crystal_duping`)
        .itemInputs('kubejs:coordinate_crystal',`kubejs:${type}_coordinate_crystal`)
        .itemOutputs(`2x kubejs:${type}_coordinate_crystal`)
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.UV]*(4**eutScale));
    }
    CrystalDuping('abydos',0);
    CrystalDuping('nether',1);
    CrystalDuping('end',1);

});

const crystalfeed = (realmId, realm, stage, message) => {
    ItemEvents.rightClicked(`kubejs:${realm}_coordinate_crystal`, event => {
        if (event.player.isCrouching()) {
            event.item.count--
            event.server.runCommandSilent(`execute at ${event.player.username} run playsound minecraft:block.enchantment_table.use player ${event.player.username} ~ ~ ~`);
            event.server.scheduleInTicks(15, ctx => {
                event.player.tell(`As you consume the echoes of the coordinate crystal, you hear voices whispering, and strange numbers appear before your eyes, along with visions of ${message}.`);
                event.server.runCommand(`execute as ${event.player.username} run sgjourney stargateNetwork address ${realmId}:${realm}`);
                event.server.runCommandSilent(`execute as ${event.player.username} run gamestage add ${event.player.username} ${stage}`);
                event.server.runCommandSilent(`give ${event.player.username} kubejs:coordinate_crystal`)
                event.server.runCommandSilent(`execute at ${event.player.username} run playsound sgjourney:milky_way_chevron_encode player ${event.player.username} ~ ~ ~`);
            })
        }
    });
}

crystalfeed('sgjourney', 'abydos', 'one', 'sandy dunes and a lost world buried beneath sand and dust');

const crystalfeedTroll = (realm,special) => {
    ItemEvents.rightClicked(`kubejs:${realm}_coordinate_crystal`, event => {
        if (event.player.isCrouching()) {
            event.item.count--
            event.server.runCommandSilent(`give ${event.player.username} kubejs:coordinate_crystal`)
            event.server.runCommandSilent(`execute at ${event.player.username} run playsound sgjourney:universe_dial_fail player ${event.player.username} ~ ~ ~`);
            event.player.tell(`§kMaker of Gates§r is not yet pleased with you.... Patience`);
            event.server.scheduleInTicks(20, ctx => {
            event.player.tell(`The ${special} not ready for you`);
            event.server.scheduleInTicks(50, ctx => {
                event.player.potionEffects.add('minecraft:nausea', 1200, 1);
                event.player.potionEffects.add('minecraft:mining_fatigue', 1200, 1);
                event.server.runCommandSilent(`execute at ${event.player.username} run playsound sgjourney:milky_way_dial_fail player ${event.player.username} ~ ~ ~`);
                event.player.tell(`Your Mind Clouds With Confusion`);
            })
            })
        }
    });
}

crystalfeedTroll('nether', '§4Infernal Hells§r are');
crystalfeedTroll('end', '§5Echoing Abyss§r is');