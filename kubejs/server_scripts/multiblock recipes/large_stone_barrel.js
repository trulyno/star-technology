
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:large_stone_barrel'), [
        'PSP',
        'IBI',
        'PSP'
    ], {
        P: 'minecraft:stone',
        S: 'gtceu:treated_wood_rod',
        B: 'exnihilosequentia:stone_barrel',
        I: 'gtceu:wrought_iron_plate'
    });

    event.recipes.gtceu.large_stone_barrel('lava_from_stones')
        .itemInputs('#forge:stone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 250')
        .duration(200);

    event.recipes.gtceu.large_stone_barrel('lava_from_cobblestones')
        .itemInputs('#forge:cobblestone')
        .notConsumable('minecraft:soul_campfire')
        .outputFluids('minecraft:lava 250')
        .duration(200);

    event.recipes.gtceu.large_stone_barrel('obsidian')
        .inputFluids('minecraft:water 1000', 'minecraft:lava 1000')
        .itemOutputs('minecraft:obsidian')
        .circuit(10)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('cobble_pebbles')
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:stone_pebble', 7500, 0)
        .circuit(0)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('andesite_pebbles')
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:andesite_pebble', 7500, 0)
        .circuit(1)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('diorite_pebbles')
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:diorite_pebble', 7500, 0)
        .circuit(2)
        .duration(1);
    
    event.recipes.gtceu.large_stone_barrel('granite_pebbles')
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:granite_pebble', 7500, 0)
        .circuit(3)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('tuff_pebbles')
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:tuff_pebble', 7500, 0)
        .circuit(7)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('dripstone_pebbles')
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:dripstone_pebble', 7500, 0)
        .circuit(4)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('deepslate_pebbles')
        .inputFluids('minecraft:lava 2', 'minecraft:water 2')
        .chancedOutput('exnihilosequentia:deepslate_pebble', 7500, 0)
        .circuit(5)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('calcite_pebbles')
        .inputFluids('minecraft:lava 1', 'minecraft:water 1')
        .chancedOutput('exnihilosequentia:calcite_pebble', 7500, 0)
        .circuit(6)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('blackstone_pebbles')
        .inputFluids('minecraft:lava 1', 'exnihilosequentia:witch_water 1')
        .chancedOutput('exnihilosequentia:blackstone_pebble', 7500, 0)
        .circuit(0)
        .duration(1);

    event.recipes.gtceu.large_stone_barrel('basalt_pebbles')
        .inputFluids('minecraft:lava 1', 'exnihilosequentia:witch_water 1')
        .chancedOutput('exnihilosequentia:basalt_pebble', 7500, 0)
        .circuit(1)
        .duration(1);
});