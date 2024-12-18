
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:electrico_kinetic_ore_factory'), [
        'GCG',
        'PLP',
        'WPW'
    ], {
        G: 'gtceu:bronze_gear',
        C: '#gtceu:circuits/lv',
        P: 'gtceu:steel_plate',
        L: 'gtceu:lv_machine_hull',
        W: 'gtceu:tin_single_cable'
    });

    event.recipes.gtceu.electrico_kinetic_ore_factory('iron_e_ore_factory')
        .itemInputs('gtceu:crushed_iron_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:iron_dust')
        .chancedOutput('gtceu:iron_dust', 7500, 50)
        .chancedOutput('gtceu:nickel_dust', 4500, 100)
        .chancedOutput('gtceu:tin_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('magnetite_e_ore_factory')
        .itemInputs('gtceu:crushed_magnetite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:magnetite_dust')
        .chancedOutput('gtceu:magnetite_dust', 7500, 50)
        .chancedOutput('gtceu:gold_dust', 4500, 100)
        .chancedOutput('gtceu:gold_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('copper_e_ore_factory')
        .itemInputs('gtceu:crushed_copper_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:copper_dust')
        .chancedOutput('gtceu:copper_dust', 7500, 50)
        .chancedOutput('gtceu:gold_dust', 4500, 100)
        .chancedOutput('gtceu:nickel_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('tin_e_ore_factory')
        .itemInputs('gtceu:crushed_tin_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:tin_dust')
        .chancedOutput('gtceu:tin_dust', 7500, 50)
        .chancedOutput('gtceu:iron_dust', 4500, 100)
        .chancedOutput('gtceu:zinc_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('sphalerite_e_ore_factory')
        .itemInputs('gtceu:crushed_sphalerite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:sphalerite_dust')
        .chancedOutput('gtceu:sphalerite_dust', 7500, 50)
        .chancedOutput('gtceu:gallium_dust', 4500, 100)
        .chancedOutput('gtceu:sulfur_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('galena_e_ore_factory')
        .itemInputs('gtceu:crushed_galena_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:galena_dust')
        .chancedOutput('gtceu:galena_dust', 7500, 50)
        .chancedOutput('gtceu:silver_dust', 4500, 100)
        .chancedOutput('gtceu:sulfur_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);

    event.recipes.gtceu.electrico_kinetic_ore_factory('stibnite_e_ore_factory')
        .itemInputs('gtceu:crushed_stibnite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stibnite_dust')
        .chancedOutput('gtceu:stibnite_dust', 7500, 50)
        .chancedOutput('gtceu:antimony_dust', 4500, 100)
        .chancedOutput('gtceu:sulfur_dust', 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(32)
        .EUt(28);


    function ekof(rpm, material, secondary, tertiary, quaternary) {
        event.recipes.gtceu.electrico_kinetic_ore_factory(`${material}_e_ore_factory`)
            .itemInputs(`gtceu:crushed_${material}_ore`)
            .inputFluids(`${(rpm >= 512) ? 'gtceu:sodium_persulfate' : 'gtceu:distilled_water'} 100`)
            .itemOutputs(`gtceu:${material}_dust`)
            .chancedOutput(`gtceu:${material}_dust`, 5000, 150)
            .chancedOutput(`gtceu:${secondary}_dust`, 2500, 100)
            .chancedOutput(`gtceu:${tertiary}_dust`, 1250, 50)
            .chancedOutput(`gtceu:${quaternary}_dust`, 750, 100)
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