
StartupEvents.registry('item', event => {

    ['basic', 'regular', 'intermediate', 'advanced', 'elite', 'ultimate'].forEach(tier => {
        event.create(`${tier}_energy_core`)
            .displayName(`${tier.charAt(0).toUpperCase() + tier.slice(1)} Energy Core`)
            .texture(`kubejs:item/energy_cores/${tier}_energy_core`);
    });

});