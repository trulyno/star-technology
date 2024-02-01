
ServerEvents.recipes(event => {

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

    event.recipes.gtceu.mixer('charged_certus')
        .itemInputs('ae2:certus_quartz_crystal', 'minecraft:redstone')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.mixer('fluix_crystal')
        .itemInputs('ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz')
        .inputFluids('minecraft:water 250')
        .itemOutputs('2x ae2:fluix_crystal')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter('printed_calculation_circuit')
        .itemInputs('gtceu:certus_quartz_plate')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(300)
        .EUt(65);

     event.recipes.gtceu.alloy_smelter('printed_engineering_circuit')
        .itemInputs('gtceu:diamond_plate')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter('printed_logic_circuit')
        .itemInputs('#forge:plates/gold')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter('printed_silicon')
        .itemInputs('gtceu:silicon_plate')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter('calculation_circuit')
        .itemInputs('ae2:printed_calculation_processor', 'ae2:printed_silicon')
        .itemOutputs('ae2:calculation_processor')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter('engineering_circuit')
        .itemInputs('ae2:printed_engineering_processor', 'ae2:printed_silicon')
        .itemOutputs('ae2:engineering_processor')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.alloy_smelter('logic_circuit')
        .itemInputs('ae2:printed_logic_processor', 'ae2:printed_silicon')
        .itemOutputs('ae2:logic_processor')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.forming_press('press_calculation')
        .itemInputs('gtceu:stainless_steel_double_plate', 'ae2:certus_quartz_crystal')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.forming_press('press_engineering')
        .itemInputs('gtceu:stainless_steel_double_plate', 'minecraft:diamond')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.forming_press('press_logic')
        .itemInputs('gtceu:stainless_steel_double_plate', 'minecraft:gold_ingot')
        .itemOutputs('ae2:logic_processor_press')
        .duration(300)
        .EUt(65);

    event.recipes.gtceu.forming_press('silicon_logic')
        .itemInputs('gtceu:stainless_steel_double_plate', 'gtceu:silicon_dust')
        .itemOutputs('ae2:silicon_press')
        .duration(300)
        .EUt(65);

    event.shaped(Item.of('ae2:controller'), [
        'HFH',
        'FCF',
        'HFH'
    ], {
        H: 'gtceu:hv_machine_hull',
        F: 'ae2:fluix_crystal',
        C: 'ae2:engineering_processor'
    });

    event.replaceInput({output: 'ae2:cell_component_4k'}, 
        'ae2:calculation_processor',
        '#forge:circuits/lv'
    );

    event.replaceInput({output: 'ae2:cell_component_16k'}, 
        'ae2:calculation_processor',
        '#forge:circuits/mv'
    );

    event.replaceInput({output: 'ae2:cell_component_64k'}, 
        'ae2:calculation_processor',
        '#forge:circuits/hv'
    );

    event.replaceInput({output: 'ae2:cell_component_256k'}, 
        'ae2:calculation_processor',
        '#forge:circuits/ev'
    );

    event.replaceInput({output: 'ae2additions:cell_component_1024'}, 
        'ae2:engineering_processor',
        '#forge:circuits/iv'
    );

    event.replaceInput({output: 'ae2additions:cell_component_4096'}, 
        'ae2:engineering_processor',
        '#forge:circuits/luv'
    );

    event.replaceInput({output: 'ae2additions:cell_component_16384'}, 
        'ae2:engineering_processor',
        '#forge:circuits/zpm'
    );

    event.replaceInput({output: 'ae2additions:cell_component_65536'}, 
        'ae2:engineering_processor',
        '#forge:circuits/uv'
    );
})