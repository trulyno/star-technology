ServerEvents.recipes(event => {

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

});