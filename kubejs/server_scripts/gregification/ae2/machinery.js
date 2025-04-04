ServerEvents.recipes(event => {

    event.recipes.gtceu.wiremill('fluix_glass_cables')
        .itemInputs('ae2:quartz_fiber', 'gtceu:fluix_steel_foil')
        .itemOutputs('ae2:fluix_glass_cable')
        .duration(40)
        .EUt(16);
    
    event.shaped('ae2:energy_cell', [
        'ABA',
        'BCB',
        'ABA'],{
        A: 'gtceu:double_silicon_plate',
        B: 'gtceu:diamond_skystone_alloy_plate',
        C: '#gtceu:batteries/lv'
    });

    const assembler = (id, output, input, eu) => {
        event.recipes.gtceu.assembler(`${id}`)
            .itemInputs(input)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`${output}`)
            .duration(400)
            .EUt(eu);
    }

    const assembler_rem = (id, output, input, eu) => {
        event.remove({output: `${output}`})
        assembler(id, output, input, eu)
    }

    const machine = (machine, frame, inputs) => {
        inputs.unshift(`gtceu:${frame}_frame`);
        assembler_rem(`${machine}`, `ae2:${machine}`, inputs, 128);
    }

    machine('controller', 'fluix_steel', ['4x ae2:engineering_processor', '2x #gtceu:circuits/mv', '6x gtceu:certus_quartz_skystone_alloy_plate']);
    machine('drive', 'sky_steel', ['2x ae2:calculation_processor', 'gtceu:lv_super_chest', '6x gtceu:certus_quartz_skystone_alloy_plate']);
    machine('pattern_provider', 'steel', ['2x ae2:crafting_card', '2x minecraft:crafting_table', '6x gtceu:sky_steel_plate']);
    machine('interface', 'steel', ['2x gtceu:lv_conveyor_module', '2x gtceu:lv_electric_pump', '6x gtceu:blue_alloy_plate']);
    machine('dense_energy_cell', 'black_steel', ['8x ae2:energy_cell', '6x gtceu:double_fluix_steel_plate']);
    machine('molecular_assembler', 'steel', ['2x gtceu:lv_robot_arm', 'minecraft:crafting_table', '6x ae2:quartz_glass']);
    machine('crafting_unit', 'steel', ['4x ae2:calculation_processor', '6x gtceu:sky_steel_plate']);
    machine('chest', 'steel', ['gtceu:lv_super_chest', 'ae2:terminal', '6x gtceu:certus_quartz_skystone_alloy_plate']);
    machine('energy_acceptor', 'sky_steel', ['gtceu:mv_4a_energy_converter', '6x gtceu:certus_quartz_skystone_alloy_plate']);
    machine('io_port', 'steel', ['ae2:drive', '6x gtceu:certus_quartz_skystone_alloy_plate']);
    machine('condenser', 'fluix_steel', ['2x gtceu:ev_field_generator', 'gtceu:quantum_star', '6x gtceu:double_ruthenium_plate']);
    machine('cell_workbench', 'fluix_steel', ['ae2:io_port', 'ae2:basic_card', '6x gtceu:double_red_steel_plate']);
    assembler_rem('import_bus', 'ae2:import_bus', ['gtceu:lv_input_bus', 'ae2:fluix_glass_cable', 'gtceu:lv_input_hatch'], 128);
    assembler_rem('export_bus', 'ae2:export_bus', ['gtceu:lv_output_bus', 'ae2:fluix_glass_cable', 'gtceu:lv_output_hatch'], 128);
    assembler_rem('requester', 'merequester:requester', ['gtceu:red_steel_frame', '5x ae2:crafting_card', '#gtceu:circuits/ev', '5x gtceu:double_kanthal_plate'], 512);
    assembler_rem('oversize_interface', 'expatternprovider:oversize_interface', ['expatternprovider:ex_interface', '4x ae2:capacity_card', '6x gtceu:tantalum_carbide_plate'], 2048);

    assembler_rem('basic_card', 'ae2:basic_card', ['3x gtceu:certus_quartz_skystone_alloy_plate', '3x ae2:calculation_processor', 'gtceu:redstone_plate', 'gtceu:gold_skystone_alloy_plate'], 128);
    assembler_rem('advanced_card', 'ae2:advanced_card', ['3x gtceu:certus_quartz_skystone_alloy_plate', '3x ae2:calculation_processor', 'gtceu:redstone_plate', 'gtceu:diamond_skystone_alloy_plate'], 512);
    
    ['interface', 'pattern_provider'].forEach(type => {
        assembler_rem(`mega_${type}`, `megacells:mega_${type}`, [`ae2:${type}`, '4x ae2:calculation_processor', '#gtceu:circuits/hv', '6x gtceu:double_black_steel_plate'], 512);
    });

    const extended = (item, input) => {
        assembler_rem(`extended_${item}`, `expatternprovider:ex_${item}`, [`ae2:${input}`, '4x ae2:engineering_processor', '#gtceu:circuits/ev', '6x gtceu:double_fluix_steel_plate'], 2048);
    }
    
    ['interface', 'pattern_provider', 'molecular_assembler', 'drive', 'io_port'].forEach(type => {
            extended(`${type}`, `${type}`);
    });
    
    ['import_bus', 'export_bus'].forEach(type => {
        extended(`${type}_part`, `${type}`);
    });
    
    const matrix = (type, frame, primary, secondary) => {
        assembler_rem(`assembler_matrix_${type}`, `expatternprovider:assembler_matrix_${type}`, [`${frame}`, `16x ${primary}`, `8x ${secondary}`, '6x gtceu:double_ruthenium_plate'], 8192);
    }
    matrix('frame', 'gtceu:tungsten_steel_frame', 'gtceu:sky_steel_rod', 'gtceu:polybenzimidazole_foil');
    matrix('wall', 'gtceu:stainless_steel_frame', 'gtceu:sky_steel_rod', 'gtceu:polybenzimidazole_foil');
    matrix('speed', 'gtceu:hssg_frame', 'ae2:calculation_processor', 'ae2:speed_card');
    matrix('pattern', 'expatternprovider:ex_pattern_provider', 'ae2:engineering_processor', '#gtceu:circuits/iv');
    matrix('crafter', 'expatternprovider:ex_molecular_assembler', 'ae2:logic_processor', 'gtceu:iv_robot_arm');

    ['1', '4', '16', '64', '256'].forEach(tier => {
        event.remove({output: `ae2:${tier}k_crafting_storage`})
        event.recipes.gtceu.canner(`${tier}_crafting_storage`)
            .itemInputs('ae2:crafting_unit', `ae2:cell_component_${tier}k`)
            .itemOutputs(`ae2:${tier}k_crafting_storage`)
            .duration(200)
            .EUt(128);
    });

    const canner = (output, catalyst) => {
        event.remove({output: `ae2:crafting_${output}`})
        event.recipes.gtceu.canner(`crafting_${output}`)
            .itemInputs('ae2:crafting_unit', `ae2:${catalyst}`)
            .itemOutputs(`ae2:crafting_${output}`)
            .duration(200)
            .EUt(128);
    }
    canner('accelerator', 'engineering_processor');
    canner('monitor', 'storage_monitor');

    ['import_bus', 'export_bus', 'import_hatch', 'export_hatch'].forEach(type => {
        event.remove({id: `gtceu:assembler/me_${type}`})
    });
    ['input_bus', 'output_bus', 'input_hatch', 'output_hatch'].forEach(type => {
        assembler(`me_${type}`, `gtceu:me_${type}`, [`gtceu:ev_${type}`, '#gtceu:circuits/ev', 'ae2:fluix_smart_cable'], 8192);
    });

    assembler_rem('terminal', 'ae2:terminal', ['gtceu:computer_monitor_cover', 'ae2:formation_core', 'ae2:annihilation_core', '#gtceu:circuits/mv'], 128);
    assembler_rem('pattern_access_terminal', 'ae2:pattern_access_terminal', ['gtceu:computer_monitor_cover', 'ae2:wireless_receiver', 'gtceu:lv_emitter', '#gtceu:circuits/mv'], 128);
    assembler_rem('requester_terminal', 'merequester:requester_terminal', ['gtceu:computer_monitor_cover', 'merequester:requester', 'ae2:crafting_card', '#gtceu:circuits/mv'], 128);
    assembler_rem('crafting_terminal', 'ae2:crafting_terminal', ['ae2:terminal', 'minecraft:crafting_table', 'ae2:crafting_card', '#gtceu:circuits/mv'], 128);
    assembler_rem('pattern_encoding_terminal', 'ae2:pattern_encoding_terminal', ['ae2:terminal', 'expatternprovider:pattern_modifier', 'ae2:crafting_card', 'ae2:cell_component_1k'], 128);
    assembler_rem('extended_pattern_access_terminal', 'expatternprovider:ex_pattern_access_part', ['ae2:pattern_access_terminal', 'ae2:wireless_receiver', 'gtceu:lv_emitter', 'ae2:cell_component_1k'], 128);

    const wireless = (wireless, base) => {
        assembler_rem(wireless.split(':')[1], `${wireless}`, [`${base}`, 'ae2:wireless_receiver', 'ae2:dense_energy_cell', 'gtceu:circuits/hv'], 512)
    }

    event.shaped(Item.of('ae2:spatial_io_port'), [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'ae2:quartz_glass',
        B: 'ae2:fluix_glass_cable',
        C: 'ae2:io_port',
        D: 'gtceu:sky_steel_plate',
        E: 'ae2:engineering_processor'
    });
    
    event.shaped('ae2:quantum_link', [
        'ABA',
        'BCB',
        'ABA'],{
        A: 'gtceu:double_tungsten_plate',
        B: 'gtceu:tungsten_rod',
        C: 'thermal:enderium_glass'
    });

    assembler_rem('quantum_ring', 'ae2:quantum_ring', ['gtceu:tungsten_carbide_frame', 'gtceu:ev_field_generator', 'gtceu:ev_emitter', 'gtceu:quantum_star', '6x gtceu:double_fluix_steel_plate'], 2048);

    assembler_rem('wireless_connector', 'expatternprovider:wireless_connect', ['gtceu:steel_frame', '2x gtceu:hv_emitter', '#gtceu:circuits/ev', '6x gtceu:fluix_steel_foil', '6x gtceu:neodymium_plate'], 512);
    assembler_rem('p2p_tunnel', 'ae2:me_p2p_tunnel', ['gtceu:double_black_steel_plate', '2x gtceu:hv_emitter', '#gtceu:circuits/ev', '6x gtceu:fluix_steel_foil', '6x gtceu:certus_quartz_plate'], 512);

});