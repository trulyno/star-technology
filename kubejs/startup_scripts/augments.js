StartupEvents.registry('item', event => {
    /*
    dictionary:
    arc = auxiliary reaction
    mci = multi-cycle injector
    fls = fluid storage
    rfc = redstone flux coil
    rfs = redstone flux storage
    rft = redstone flux transfer
    */

    //all items => upgrade kits
    const upgrade_kit = (tier) => {
        event.create(`${tier}_upgrade_kit`)
            .displayName(`${tier.toUpperCase()} Upgrade Kit`)
            .tooltip("Augment for Dynamos, RF Cells, Fluid Cells and other Thermal Series machines")
            .texture(`kubejs:item/kits/upgrade_kits/${tier}_kit`);
    };

    //dynamo's => auxiliary reaction kits
    const arc_kit = (tier) => {
        event.create(`${tier}_arc_kit`)
        .displayName(`${tier.toUpperCase()} Auxiliary Reaction Chamber Kit`)
        .tooltip("Augment for Dynamos")
        .texture(`kubejs:item/kits/arc_kits/${tier}_arc_kit`);
    };

    //dynamo's => multi-cycle injectors kits
    const mci_kit = (tier) => {
    event.create(`${tier}_mci_kit`)
        .displayName(`${tier.toUpperCase()} Multi-cycle Injectors Kit`)
        .tooltip('Augment for Dynamos')
        .texture(`kubejs:item/kits/mci_kits/${tier}_mci_kit`);
    };

    ['lv', 'mv', 'hv', 'ev'].forEach(tier => {
        upgrade_kit(tier);
        arc_kit(tier);
        mci_kit(tier);
    });

    //fluid cells => storage upgrade kits
    const fls_kit = (tier) => {
        event.create(`${tier}_fls_kit`)
            .displayName(`${tier.toUpperCase()} Expanded Tank Kit`)
            .tooltip('Augment for Fluid Cell')
            .texture(`kubejs:item/kits/fls_kits/${tier}_fls_kit`);
    };

    //rf cells => general upgrade kits
    const rfc_kit = (tier) => {
        event.create(`${tier}_rfc_kit`)
            .displayName(`${tier.toUpperCase()} Expanded RF Coil Kit`)
            .tooltip('Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rfc_kits/${tier}_rfc_kit`);
    };

    //rf cells => storage upgrade kits
    const rfs_kit = (tier) => {
        event.create(`${tier}_rfs_kit`)
            .displayName(`${tier.toUpperCase()} Stabilized RF Coil Kit`)
            .tooltip('Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rfs_kits/${tier}_rfs_kit`);
    };

    //rf cells => transfer upgrade kits
    const rft_kit = (tier) => {
        event.create(`${tier}_rft_kit`)
            .displayName(`${tier.toUpperCase()} High-Flux RF Coil Kit`)
            .tooltip('Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rft_kits/${tier}_rft_kit`);
    };

    ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv'].forEach(tier => {
        fls_kit(tier);
        rfc_kit(tier);
        rfs_kit(tier);
        rft_kit(tier);
    });

});