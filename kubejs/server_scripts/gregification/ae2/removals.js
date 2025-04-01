ServerEvents.recipes(event => {
    const toRemoveOutput = [
        'ae2:inscriber', 'ae2:vibration_chamber', 'ae2:silicon', 'ae2:controller', 'ae2:charger', 'ae2:drive', 'ae2:chest', 'expatternprovider:ex_inscriber',
        'expatternprovider:ex_charger', 'expatternprovider:crystal_fixer', 'expatternprovider:canner', 'ae2:crystal_resonance_generator', 'ae2:vibration_chamber',
        'expatternprovider:circuit_cutter', /megacells:sky_steel.*/
    ];
    const toRemoveId = [
        'ae2:transform/damaged_budding_quartz', 'ae2:transform/chipped_budding_quartz',
        'ae2:transform/flawed_budding_quartz', 'ae2:transform/fluix_crystals', 'ae2:transform/fluix_crystal', 'ae2:transform/certus_quartz_crystals',
        'ae2:network/crafting/molecular_assembler', 'ae2:network/blocks/pattern_providers_interface', 'ae2:network/crafting/cpu_crafting_unit',
        'ae2:network/blocks/energy_energy_acceptor', 'ae2:network/blocks/interfaces_interface', 'ae2:network/blocks/io_condenser', 'ae2:network/blocks/cell_workbench',
        'ae2:network/blocks/spatial_io_port', 'ae2:network/blocks/io_port', 'ae2:network/cables/covered_fluix', 'ae2:network/parts/quartz_fiber_part', 'ae2:network/cables/glass_fluix',
        'megacells:mega_crafting_unit', 'ae2:network/parts/cable_anchor'
    ];

    const toRemoveType = [
        'expatternprovider:cutter', 'ae2:inscriber', 'ae2:charger'
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

});