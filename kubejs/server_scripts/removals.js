ServerEvents.recipes(event => {
    const toRemoveOutput = ['thermal:machine_furnace', 'thermal:machine_sawmill',
        'thermal:machine_pulverizer', 'thermal:machine_insolator', 'thermal:machine_centrifuge', 'thermal:machine_crucible', 'thermal:machine_chiller', 'thermal:machine_refinery',
        'thermal:machine_pyrolyzer', 'thermal:machine_bottler', 'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:machine_crafter', 'thermal:machine_smelter',
        'thermal:machine_press', 'exnihilosequentia:flint_mesh', 'exnihilosequentia:iron_mesh', 'exnihilosequentia:diamond_mesh', 'exnihilosequentia:emerald_mesh',
        'exnihilosequentia:netherite_mesh', 'thermal:obsidian_glass', 'thermal:signalum_glass', 'thermal:lumium_glass', 'thermal:enderium_glass', 'thermal_extra:soul_infused_glass',
        'thermal_extra:shellite_glass', 'thermal_extra:twinite_glass', 'thermal_extra:dragonsteel_glass', 'thermal:machine_frame', 'thermal:fluid_cell_frame',
        'thermal:energy_cell_frame', 'thermal:earth_charge', 'thermal:ice_charge', 'thermal:lightning_charge', 'thermal:fluid_cell', 'thermal:energy_cell', 'ae2:inscriber',
        'ae2:vibration_chamber', 'ae2:silicon', 'ae2:controller', 'fluxnetworks:flux_dust', 'exnihilosequentia:end_cake', 'systeams:steam_dynamo', 'systeams:stirling_boiler',
        'systeams:lapidary_boiler', 'systeams:magmatic_boiler', 'systeams:numismatic_boiler', 'systeams:compression_boiler', 'systeams:disenchantment_boiler',
        'systeams:gourmand_boiler', 'systeams:boiler_pipe', 'thermal:energy_duct', 'itemcollectors:basic_collector', 'itemcollectors:advanced_collector', 'create_new_age:heat_pipe',
        'create_new_age:heat_pump', 'create_new_age:heater', 'create_new_age:stirling_engine', 'create_new_age:reactor_casing', 'create_new_age:reactor_rod',
        'create_new_age:reactor_glass', 'create_new_age:reactor_fuel_acceptor', 'create_new_age:reactor_heat_vent', 'create_new_age:basic_solar_heating_plate',
        'create_new_age:advanced_solar_heating_plate', 'create_new_age:nuclear_fuel', 'create_new_age:blank_circuit', 'create_new_age:copper_circuit', 'create_new_age:thorium',
        'create_new_age:radioactive_thorium', 'createdieselgenerators:kelp_handle', 'createdieselgenerators:distillation_controller', 'createdieselgenerators:',
        'createdieselgenerators:lighter', 'createdieselgenerators:chemical_sprayer', 'createdieselgenerators:oil_detector', 'createdieselgenerators:pumpjack_bearing',
        'createdieselgenerators:pumpjack_head', 'createdieselgenerators:pumpjack_crank', 'createdieselgenerators:canister', 'createdieselgenerators:oil_barrel',
        'createdieselgenerators:asphalt', 'createdieselgenerators:asphalt_slab', 'createdieselgenerators:asphalt_stairs', 'createdieselgenerators:diesel',
        'createdieselgenerators:gasoline',  'ae2:charger', 'ae2:drive', 'ae2:chest', 'createdieselgenerators:pumpjack_hole', 'expatternprovider:ex_inscriber',
        'expatternprovider:ex_charger', 'expatternprovider:crystal_fixer', 'expatternprovider:canner', 'exmachinis:item_buffer', 'ae2:crystal_resonance_generator',
        'ae2:vibration_chamber', 'exnihilosequentia:mechanical_sieve', 'exnihilosequentia:mechanical_hammer', 'systeams:frost_boiler', 'exnihilosequentia:golden_mesh',
        'expatternprovider:circuit_cutter', 'minecraft:mycelium', 'thermal:gunpowder_4', 'thermal:dirt_crafting', '#thermal:rockwool'
    ];
    const toRemoveId = ['thermal:slime_mushroom_spores', 'thermal_extra:sticky_ball_to_paper', 'farmersdelight:paper_from_tree_bark', 'create:pressing/sugar_cane',
        'exnihilo:fluid_item/ens_slime', 'gtceu:shaped/good_circuit_board', 'thermal:rubber_from_vine', 'thermal:rubber_from_dandelion', 'thermal:smelting/cured_rubber_from_smelting',
        'thermal:rf_coil', 'create:haunting/crimson_fungus', 'create:haunting/warped_fungus', 'create:milling/compat/ae2/sky_stone_block', 'create:milling/compat/ae2/fluix_crystal',
        'create:milling/compat/ae2/ender_pearl', 'create:milling/compat/ae2/certus_quartz', 'create:crushing/raw_platinum_ore', 'create:crushing/raw_platinum_block',
        'create:crushing/raw_uranium_ore', 'create:crushing/raw_uranium_block', 'create:crafting/appliances/slime_ball', 'minecraft:fire_charge', 'gtceu:shapeless/dust_bronze',
        'gtceu:shapeless/dust_brass', 'create:mixing/brass_ingot', 'minecraft:ender_eye', 'create_new_age:shaped/carbon_brushes', 'create_new_age:shaped/basic_motor_extension',
        'create_new_age:advanced_motor_extension', 'create_new_age:shaped/redstone_magnet', 'ae2:transform/damaged_budding_quartz', 'ae2:transform/chipped_budding_quartz',
        'ae2:transform/flawed_budding_quartz', 'ae2:transform/fluix_crystals', 'ae2:transform/fluix_crystal', 'ae2:transform/certus_quartz_crystals',
        'ae2:network/crafting/molecular_assembler', 'ae2:network/blocks/pattern_providers_interface', 'ae2:network/crafting/cpu_crafting_unit',
        'ae2:network/blocks/energy_energy_acceptor', 'ae2:network/blocks/interfaces_interface', 'ae2:network/blocks/io_condenser', 'ae2:network/blocks/cell_workbench',
        'ae2:network/blocks/spatial_io_port', 'ae2:network/blocks/io_port', 'a2:network/cables/covered_fluix', 'ae2:network/parts/quartz_fiber_part', 'ae2:network/cables/glass_fluix',
        'createdieselgenerators:basin_fermenting/magma_cream', 'gtceu:research_station/1_x_gtceu_uv_energy_input_hatch', 'gtceu:research_station/1_x_gtceu_uv_energy_output_hatch',
        'toms_storage:adv_wireless_terminal', 'megacells:mega_crafting_unit', 'gtceu:shaped/resistor_wire', 'gtceu:shaped/resistor_wire_fine', 'gtceu:shaped/resistor_wire_fine_carbon',
        'gtceu:shaped/resistor_wire_carbon', 'gtceu:shaped/resistor_wire_charcoal'

    ];

    const toRemoveType = ['thermal:sawmill', 'thermal:pulverizer', 'thermal:insolator', 'thermal:centrifuge', 'thermal:crucible', 'thermal:chiller', 'thermal:refinery',
        'thermal:pyrolyzer', 'thermal:crystallizer', 'thermal:press', 'thermal:smelter', 'exnihilosequentia:precipitate', 'exnihilosequentia:compost', 'exnihilosequentia:solidifying',
        'exnihilosequentia:transition', 'expatternprovider:cutter', 'ae2:inscriber', 'ae2:charger'
    ];

    toRemoveOutput.forEach(element => {
        event.remove({ output: element});
    });

    toRemoveId.forEach(element => {
        event.remove({ id: element});
    });

    toRemoveType.forEach(element => {
        event.remove({ type: element});
    });

    event.remove({ input: 'minecraft:fire_charge'});

    event.remove({ type: 'exnihilosequentia:sifting', input: '#forge:gravel'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'exnihilosequentia:crushed_netherrack'});
    event.remove({ type: 'exnihilosequentia:sifting', input: '#minecraft:sand'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:sand'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'exnihilosequentia:dust'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:soul_sand'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:dirt'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'minecraft:mud'});
    event.remove({ type: 'exnihilosequentia:sifting', input: 'exnihilosequentia:crushed_end_stone'});
    event.remove({ output: /exnihilosequentia:.*doll/});
  
    event.remove({ input: 'minecraft:fire_charge'});
    event.remove({ input: 'thermal:earth_charge'});
    event.remove({ mod: 'mysticalagriculture'});
    event.remove({ mod: 'mysticalagradditions'});
    event.remove({ mod: 'mysticaladaptations'});
    event.remove({ mod: 'mobilebeacon'});
    event.remove({ mod: 'extendedcrafting'});
    event.remove({ mod: 'sgjourney'});
    event.remove({ mod: 'jetboots'});
    event.remove({ mod: 'ae2additions'});

    // removing by type doesn't work >:(
    event.remove({id: /.*expatternprovider.*cutter.*/});

    event.remove({ input: 'minecraft:netherite_scrap'});
    event.remove({ output: 'minecraft:netherite_scrap'});
    event.remove({ input: 'minecraft:ancient_debris'});
    event.remove({ output: 'minecraft:netherite_ingot'});
});