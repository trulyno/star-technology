ServerEvents.recipes(event => {
    
    event.remove({output: 'ae2:cell_component_1k'})
    event.recipes.gtceu.me_core_assembler('cell_component_1k')
        .itemInputs('3x ae2:logic_processor', '#gtceu:circuits/ulv', '16x gtceu:fine_red_alloy_wire')
        .inputFluids('gtceu:sky_steel 144')
        .itemOutputs('ae2:cell_component_1k')
        .duration(400)
        .EUt(global.v['ulv']);

    const storage_base = (higher, lower, voltage, wire) => {
        event.remove({output: higher})
        event.recipes.gtceu.me_core_assembler(higher.split(':')[1])
            .itemInputs(`3x ${lower}`, `#gtceu:circuits/${voltage}`, `16x gtceu:fine_${wire}_wire`)
            .inputFluids('gtceu:sky_steel 144')
            .itemOutputs(higher)
            .duration(400)
            .EUt(global.v[`${voltage}`]);
    }

    storage_base('ae2:cell_component_4k', 'ae2:cell_component_1k', 'lv', 'tin');
    storage_base('ae2:cell_component_16k', 'ae2:cell_component_4k', 'mv', 'copper');
    storage_base('ae2:cell_component_64k', 'ae2:cell_component_16k', 'hv', 'gold');
    storage_base('ae2:cell_component_256k', 'ae2:cell_component_64k', 'ev', 'aluminium');
    storage_base('megacells:cell_component_1m', 'ae2:cell_component_256k', 'iv', 'platinum');
    storage_base('megacells:cell_component_4m', 'megacells:cell_component_1m', 'luv', 'niobium_titanium');
    storage_base('megacells:cell_component_16m', 'megacells:cell_component_4m', 'zpm', 'vanadium_gallium');
    storage_base('megacells:cell_component_64m', 'megacells:cell_component_16m', 'uv', 'yttrium_barium_cuprate');
    storage_base('megacells:cell_component_256m', 'megacells:cell_component_64m', 'uhv', 'europium');

    const spatial = (tier, storage, voltage) => {
        event.remove({output: `ae2:spatial_cell_component_${tier}`})
        event.recipes.gtceu.me_core_assembler(`spatial_cell_component_${tier}`)
            .itemInputs(`ae2:cell_component_${storage}k`, `gtceu:${voltage}_field_generator`, '6x gtceu:fluix_steel_foil', `2x #gtceu:circuits/${voltage}`)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`ae2:spatial_cell_component_${tier}`)
            .duration(400)
            .EUt(global.v[voltage]);
    }

    spatial('2', '16', 'hv');
    spatial('16', '64', 'ev');
    spatial('128', '256', 'iv');

});