
// Custom Items
StartupEvents.registry('item', event => {
    event.create('naquadic_netherite_fibers')
        .texture('kubejs:item/naquadic_netherite_fibers')
        .rarity('rare')
        .tooltip('The strongest armor material');

    event.create('crude_stargate_rod')
        .texture('kubejs:item/crude_stargate_rod')
        .rarity('rare')
        .tooltip("It doesn't seem ready for use quite yet...");

    event.create('stargate_rod')
        .texture('kubejs:item/stargate_rod')
        .rarity('epic')
        .tooltip('The muscles of a stargate, if you will...');

    event.create('runic_engraved_plating')
        .displayName('Runic-Engraved Plating')
        .texture('kubejs:item/rune_engraved_plating')
        .rarity('epic')
        .tooltip('Mikerooni + Runes = Mikerunies');

    event.create('runic_pathway_engraved_plating')
        .displayName('Runic Pathway-Engraved Plating')
        .texture('kubejs:item/runic_pathway_engraved_plating')
        .rarity('rare');

    event.create('runic_wave_generator')
        .displayName('Drack-ion Runic Wave Generator')
        .texture('kubejs:item/drack-ion_runic_wave_generator')
        .rarity('epic');

    event.create('computational_super_matrix')
        .displayName('Computation Supermatrix')
        .texture('kubejs:item/computation-super-matrix')
        .rarity('rare');

    event.create('thorium_fuel_rod')
        .displayName('Thorium Fuel Rod')
        .texture('kubejs:item/thorium_fuel_rod');

    event.create('highly_enriched_uranium_fuel_rod')
        .displayName('Highly Enriched Uranium Fuel Rod')
        .tooltip('20 BILLION CALORIES :trolllaugh:')
        .texture('kubejs:item/high_enriched_uranium_fuel_rod');

    event.create('low_enriched_uranium_fuel_rod')
        .displayName('Low Enriched Uranium Fuel Rod')
        .texture('kubejs:item/low_enriched_uranium_fuel_rod');

    event.create('depleted_thorium_fuel_rod')
        .displayName('Depleted Thorium Fuel Rod')
        .texture('kubejs:item/depleted_thorium_fuel_rod');

    event.create('depleted_highly_enriched_uranium_fuel_rod')
        .displayName('Depleted Highly Enriched Uranium Fuel Rod')
        .tooltip('No more 20 billion calories :waaaaaaaaah')
        .texture('kubejs:item/depleted_high_enriched_uranium_rod');

    event.create('depleted_low_enriched_uranium_fuel_rod')
        .displayName('Depleted Low Enriched Uranium Fuel Rod')
        .texture('kubejs:item/depleted_low_enriched_uranium_rod');

    event.create('lv_upgrade_kit')
        .displayName('LV Upgrade Kit')
        .texture('kubejs:item/lv_upgrade_kit');

    event.create('mv_upgrade_kit')
        .displayName('MV Upgrade Kit')
        .texture('kubejs:item/mv_upgrade_kit');

    event.create('hv_upgrade_kit')
        .displayName('HV Upgrade Kit')
        .texture('kubejs:item/hv_upgrade_kit');

    event.create('ev_upgrade_kit')
        .displayName('EV Upgrade Kit')
        .texture('kubejs:item/ev_upgrade_kit');

    event.create('lv_arc_kit')
        .displayName('LV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/lv_arc_kit');

    event.create('mv_arc_kit')
        .displayName('MV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/mv_arc_kit');

    event.create('hv_arc_kit')
        .displayName('HV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/hv_arc_kit');

    event.create('ev_arc_kit')
        .displayName('EV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/ev_arc_kit');

    event.create('lv_mci_kit')
        .displayName('LV Multi-cycle Injectors Kit')
        .texture('kubejs:item/lv_mci_kit');

    event.create('mv_mci_kit')
        .displayName('MV Multi-cycle Injectors Kit')
        .texture('kubejs:item/mv_mci_kit');

    event.create('hv_mci_kit')
        .displayName('HV Multi-cycle Injectors Kit')
        .texture('kubejs:item/hv_mci_kit');

    event.create('ev_mci_kit')
        .displayName('EV Multi-cycle Injectors Kit')
        .texture('kubejs:item/ev_mci_kit');

    event.create('coin')
        .displayName('StarT Coin')
        .texture('kubejs:item/coin');

    event.create('uhv_emitter')
        .displayName('UHV Emitter')
        .texture('kubejs:item/emitters/uhv_emitter');

    event.create('uev_emitter')
        .displayName('UEV Emitter')
        .texture('kubejs:item/emitters/uev_emitter');

    event.create('uiv_emitter')
        .displayName('UIV Emitter')
        .texture('kubejs:item/emitters/uiv_emitter');

    event.create('uxv_emitter')
        .displayName('UXV Emitter')
        .texture('kubejs:item/emitters/uxv_emitter');

    event.create('opv_emitter')
        .displayName('OpV Emitter')
        .texture('kubejs:item/emitters/opv_emitter');

    event.create('draconic_wetware_circuit_board')
        .displayName('Draconic Wetware Circuit Board')
        .texture('kubejs:item/circuits/draconic_wetware_circuit_board');

    event.create('draconic_wetware_printed_circuit_board')
        .displayName('Draconic Wetware Printed Circuit Board')
        .texture('kubejs:item/circuits/draconic_wetware_printed_circuit_board');

    event.create('draconic_neuro_processing_unit')
        .displayName('Draconic Neuro Processing Unit')
        .tooltip('Neuro-sama!')
        .texture('kubejs:item/circuits/draconic_neuro_processing_unit');

    event.create('draconic_wetware_processor')
        .displayName('Draconic Wetware Processor')
        .tooltip('§5Dr. Conic approved UV Circuit')
        .texture('kubejs:item/circuits/draconic_wetware_processor');

    event.create('draconic_wetware_processor_assembly')
        .displayName('Draconic Wetware Processor Assembly')
        .tooltip('§5Dr. Conic approved UHV Circuit')
        .texture('kubejs:item/circuits/draconic_wetware_processor_assembly');

    event.create('draconic_wetware_processor_computer')
        .displayName('Draconic Wetware Processor Supercomputer')
        .tooltip('§5Dr. Conic approved UEV Circuit')
        .texture('kubejs:item/circuits/draconic_wetware_processor_computer');

    event.create('draconic_wetware_processor_mainframe')
        .displayName('Draconic Wetware Processor Mainframe')
        .tooltip('§5Dr. Conic approved UIV Circuit')
        .texture('kubejs:item/circuits/draconic_wetware_processor_mainframe');

    event.create('draconic_stem_cells')
        .displayName('Draconic Stem Cells')
        .texture('kubejs:item/draconic_stem_cells');

    event.create('lactating_draconic_cells')
        .displayName('Lactating Draconic Cells')
        .texture('kubejs:item/lactating_draconic_cells');

    event.create('draconic_brain_matter_cells')
        .displayName('Draconic Brain Matter Cells')
        .texture('kubejs:item/draconic_brain_matter_cells');

    event.create('draconic_scale_cells')
        .displayName('Draconic Scale Cells')
        .texture('kubejs:item/draconic_scale_cells');
});

