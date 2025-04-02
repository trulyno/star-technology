ServerEvents.recipes(event => {

    //greg compat
    event.recipes.gtceu.wiremill('quartz_fiber_cables')
        .itemInputs('minecraft:quartz')
        .itemOutputs('3x ae2:quartz_fiber')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.wiremill('fluix_glass_cables')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('4x ae2:fluix_glass_cable')
        .duration(80)
        .EUt(16);

    event.recipes.gtceu.macerator('fluix_dust')
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

    event.recipes.gtceu.polarizer('charged_certus')
        .itemInputs('ae2:certus_quartz_crystal')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(200)
        .EUt(10);

    event.recipes.gtceu.mixer('fluix_crystal')
        .itemInputs('ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz')
        .inputFluids('minecraft:water 250')
        .itemOutputs('2x ae2:fluix_crystal')
        .duration(200)
        .EUt(65);

    //new
    event.recipes.gtceu.extractor('skystone')
        .itemInputs('ae2:sky_dust')
        .outputFluids('gtceu:skystone 144')
        .duration(200)
        .EUt(128);

    [
        {chip: 'silicon', voltage: 'mv', n: 2},
        {chip: 'phosphorus', voltage: 'hv', n: 4},
        {chip: 'naquadah', voltage: 'ev', n: 8},
        {chip: 'neutronium', voltage: 'iv', n: 16}
    ].forEach(tier => {
        event.recipes.gtceu.cutter(`${tier.chip}_chip`)
            .itemInputs(`gtceu:${tier.chip}_wafer`)
            .itemOutputs(`8x kubejs:${tier.chip}_chip`)
            .duration(900)
            .EUt(global.va[tier.voltage]);

        ['logic', 'engineering', 'calculation'].forEach(type => {
            event.recipes.gtceu.me_circuit_assembler(`${type}_processor_${tier.chip}`)
                .itemInputs(`kubejs:${tier.chip}_chip`, `ae2:printed_${type}_processor`)
                .inputFluids('gtceu:skystone 144')
                .itemOutputs(`${tier.n}x ae2:${type}_processor`)
                .duration(400)
                .EUt(global.va['mv']);
        });
    
    });
    [
        {circuit: 'logic', material: 'gold'},
        {circuit: 'engineering', material: 'diamond'},
        {circuit: 'calculation', material: 'certus_quartz'}
    ].forEach(type => {
        event.recipes.gtceu.mixer(`${type.material}_skystone_alloy`)
            .itemInputs(`gtceu:${type.material}_dust`)
            .inputFluids('gtceu:skystone 72')
            .itemOutputs(`gtceu:${type.material}_skystone_alloy_dust`)
            .duration(400)
            .EUt(global.va['mv']);

        event.recipes.gtceu.compressor(`${type.material}_skystone_plate`)
            .itemInputs(`gtceu:${type.material}_skystone_alloy_dust`)
            .itemOutputs(`gtceu:${type.material}_skystone_alloy_plate`)
            .duration(200)
            .EUt(global.va['mv']);

        event.recipes.gtceu.forming_press(`printed_${type.circuit}_processor`)
            .itemInputs(`gtceu:${type.material}_skystone_alloy_plate`)
            .inputFluids('gtceu:skystone 144')
            .notConsumable(`ae2:${type.circuit}_processor_press`)
            .itemOutputs(`ae2:printed_${type.circuit}_processor`)
            .duration(400)
            .EUt(global.va['mv']);
    });

    //old
    //gregify recipes
    //cells
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

    event.recipes.gtceu.forming_press('press_calculation')
        .itemInputs('gtceu:double_star_steel_plate', 'ae2:certus_quartz_crystal')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(600)
        .EUt(65);

    event.recipes.gtceu.forming_press('press_engineering')
        .itemInputs('gtceu:double_star_steel_plate', 'minecraft:diamond')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(600)
        .EUt(65);

    event.recipes.gtceu.forming_press('press_logic')
        .itemInputs('gtceu:double_star_steel_plate', 'minecraft:gold_ingot')
        .itemOutputs('ae2:logic_processor_press')
        .duration(600)
        .EUt(65);

    event.recipes.gtceu.forming_press('silicon_logic')
        .itemInputs('gtceu:double_star_steel_plate', 'gtceu:silicon_dust')
        .itemOutputs('ae2:silicon_press')
        .duration(600)
        .EUt(65);

    //machines
    event.shaped(Item.of('ae2:controller'), [
        'HFH',
        'FCF',
        'HFH'
    ], {
        C: 'gtceu:star_steel_frame',
        F: 'ae2:fluix_crystal',
        H: 'ae2:engineering_processor'
    });

    event.recipes.gtceu.alloy_smelter('star_steel')
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
        });

    event.shaped(Item.of('ae2:pattern_provider'), [
            'HFH',
            'J B',
            'HFH'
        ], {
            F: 'minecraft:crafting_table',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        });

    event.shaped(Item.of('ae2:crafting_unit'), [
            'HFH',
            'BCB',
            'HFH'
        ], {
            C: 'ae2:logic_processor',
            F: 'ae2:calculation_processor',
            H: 'gtceu:star_steel_plate',
            B: 'ae2:fluix_glass_cable'
        });

    event.shaped(Item.of('ae2:energy_acceptor'), [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: '#forge:ingots/copper',
            F: 'ae2:quartz_glass',
            H: 'gtceu:star_steel_plate',
        });

    event.shaped(Item.of('ae2:interface'), [
            'HFH',
            'J B',
            'HFH'
        ], {
            F: '#forge:glass',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        });

    event.shaped(Item.of('ae2:drive'), [
            'HFH',
            'B B',
            'HFH'
        ], {
            F: 'ae2:engineering_processor',
            H: 'gtceu:star_steel_plate',
            B: 'ae2:fluix_glass_cable'
        });

    event.shaped(Item.of('ae2:condenser'), [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: 'ae2:fluix_dust',
            F: '#forge:glass',
            H: 'gtceu:star_steel_plate',
        });

    event.shaped(Item.of('ae2:cell_workbench'), [
            'ABA',
            'CEC',
            'CCC'
        ], {
            A: '#minecraft:wool',
            B: 'ae2:calculation_processor',
            C: 'gtceu:star_steel_plate',
            E: '#forge:chests/wooden'
        });

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
        });

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
        });

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
        });

    //MEGA cells
    event.replaceInput({input: 'megacells:accumulation_processor'}, 
        'megacells:accumulation_processor',
        '#gtceu:circuits/iv'
    );

    event.replaceInput({input: 'megacells:sky_steel_ingot'}, 
        'megacells:sky_steel_ingot',
        'minecraft:netherite_ingot'
    );

})