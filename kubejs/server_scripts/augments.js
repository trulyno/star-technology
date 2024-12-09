ServerEvents.recipes(event => {

    // Upgrade augments
    event.recipes.gtceu.assembler('lv_kit')
        .itemInputs('4x gtceu:invar_plate', 'thermal:obsidian_glass', 'gtceu:bronze_gear', '#gtceu:circuits/lv')
        .itemOutputs(Item.of('kubejs:lv_upgrade_kit', '{AugmentData:{BaseMod:4.0f,Type:"Upgrade"}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.assembler('mv_kit')
        .itemInputs('4x gtceu:electrum_plate', 'thermal:signalum_glass', 'gtceu:steel_gear', '#gtceu:circuits/mv')
        .inputFluids('gtceu:redstone 720')
        .itemOutputs(Item.of('kubejs:mv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:16f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.assembler('hv_kit')
        .itemInputs('4x gtceu:lumium_plate', 'thermal:lumium_glass', 'gtceu:aluminium_gear', '#gtceu:circuits/hv')
        .inputFluids('gtceu:glowstone 720')
        .itemOutputs(Item.of('kubejs:hv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:64f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.assembler('ev_kit')
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

    //rfc kits
    event.shaped(Item.of('kubejs:ulv_rfc_kit', '{AugmentData:{Type: RF, RFMax:4f, RFXfer:4f}}'), [
        ' G ',
        'SCS',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    });

    event.recipes.gtceu.alloy_smelter('kubejs:lv_rfc_kit')
        .itemInputs('kubejs:ulv_rfc_kit', '2x gtceu:soul_infused_gear')
        .itemOutputs(Item.of('kubejs:lv_rfc_kit', '{AugmentData:{Type: RF, RFMax:8f, RFXfer:8f}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('mv_rfc_kit')
        .itemInputs('kubejs:lv_rfc_kit', '2x gtceu:signalum_gear')
        .itemOutputs(Item.of('kubejs:mv_rfc_kit', '{AugmentData:{Type: RF, RFMax:12f, RFXfer:12f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('hv_rfc_kit')
        .itemInputs('kubejs:mv_rfc_kit', '2x gtceu:lumium_gear')
        .itemOutputs(Item.of('kubejs:hv_rfc_kit', '{AugmentData:{Type: RF, RFMax:16f, RFXfer:16f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('ev_rfc_kit')
        .itemInputs('kubejs:hv_rfc_kit', '2x gtceu:enderium_gear')
        .itemOutputs(Item.of('kubejs:ev_rfc_kit', '{AugmentData:{Type: RF, RFMax:20f, RFXfer:20f}}'))
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('iv_rfc_kit')
        .itemInputs('kubejs:ev_rfc_kit', '2x gtceu:shellite_gear')
        .itemOutputs(Item.of('kubejs:iv_rfc_kit', '{AugmentData:{Type: RF, RFMax:24f, RFXfer:24f}}'))
        .duration(600)
        .EUt(6500);

    //rfs
    event.shaped(Item.of('kubejs:ulv_rfs_kit', '{AugmentData:{Type: RF, RFMax:6f, RFXfer:2f}}'), [
        ' S ',
        'GCG',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    });

    event.recipes.gtceu.alloy_smelter('lv_rfs_kit')
        .itemInputs('kubejs:ulv_rfs_kit', '2x gtceu:soul_infused_gear')
        .itemOutputs(Item.of('kubejs:lv_rfs_kit', '{AugmentData:{Type: RF, RFMax:10f, RFXfer:4f}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('mv_rfs_kit')
        .itemInputs('kubejs:lv_rfs_kit', '2x gtceu:signalum_gear')
        .itemOutputs(Item.of('kubejs:mv_rfs_kit', '{AugmentData:{Type: RF, RFMax:14f, RFXfer:6f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('hv_rfs_kit')
        .itemInputs('kubejs:mv_rfs_kit', '2x gtceu:lumium_gear')
        .itemOutputs(Item.of('kubejs:hv_rfs_kit', '{AugmentData:{Type: RF, RFMax:18f, RFXfer:8f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('ev_rfs_kit')
        .itemInputs('kubejs:hv_rfs_kit', '2x gtceu:enderium_gear')
        .itemOutputs(Item.of('kubejs:ev_rfs_kit', '{AugmentData:{Type: RF, RFMax:22f, RFXfer:10f}}'))
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('iv_rfs_kit')
        .itemInputs('kubejs:ev_rfs_kit', '2x gtceu:shellite_gear')
        .itemOutputs(Item.of('kubejs:iv_rfs_kit', '{AugmentData:{Type: RF, RFMax:26f, RFXfer:12f}}'))
        .duration(600)
        .EUt(6500);

    //rft
    event.shaped(Item.of('kubejs:ulv_rft_kit', '{AugmentData:{Type: RF, RFMax:2f, RFXfer:6f}}'), [
        ' S ',
        'SCS',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    });

    event.recipes.gtceu.alloy_smelter('lv_rft_kit')
        .itemInputs('kubejs:ulv_rft_kit', '2x gtceu:soul_infused_gear')
        .itemOutputs(Item.of('kubejs:lv_rft_kit', '{AugmentData:{Type: RF, RFMax:4f, RFXfer:10f}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('mv_rft_kit')
        .itemInputs('kubejs:lv_rft_kit', '2x gtceu:signalum_gear')
        .itemOutputs(Item.of('kubejs:mv_rft_kit', '{AugmentData:{Type: RF, RFMax:6f, RFXfer:14f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('hv_rft_kit')
        .itemInputs('kubejs:mv_rft_kit', '2x gtceu:lumium_gear')
        .itemOutputs(Item.of('kubejs:hv_rft_kit', '{AugmentData:{Type: RF, RFMax:8f, RFXfer:18f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('ev_rft_kit')
        .itemInputs('kubejs:hv_rft_kit', '2x gtceu:enderium_gear')
        .itemOutputs(Item.of('kubejs:ev_rft_kit', '{AugmentData:{Type: RF, RFMax:10f, RFXfer:22f}}'))
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('iv_rft_kit')
        .itemInputs('kubejs:ev_rft_kit', '2x gtceu:shellite_gear')
        .itemOutputs(Item.of('kubejs:iv_rft_kit', '{AugmentData:{Type: RF, RFMax:12f, RFXfer:26f}}'))
        .duration(600)
        .EUt(6500);

    //fls
    event.shaped(Item.of('kubejs:ulv_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:4f}}'), [
        'RIR',
        'IGI',
        'RIR'
    ], {
        R: 'gtceu:wrought_iron_plate',
        I: 'gtceu:rubber_plate',
        G: 'thermal:obsidian_glass'
    });

    event.recipes.gtceu.alloy_smelter('lv_fls_kit')
        .itemInputs('kubejs:ulv_fls_kit', '2x gtceu:soul_infused_gear')
        .itemOutputs(Item.of('kubejs:lv_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:8f}}'))
        .duration(600)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('mv_fls_kit')
        .itemInputs('kubejs:lv_fls_kit', '2x gtceu:signalum_gear')
        .itemOutputs(Item.of('kubejs:mv_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:12f}}'))
        .duration(600)
        .EUt(112);

    event.recipes.gtceu.alloy_smelter('hv_fls_kit')
        .itemInputs('kubejs:mv_fls_kit', '2x gtceu:lumium_gear')
        .itemOutputs(Item.of('kubejs:hv_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:16f}}'))
        .duration(600)
        .EUt(496);

    event.recipes.gtceu.alloy_smelter('ev_fls_kit')
        .itemInputs('kubejs:hv_fls_kit', '2x gtceu:enderium_gear')
        .itemOutputs(Item.of('kubejs:ev_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:20f}}'))
        .duration(600)
        .EUt(1625);

    event.recipes.gtceu.alloy_smelter('iv_fls_kit')
        .itemInputs('kubejs:ev_fls_kit', '2x gtceu:shellite_gear')
        .itemOutputs(Item.of('kubejs:iv_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:24f}}'))
        .duration(600)
        .EUt(6500);

});