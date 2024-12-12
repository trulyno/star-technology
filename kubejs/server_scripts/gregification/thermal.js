
ServerEvents.recipes(event => {

    event.remove({id: /thermal:parts.*gear/});
    event.remove({id: /thermal_extra:parts.*gear/});
    event.remove({id: /thermalendergy:.*gear/});
    event.remove({id: /thermalendergy:.*dust/});
    event.remove({id: /thermal_extra:.*dust/});

    event.remove({id: /thermal_extra:.*dust.*/});
    event.remove({id: /thermal:.*dust.*/});

    event.remove({id: /thermal:smelting.*smelting/});
    event.remove({id: /thermal:smelting.*blasting/});
    event.remove({id: /thermal:smelting.*smelting/});
    event.remove({id: /thermal_extra:smelting.*blasting/});

    event.remove({output: /thermal:.*attachment/});

    // Dynamo recipes
    event.remove({ output: /thermal:dynamo*/ });

    event.remove({mod: 'thermal_extra'})

    event.shaped(Item.of('thermal:dynamo_stirling'), [
        ' C ',
        'PGP',
        'SRS'
    ], {
        C: 'thermal:rf_coil',
        P: 'gtceu:iron_plate',
        G: 'gtceu:iron_gear',
        S: 'gtceu:steel_plate',
        R: 'gtceu:lv_machine_hull'
    });

    event.recipes.gtceu.assembler('gtceu:stirling_dynamo')
        .itemInputs('thermal:rf_coil', 'gtceu:iron_gear', 'gtceu:lv_machine_hull')
        .itemOutputs('thermal:dynamo_stirling')
        .inputFluids('gtceu:tin_alloy 144')
        .duration(300)
        .EUt(16);

    event.recipes.gtceu.assembler('gtceu:lapidary_dynamo')
        .itemInputs('thermal:rf_coil', 'gtceu:cobalt_brass_gear', 'gtceu:lv_machine_hull')
        .itemOutputs('thermal:dynamo_lapidary')
        .inputFluids('gtceu:tin_alloy 288')
        .duration(300)
        .EUt(30);

    event.recipes.gtceu.assembler('gtceu:compression_dynamo')
        .itemInputs('thermal:rf_coil', 'gtceu:bronze_gear', 'gtceu:lv_machine_hull')
        .itemOutputs('thermal:dynamo_compression')
        .inputFluids('gtceu:tin_alloy 432')
        .duration(300)
        .EUt(30);

    // Dynamo new fuels and fuel recipes
    event.recipes.thermal.compression_fuel('gtceu:creosote', 20000);
    event.recipes.thermal.compression_fuel('gtceu:bio_diesel', 1024000);
    event.recipes.thermal.compression_fuel('gtceu:diesel', 1920000);
    event.recipes.thermal.compression_fuel('gtceu:cetane_boosted_diesel', 2560000);
    event.recipes.thermal.compression_fuel('gtceu:gasoline', 6400000);
    event.recipes.thermal.compression_fuel('gtceu:high_octane_gasoline', 12800000);
    event.recipes.thermal.compression_fuel('gtceu:naphtha', 1280000);
    event.recipes.gtceu.mixer('refined_fuel')
        .inputFluids('gtceu:light_fuel 1000', 'gtceu:heavy_fuel 1000')
        .outputFluids('thermal:refined_fuel 2000')
        .duration(20)
        .circuit(0)
        .EUt(30);

    event.recipes.gtceu.brewery('sunflower_oil')
        .itemInputs('16x minecraft:sunflower')
        .outputFluids('thermal_extra:sunflower_oil 500')
        .duration(400)
        .EUt(28);

    event.recipes.gtceu.mixer('crystalized_sunflower_oil')
        .itemInputs('minecraft:amethyst_shard')
        .inputFluids('thermal_extra:sunflower_oil 1000')
        .outputFluids('thermal_extra:crystallized_sunflower_oil 750')
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.distillery('sunflower_oil_refined')
        .inputFluids('thermal_extra:crystallized_sunflower_oil 1000')
        .outputFluids('thermal_extra:refined_sunflower_oil 600')
        .circuit(0)
        .duration(600)
        .EUt(325);

    event.recipes.gtceu.distillery('sunflower_oil_seed')
        .inputFluids('thermal_extra:crystallized_sunflower_oil 1000')
        .outputFluids('gtceu:seed_oil 400')
        .circuit(1)
        .duration(600)
        .EUt(325);

    // Dynamo upgrades
    event.remove({ output: /thermal.*augment.*/ });
    event.remove({ output: /thermalendergy:endergy.*/ });

    event.smelting('minecraft:slime_ball', 'thermal:slime_mushroom_spores');

    event.replaceInput({ id: 'thermal:device_water_gen' },
        'minecraft:copper_ingot',
        'gtceu:lead_ingot'
    );
    event.replaceInput({ id: 'thermal:device_water_gen' },
        'minecraft:iron_ingot',
        'minecraft:copper_ingot'
    );
    event.remove({ id: 'thermal:redstone_servo' })
    event.shaped(Item.of('thermal:redstone_servo', 1), [
        'RPR',
        ' P ',
        'RPR'
    ], {
        R: 'minecraft:redstone',
        P: 'gtceu:iron_plate'
    }
    );
    event.shaped(Item.of('thermal:rf_coil'), [
        ' RP',
        'RBR',
        'PR '
    ], {
        R: 'gtceu:gold_rod',
        P: 'gtceu:gold_plate',
        B: 'minecraft:redstone_block'
    });

    event.replaceInput({ id: 'thermal:device_fisher' },
        '#forge:gears/copper',
        'gtceu:bronze_gear'
    );

    event.replaceInput({ id: 'thermal:device_rock_gen' },
        '#forge:gears/constantan',
        'gtceu:bronze_gear'
    );

    event.replaceInput({ id: 'thermal:device_potion_diffuser' },
        '#forge:gears/constantan',
        'gtceu:bronze_gear'
    );

    event.recipes.gtceu.extractor('molten_ender')
        .itemInputs('minecraft:ender_pearl')
        .outputFluids('thermal:ender 250')
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.fluid_solidifier('hardened_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids('minecraft:lava 250')
        .itemOutputs('thermal:obsidian_glass')
        .duration(240)
        .EUt(28);

    event.recipes.gtceu.fluid_solidifier('signalum_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids('gtceu:signalum 144')
        .itemOutputs('thermal:signalum_glass')
        .duration(480)
        .EUt(28);

    event.recipes.gtceu.fluid_solidifier('lumium_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids('gtceu:lumium 144')
        .itemOutputs('thermal:lumium_glass')
        .duration(960)
        .EUt(28);

    event.recipes.gtceu.fluid_solidifier('enderium_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids('gtceu:enderium 144')
        .itemOutputs('thermal:enderium_glass')
        .duration(1920)
        .EUt(112);

    event.recipes.gtceu.fluid_solidifier('soul_infused_glass')
        .itemInputs('gtceu:laminated_glass')
        .inputFluids('gtceu:soul_infused 144')
        .itemOutputs('thermal_extra:soul_infused_glass')
        .duration(3840)
        .EUt(28);

    event.recipes.gtceu.fluid_solidifier('shellite_glass')
        .itemInputs('gtceu:laminated_glass')
        .inputFluids('gtceu:shellite 144')
        .itemOutputs('thermal_extra:shellite_glass')
        .duration(7680)
        .EUt(28);

    event.recipes.gtceu.fluid_solidifier('twinite_glass')
        .itemInputs('gtceu:laminated_glass')
        .inputFluids('gtceu:twinite 144')
        .itemOutputs('thermal_extra:twinite_glass')
        .duration(15360)
        .EUt(28);

    event.recipes.gtceu.fluid_solidifier('dragonsteel_glass')
        .itemInputs('gtceu:fusion_glass')
        .inputFluids('gtceu:dragonsteel 144')
        .itemOutputs('thermal_extra:dragonsteel_glass')
        .duration(30720)
        .EUt(28);

    event.shaped(Item.of('thermal:energy_cell_frame'), [
        'LEL',
        'E E',
        'LEL'
    ], {
        L: 'gtceu:lead_plate',
        E: 'gtceu:electrum_plate'
    });

    event.shaped(Item.of('thermal:fluid_cell_frame'), [
        'BTB',
        'TGT',
        'BTB'
    ], {
        B: 'gtceu:bronze_plate',
        T: 'gtceu:tin_plate',
        G: '#forge:glass'
    });

    event.shaped(Item.of('thermal:machine_frame'), [
        'SSS',
        'S S',
        'BBB'
    ], {
        S: 'gtceu:double_stainless_steel_plate',
        B: 'gtceu:double_black_steel_plate'
    });

    event.recipes.create.item_application('thermal:fluid_cell', ['thermal:fluid_cell_frame', 'create:fluid_tank']);

    event.recipes.gtceu.alloy_smelter('fluid_cell')
        .itemInputs('thermal:fluid_cell_frame', 'create:fluid_tank')
        .itemOutputs('thermal:fluid_cell')
        .duration(80)
        .EUt(28);

    event.recipes.create.item_application('thermal:energy_cell', ['thermal:energy_cell_frame', 'minecraft:redstone_block']);

    event.recipes.gtceu.alloy_smelter('energy_cell')
        .itemInputs('thermal:energy_cell_frame', 'minecraft:redstone_block')
        .itemOutputs('thermal:energy_cell')
        .duration(80)
        .EUt(28);

    event.recipes.gtceu.assembler('boiler_pipe')
        .itemInputs('gtceu:tempered_glass', '3x gtceu:bronze_ring')
        .itemOutputs('systeams:boiler_pipe')
        .duration(120)
        .EUt(112);

    event.recipes.gtceu.assembler('steam_dynamo')
        .itemInputs('gtceu:lv_machine_hull', 'systeams:boiler_pipe', 'gtceu:black_steel_gear', 'gtceu:lead_rotor')
        .itemOutputs('systeams:steam_dynamo')
        .duration(320)
        .EUt(112);

});
