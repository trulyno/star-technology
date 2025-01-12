ServerEvents.recipes(event => {

    event.shaped('gtceu:ulv_barrel',[
        'ABA',
        'ACA',
        'ADA'],{
        A: '#forge:stripped_logs',
        B: 'minecraft:chest',
        C: 'woodenbucket:wooden_bucket',
        D: '#minecraft:wooden_slabs'
    });

    event.shaped('gtceu:ulv_stone_barrel',[
        'ABA',
        'ACA',
        'ADA'],{
            A: '#forge:stone',
            B: 'minecraft:chest',
            C: 'minecraft:bucket',
            D: 'minecraft:stone_slab'
    });

     function sbarrel(output,fluidcons,nconsfluid,circ){
        event.recipes.gtceu.stone_barrel(`${output}`)
            .notConsumableFluid(`${nconsfluid}`)
            .inputFluids(`${fluidcons} 1000`)
            .itemOutputs(`${output}`)
            .circuit(circ)
            .duration(15);
    }
    sbarrel('minecraft:cobblestone','minecraft:water','minecraft:lava','')
    sbarrel('minecraft:obsidian','minecraft:lava','minecraft:water',1)
    sbarrel('minecraft:blackstone','exnihilosequentia:witch_water','minecraft:lava','')

        event.recipes.gtceu.stone_barrel(`gtceu:tempered_glass`)
            .itemInputs(`minecraft:glass`)
            .inputFluids(`minecraft:lava 1000`)
            .itemOutputs(`gtceu:tempered_glass`)
            .duration(600);

    function barrel(output,item,fluid){
        event.recipes.gtceu.barrel(`${output}`)
            .itemInputs(`${item}`)
            .inputFluids(`${fluid} 1000`)
            .itemOutputs(`${output}`)
            .duration(15);
    }
    barrel('minecraft:clay','exnihilosequentia:dust','minecraft:water')
    barrel('minecraft:mud','minecraft:dirt','minecraft:water')
    barrel('minecraft:pointed_dripstone','exnihilosequentia:crushed_dripstone','minecraft:water')
    barrel('minecraft:brown_mushroom_block','exnihilosequentia:mycelium_spores','exnihilosequentia:witch_water')
    barrel('minecraft:red_mushroom_block','minecraft:brown_mushroom_block','exnihilosequentia:witch_water')
    barrel('minecraft:soul_sand','#minecraft:smelts_to_glass','exnihilosequentia:witch_water')
    barrel('minecraft:soul_soil','minecraft:coarse_dirt','exnihilosequentia:witch_water')
    barrel('minecraft:blackstone','minecraft:cobblestone','exnihilosequentia:witch_water')
    barrel('minecraft:slime_block','#forge:mushrooms','exnihilosequentia:witch_water')
    barrel('minecraft:tube_coral_block','exnihilosequentia:tube_coral_larva','exnihilosequentia:sea_water')
    barrel('minecraft:brain_coral_block','exnihilosequentia:brain_coral_larva','exnihilosequentia:sea_water')
    barrel('minecraft:bubble_coral_block','exnihilosequentia:bubble_coral_larva','exnihilosequentia:sea_water')
    barrel('minecraft:fire_coral_block','exnihilosequentia:fire_coral_larva','exnihilosequentia:sea_water')
    barrel('minecraft:horn_coral_block','exnihilosequentia:horn_coral_larva','exnihilosequentia:sea_water')

    const compost=['minecraft:hanging_roots','minecraft:pumpkin_pie','minecraft:string','minecraft:apple',
        'minecraft:pumpkin','minecraft:mangrove_roots','minecraft:big_dripleaf','minecraft:spore_blossom','minecraft:vine',
        'minecraft:lily_pad','minecraft:sweet_berries','minecraft:red_mushroom','exnihilosequentia:grass_seeds',
        'minecraft:brown_mushroom','minecraft:spider_eye','minecraft:melon_slice','minecraft:sugar_cane','minecraft:fern','minecraft:bamboo',
        'exnihilosequentia:mycelium_spores','minecraft:bread','minecraft:glow_berries','minecraft:cactus','exnihilosequentia:silkworm']

    compost.forEach(type => {
        event.recipes.gtceu.barrel_composting(`${type}_composting`)
            .itemInputs(`4x ${type}`)
            .itemOutputs('minecraft:dirt')
            .duration(15);
    });

    event.recipes.gtceu.barrel_composting(`flowers_composting`)
        .itemInputs(`4x #minecraft:flowers`)
        .itemOutputs('minecraft:dirt')
        .duration(15);

    event.recipes.gtceu.barrel_composting(`seeds_composting`)
        .itemInputs(`4x #forge:seeds`)
        .itemOutputs('minecraft:dirt')
        .duration(15);

    event.recipes.gtceu.barrel_composting(`crops_composting`)
        .itemInputs(`4x #forge:crops`)
        .itemOutputs('minecraft:dirt')
        .duration(15);   
        
    event.recipes.gtceu.barrel_composting(`leaves_composting`)
        .itemInputs(`4x #minecraft:leaves`)
        .itemOutputs('minecraft:dirt')
        .duration(15);

    event.recipes.gtceu.barrel_composting(`saplings_composting`)
        .itemInputs(`4x #minecraft:saplings`)
        .itemOutputs('minecraft:dirt')
        .duration(15);  

    function transformation(output,ncItem){
        event.recipes.gtceu.barrel_transformation(`${output}`)
            .notConsumable(`${ncItem}`)
            .inputFluids('minecraft:water 1000')
            .outputFluids(`${output} 1000`)
            .duration(400);
    }

    transformation('exnihilosequentia:sea_water','#minecraft:smelts_to_glass')
    transformation('exnihilosequentia:witch_water','exnihilosequentia:mycelium_spores')
});