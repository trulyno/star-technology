ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('cobblestone')
        .itemInputs('exnihilosequentia:stone_pebble')
        .inputFluids('minecraft:lava 10', 'minecraft:water 500')
        .itemOutputs('2x minecraft:cobblestone')
        .duration(30);

});