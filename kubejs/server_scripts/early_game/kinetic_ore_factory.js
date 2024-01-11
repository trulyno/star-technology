
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:kinetic_ore_factory'), [
        'HRS',
        'PBR',
        'FRS'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:brass_rod',
        S: 'gtceu:brass_screw',
        P: 'gtceu:brass_plate',
        B: 'gtceu:firebricks',
        F: '#forge:tools/screwdrivers'
    });

    event.recipes.gtceu.kinetic_ore_factory('iron_ore_factory')
        .itemInputs('gtceu:iron_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:iron_pure_dust')
        .chancedOutput('gtceu:iron_pure_dust', 5000, 0)
        .chancedOutput('gtceu:nickel_small_dust', 2500, 0)
        .chancedOutput('gtceu:tin_tiny_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('magnetite_ore_factory')
        .itemInputs('gtceu:magnetite_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:magnetite_pure_dust')
        .chancedOutput('gtceu:magnetite_pure_dust', 5000, 0)
        .chancedOutput('gtceu:gold_small_dust', 2500, 0)
        .chancedOutput('gtceu:gold_tiny_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('copper_ore_factory')
        .itemInputs('gtceu:copper_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:copper_pure_dust')
        .chancedOutput('gtceu:copper_pure_dust', 5000, 0)
        .chancedOutput('gtceu:gold_small_dust', 2500, 0)
        .chancedOutput('gtceu:nickel_tiny_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('tin_ore_factory')
        .itemInputs('gtceu:tin_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:tin_pure_dust')
        .chancedOutput('gtceu:tin_pure_dust', 5000, 0)
        .chancedOutput('gtceu:iron_small_dust', 2500, 0)
        .chancedOutput('gtceu:zinc_tiny_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('sphalerite_ore_factory')
        .itemInputs('gtceu:sphalerite_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:sphalerite_pure_dust')
        .chancedOutput('gtceu:sphalerite_pure_dust', 5000, 0)
        .chancedOutput('gtceu:gallium_small_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_tiny_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('galena_ore_factory')
        .itemInputs('gtceu:galena_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:galena_pure_dust')
        .chancedOutput('gtceu:galena_pure_dust', 5000, 0)
        .chancedOutput('gtceu:silver_small_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_tiny_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('stibnite_ore_factory')
        .itemInputs('gtceu:stibnite_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stibnite_pure_dust')
        .chancedOutput('gtceu:stibnite_pure_dust', 5000, 0)
        .chancedOutput('gtceu:antimony_small_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_tiny_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

});