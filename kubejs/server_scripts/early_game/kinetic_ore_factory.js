
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
        .itemInputs('gtceu:crushed_iron_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:iron_dust')
        .chancedOutput('gtceu:iron_dust', 5000, 0)
        .chancedOutput('gtceu:nickel_dust', 2500, 0)
        .chancedOutput('gtceu:tin_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('magnetite_ore_factory')
        .itemInputs('gtceu:crushed_magnetite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:magnetite_dust')
        .chancedOutput('gtceu:magnetite_dust', 5000, 0)
        .chancedOutput('gtceu:gold_dust', 2500, 0)
        .chancedOutput('gtceu:gold_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('copper_ore_factory')
        .itemInputs('gtceu:crushed_copper_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:copper_dust')
        .chancedOutput('gtceu:copper_dust', 5000, 0)
        .chancedOutput('gtceu:gold_dust', 2500, 0)
        .chancedOutput('gtceu:nickel_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('tin_ore_factory')
        .itemInputs('gtceu:crushed_tin_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:tin_dust')
        .chancedOutput('gtceu:tin_dust', 5000, 0)
        .chancedOutput('gtceu:iron_dust', 2500, 0)
        .chancedOutput('gtceu:zinc_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('sphalerite_ore_factory')
        .itemInputs('gtceu:crushed_sphalerite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:sphalerite_dust')
        .chancedOutput('gtceu:sphalerite_dust', 5000, 0)
        .chancedOutput('gtceu:gallium_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('galena_ore_factory')
        .itemInputs('gtceu:crushed_galena_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:galena_dust')
        .chancedOutput('gtceu:galena_dust', 5000, 0)
        .chancedOutput('gtceu:silver_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

    event.recipes.gtceu.kinetic_ore_factory('stibnite_ore_factory')
        .itemInputs('gtceu:crushed_stibnite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stibnite_dust')
        .chancedOutput('gtceu:stibnite_dust', 5000, 0)
        .chancedOutput('gtceu:antimony_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .duration(320)
        .inputStress(256)
        .rpm(32);

});