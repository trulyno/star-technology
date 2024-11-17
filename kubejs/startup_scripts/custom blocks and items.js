// Custom Items
StartupEvents.registry('item', event => {
    event.create('naquadic_netherite_fibers')
        .texture('kubejs:item/naquadic_netherite_fibers')
        .rarity('rare')
        .tooltip('The strongest armor material');

    event.create('crude_stargate_rod')
        .texture('kubejs:item/gate_items/crude_stargate_rod')
        .rarity('rare')
        .tooltip("It doesn't seem ready for use quite yet...");

    event.create('stargate_rod')
        .texture('kubejs:item/gate_items/stargate_rod')
        .rarity('epic')
        .tooltip('The muscles of a stargate, if you will...');

    event.create('runic_engraved_plating')
        .displayName('Runic-Engraved Plating')
        .texture('kubejs:item/gate_items/rune_engraved_plating')
        .rarity('epic')
        .tooltip('Mikerooni + Runes = Mikerunies');

    event.create('runic_pathway_engraved_plating')
        .displayName('Runic Pathway-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_pathway_engraved_plating')
        .rarity('rare');

    event.create('runic_wave_generator')
        .displayName('Drack-ion Runic Wave Generator')
        .texture('kubejs:item/gate_items/drack-ion_runic_wave_generator')
        .rarity('epic');

    event.create('computational_super_matrix')
        .displayName('Computation Supermatrix')
        .texture('kubejs:item/gate_items/computation-super-matrix')
        .rarity('rare');

    event.create('thorium_fuel_rod')
        .displayName('Thorium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/thorium_fuel_rod');

    event.create('highly_enriched_uranium_fuel_rod')
        .displayName('Highly Enriched Uranium Fuel Rod')
        .tooltip('20 BILLION CALORIES :trolllaugh:')
        .texture('kubejs:item/nuclear_rods/high_enriched_uranium_fuel_rod');

    event.create('low_enriched_uranium_fuel_rod')
        .displayName('Low Enriched Uranium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/low_enriched_uranium_fuel_rod');

    event.create('depleted_thorium_fuel_rod')
        .displayName('Depleted Thorium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/depleted_thorium_fuel_rod');

    event.create('depleted_highly_enriched_uranium_fuel_rod')
        .displayName('Depleted Highly Enriched Uranium Fuel Rod')
        .tooltip('No more 20 billion calories :waaaaaaaaah')
        .texture('kubejs:item/nuclear_rods/depleted_high_enriched_uranium_rod');

    event.create('depleted_low_enriched_uranium_fuel_rod')
        .displayName('Depleted Low Enriched Uranium Fuel Rod')
        .texture('kubejs:item/nuclear_rods/depleted_low_enriched_uranium_rod');

    event.create('coin')
        .displayName('StarT Coin')
        .texture('kubejs:item/coin');

    // event.create('uhv_emitter')
    //     .displayName('UHV Emitter')
    //     .texture('kubejs:item/emitters/uhv_emitter');

    // event.create('uev_emitter')
    //     .displayName('UEV Emitter')
    //     .texture('kubejs:item/emitters/uev_emitter');

    // event.create('uiv_emitter')
    //     .displayName('UIV Emitter')
    //     .texture('kubejs:item/emitters/uiv_emitter');

    // event.create('uxv_emitter')
    //     .displayName('UXV Emitter')
    //     .texture('kubejs:item/emitters/uxv_emitter');

    // event.create('opv_emitter')
    //     .displayName('OpV Emitter')
    //     .texture('kubejs:item/emitters/opv_emitter');

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
        .texture('kubejs:item/draconic/draconic_stem_cells');

    event.create('lactating_draconic_cells')
        .displayName('Lactating Draconic Cells')
        .texture('kubejs:item/draconic/lactating_draconic_cells');

    event.create('draconic_brain_matter_cells')
        .displayName('Draconic Brain Matter Cells')
        .texture('kubejs:item/draconic/draconic_brain_matter_cells');

    event.create('draconic_scale_cells')
        .displayName('Draconic Scale Cells')
        .texture('kubejs:item/draconic/draconic_scale_cells');

    event.create('multiblock_upgrade_kit')
        .displayName('Multiblock Upgrade Kit')
        .texture('kubejs:item/kits/upgrade_kit');

    ['basic', 'regular', 'intermediate', 'advanced', 'elite', 'ultimate'].forEach(tier => {
        event.create(`${tier}_energy_core`)
            .displayName(`${tier.charAt(0).toUpperCase() + tier.slice(1)} Energy Core`)
            .texture(`kubejs:item/energy_cores/${tier}_energy_core`);
    })

    // Mycelium Leather
    event.create('compressed_mycelium');
    event.create('smoked_mycelium');
    event.create('mycelium_growth');

    // Universal Circuits

    const circuitTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev"];

    let tier_capitalized;
    circuitTiers.forEach(tier => {
        if(tier == 'luv') {
            tier_capitalized = 'LuV';
        } else {
            tier_capitalized = tier.toUpperCase();
        };
        event.create(`${tier}_universal_circuit`)
            .texture(`kubejs:item/universal_circuits/${tier}_universal_circuit`)
            .displayName(`${tier_capitalized} Universal Circuit`)
            .tooltip('§o§7For use with AE2 autocrafting');
    });
});

