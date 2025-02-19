ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:shaped/axe_flint'});
    event.shaped(Item.of('gtceu:flint_axe'), [
        'FT',
        'ST'
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });
   
    //Kiln
    [{fuel: 'coals', burnMultiplier: .5}, {fuel: 'logs', burnMultiplier: 1.2}].forEach( coal => {
        event.recipes.gtceu.kiln(`brick_${coal.fuel}`)
            .itemInputs('4x gtceu:compressed_clay', `#minecraft:${coal.fuel}`)
            .itemOutputs('4x minecraft:brick')
            .duration(800*coal.burnMultiplier);
        event.recipes.gtceu.kiln(`coke_oven_brick_${coal.fuel}`)
            .itemInputs('4x gtceu:compressed_coke_clay', `2x #minecraft:${coal.fuel}`)
            .itemOutputs('4x gtceu:coke_oven_brick')
            .duration(1000*coal.burnMultiplier);
        event.recipes.gtceu.kiln(`firebrick_${coal.fuel}`)
            .itemInputs('4x gtceu:compressed_fireclay', `2x #minecraft:${coal.fuel}`)
            .itemOutputs('4x gtceu:firebrick')
            .duration(1200*coal.burnMultiplier);
        event.recipes.gtceu.kiln(`glass_${coal.fuel}`)
            .itemInputs('gtceu:glass_dust', `#minecraft:${coal.fuel}`)
            .itemOutputs('minecraft:glass')
            .duration(1600*coal.burnMultiplier);

    //Rugged Alloyer and Chunk Processing
    [{ore: 'hematite', metal: 'minecraft:iron'},{ore: 'pyrite', metal: 'minecraft:iron'},{ore: 'magnetite', metal: 'minecraft:iron'},
        {ore: 'cassiterite', metal: 'gtceu:tin'},{ore: 'sphalerite', metal: 'gtceu:zinc'},{ore: 'galena', metal: 'gtceu:lead'}].forEach(chunks => {
        event.recipes.gtceu.rugged_alloyer(`${chunks.ore}_chunks_${coal.fuel}`)
            .itemInputs(`3x kubejs:${chunks.ore}_crushed_ore_chunk`, `#minecraft:${coal.fuel}`)
            .itemOutputs(`${chunks.metal}_ingot`, 'gtceu:ash_dust')
            .duration(400*coal.burnMultiplier);
        event.smelting(`2x ${chunks.metal}_nugget`, `kubejs:${chunks.ore}_crushed_ore_chunk`);
        });
        event.recipes.gtceu.rugged_alloyer(`chalcopyrite_chunks_${coal.fuel}`)
            .itemInputs(`3x kubejs:chalcopyrite_crushed_ore_chunk`, `#minecraft:${coal.fuel}`)
            .itemOutputs(`minecraft:copper_ingot`, 'gtceu:ash_dust')
            .duration(400*coal.burnMultiplier);
        event.smelting(`2x gtceu:copper_nugget`, `kubejs:chalcopyrite_crushed_ore_chunk`);
        event.recipes.gtceu.rugged_alloyer(`andesite_alloy_${coal.fuel}`)
            .itemInputs('4x exnihilosequentia:andesite_pebble', '4x gtceu:zinc_nugget', `2x #minecraft:${coal.fuel}`)
            .itemOutputs('2x create:andesite_alloy', 'gtceu:ash_dust')
            .duration(600*coal.burnMultiplier);
    });

    event.shaped(Item.of('gtceu:rugged_alloyer'),[
        'RER',
        'AFA',
        'CCC'
    ], {
        A: 'minecraft:iron_ingot',
        C: 'kubejs:reinforced_stone_bricks',
        F: 'minecraft:furance',
        E: 'gtceu:raw_electrum_ingot',
        R: 'minecraft:redstone_dust'
    });

    event.shaped(Item.of('minecraft:bowl', 2 ),
    [
        'A',
        'B'
    ], {
        A: '#forge:tools/knives',
        B: '#minecraft:planks'
    });
   
    event.remove({ id: 'minecraft:bowl'});
    event.shapeless(Item.of('kubejs:plant_fibers'),[
        '#forge:tools/knives',
        'farmersdelight:straw'
    ]);
    event.shapeless(Item.of('kubejs:plant_fibers'),[
        '#forge:tools/knives',
        'farmersdelight:tree_bark'
    ]);

})