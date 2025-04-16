// priority: 1000000

global.id = (id) => `start:${id}`;

ServerEvents.recipes(event => {
    const id = global.id;

    // Upgrade augments
    [
        {tier: 'lv', plate: 'invar', glass: '_extra:soul_infused', gear: 'bronze', fluid: 'gtceu:tin 720', Mod: 4},
        {tier: 'mv', plate: 'electrum', glass: ':signalum', gear: 'steel', fluid: 'gtceu:redstone 720', Mod: 16},
        {tier: 'hv', plate: 'lumium', glass: ':lumium', gear: 'aluminium', fluid: 'gtceu:glowstone 720', Mod: 64},
        {tier: 'ev', plate: 'soul_infused', glass: ':enderium', gear: 'stainless_steel', fluid: 'thermal:ender 750', Mod: 256}
    ].forEach(tier => {
        event.recipes.gtceu.assembler(id(`${tier.tier}_kit`))
            .itemInputs(`4x gtceu:${tier.plate}_plate`, `thermal${tier.glass}_glass`, `gtceu:${tier.gear}_gear`, `#gtceu:circuits/${tier.tier}`)
            .itemOutputs(Item.of(`kubejs:${tier.tier}_upgrade_kit`, `{AugmentData:{BaseMod:${tier.Mod}f,Type: Upgrade}}`))
            .inputFluids(tier.fluid)
            .duration(600)
            .EUt(global.va[tier.tier]);
    });

    // ARC augments
    event.recipes.gtceu.assembler(id('lv_arc_augment'))
        .itemInputs('2x gtceu:bronze_plate', '2x gtceu:silver_gear', 'thermal_extra:soul_infused_glass')
        .itemOutputs(Item.of('kubejs:lv_arc_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:0.95f, DynamoPower:0.5f}}'))
        .duration(600)
        .EUt(28);

    // MCI augments
    event.recipes.gtceu.assembler(id('mv_mci_augment'))
        .itemInputs('2x gtceu:electrum_plate', '2x gtceu:lead_gear', 'thermal_extra:soul_infused_glass')
        .itemOutputs(Item.of('kubejs:lv_mci_kit', '{AugmentData:{Type: Dynamo, DynamoEnergy:1.1f}}'))
        .duration(600)
        .EUt(28);

    //RFC kits
    event.shaped(Item.of('kubejs:ulv_rfc_kit', '{AugmentData:{Type: RF, RFMax:4f, RFXfer:4f}}'), [
        ' G ',
        'SCS',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    }).id('start:shaped/ulv_rfc_kit');

    //RFS
    event.shaped(Item.of('kubejs:ulv_rfs_kit', '{AugmentData:{Type: RF, RFMax:6f, RFXfer:2f}}'), [
        ' S ',
        'GCG',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    }).id('start:shaped/ulv_rfs_kit');

    //RFT
    event.shaped(Item.of('kubejs:ulv_rft_kit', '{AugmentData:{Type: RF, RFMax:2f, RFXfer:6f}}'), [
        ' S ',
        'SCS',
        ' G '
    ], {
        G: 'gtceu:gold_plate',
        S: 'gtceu:silver_plate',
        C: 'thermal:rf_coil'
    }).id('start:shaped/ulv_rft_kit');

    //FLS
    event.shaped(Item.of('kubejs:ulv_fls_kit', '{AugmentData:{Type: Fluid, FluidMax:4f}}'), [
        'RIR',
        'IGI',
        'RIR'
    ], {
        R: 'gtceu:wrought_iron_plate',
        I: 'gtceu:rubber_plate',
        G: 'thermal:obsidian_glass'
    }).id('start:shaped/ulv_fls_kit');
    
    // ARC's and MCI's
    [
        {tier: 'mv', last_tier: 'lv', gear: 'lumium', glass: 'signalum', DynEA: 0.9, DynP: 0.75, DynEM: 1.25, energy: 'mv'},
        {tier: 'hv', last_tier: 'mv', gear: 'enderium', glass: 'lumium', DynEA: 0.8, DynP: 1, DynEM: 1.5, energy: 'hv'},
        {tier: 'ev', last_tier: 'hv', gear: 'shellite', glass: 'enderium', DynEA: 0.75, DynP: 2, DynEM: 2, energy: 'ev'}
    ].forEach(tier=> {
        event.recipes.gtceu.assembler(id(`arc_augment_${tier.tier}`))
            .itemInputs(`kubejs:${tier.last_tier}_arc_kit`, `2x gtceu:${tier.gear}_gear`, `thermal:${tier.glass}_glass`)
            .itemOutputs(Item.of(`kubejs:${tier.tier}_arc_kit`, `{AugmentData:{Type: Dynamo, DynamoEnergy:${tier.DynEA}f, DynamoPower:${tier.DynP}f}}`))
            .duration(600)
            .EUt(global.va[tier.energy]);
            
        event.recipes.gtceu.assembler(id(`mci_augment_${tier.tier}`))
            .itemInputs(`kubejs:${tier.last_tier}_mci_kit`, `2x gtceu:${tier.gear}_gear`, `thermal:${tier.glass}_glass`)
            .itemOutputs(Item.of(`kubejs:${tier.tier}_mci_kit`, `{AugmentData:{Type: Dynamo, DynamoEnergy:${tier.DynEM}f}}`))
            .duration(600)
            .EUt(global.va[tier.energy]);
    });
    
    // RFC's, RFS', RFT's and FLS's
    [
        {tier: 'lv', last_tier: 'ulv', metal: 'soul_infused', Max: 10, Avg: 8, Min: 4, energy: 'lv'},
        {tier: 'mv', last_tier: 'lv', metal: 'signalum', Max: 14, Avg: 12, Min: 6, energy: 'mv'},
        {tier: 'hv', last_tier: 'mv', metal: 'lumium', Max: 18, Avg: 16, Min: 8, energy: 'hv'},
        {tier: 'ev', last_tier: 'hv', metal: 'enderium', Max: 22, Avg: 20, Min: 10, energy: 'ev'},
        {tier: 'iv', last_tier: 'ev', metal: 'shellite', Max: 26, Avg: 24, Min: 12, energy: 'iv'}
    ].forEach(foo => {
        event.recipes.gtceu.alloy_smelter(id(`${foo.tier}_rfc_kit`))
            .itemInputs(`kubejs:${foo.last_tier}_rfc_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(Item.of(`kubejs:${foo.tier}_rfc_kit`, `{AugmentData:{Type: RF, RFMax:${foo.Avg}f, RFXfer:${foo.Avg}f}}`))
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu.alloy_smelter(id(`${foo.tier}_rfs_kit`))
            .itemInputs(`kubejs:${foo.last_tier}_rfs_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(Item.of(`kubejs:${foo.tier}_rfs_kit`, `{AugmentData:{Type: RF, RFMax:${foo.Max}f, RFXfer:${foo.Min}f}}`))
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu.alloy_smelter(id(`${foo.tier}_rft_kit`))
            .itemInputs(`kubejs:${foo.last_tier}_rft_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(Item.of(`kubejs:${foo.tier}_rft_kit`, `{AugmentData:{Type: RF, RFMax:${foo.Min}f, RFXfer:${foo.Max}f}}`))
            .duration(600)
            .EUt(global.va[foo.energy]);

        event.recipes.gtceu.alloy_smelter(id(`${foo.tier}_fls_kit`))
            .itemInputs(`kubejs:${foo.last_tier}_fls_kit`, `2x gtceu:${foo.metal}_gear`)
            .itemOutputs(Item.of(`kubejs:${foo.tier}_fls_kit`, `{AugmentData:{Type: Fluid, FluidMax:${foo.Avg}f}}`))
            .duration(600)
            .EUt(global.va[foo.energy]);

    });

});