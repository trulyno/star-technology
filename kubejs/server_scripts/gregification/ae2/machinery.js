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
        event.remove({output: `${output}`})
        event.recipes.gtceu.assembler(`${id}`)
            .itemInputs(input)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`${output}`)
            .duration(400)
            .EUt(eu);
    }

    const machine = (machine, frame, inputs) => {
        inputs.unshift(`gtceu:${frame}_frame`);
        assembler(`${machine}`, `ae2:${machine}`, inputs, 128);
    }

    machine('controller', 'fluix_steel', ['4x ae2:engineering_processor', '2x #gtceu:circuits/mv', '6x gtceu:certus_quartz_skystone_alloy_plate']);
    machine('drive', 'sky_steel', ['2x ae2:calculation_processor', 'gtceu:lv_super_chest', '6x gtceu:certus_quartz_skystone_alloy_plate']);
    machine('pattern_provider', 'steel', ['2x ae2:crafting_card', '2x minecraft:crafting_table', '6x gtceu:sky_steel_plate']);
    machine('interface', 'steel', ['2x gtceu:lv_conveyor_module', '2x gtceu:lv_electric_pump', '6x gtceu:blue_alloy_plate']);
    machine('dense_energy_cell', 'black_steel', ['8x ae2:energy_cell', '6x gtceu:double_fluix_steel_plate']);
    machine('molecular_assembler', 'steel', ['2x gtceu:lv_robot_arm', 'minecraft:crafting_table', '6x ae2:quartz_glass']);
    machine('crafting_unit', 'steel', ['4x ae2:calculation_processor', '6x gtceu:sky_steel_plate']);
    assembler('basic_card', 'ae2:basic_card', ['3x gtceu:certus_quartz_skystone_alloy_plate', '3x ae2:calculation_processor', 'gtceu:redstone_plate', 'gtceu:gold_skystone_alloy_plate'], 128);
    assembler('advanced_card', 'ae2:advanced_card', ['3x gtceu:certus_quartz_skystone_alloy_plate', '3x ae2:calculation_processor', 'gtceu:redstone_plate', 'gtceu:diamond_skystone_alloy_plate'], 512);
    
    ['interface', 'pattern_provider'].forEach(type => {
        assembler(`mega_${type}`, `megacells:mega_${type}`, [`ae2:${type}`, '4x ae2:calculation_processor', '#gtceu:circuits/hv', '6x gtceu:double_black_steel_plate'], 512);
    });

    const extended = (item, input) => {
        assembler(`extended_${item}`, `expatternprovider:ex_${item}`, [`ae2:${input}`, '4x ae2:engineering_processor', '#gtceu:circuits/ev', '6x gtceu:double_fluix_steel_plate'], 2048);
    }
    
    ['interface', 'pattern_provider', 'molecular_assembler', 'drive', 'io_port'].forEach(type => {
            extended(`${type}`, `${type}`);
    });
    
    ['import_bus', 'export_bus'].forEach(type => {
        extended(`${type}_part`, `${type}`);
    });
    
    const matrix = (type, frame, primary, secondary) => {
        assembler(`assembler_matrix_${type}`, `expatternprovider:assembler_matrix_${type}`, [`${frame}`, `16x ${primary}`, `8x ${secondary}`, '6x gtceu:double_ruthenium_plate'], 8192);
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

});