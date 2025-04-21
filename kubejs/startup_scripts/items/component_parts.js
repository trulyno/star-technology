
StartupEvents.registry('item', event => {

    const partTiers = (tier,color,tier_proper) => {
        
        event.create(`${tier}_computational_matrix`)
            .texture(`kubejs:item/component_part/${tier}_computational_matrix`)
            .displayName(`§${color}${tier_proper}§r Computational Matrix`);
            
        event.create(`${tier}_transmission_assembly`)
            .texture(`kubejs:item/component_part/${tier}_transmission_assembly`)
            .displayName(`§${color}${tier_proper}§r Transmission Assembly`);
            
        event.create(`${tier}_precision_drive_mechanism`)
            .texture(`kubejs:item/component_part/${tier}_precision_drive_mechanism`)
            .displayName(`§${color}${tier_proper}§r Precision Drive Mechanism`);
            
        event.create(`${tier}_microfluidic_flow_valve`)
            .texture(`kubejs:item/component_part/${tier}_microfluidic_flow_valve`)
            .displayName(`§${color}${tier_proper}§r Micro-Fluidic Flow Valve`);

        event.create(`${tier}_super_magnetic_core`)
            .texture(`kubejs:item/component_part/${tier}_super_magnetic_core`)
            .displayName(`§${color}${tier_proper}§r Super Magnetic Core`);
            
        event.create(`${tier}_catalyst_core`)
            .texture(`kubejs:item/component_part/${tier}_catalyst_core`)
            .displayName(`§${color}${tier_proper}§r Catalyst Core`);
            
        event.create(`${tier}_high_strength_panel`)
            .texture(`kubejs:item/component_part/${tier}_high_strength_panel`)
            .displayName(`§${color}${tier_proper}§r High Strength Panel`);
            
        event.create(`${tier}_micropower_router`)
            .texture(`kubejs:item/component_part/${tier}_micropower_router`)
            .displayName(`§${color}${tier_proper}§r Micro-Power Router`);
    
    }
    
    partTiers('uhv','4','UHV');
    // partTiers('uev','a','UEV');
    // partTiers('uiv','2','UIV');
    // partTiers('uxv','e','UXV');
    // partTiers('opv','9§l','OpV');

});
