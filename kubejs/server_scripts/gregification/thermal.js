
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

    // Upgrade augments
    event.recipes.gtceu.assembler('lv_kit')
        .itemInputs('4x gtceu:invar_plate', 'thermal:obsidian_glass', 'gtceu:bronze_gear', '#gtceu:circuits/lv')
        .itemOutputs(Item.of('kubejs:lv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:4f}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.assembler('upgrade_augment_2')
        .itemInputs('4x gtceu:electrum_plate', 'thermal:signalum_glass', 'gtceu:steel_gear', '#gtceu:circuits/mv')
        .inputFluids('gtceu:redstone 720')
        .itemOutputs(Item.of('kubejs:mv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:16f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.assembler('upgrade_augment_3')
        .itemInputs('4x gtceu:lumium_plate', 'thermal:lumium_glass', 'gtceu:aluminium_gear', '#gtceu:circuits/hv')
        .inputFluids('gtceu:glowstone 720')
        .itemOutputs(Item.of('kubejs:hv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:64f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.assembler('upgrade_augment_4')
        .itemInputs('4x gtceu:soul_infused_plate', 'thermal:enderium_glass', 'gtceu:stainless_steel_gear', '#gtceu:circuits/ev')
        .inputFluids('thermal:ender 750')
        .itemOutputs(Item.of('kubejs:ev_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:256f}}'))
        .duration(600)
        .EUt(1625);

    // ARC augments
    event.recipes.gtceu.assembler('arc_augment_1')
        .itemInputs('2x gtceu:bronze_plate', '2x gtceu:silver_gear', 'thermal:obsidian_glass')
        .itemOutputs(Item.of('kubejs:lv_arc_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:0.95f, DynamoPower:0.5f}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.assembler('arc_augment_2')
        .itemInputs('kubejs:lv_arc_kit', '2x gtceu:soul_infused_gear', 'thermal:signalum_glass')
        .itemOutputs(Item.of('kubejs:mv_arc_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:0.9f, DynamoPower:0.75f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.assembler('arc_augment_3')
        .itemInputs('kubejs:mv_arc_kit', '2x gtceu:enderium_gear', 'thermal:lumium_glass')
        .itemOutputs(Item.of('kubejs:hv_arc_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:0.8f, DynamoPower:1f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.assembler('arc_augment_4')
        .itemInputs('kubejs:hv_arc_kit', '2x gtceu:shellite_gear', 'thermal:enderium_glass')
        .itemOutputs(Item.of('kubejs:ev_arc_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:0.75f, DynamoPower:2f}}'))
        .duration(600)
        .EUt(1625);

    // MCI augments
    event.recipes.gtceu.assembler('mci_augment_1')
        .itemInputs('2x gtceu:electrum_plate', '2x gtceu:lead_gear', 'thermal:obsidian_glass')
        .itemOutputs(Item.of('kubejs:lv_mci_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:1.1f}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.assembler('mci_augment_2')
        .itemInputs('kubejs:lv_mci_kit', '2x gtceu:soul_infused_gear', 'thermal:signalum_glass')
        .itemOutputs(Item.of('kubejs:mv_mci_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:1.25f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.assembler('mci_augment_3')
        .itemInputs('kubejs:mv_mci_kit', '2x gtceu:enderium_gear', 'thermal:lumium_glass')
        .itemOutputs(Item.of('kubejs:hv_mci_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:1.5f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.assembler('mci_augment_4')
        .itemInputs('kubejs:hv_mci_kit', '2x gtceu:shellite_gear', 'thermal:enderium_glass')
        .itemOutputs(Item.of('kubejs:ev_mci_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:2f}}'))
        .duration(600)
        .EUt(1625);

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

    event.shaped(Item.of('thermal:rf_coil_augment'), [
        ' G ',
        'SCS',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    });

    event.recipes.gtceu.alloy_smelter('rf_coil_2')
        .itemInputs('thermal:rf_coil_augment', '2x gtceu:soul_infused_gear')
        .itemOutputs('thermal_extra:rf_coil_augment_1')
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('rf_coil_3')
        .itemInputs('thermal_extra:rf_coil_augment_1', '2x gtceu:enderium_gear')
        .itemOutputs('thermal_extra:rf_coil_augment_2')
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('rf_coil_4')
        .itemInputs('thermal_extra:rf_coil_augment_2', '2x gtceu:shellite_gear')
        .itemOutputs('thermal_extra:rf_coil_augment_3')
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('rf_coil_5')
        .itemInputs('thermal_extra:rf_coil_augment_3', '2x gtceu:twinite_gear')
        .itemOutputs('thermal_extra:rf_coil_augment_4')
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('rf_coil_6')
        .itemInputs('thermal_extra:rf_coil_augment_4', '2x gtceu:dragonsteel_gear')
        .itemOutputs('thermal_extra:rf_coil_augment_5')
        .duration(600)
        .EUt(6500);

    event.shaped(Item.of('thermal:rf_coil_storage_augment'), [
        ' S ',
        'GCG',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    });

    event.recipes.gtceu.alloy_smelter('rf_coil_storage_2')
        .itemInputs('thermal:rf_coil_storage_augment', '2x gtceu:soul_infused_gear')
        .itemOutputs('thermal_extra:rf_coil_storage_augment_1')
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('rf_coil_storage_3')
        .itemInputs('thermal_extra:rf_coil_storage_augment_1', 'gtceu:enderium_gear')
        .itemOutputs('thermal_extra:rf_coil_storage_augment_2')
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('rf_coil_storage_4')
        .itemInputs('thermal_extra:rf_coil_storage_augment_2', '2x gtceu:shellite_gear')
        .itemOutputs('thermal_extra:rf_coil_storage_augment_3')
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('rf_coil_storage_5')
        .itemInputs('thermal_extra:rf_coil_storage_augment_3', '2x gtceu:twinite_gear')
        .itemOutputs('thermal_extra:rf_coil_storage_augment_4')
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('rf_coil_storage_6')
        .itemInputs('thermal_extra:rf_coil_storage_augment_4', '2x gtceu:dragonsteel_gear')
        .itemOutputs('thermal_extra:rf_coil_storage_augment_5')
        .duration(600)
        .EUt(6500);

    event.shaped(Item.of('thermal:rf_coil_xfer_augment'), [
        ' S ',
        'SCS',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    });

    event.recipes.gtceu.alloy_smelter('rf_coil_xfer_2')
        .itemInputs('thermal:rf_coil_xfer_augment', '2x gtceu:soul_infused_gear')
        .itemOutputs('thermal_extra:rf_coil_xfer_augment_1')
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('rf_coil_xfer_3')
        .itemInputs('thermal_extra:rf_coil_xfer_augment_1', '2x gtceu:enderium_gear')
        .itemOutputs('thermal_extra:rf_coil_xfer_augment_2')
        .duration(2400)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('rf_coil_xfer_4')
        .itemInputs('thermal_extra:rf_coil_xfer_augment_2', '2x gtceu:shellite_gear')
        .itemOutputs('thermal_extra:rf_coil_xfer_augment_3')
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('rf_coil_xfer_5')
        .itemInputs('thermal_extra:rf_coil_xfer_augment_3', '2x gtceu:twinite_gear')
        .itemOutputs('thermal_extra:rf_coil_xfer_augment_4')
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('rf_coil_xfer_6')
        .itemInputs('thermal_extra:rf_coil_xfer_augment_4', '2x gtceu:dragonsteel_gear')
        .itemOutputs('thermal_extra:rf_coil_xfer_augment_5')
        .duration(600)
        .EUt(6500);

    event.shaped(Item.of('thermal:fluid_tank_augment'), [
        'RIR',
        'IGI',
        'RIR'
    ], {
        R: 'gtceu:wrought_iron_plate',
        I: 'gtceu:rubber_plate',
        G: 'thermal:obsidian_glass'
    });

    event.recipes.gtceu.alloy_smelter('fluid_tank_2')
        .itemInputs('thermal:fluid_tank_augment', '2x gtceu:soul_infused_gear')
        .itemOutputs('thermal_extra:fluid_tank_augment_1')
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('fluid_tank_3')
        .itemInputs('thermal_extra:fluid_tank_augment_1', '2x gtceu:enderium_gear')
        .itemOutputs('thermal_extra:fluid_tank_augment_2')
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('fluid_tank_4')
        .itemInputs('thermal_extra:fluid_tank_augment_2', '2x gtceu:shellite_gear')
        .itemOutputs('thermal_extra:fluid_tank_augment_3')
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('fluid_tank_5')
        .itemInputs('thermal_extra:fluid_tank_augment_3', '2x gtceu:twinite_gear')
        .itemOutputs('thermal_extra:fluid_tank_augment_4')
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('fluid_tank_6')
        .itemInputs('thermal_extra:fluid_tank_augment_4', '2x gtceu:dragonsteel_gear')
        .itemOutputs('thermal_extra:fluid_tank_augment_5')
        .duration(600)
        .EUt(6500);

    event.recipes.gtceu.fluid_solidifier('fluid_tank_7')
        .itemInputs('thermal_extra:fluid_tank_augment_5')
        .inputFluids('thermal_extra:refined_sunflower_oil 1000')
        .itemOutputs('thermal_extra:fluid_tank_augment_6')
        .duration(600)
        .EUt(6500);

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
