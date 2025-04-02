
StartupEvents.registry('item', event => {

    const partTiers = ['uhv', 'uev'/*, 'uiv', 'uxv', 'opv'*/];

    let tier_proper;
    partTiers.forEach(tier => {
        if(tier == 'opv') {
            tier_proper = 'OpV';
        } else {
            tier_proper = tier.toUpperCase();
        };
         
        event.create(`${tier}_computational_matrix`)
            .texture(`kubejs:item/component_part/${tier}_computational_matrix`)
            .displayName(`${tier_proper} Computational Matrix`)
            .tooltip('The Brains of Components');
        event.create(`${tier}_transmission_assembly`)
            .texture(`kubejs:item/component_part/${tier}_transmission_assembly`)
            .displayName(`${tier_proper} Transimission Assembly`)
            .tooltip('Top Tier Gear Box');
        event.create(`${tier}_precision_drive_mechanism`)
            .texture(`kubejs:item/component_part/${tier}_precision_drive_mechanism`)
            .displayName(`${tier_proper} Precision Drive Mechanism`)
            .tooltip('Exact Speeds');
        event.create(`${tier}_microfluidic_flow_valve`)
            .texture(`kubejs:item/component_part/${tier}_microfluidic_flow_valve`)
            .displayName(`${tier_proper} Micro-Fluidic Flow Valve`)
            .tooltip('Just the Right Amount of Fluid');
        event.create(`${tier}_super_magnetic_core`)
            .texture(`kubejs:item/component_part/${tier}_super_magnetic_core`)
            .displayName(`${tier_proper} Super Magnetic Core`)
            .tooltip('Most Attractive Thing Here');
        event.create(`${tier}_catalyst_core`)
            .texture(`kubejs:item/component_part/${tier}_catalyst_core`)
            .displayName(`${tier_proper} Catalyst Core`)
            .tooltip('Contained Mysticality');
        event.create(`${tier}_high_strength_panel`)
            .texture(`kubejs:item/component_part/${tier}_high_strength_panel`)
            .displayName(`${tier_proper} High Strength Panel`)
            .tooltip('The Strongest Plate');
        event.create(`${tier}_micropower_router`)
            .texture(`kubejs:item/component_part/${tier}_micropower_router`)
            .displayName(`${tier_proper} Micro-Power Router`)
            .tooltip('A Shocking Addition');

    });

});