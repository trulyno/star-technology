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