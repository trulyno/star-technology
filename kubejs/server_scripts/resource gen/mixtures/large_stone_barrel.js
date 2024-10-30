ServerEvents.recipes(event => {
    //large stone barrel
    event.recipes.gtceu.large_stone_barrel('iron_mixture')
        .inputFluids('minecraft:lava 2000')
        .itemInputs('4x gtceu:granite_dust')
        .outputFluids('kubejs:iron_mixture 3000')
        .circuit(1)
        .duration(20);
    
    event.recipes.gtceu.large_stone_barrel('copper_mixture')
        .inputFluids('minecraft:lava 2000')
        .itemInputs('4x gtceu:andesite_dust')
        .outputFluids('kubejs:copper_mixture 3000')
        .circuit(2)
        .duration(20);

    event.recipes.gtceu.large_stone_barrel('quartz_mixture')
        .inputFluids('minecraft:lava 2000')
        .itemInputs('4x gtceu:diorite_dust')
        .outputFluids('kubejs:quartz_mixture 3000')
        .circuit(3)
        .duration(20);
})