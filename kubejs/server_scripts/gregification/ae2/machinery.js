ServerEvents.recipes(event => {

    event.recipes.gtceu.wiremill('fluix_glass_cables')
        .itemInputs('ae2:quartz_fiber', 'gtceu:fluix_steel_foil')
        .itemOutputs('ae2:fluix_glass_cable')
        .duration(40)
        .EUt(16);

    event.recipes.gtceu.assembler('me_controller')
        .itemInputs('gtceu:fluix_steel_frame', '4x ae2:engineering_processor', '2x #gtceu:circuits/mv', '6x gtceu:certus_quartz_skystone_alloy_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:controller')
        .duration(400)
        .EUt(128);

    event.recipes.gtceu.assembler('me_drive')
        .itemInputs('gtceu:sky_steel_frame', '2x ae2:calculation_processor', 'gtceu:lv_super_chest', '6x gtceu:certus_quartz_skystone_alloy_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:drive')
        .duration(400)
        .EUt(128);

    event.recipes.gtceu.assembler('pattern_provider')
        .itemInputs('gtceu:steel_frame', '2x ae2:crafting_card', '2x minecraft:crafting_table', '6x gtceu:sky_steel_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:pattern_provider')
        .duration(400)
        .EUt(128);

    event.recipes.gtceu.assembler('interface')
        .itemInputs('gtceu:steel_frame', '2x gtceu:lv_conveyor_module', '2x gtceu:lv_electric_pump', '6x gtceu:blue_alloy_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:interface')
        .duration(400)
        .EUt(128);
    
    ['interface', 'pattern_provider'].forEach(type => {
        event.remove({output: `megacells:mega_${type}`})
        event.recipes.gtceu.assembler(`mega_${type}`)
            .itemInputs(`ae2:${type}`, '4x ae2:calculation_processor', '#gtceu:circuits/hv', '6x gtceu:double_black_steel_plate')
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`megacells:mega_${type}`)
            .duration(400)
            .EUt(512);
    });
    
    ['interface', 'pattern_provider', 'molecular_assembler', 'drive', 'io_port'].forEach(type => {
        event.remove({output: `expatternprovider:ex_${type}`})
        event.recipes.gtceu.assembler(`extended_${type}`)
            .itemInputs(`ae2:${type}`, '4x ae2:engineering_processor', '#gtceu:circuits/ev', '6x gtceu:double_fluix_steel_plate')
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`expatternprovider:ex_${type}`)
            .duration(400)
            .EUt(2048);
    });
    
    ['import_bus', 'export_bus'].forEach(type => {
        event.remove({output: `expatternprovider:ex_${type}_part`})
        event.recipes.gtceu.assembler(`extended_${type}`)
            .itemInputs(`ae2:${type}`, '4x ae2:engineering_processor', '#gtceu:circuits/ev', '6x gtceu:double_fluix_steel_plate')
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`expatternprovider:ex_${type}_part`)
            .duration(400)
            .EUt(2048);
    });
    
    [
        {type: 'frame', frame: 'gtceu:tungsten_steel_frame', primary: 'gtceu:sky_steel_rod', secondary: 'gtceu:polybenzimidazole_foil'},
        {type: 'wall', frame: 'gtceu:stainless_steel_frame', primary: 'gtceu:sky_steel_rod', secondary: 'gtceu:polybenzimidazole_foil'},
        {type: 'speed', frame: 'gtceu:hssg_frame', primary: 'ae2:calculation_processor', secondary: 'ae2:speed_card'},
        {type: 'pattern', frame: 'expatternprovider:ex_pattern_provider', primary: 'ae2:engineering_processor', secondary: '#gtceu:circuits/iv'},
        {type: 'crafter', frame: 'expatternprovider:ex_molecular_assembler', primary: 'ae2:logic_processor', secondary: 'gtceu:iv_robot_arm'},
    ].forEach(tier => {
        event.remove({output: `expatternprovider:assembler_matrix_${tier.type}`})
        event.recipes.gtceu.me_core_assembler(`assembler_matrix_${tier.type}`)
            .itemInputs(`${tier.frame}`, `16x ${tier.primary}`, `8x ${tier.secondary}`, '6x gtceu:double_ruthenium_plate')
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`expatternprovider:assembler_matrix_${tier.type}`)
            .duration(400)
            .EUt(8192);
    });

    event.recipes.gtceu.assembler('crafting_unit')
        .itemInputs('gtceu:steel_frame', '4x ae2:calculation_processor', '6x gtceu:sky_steel_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:crafting_unit')
        .duration(400)
        .EUt(128);

    ['1', '4', '16', '64', '256'].forEach(tier => {
        event.recipes.gtceu.canner(`${tier}_crafting_storage`)
            .itemInputs('ae2:crafting_unit', `ae2:cell_component_${tier}k`)
            .itemOutputs(`ae2:${tier}k_crafting_storage`)
            .duration(200)
            .EUt(128);
    });

    event.recipes.gtceu.canner('crafting_accelerator')
        .itemInputs('ae2:crafting_unit', 'ae2:engineering_processor')
        .itemOutputs('ae2:crafting_accelerator')
        .duration(200)
        .EUt(128);

    event.recipes.gtceu.canner('crafting_monitor')
        .itemInputs('ae2:crafting_unit', 'ae2:storage_monitor')
        .itemOutputs('ae2:crafting_monitor')
        .duration(200)
        .EUt(128);

});