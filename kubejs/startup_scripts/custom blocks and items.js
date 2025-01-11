// Custom Items
StartupEvents.registry('item', event => {
    event.create('naquadic_netherite_fibers')
        .texture('kubejs:item/naquadic_netherite_fibers')
        .rarity('rare')
        .tooltip('The strongest armor material');

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

    event.create('3d_nand_chip')
        .displayName('3D-NAND Memory Chip Array')
        .tooltip('Complex NAND Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nand')

    event.create('3d_nor_chip')
        .displayName('3D-NOR Memory Chip Array')
        .tooltip('Complex NOR Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nor')

    event.create('qram_wafer')
        .displayName('qRAM Wafer')
        .tooltip('Raw Quantum Memory')
        .texture('kubejs:item/chips_n_wafers/qram_wafer')

    event.create('qram_chip')
        .displayName('qRAM Chip')
        .tooltip('Quantum Random Access Memory')
        .texture('kubejs:item/chips_n_wafers/qram_chip')

    event.create('uepic_wafer')
        .displayName('UEPIC Wafer')
        .tooltip('Raw Ultra Excessive Power Circuit')
        .texture('kubejs:item/chips_n_wafers/uepic_wafer')

    event.create('uepic_chip')
        .displayName('UEPIC Chip')
        .tooltip('Ultra Excessive Power IC')
        .texture('kubejs:item/chips_n_wafers/uepic_chip')
    
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

    event.create('draconic_wetware_microchip_processor')
        .displayName('Draconic Wetware Microchip Processor')
        .tooltip('§5Dr. Conic approved ZPM Circuit')
        .texture('kubejs:item/circuits/draconic_wetware_microchip_processor');

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

    event.create('crystallised_akreyrium')
        .displayName('Crystallised Akreyrium')
        .texture('kubejs:item/crystallised_akreyrium');

    ['basic', 'regular', 'intermediate', 'advanced', 'elite', 'ultimate'].forEach(tier => {
        event.create(`${tier}_energy_core`)
            .displayName(`${tier.charAt(0).toUpperCase() + tier.slice(1)} Energy Core`)
            .texture(`kubejs:item/energy_cores/${tier}_energy_core`);
    });

    // Mycelium Leather
    event.create('compressed_mycelium');
    event.create('smoked_mycelium');
    event.create('mycelium_growth');

    // Universal Circuits

    const circuitTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv"];

    let tier_capitalized;
    circuitTiers.forEach(tier => {
        if(tier == 'luv') {
            tier_capitalized = 'LuV';
        }
        else if (tier == 'opv') {
            tier_capitalized = "OpV";
        }
        else {
            tier_capitalized = tier.toUpperCase();
        };
        event.create(`${tier}_universal_circuit`)
            .texture(`kubejs:item/universal_circuits/${tier}_universal_circuit`)
            .displayName(`${tier_capitalized} Universal Circuit`)
            .tooltip('§o§7For use with AE2 autocrafting');
    });

//Runes

    event.create('runic_engraved_plating')
        .displayName('Runic-Engraved Plating')
        .texture('kubejs:item/gate_items/rune_engraved_plating')
        .rarity('epic')
        .tooltip('Mikerooni + Runes = Mikerunies');

    event.create('runic_pathway_engraved_plating')
        .displayName('Runic Pathway-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_pathway_engraved_plating')
        .rarity('rare');

    event.create('runic_stabilization_plating')
        .displayName('Runic Stabilization Plating')
        .texture('kubejs:item/gate_items/runic_stable_plating')
        .rarity('rare')

    event.create('runic_energized_plating')
        .displayName('Runic-Energized Plating')
        .texture('kubejs:item/gate_items/runic_energized_plating')
        .rarity('rare')

    event.create('runic_transportation_engraved_plating')
        .displayName('Runic Transportation-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_transport_plating')
        .rarity('epic')

    event.create('runic_wave_generator')
        .displayName('Drack-ion Runic Wave Generator')
        .texture('kubejs:item/gate_items/drack-ion_runic_wave_generator')
        .rarity('epic');

    event.create('runic_energized_transportation_plating')
        .displayName('Runic Energized Transportation-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_transport_energized_plating')
        .rarity('uncommon')

    event.create('runic_energized_pathway_plating')
        .displayName('Runic Energized Pathway-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_pathway_energized_plating')
        .rarity('uncommon')

 //Gate Parts

    event.create('crude_stargate_rod')
        .texture('kubejs:item/gate_items/crude_stargate_rod')
        .rarity('rare')
        .tooltip("It doesn't seem ready for use quite yet...");

    event.create('stargate_rod')
        .texture('kubejs:item/gate_items/stargate_rod')
        .rarity('epic')
        .tooltip('The muscles of a stargate, if you will...');

    event.create('computational_super_matrix')
        .displayName('Computation Supermatrix')
        .texture('kubejs:item/gate_items/computation-super-matrix')
        .rarity('rare');

    event.create('classic_stargate_computer_core')
        .displayName('Classic Encoded Computational Unit')
        .rarity('uncommon')
        .texture('kubejs:item/gate_items/classic_computational_core');

    event.create('classic_chevron_disk')
        .displayName('Classic Stargate Chevron Disk')
        .rarity('rare')
        .texture('kubejs:item/gate_items/classic_chevron_disk');

    event.create('ancient_stargate_computer_core')
        .displayName('Ancient Encoded Computational Unit')
        .rarity('uncommon');

    event.create('ancient_chevron_disk')
        .displayName('Ancient Stargate Chevron Disk')
        .rarity('rare');

    event.create('classic_chevron_assembly')
        .displayName('Classic Stargate Chevron Assembly')
        .rarity('rare')
    
    event.create('draconic_coordinate_core')
        .displayName('Draconic Coordinate Core')
        .rarity('epic')
        .tooltip('The Ultimate Eye of Ender')
        .texture('kubejs:item/gate_items/draconic_core');

    event.create('hell_core')
        .displayName('Hell Core')
        .rarity('rare')
        .texture('kubejs:item/gate_items/hell_core');

    event.create('void_core')
        .displayName('Void Core')
        .rarity('rare')
        .texture('kubejs:item/gate_items/void_core');

    const runic_tablet = ['1','2','3','4','5','6','complete']
    let fragment;
    runic_tablet.forEach(piece =>{
        if(piece == 'complete') {fragment = 'Unified'}
            else{fragment = `Fragment ${piece}`};
            event.create(`runic_tablet_${piece}`)
                .displayName(`Runic Tablet ${fragment}`)
                .rarity('uncommon')
                .texture(`kubejs:item/gate_items/rune_tablet_${piece}`)

    });

    //Dimensional Pinging

    event.create('coordinate_crystal')
        .displayName('Blank Dimensional Coordinate Crystal')
        .rarity('rare')
        .tooltip('If you are lucky you may find Home')
        .texture('kubejs:item/coordinate_crystals/blank_coordinate_crystal');

    event.create('abydos_coordinate_crystal')
        .displayName('Abydos Inscribed Coordinate Crystal')
        .rarity('epic')
        .tooltip('The Ancient Sands')
        .texture('kubejs:item/coordinate_crystals/abydos_coordinate_crystal');
        
    event.create('nether_coordinate_crystal')
        .displayName('Nether Inscribed Coordinate Crystal')
        .rarity('epic')
        .tooltip('The Burning Hells')
        .texture('kubejs:item/coordinate_crystals/nether_coordinate_crystal');

    event.create('end_coordinate_crystal')
        .displayName('End Inscribed Coordinate Crystal')
        .rarity('epic')
        .tooltip('The Draconic Void')
        .texture('kubejs:item/coordinate_crystals/end_coordinate_crystal');

    event.create('lantea_coordinate_crystal')
        .displayName('Lantea Inscribed Coordinate Crystal')
        .rarity('epic')
        .tooltip('The Endless Seas')
        .texture('kubejs:item/coordinate_crystals/lantea_coordinate_crystal');

    event.create('cavum_coordinate_crystal')
        .displayName('Cavum Inscribed Coordinate Crystal')
        .rarity('epic')
        .tooltip('The Failing Abyss')
        .texture('kubejs:item/coordinate_crystals/cavum_coordinate_crystal');

    event.create('sea_coordinate_crystal')
        .displayName('Fractured Sea Coordinate Crystal')
        .rarity('epic')
        .tooltip('The final steps...')
        .texture('kubejs:item/coordinate_crystals/sea_coordinate_crystal');

    event.create('void_coordinate_crystal')
        .displayName('Fractured Void Coordinate Crystal')
        .rarity('epic')
        .tooltip('...to get Home')
        .texture('kubejs:item/coordinate_crystals/void_coordinate_crystal');

    //Component Parts

    event.create('uhv_voltage_coil')
        .texture('kubejs:item/component_part/uhv_voltage_coil')
        .displayName('Ultra High Voltage Coil')
        .tooltip('Ultimate+ Coil');
    event.create('uev_voltage_coil')
        .texture('kubejs:item/component_part/uev_voltage_coil')
        .displayName('Ultra Excessive Voltage Coil')
        .tooltip('Ultimate+ Pro Coil');
    event.create('uiv_voltage_coil')
        .texture('kubejs:item/component_part/uiv_voltage_coil')
        .displayName('Ultra Immense Voltage Coil')
        .tooltip('Supreme Coil');
    event.create('uxv_voltage_coil')
        .texture('kubejs:item/component_part/uxv_voltage_coil')
        .displayName('Ultra Extreme Voltage Coil')
        .tooltip('Supreme+ Coil');
    event.create('opv_voltage_coil')
        .texture('kubejs:item/component_part/opv_voltage_coil')
        .displayName('Overpowered Voltage Coil')
        .tooltip('Godly Coil');

    const partTiers = ["uhv", "uev", "uiv", "uxv", "opv"];

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

    //geodes
    ['Diamond', 'Emerald', 'Ruby', 'Sapphire', 'Quartzite', 'Topaz', 'Spessartine', `Certus_Quartz`, `Green_Sapphire`
        ,`Blue_Topaz`,`Apatite`, `Monazite`].forEach(type => {
        event.create(`${type.toLowerCase()}_geode`)
            .displayName(`${type.replace(/_/, ' ')} Geode`)
            .texture(`kubejs:item/resource_gen/geodes/cracked_${type.toLowerCase()}_geode`);
    //need to fix    //    .texture(`kubejs:item/resource_gen/geodes/${type.toLowerCase()}_geode`);
        // event.create(`cracked_${type}_geode`)
        //     .displayName(`Cracked ${type.charAt(0).toUpperCase() + type.slice(1)} Geode`)
        //     .texture(`kubejs:item/resource_gen/geodes/cracked_${type}_geode`);
    });

//     //plant balls
//     ['plants', 'roots', 'seeds', 'compost'].forEach(type => {
//         event.create(`ball_${type}`)
//             .displayName(`Ball of ${type.charAt(0).toUpperCase() + type.slice(1)}`)
//             .texture(`kubejs:item/resource_gen/plant_balls/ball_${type}`);
//     });

//     //scan results
//     event.create('undetermined_scan_file')
//         .displayName('Scan Result: Undetermined')
//         .texture('kubejs:item/resource_gen/undetermined_scan_result');

//     ['skystone', 'pollucite', 'lepidolite', 'bastnasite'].forEach(type => {
//         event.create(`${type}_scan_file`)
//             .displayName(`Scan Result: ${type.charAt(0).toUpperCase() + type.slice(1)} Meteorite`)
//             .texture(`kubejs:item/resource_gen/${type}_scan_result`);

//         event.create(`${type}_meteorite`)
//             .displayName(`${type.charAt(0).toUpperCase() + type.slice(1)} Meteorite`)
//             .texture(`kubejs:item/resource_gen/${type}_meteorite`);
//     });

//     event.create('cargo_drone')
//         .displayName('Cargo Drone')
//         .texture('kubejs:item/resource_gen/drone_test');

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
        .textureAll('kubejs:block/casings/superconductors/casing-soul-infused');
            
    event.create('signalum_casing')
        .displayName('Ultra High Pressure and Temperature Resistant Signalum Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-signalum');

    event.create('lumium_casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-lumium');

    event.create('enderium_casing')
        .displayName('Thermal Fluctuation Proof Enderium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-enderium');

    event.create('shellite_casing')
        .displayName('Ultra-Resistant Shellite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-shellite');

    event.create('twinite_casing')
        .displayName('Bend-Resistant Twinite Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-twinite');

    event.create('dragonsteel_casing')
        .displayName('Unbendable Dragonsteel Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-dragonsteel');

    event.create('prismalium_casing')
        .displayName('Transportation Prismalium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-prismalium');

    event.create('melodium_casing')
        .displayName('Reinforced Melodium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-melodium');

    event.create('stellarium_casing')
        .displayName('Structurally Integral Stellarium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/superconductors/casing-stellarium');

    event.create('ancient_runicalium_casing')
        .displayName('Infusion Enhanced Ancient Runicalium Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/casing-runicalium');

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
        .textureAll('kubejs:block/casings/beryllium_bronze_casing');

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
        .textureAll('kubejs:block/casings/hydronalium_casing');

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

    //Higher Rotor Holders

    // UHV/UEV to be added
    
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

        //Runic Casings

    event.create('runic_stabilization_casing')
        .displayName('Stabilization Enscribed Runically Infused Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_diamond_tool')
        .textureAll('kubejs:block/casings/runic_stabilization_casing');

    event.create('runic_transportation_casing')
        .displayName('Transportation Enscribed Runically Infused Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_diamond_tool')
        .textureAll('kubejs:block/casings/runic_transportation_casing');

    event.create('runic_pathway_casing')
        .displayName('Pathway Enscribed Runically Infused Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(2)
        .soundType('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_diamond_tool')
        .textureAll('kubejs:block/casings/runic_pathway_casing');

        event.create('inscribe_casing')
        .displayName('Keelagraver Manipulator & Acuancentrator Capable Runicalium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/inscribe_casing');

    event.create('ancient_stargate_ring_block')
        .displayName('Ancient Stargate Ring Block')
        .hardness(5)
        .resistance(10)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        //.textureAll('kubejs:block/');

    event.create('ancient_stargate_base_block')
        .displayName('Ancient Stargate Base Block')
        .hardness(5)
        .resistance(10)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        //.textureAll('kubejs:block/');

    event.create('ancient_stargate_chevron_block')
        .displayName('Ancient Stargate Chevron Block')
        .hardness(5)
        .resistance(10)
        .lightLevel(0)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        //.textureAll('kubejs:block/');

    //     //Coagulated blocks
//     ['iron', 'copper', 'quartz'].forEach(type => {
//         event.create(`coagulated_${type}_mixture`)
//             .displayName(`Coagulated ${type.charAt(0).toUpperCase() + type.slice(1)} Mixture`)
//             .hardness(5)
//             .resistance(5)
//             .material('stone')
//             .requiresTool(true)
//             .tagBlock("mineable/pickaxe")
//             .textureAll(`kubejs:block/resource_gen/coagulated_${type}_mixture`);
//     });
    
//     event.create('coagulated_lava')
//         .displayName('Coagulated Lava')
//         .hardness(5)
//         .resistance(5)
//         .material('stone')
//         .requiresTool(true)
//         .tagBlock("mineable/pickaxe")
//         .textureAll('kubejs:block/resource_gen/coagulated_lava');

//     event.create('reflective_casing')
//         .hardness(10)
//         .resistance(1)
//         .lightLevel(5/15)
//         .soundType('metal')
//         .requiresTool(true)
//         .tagBlock("mineable/pickaxe")
//         .tagBlock('minecraft:needs_iron_tool')
//         .textureAll('kubejs:block/resource_gen/reflective_casing');

});

BlockEvents.modification(event => {
    event.modify('gtceu:nether_star_block', block => {
      block.lightEmission = 15
    })
});
