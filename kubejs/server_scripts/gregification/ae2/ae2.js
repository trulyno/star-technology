ServerEvents.recipes(event => {

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