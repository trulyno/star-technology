ServerEvents.recipes(event => {

    event.recipes.gtceu.vibration_laser_engraver('coordinate_crystal')
        .itemInputs('2x gtceu:exquisite_echo_shard_gem')
        .notConsumable('gtceu:black_glass_lens')
        .inputFluids('gtceu:pcb_coolant 16000')
        .outputFluids('gtceu:hot_pcb_coolant 19200')
        .itemOutputs('kubejs:coordinate_crystal')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UV]);

    //Dimensional Finder Controller
    
    // Machine recipes
    
    event.recipes.gtceu.assembly_line('dimensional_finder')
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
    
    event.recipes.gtceu.dimensional_finder('abydos_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:sand', 'gtceu:uv_sensor')
        .inputFluids('gtceu:naquadria 9072')
        .chancedOutput('kubejs:abydos_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UV])
        .dimension('minecraft:overworld');

    event.recipes.gtceu.dimensional_finder('nether_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:netherrack', 'gtceu:uhv_sensor')
        .inputFluids('gtceu:utopian_akreyrium 9072')
        .chancedOutput('kubejs:nether_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UHV])
        .dimension('sgjourney:abydos');

    event.recipes.gtceu.dimensional_finder('end_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:end_stone', 'gtceu:uhv_sensor')
        .inputFluids('gtceu:utopian_akreyrium 9072')
        .chancedOutput('kubejs:end_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UHV])
        .dimension('sgjourney:abydos');

    /*event.recipes.gtceu.dimensional_finder('lantea_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:prismarine', 'gtceu:uev_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:lantea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UEV])
        .dimension('minecraft:the_nether');

    event.recipes.gtceu.dimensional_finder('cavum_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:obsidian', 'gtceu:uiv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:cavum_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UIV])
        .dimension('minecraft:the_end');
        
    event.recipes.gtceu.dimensional_finder('sea_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:water_bucket', 'gtceu:uxv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:sea_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UXV])
        .dimension('minecraft:lantea');

    event.recipes.gtceu.dimensional_finder('void_coordinate_crystal')
        .itemInputs('kubejs:coordinate_crystal', 'minecraft:stone', 'gtceu:opv_sensor')
        .inputFluids('gtceu:rhexis 9072') //its just a fluid you cant make
        .chancedOutput('kubejs:void_coordinate_crystal', 250, 50)
        .duration(12000)
        .EUt(4*GTValues.VHA[GTValues.UXV])
        .dimension('minecraft:cavum_tenebrae');*/

});