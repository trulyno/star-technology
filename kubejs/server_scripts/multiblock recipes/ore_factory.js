
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:electrico_kinetic_ore_factory'), [
        'GCG',
        'PLP',
        'WPW'
    ], {
        G: 'gtceu:bronze_gear',
        C: '#forge:circuits/lv',
        P: 'gtceu:steel_plate',
        L: 'gtceu:lv_machine_hull',
        W: 'gtceu:tin_single_cable'
    });

    event.recipes.gtceu.electrico_kinetic_ore_factory('iron_e_ore_factory')
        .itemInputs('gtceu:iron_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:iron_pure_dust')
        .chancedOutput('gtceu:iron_pure_dust', 7500, 50)
        .chancedOutput('gtceu:nickel_small_dust', 4500, 100)
        .chancedOutput('gtceu:tin_tiny_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('magnetite_e_ore_factory')
        .itemInputs('gtceu:magnetite_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:magnetite_pure_dust')
        .chancedOutput('gtceu:magnetite_pure_dust', 7500, 50)
        .chancedOutput('gtceu:gold_small_dust', 4500, 100)
        .chancedOutput('gtceu:gold_tiny_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('copper_e_ore_factory')
        .itemInputs('gtceu:copper_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:copper_pure_dust')
        .chancedOutput('gtceu:copper_pure_dust', 7500, 50)
        .chancedOutput('gtceu:gold_small_dust', 4500, 100)
        .chancedOutput('gtceu:nickel_tiny_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('tin_e_ore_factory')
        .itemInputs('gtceu:tin_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:tin_pure_dust')
        .chancedOutput('gtceu:tin_pure_dust', 7500, 50)
        .chancedOutput('gtceu:iron_small_dust', 4500, 100)
        .chancedOutput('gtceu:zinc_tiny_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('sphalerite_e_ore_factory')
        .itemInputs('gtceu:sphalerite_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:sphalerite_pure_dust')
        .chancedOutput('gtceu:sphalerite_pure_dust', 7500, 50)
        .chancedOutput('gtceu:gallium_small_dust', 4500, 100)
        .chancedOutput('gtceu:sulfur_tiny_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('galena_e_ore_factory')
        .itemInputs('gtceu:galena_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:galena_pure_dust')
        .chancedOutput('gtceu:galena_pure_dust', 7500, 50)
        .chancedOutput('gtceu:silver_small_dust', 4500, 100)
        .chancedOutput('gtceu:sulfur_tiny_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('stibnite_e_ore_factory')
        .itemInputs('gtceu:stibnite_crushed_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stibnite_pure_dust')
        .chancedOutput('gtceu:stibnite_pure_dust', 7500, 50)
        .chancedOutput('gtceu:antimony_small_dust', 4500, 100)
        .chancedOutput('gtceu:sulfur_tiny_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);


    function ekof(rpm, material, secondary, tertiary, quaternary) {
        event.recipes.gtceu.electrico_kinetic_ore_factory(`${material}_e_ore_factory`)
            .itemInputs(`gtceu:${material}_crushed_ore`)
            .inputFluids(`${(rpm >= 512) ? 'gtceu:sodium_persulfate' : 'gtceu:distilled_water'} 100`)
            .itemOutputs(`gtceu:${material}_pure_dust`)
            .chancedOutput(`gtceu:${material}_pure_dust`, 5000, 150)
            .chancedOutput(`gtceu:${secondary}_small_dust`, 2500, 100)
            .chancedOutput(`gtceu:${tertiary}_tiny_dust`, 1250, 50)
            .chancedOutput(`gtceu:${quaternary}_tiny_dust`, 750, 100)
            .duration(320)
            .inputStress(rpm * 4)
            .rpm((rpm == 2048) ? 256 : (rpm == 512) ? 192 : rpm)
            .EUt(rpm * 0.75);
    }

    ekof(32, 'chalcopyrite', 'gold', 'pyrite', 'cobalt');
    ekof(32, 'cassiterite', 'tin', 'tin', 'bismuth');
    ekof(32, 'silver', 'gold', 'lead', 'sulfur');
    ekof(32, 'gold', 'silver', 'copper', 'nickel');
    ekof(32, 'bornite', 'gold', 'pyrite', 'cobalt');
    ekof(32, 'pentlandite', 'cobalt', 'iron', 'sulfur');
    ekof(32, 'rock_salt', 'salt', 'salt', 'borax');
    ekof(32, 'salt', 'rock_salt', 'rock_salt', 'borax');
    
    ekof(128, 'monazite', 'thorium', 'thorium', 'neodymium');
    ekof(128, 'lepidolite', 'lithium', 'lithium', 'caesium');
    ekof(128, 'pyrochlore', 'apatite', 'apatite', 'calcium');
    ekof(128, 'pyrolusite', 'manganese', 'manganese', 'tantalite');
    ekof(128, 'cobaltite', 'cobalt', 'sulfur', 'cobalt');
    ekof(128, 'apatite', 'tricalcium_phosphate', 'tricalcium_phosphate', 'phosphate');

    ekof(512, 'bauxite', 'gallium', 'grossular', 'rutile');
    ekof(512, 'pitchblende', 'thorium', 'thorium', 'uraninite');
    ekof(512, 'ilmenite', 'iron', 'iron', 'rutile');

    ekof(2048, 'cooperite', 'palladium', 'nickel', 'nickel');
    ekof(2048, 'bastnasite', 'neodymium', 'neodymium', 'rare_earth');

});