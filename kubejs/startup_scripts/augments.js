StartupEvents.registry('item', event => {

    //dynamo's => upgrade kits
    event.create('lv_upgrade_kit')
        .displayName('LV Upgrade Kit')
        .tooltip("Augment for dynamos, energy cells, fluid cells and other Thermal Series machines")
        .texture('kubejs:item/lv_upgrade_kit');

    event.create('mv_upgrade_kit')
        .displayName('MV Upgrade Kit')
        .tooltip("Augment for dynamos, energy cells, fluid cells and other Thermal Series machines")
        .texture('kubejs:item/mv_upgrade_kit');

    event.create('hv_upgrade_kit')
        .displayName('HV Upgrade Kit')
        .tooltip("Augment for dynamos, energy cells, fluid cells and other Thermal Series machines")
        .texture('kubejs:item/hv_upgrade_kit');

    event.create('ev_upgrade_kit')
        .displayName('EV Upgrade Kit')
        .tooltip("Augment for dynamos, energy cells, fluid cells and other Thermal Series machines")
        .texture('kubejs:item/ev_upgrade_kit');

    //dynamo's => auxiliary reaction kits
    event.create('lv_arc_kit')
        .displayName('LV Auxiliary Reaction Chamber Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/lv_arc_kit');

    event.create('mv_arc_kit')
        .displayName('MV Auxiliary Reaction Chamber Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/mv_arc_kit');

    event.create('hv_arc_kit')
        .displayName('HV Auxiliary Reaction Chamber Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/hv_arc_kit');

    event.create('ev_arc_kit')
        .displayName('EV Auxiliary Reaction Chamber Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/ev_arc_kit');
    
    //dynamo's => multi-cycle injectors kits
    event.create('lv_mci_kit')
        .displayName('LV Multi-cycle Injectors Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/lv_mci_kit');

    event.create('mv_mci_kit')
        .displayName('MV Multi-cycle Injectors Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/mv_mci_kit');

    event.create('hv_mci_kit')
        .displayName('HV Multi-cycle Injectors Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/hv_mci_kit');

    event.create('ev_mci_kit')
        .displayName('EV Multi-cycle Injectors Kit')
        .tooltip("Augment for dynamos")
        .texture('kubejs:item/ev_mci_kit');
})