ServerEvents.recipes(event => {
    const id = global.id;

    if (global.packmode !== 'hard'){
        (() => {   
    event.shaped(Item.of('gtceu:large_stone_barrel'), [
        'PSP',
        'IBI',
        'PSP'
    ], {
        P: 'minecraft:stone',
        S: 'gtceu:treated_wood_rod',
        B: 'gtceu:ulv_stone_barrel',
        I: 'gtceu:wrought_iron_plate'
    }).id('start:shaped/large_stone_barrel');
    })()
    }    

    event.recipes.gtceu.large_stone_barrel(id('lava_from_stones'))
        .itemInputs('#forge:stone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 500')
        .duration(200);

    event.recipes.gtceu.large_stone_barrel(id('lava_from_cobblestones'))
        .itemInputs('#forge:cobblestone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 500')
        .duration(200);

    event.recipes.gtceu.large_stone_barrel(id('obsidian'))
        .inputFluids('minecraft:water 1000', 'minecraft:lava 1000')
        .itemOutputs('minecraft:obsidian')
        .circuit(10)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('cobble_pebbles'))
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:stone_pebble', 7500, 0)
        .circuit(0)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('andesite_pebbles'))
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:andesite_pebble', 7500, 0)
        .circuit(1)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('diorite_pebbles'))
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:diorite_pebble', 7500, 0)
        .circuit(2)
        .duration(1);
    
    event.recipes.gtceu.large_stone_barrel(id('granite_pebbles'))
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:granite_pebble', 7500, 0)
        .circuit(3)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('tuff_pebbles'))
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:tuff_pebble', 7500, 0)
        .circuit(7)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('dripstone_pebbles'))
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:dripstone_pebble', 7500, 0)
        .circuit(4)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('deepslate_pebbles'))
        .inputFluids('minecraft:lava 2', 'minecraft:water 2')
        .chancedOutput('exnihilosequentia:deepslate_pebble', 7500, 0)
        .circuit(5)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('calcite_pebbles'))
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:calcite_pebble', 7500, 0)
        .circuit(6)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('blackstone_pebbles'))
        .inputFluids('minecraft:lava 1', 'exnihilosequentia:witch_water 1')
        .chancedOutput('exnihilosequentia:blackstone_pebble', 7500, 0)
        .circuit(0)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel(id('basalt_pebbles'))
        .inputFluids('minecraft:lava 1', 'exnihilosequentia:witch_water 1')
        .chancedOutput('exnihilosequentia:basalt_pebble', 7500, 0)
        .circuit(1)
        .duration(1);
});