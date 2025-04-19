ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.macerator(id('fluix_dust'))
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(88)
        .EUt(2);

    event.replaceOutput({output: '#forge:gems/certus_quartz'},
        '#forge:gems/certus_quartz',
        'ae2:certus_quartz_crystal'
    );

    event.replaceInput({input: '#forge:gems/certus_quartz'},
        '#forge:gems/certus_quartz',
        'ae2:certus_quartz_crystal'
    );

    event.recipes.gtceu.polarizer(id('charged_certus'))
        .itemInputs('ae2:certus_quartz_crystal')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(10);

    event.recipes.gtceu.mixer(id('fluix_crystal'))
        .itemInputs('ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz')
        .inputFluids('minecraft:water 250')
        .itemOutputs('2x ae2:fluix_crystal')
        .duration(200)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter(id('printed_calculation_circuit'))
        .itemInputs('gtceu:certus_quartz_plate')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(200)
        .EUt(65);

     event.recipes.gtceu.alloy_smelter(id('printed_engineering_circuit'))
        .itemInputs('gtceu:diamond_plate')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(200)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter(id('printed_logic_circuit'))
        .itemInputs('#forge:plates/gold')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(200)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter(id('printed_silicon'))
        .itemInputs('gtceu:silicon_plate')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(200)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter(id('calculation_circuit'))
        .itemInputs('ae2:printed_calculation_processor', 'ae2:printed_silicon')
        .itemOutputs('ae2:calculation_processor')
        .duration(200)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter(id('engineering_circuit'))
        .itemInputs('ae2:printed_engineering_processor', 'ae2:printed_silicon')
        .itemOutputs('ae2:engineering_processor')
        .duration(200)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter(id('logic_circuit'))
        .itemInputs('ae2:printed_logic_processor', 'ae2:printed_silicon')
        .itemOutputs('ae2:logic_processor')
        .duration(200)
        .EUt(65);

    event.recipes.gtceu.forming_press(id('press_calculation'))
        .itemInputs('gtceu:double_star_steel_plate', 'ae2:certus_quartz_crystal')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(600)
        .EUt(65);

    event.recipes.gtceu.forming_press(id('press_engineering'))
        .itemInputs('gtceu:double_star_steel_plate', 'minecraft:diamond')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(600)
        .EUt(65);

    event.recipes.gtceu.forming_press(id('press_logic'))
        .itemInputs('gtceu:double_star_steel_plate', 'minecraft:gold_ingot')
        .itemOutputs('ae2:logic_processor_press')
        .duration(600)
        .EUt(65);

    event.recipes.gtceu.forming_press(id('silicon_logic'))
        .itemInputs('gtceu:double_star_steel_plate', 'gtceu:silicon_dust')
        .itemOutputs('ae2:silicon_press')
        .duration(600)
        .EUt(65);

    event.shaped(Item.of('ae2:controller'), [
        'HFH',
        'FCF',
        'HFH'
    ], {
        C: 'gtceu:star_steel_frame',
        F: 'ae2:fluix_crystal',
        H: 'ae2:engineering_processor'
    }).id('start:shaped/me_controller');

    event.replaceInput({output: 'ae2:cell_component_4k'}, 
        'ae2:calculation_processor',
        '#gtceu:circuits/lv'
    );

    event.replaceInput({output: 'ae2:cell_component_16k'}, 
        'ae2:calculation_processor',
        '#gtceu:circuits/mv'
    );

    event.replaceInput({output: 'ae2:cell_component_64k'}, 
        'ae2:calculation_processor',
        '#gtceu:circuits/hv'
    );

    event.replaceInput({output: 'ae2:cell_component_256k'}, 
        'ae2:calculation_processor',
        '#gtceu:circuits/ev'
    );

    event.replaceInput({output: 'megacells:cell_component_1m'}, 
        'megacells:accumulation_processor',
        '#gtceu:circuits/iv'
    );

    event.replaceInput({output: 'megacells:cell_component_4m'}, 
        'megacells:accumulation_processor',
        '#gtceu:circuits/luv'
    );

    event.replaceInput({output: 'megacells:cell_component_16m'}, 
        'megacells:accumulation_processor',
        '#gtceu:circuits/zpm'
    );

    event.replaceInput({output: 'megacells:cell_component_64m'}, 
        'megacells:accumulation_processor',
        '#gtceu:circuits/uv'
    );

    event.replaceInput({output: 'megacells:cell_component_256m'}, 
        'megacells:accumulation_processor',
        '#gtceu:circuits/uhv'
    );

    event.recipes.gtceu.wiremill(id('quartz_fiber_cables'))
        .itemInputs('minecraft:quartz')
        .itemOutputs('3x ae2:quartz_fiber')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.wiremill(id('fluix_glass_cables'))
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('4x ae2:fluix_glass_cable')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.alloy_smelter(id('star_steel'))
        .itemInputs('ae2:sky_dust', '2x gtceu:steel_ingot')
        .itemOutputs('3x gtceu:star_steel_ingot')
        .duration(160)
        .EUt(56);

    event.shaped(Item.of('ae2:molecular_assembler'), [
            'HFH',
            'JCB',
            'HFH'
        ], {
            C: 'minecraft:crafting_table',
            F: 'ae2:quartz_glass',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        }).id('start:shaped/molecular_assembler');

    event.shaped(Item.of('ae2:pattern_provider'), [
            'HFH',
            'J B',
            'HFH'
        ], {
            F: 'minecraft:crafting_table',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        }).id('start:shaped/pattern_provider');

    event.shaped(Item.of('ae2:crafting_unit'), [
            'HFH',
            'BCB',
            'HFH'
        ], {
            C: 'ae2:logic_processor',
            F: 'ae2:calculation_processor',
            H: 'gtceu:star_steel_plate',
            B: 'ae2:fluix_glass_cable'
        }).id('start:shaped/crafting_unit');

    event.shaped(Item.of('ae2:energy_acceptor'), [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: '#forge:ingots/copper',
            F: 'ae2:quartz_glass',
            H: 'gtceu:star_steel_plate',
        }).id('start:shaped/energy_acceptor');

    event.shaped(Item.of('ae2:interface'), [
            'HFH',
            'J B',
            'HFH'
        ], {
            F: '#forge:glass',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        }).id('start:shaped/me_interface');

    event.shaped(Item.of('ae2:drive'), [
            'HFH',
            'B B',
            'HFH'
        ], {
            F: 'ae2:engineering_processor',
            H: 'gtceu:star_steel_plate',
            B: 'ae2:fluix_glass_cable'
        }).id('start:shaped/me_drive');

    event.shaped(Item.of('ae2:condenser'), [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: 'ae2:fluix_dust',
            F: '#forge:glass',
            H: 'gtceu:star_steel_plate',
        }).id('start:shaped/me_condenser');

    event.shaped(Item.of('ae2:cell_workbench'), [
            'ABA',
            'CEC',
            'CCC'
        ], {
            A: '#minecraft:wool',
            B: 'ae2:calculation_processor',
            C: 'gtceu:star_steel_plate',
            E: '#forge:chests/wooden'
        }).id('start:shaped/cell_workbench');

    event.shaped(Item.of('ae2:spatial_io_port'), [
            'AAA',
            'BCB',
            'DED'
        ], {
            A: '#forge:glass',
            B: 'ae2:fluix_glass_cable',
            C: 'ae2:io_port',
            D: 'gtceu:star_steel_plate',
            E: 'ae2:engineering_processor'
        }).id('start:shaped/spatial_io_port');

    event.shaped(Item.of('ae2:io_port'), [
            'AAA',
            'BCB',
            'DED'
        ], {
            A: '#forge:glass',
            B: 'ae2:drive',
            C: 'ae2:fluix_glass_cable',
            D: 'gtceu:star_steel_plate',
            E: 'ae2:engineering_processor'
        }).id('start:shaped/io_port');

    event.shaped(Item.of('ae2:chest'), [
            'ABA',
            'C C',
            'DED'
        ], {
            A: '#forge:glass',
            B: 'ae2:terminal',
            C: 'ae2:fluix_glass_cable',
            D: 'gtceu:star_steel_plate',
            E: '#forge:ingots/copper'
        }).id('start:shaped/me_chest');

    //MEGA cells
    event.replaceInput({input: 'megacells:accumulation_processor'}, 
        'megacells:accumulation_processor',
        '#gtceu:circuits/iv'
    );

    event.remove({ output: /megacells:sky_steel.*/});
    event.replaceInput({input: 'megacells:sky_steel_ingot'}, 
        'megacells:sky_steel_ingot',
        'minecraft:netherite_ingot'
    );

})