
StartupEvents.registry('item', event => {

    event.create('thorium_fuel_rod')
        .displayName('Thorium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/thorium_fuel_rod');

    event.create('highly_enriched_uranium_fuel_rod')
        .displayName('Highly Enriched Uranium Fuel Rod')
        .tooltip('§220 BILLION CALORIES')
        .texture('kubejs:item/nuclear_rods/high_enriched_uranium_fuel_rod');

    event.create('low_enriched_uranium_fuel_rod')
        .displayName('Low Enriched Uranium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/low_enriched_uranium_fuel_rod');

    event.create('depleted_thorium_fuel_rod')
        .displayName('Depleted Thorium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/depleted_thorium_fuel_rod');

    event.create('depleted_highly_enriched_uranium_fuel_rod')
        .displayName('Depleted Highly Enriched Uranium Fuel Rod')
        .tooltip('§7No more 20 billion calories')
        .texture('kubejs:item/nuclear_rods/depleted_high_enriched_uranium_rod');

    event.create('depleted_low_enriched_uranium_fuel_rod')
        .displayName('Depleted Low Enriched Uranium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/depleted_low_enriched_uranium_rod');

});