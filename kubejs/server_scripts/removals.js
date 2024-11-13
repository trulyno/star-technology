
ServerEvents.recipes(event => {
    const toRemoveOutput = ['thermal:machine_furnace', 'thermal:machine_sawmill',
        'thermal:machine_pulverizer', 'thermal:machine_insolator', 'thermal:machine_centrifuge', 'thermal:machine_crucible', 'thermal:machine_chiller', 'thermal:machine_refinery',
        'thermal:machine_pyrolyzer', 'thermal:machine_bottler', 'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:machine_crafter', 'thermal:machine_smelter', 'thermal:machine_press',
        'exnihilosequentia:flint_mesh', 'exnihilosequentia:iron_mesh', 'exnihilosequentia:diamond_mesh', 'exnihilosequentia:emerald_mesh', 'exnihilosequentia:netherite_mesh', 'exmachinis:gold_upgrade',
        'exmachinis:diamond_upgrade', 'exmachinis:netherite_upgrade', 'exmachinis:flux_sieve', 'exmachinis:flux_hammer', 'exmachinis:flux_compactor',
        'thermal:obsidian_glass', 'thermal:signalum_glass', 'thermal:lumium_glass', 'thermal:enderium_glass', 'thermal_extra:soul_infused_glass',
        'thermal_extra:shellite_glass', 'thermal_extra:twinite_glass', 'thermal_extra:dragonsteel_glass', 'thermal:machine_frame', 'thermal:fluid_cell_frame',
        'thermal:energy_cell_frame', 'thermal:earth_charge', 'thermal:ice_charge', 'thermal:lightning_charge', 'thermal:fluid_cell', 'thermal:energy_cell', 'ae2:inscriber',
        'ae2:vibration_chamber', 'ae2:silicon', 'ae2:controller', 'fluxnetworks:flux_dust', 'exnihilosequentia:end_cake',
        'systeams:steam_dynamo', 'systeams:stirling_boiler', 'systeams:lapidary_boiler', 'systeams:magmatic_boiler', 'systeams:numismatic_boiler',
        'systeams:compression_boiler', 'systeams:disenchantment_boiler', 'systeams:gourmand_boiler', 'systeams:boiler_pipe', 'thermal:energy_duct',
        'itemcollectors:basic_collector', 'itemcollectors:advanced_collector', 'create_new_age:heat_pipe', 'create_new_age:heat_pump', 'create_new_age:heater',
        'create_new_age:stirling_engine', 'create_new_age:reactor_casing', 'create_new_age:reactor_rod', 'create_new_age:reactor_glass', 'create_new_age:reactor_fuel_acceptor',
        'create_new_age:reactor_heat_vent', 'create_new_age:basic_solar_heating_plate', 'create_new_age:advanced_solar_heating_plate', 'create_new_age:nuclear_fuel', 
        'create_new_age:blank_circuit', 'create_new_age:copper_circuit', 'create_new_age:thorium', 'create_new_age:radioactive_thorium', 'exnihilosequentia:blaze_doll', 
        'exnihilosequentia:enderman_doll', 'exnihilosequentia:shulker_doll', 'exnihilosequentia:guardian_doll', 'exnihilosequentia:bee_doll', 'exnihilosequentia:porcelain_doll',
        'createdieselgenerators:kelp_handle', 'createdieselgenerators:distillation_controller', 'createdieselgenerators:', 'createdieselgenerators:lighter',
        'createdieselgenerators:chemical_sprayer', 'createdieselgenerators:oil_detector', 'createdieselgenerators:pumpjack_bearing', 'createdieselgenerators:pumpjack_head',
        'createdieselgenerators:pumpjack_crank', 'createdieselgenerators:canister', 'createdieselgenerators:oil_barrel', 'createdieselgenerators:asphalt', 'createdieselgenerators:asphalt_slab', 'createdieselgenerators:asphalt_stairs',
        'createdieselgenerators:diesel', 'createdieselgenerators:gasoline',  'ae2:charger', 'ae2:drive', 'ae2:chest', 'createdieselgenerators:pumpjack_hole', 'expatternprovider:ex_inscriber', 
        'expatternprovider:ex_charger', 'expatternprovider:crystal_fixer', 'expatternprovider:canner', 'exmachinis:item_buffer', 'ae2:crystal_resonance_generator', 'ae2:vibration_chamber',
        'exnihilosequentia:mechanical_sieve', 'exnihilosequentia:mechanical_hammer', 'systeams:frost_boiler', 'thermalendergy:melodium_ingot', 'thermalendergy:prismalium_ingot', 'thermalendergy:stellarium_ingot',
        'thermalendergy:melodium_block', 'thermalendergy:prismalium_block', 'thermalendergy:stellarium_block', 'thermalendergy:melodium_nugget', 'thermalendergy:prismalium_nugget','thermalendergy:stellarium_nugget',
        'exnihilosequentia:golden_mesh', 'enderio:energy_conduit'
    ];
    const toRemoveId = ['thermal:slime_mushroom_spores', 'thermal_extra:sticky_ball_to_paper', 'farmersdelight:paper_from_tree_bark',
        'create:pressing/sugar_cane', 'exnihilo:fluid_item/ens_slime', 'gtceu:shaped/good_circuit_board',
        'thermal:rubber_from_vine', 'thermal:rubber_from_dandelion', 'thermal:smelting/cured_rubber_from_smelting',
        'thermal:rf_coil', 'create:haunting/crimson_fungus', 'create:haunting/warped_fungus', 'create:compat/ae2/milling/sky_stone_block',
        'create:compat/ae2/milling/fluix_crystal', 'create:compat/ae2/milling/ender_pearl', 'create:compat/ae2/milling/certus_quartz',
        'create:crushing/raw_platinum_ore', 'create:crushing/raw_platinum_block', 'create:crushing/raw_uranium_ore',
        'create:crushing/raw_uranium_block', 'create:crafting/appliances/slime_ball', 'minecraft:fire_charge',
        'exnihilosequentia:fluid_item/ens_end_stone', 'exnihilosequentia:fluid_item/ens_netherrack', 'gtceu:shapeless/dust_bronze',
        'gtceu:shapeless/dust_brass', 'create:mixing/brass_ingot', 'minecraft:ender_eye', 'create_new_age:shaped/carbon_brushes',
        'create_new_age:shaped/basic_motor_extension', 'create_new_age:advanced_motor_extension', 'create_new_age:shaped/redstone_magnet',
        'ae2:transform/damaged_budding_quartz', 'ae2:transform/chipped_budding_quartz', 'ae2:transform/flawed_budding_quartz',
        'ae2:network/crafting/molecular_assembler', 'ae2:network/blocks/pattern_providers_interface', 'ae2:network/crafting/cpu_crafting_unit',
        'ae2:network/blocks/energy_energy_acceptor', 'ae2:network/blocks/interfaces_interface', 'ae2:network/blocks/io_condenser',
        'ae2:network/blocks/cell_workbench', 'ae2:network/blocks/spatial_io_port', 'ae2:network/blocks/io_port', 'a2:network/cables/covered_fluix', 'ae2:network/parts/quartz_fiber_part',
        'ae2:network/cables/glass_fluix', 'exnihilosequentia:barrel_fluid_mixing/blackstone', 'exnihilosequentia:barrel_fluid_mixing/netherrack'
    ];

    const toRemoveType = ['thermal:sawmill', 'thermal:pulverizer', 'thermal:insolator', 'thermal:centrifuge', 'thermal:crucible', 'thermal:chiller', 'thermal:refinery', 'thermal:pyrolyzer',
        'thermal:crystallizer', 'thermal:press', 'thermal:smelter'
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
    event.remove({ type: 'exnihilosequentia:sifting', input: 'exnihilosequentia:crushed_end_stone'});

    event.remove({ input: 'minecraft:fire_charge'});
    event.remove({ input: 'thermal:earth_charge'});
    event.remove({ mod: 'mysticalagriculture'});
    event.remove({ mod: 'mysticalagradditions'});
    event.remove({ mod: 'mysticaladaptations'});
    event.remove({ mod: 'mobilebeacon'});
    event.remove({ mod: 'extendedcrafting'});
    event.remove({ mod: 'sgjourney'});
    event.remove({ mod: 'jetboots'});

    event.remove({ input: 'mmt:scrap_clump'});
    event.remove({ input: 'minecraft:netherite_scrap'});
    event.remove({ output: 'minecraft:netherite_scrap'});
    event.remove({ input: 'minecraft:ancient_debris'});
    event.remove({ output: 'minecraft:netherite_ingot'});
});