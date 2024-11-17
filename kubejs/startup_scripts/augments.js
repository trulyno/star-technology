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
    function upgrade_kit(tier){
        event.create(`${tier}_upgrade_kit`)
            .displayName(`${tier.toUpperCase()} Upgrade Kit`)
            .tooltip("Augment for Dynamos, RF Cells, Fluid Cells and other Thermal Series machines")
            .texture(`kubejs:item/kits/upgrade_kits/${tier}_upgrade_kit`)
    };
    upgrade_kit('lv');
    upgrade_kit('mv');
    upgrade_kit('hv');
    upgrade_kit('ev');

    //dynamo's => auxiliary reaction kits
    function arc_kit(tier){
        event.create(`${tier}_arc_kit`)
        .displayName(`${tier.toUpperCase()} Auxiliary Reaction Chamber Kit`)
        .tooltip("Augment for Dynamos")
        .texture(`kubejs:item/kits/arc_kits/${tier}_arc_kit`)
    };
    arc_kit('lv');
    arc_kit('mv');
    arc_kit('hv');
    arc_kit('ev');

    //dynamo's => multi-cycle injectors kits
    function mci_kit(tier){
    event.create(`${tier}_mci_kit`)
        .displayName(`${tier.toUpperCase()} Multi-cycle Injectors Kit`)
        .tooltip('Augment for Dynamos')
        .texture(`kubejs:item/kits/mci_kits/${tier}_mci_kit`)
    };
    mci_kit('lv');
    mci_kit('mv');
    mci_kit('hv');
    mci_kit('ev');

    //fluid cells => storage upgrade kits
    function fls_kit(tier){
        event.create(`${tier}_fls_kit`)
            .displayName(`${tier.toUpperCase()} Expanded Tank Kit`)
            .tooltip('Augment for Fluid Cell')
            .texture(`kubejs:item/kits/fls_kits/${tier}_fls_kit`)
    };
    fls_kit('ulv');
    fls_kit('lv');
    fls_kit('mv');
    fls_kit('hv');
    fls_kit('ev');
    fls_kit('iv');

    //rf cells => general upgrade kits
    function rfc_kit(tier){
        event.create(`${tier}_rfc_kit`)
            .displayName(`${tier.toUpperCase()} Expanded RF Coil Kit`)
            .tooltip('Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rfc_kits/${tier}_rfc_kit`)
    };
    rfc_kit('ulv');
    rfc_kit('lv');
    rfc_kit('mv');
    rfc_kit('hv');
    rfc_kit('ev');
    rfc_kit('iv');

    //rf cells => storage upgrade kits
    function rfs_kit(tier){
        event.create(`${tier}_rfs_kit`)
            .displayName(`${tier.toUpperCase()} Stabilized RF Coil Kit`)
            .tooltip('Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rfs_kits/${tier}_rfs_kit`)
    };
    rfs_kit('ulv');
    rfs_kit('lv');
    rfs_kit('mv');
    rfs_kit('hv');
    rfs_kit('ev');
    rfs_kit('iv');

    //rf cells => transfer upgrade kits
    function rft_kit(tier){
        event.create(`${tier}_rft_kit`)
            .displayName(`${tier.toUpperCase()} High-Flux RF Coil Kit`)
            .tooltip('Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rft_kits/${tier}_rft_kit`)
    };
    rft_kit('ulv');
    rft_kit('lv');
    rft_kit('mv');
    rft_kit('hv');
    rft_kit('ev');
    rft_kit('iv');

})