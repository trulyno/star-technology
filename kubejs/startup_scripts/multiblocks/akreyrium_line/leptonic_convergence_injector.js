GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('leptonic_convergence_injector')
        .category('leptonic_convergence_injector')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 2, 1)
        .setSound(GTSoundEntries.MACERATOR);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('leptonic_convergence_injector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('leptonic_convergence_injector')
        .tooltips("§a§lAkreyrium §a§lProcessing")
        .tooltips("§7A high-density synthesis unit designed to inject, compress and align the leptonic structures of materials utilising a suitable catalyst. through this process, the material is transformed into a lepton-dense form, which is optimised for advanced applications.")
        .tooltips("§8-----------------------------------")
        .tooltips("§6Convergence Injection:")
        .tooltips("§7The different lepton variations must be injected with a specific type of fluid to align the structure of the material successfully, Through injection, a far higher rate of final output can be achieved.")
        .tooltips("§8-----------------------------------")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' AAA ', ' XXX ', ' AAA ', '  A  ', '     ', '  A  ', ' AAA ', '     ', '     ', '     ', '     ', '     ', '     ')
            .aisle('AAAAA', 'XDDDX', 'A   A', ' E E ', ' EEE ', ' EDE ', 'ADDDA', ' DED ', '  E  ', '  B  ', '  B  ', '  B  ', '  E  ')
            .aisle('AAFAA', 'XDGDX', 'A G A', 'A G A', ' EGE ', 'ADGDA', 'ADGDA', ' EGE ', ' EGE ', ' BGB ', ' BGB ', ' BGB ', ' EGE ')
            .aisle('AAAAA', 'XDDDX', 'A   A', ' E E ', ' EEE ', ' EDE ', 'ADDDA', ' DED ', '  E  ', '  B  ', '  B  ', '  B  ', '  E  ')
            .aisle(' AAA ', ' XHX ', ' AAA ', '  A  ', '     ', '  A  ', ' AAA ', '     ', '     ', '     ', '     ', '     ', '     ')
            .where('H', Predicates.controller(Predicates.blocks(definition.get())))
            .where(' ', Predicates.any())
            .where('X', Predicates.blocks('gtceu:fusion_glass')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('B', Predicates.blocks('gtceu:fusion_glass'))
            .where('D', Predicates.blocks('gtceu:high_power_casing'))
            .where('F', Predicates.blocks('gtceu:high_power_casing'))
            .where('A', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('E', Predicates.blocks('gtceu:computer_casing'))
            .where('G', Predicates.blocks('gtceu:advanced_computer_casing'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
            'gtceu:block/multiblock/data_bank', false);

});