// Custom Blocks
StartupEvents.registry('block', event => {

    // Custom Casings
    event.create('soul_infused_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-soul-infused') });
            
    event.create('signalum_casing', 'gtceu:renderer')
        .displayName('Ultra High Pressure and Temperature Resistant Signalum Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-signalum') });

    event.create('lumium_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-lumium') });

    event.create('enderium_casing', 'gtceu:renderer')
        .displayName('Thermal Fluctuation Proof Enderium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-enderium') });

    event.create('shellite_casing', 'gtceu:renderer')
        .displayName('Ultra-Resistant Shellite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-shellite') });

    event.create('twinite_casing', 'gtceu:renderer')
        .displayName('Bend-Resistant Twinite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-twinite') });

    event.create('dragonsteel_casing', 'gtceu:renderer')
        .displayName('Unbendable Dragonsteel Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-dragonsteel') });

    event.create('prismalium_casing', 'gtceu:renderer')
        .displayName('Transportation Prismalium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-prismalium') });

    event.create('melodium_casing', 'gtceu:renderer')
        .displayName('Reinforced Melodium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-melodium') });

    event.create('stellarium_casing', 'gtceu:renderer')
        .displayName('Structurally Integral Stellarium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing-stellarium') });

    event.create('austenitic_stainless_steel_304_casing', 'gtceu:renderer')
        .displayName('Austenitic Stainless Steel 304 Nuclear Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-austenitic-stainless-steel-304') });

    event.create('inconel_625_casing', 'gtceu:renderer')
        .displayName('Inconel 625 Thermal Fluctuation Resistant Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-inconel-625') });

    event.create('wood_casing', 'gtceu:renderer')
        .displayName('Treatedwood Reinforced Casing')
        .hardness(5)
        .resistance(1)
        .material('wood')
        .requiresTool(true)
        .tagBlock("mineable/axe")
        .tagBlock('minecraft:needs_stone_tool')
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-wood')});

    // Custom Coils
    event.create('zalloy_coil_block', 'gtceu:coil')
        .temperature(13499)
        .level(24)
        .energyDiscount(16)
        .tier(10)
        .coilMaterial(GTMaterials.get('zalloy'))
        .texture('kubejs:block/coils/machine_coil_zalloy')
        .hardness(5)
        .requiresTool(true)
        .material('metal');

    // Extras
    event.create('laser_casing')
        .displayName('Schrubblaser Beam Concentrator & Emmiter Capable Stellarium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/laser_casing');

    // Meshblock for Kinetic Sieve

    event.create('meshblock')
        .displayName('Treatedwood Reinforced Mesh')
        .hardness(2)
        .resistance(2)
        .material('wood')
        .transparent(true)
        .defaultTranslucent() 
        .requiresTool(false)
        .tagBlock("mineable/axe")
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/multiblock/meshblock');

});