// Custom Blocks
StartupEvents.registry('block', event => {

    // Custom Casings
    event.create('soul_infused_casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-soul-infused');
            
    event.create('signalum_casing')
        .displayName('Ultra High Pressure and Temperature Resistant Signalum Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-signalum');

    event.create('lumium_casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-lumium');

    event.create('enderium_casing')
        .displayName('Thermal Fluctuation Proof Enderium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-enderium');

    event.create('shellite_casing')
        .displayName('Ultra-Resistant Shellite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-shellite');

    event.create('twinite_casing')
        .displayName('Bend-Resistant Twinite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-twinite');

    event.create('dragonsteel_casing')
        .displayName('Unbendable Dragonsteel Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-dragonsteel');

    event.create('prismalium_casing')
        .displayName('Transportation Prismalium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-prismalium');

    event.create('melodium_casing')
        .displayName('Reinforced Melodium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-melodium');

    event.create('stellarium_casing')
        .displayName('Structurally Integral Stellarium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-stellarium');

    event.create('austenitic_stainless_steel_304_casing')
        .displayName('Austenitic Stainless Steel 304 Nuclear Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-austenitic-stainless-steel-304');

    event.create('inconel_625_casing')
        .displayName('Inconel 625 Thermal Fluctuation Resistant Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-inconel-625');

    event.create('wood_casing')
        .displayName('Treatedwood Reinforced Casing')
        .hardness(5)
        .resistance(1)
        .material('wood')
        .requiresTool(true)
        .tagBlock("mineable/axe")
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/casings/casing-wood');

    event.create('peek_casing')
        .displayName('PEEK Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/machine_casing_peek');

    event.create('beryllium_aluminium_alloy_casing')
        .displayName('Beryllium-Aluminium Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/beryllium-aluminium_casing');

    event.create('birmabright_casing')
        .displayName('Birmabright Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/birmabright_casing');

    event.create('beryllium_bronze_casing')
        .displayName('Beryllium Bronze Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/bizmuth_bronze_casing');

    event.create('blue_steel_casing')
        .displayName('Blue Steel Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/blue_steel_casing');

    event.create('duralumin_casing')
        .displayName('Duralumin Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/duralumin_casing');

    event.create('elgiloy_casing')
        .displayName('Elgiloy Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/elgiloy_casing');

    event.create('hydronalium_casing')
        .displayName('Hydronalium Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/hydronallium_casing');

    event.create('kovar_casing')
        .displayName('Kovar Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/kovar_casing');

    event.create('red_steel_casing')
        .displayName('Red Steel Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/red_steel_casing');

    event.create('silicon_bronze_casing')
        .displayName('Silicon Bronze Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/silicon_bronze_casing');

    event.create('sterling_silver_casing')
        .displayName('Sterling Silver Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/sterling_silver_casing');

    event.create('zamak_casing')
        .displayName('Zamak Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/zamak_casing');

    event.create('tumbaga_casing')
        .displayName('Tumbaga Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/tumbaga_casing');

    // Custom Coils
    event.create('zalloy_coil_block', 'gtceu:coil')
        .temperature(13499)
        .level(24)
        .energyDiscount(16)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('zalloy'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .material('metal');

    // Extras
    event.create('laser_casing')
        .displayName('Schrubblaser Beam Concentrator & Emmiter Capable Stellarium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
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
