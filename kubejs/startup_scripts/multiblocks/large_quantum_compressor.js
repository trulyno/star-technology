
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_quantum_compressor')
        .category('large_quantum_compressor')
        .setEUIO('in')
        .setMaxIOSize(18, 1, 0, 0)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_quantum_compressor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_quantum_compressor')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_STRESS_PROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('    FFF    ', '    HDH    ', '    HDH    ', '    HDH    ', '    ASA    ', '     S     ', '           ', '           ')
            .aisle('  FFGGGFF  ', '  AAIIIAA  ', '  AAIIIAA  ', '  AAIIIAA  ', '   AAAAA   ', '    ASA    ', '           ', '           ')
            .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', '  AGWGWGA  ', '  AAAAAAA  ', '     S     ', '           ')
            .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', ' AGGWGWGGA ', '  AAIIIAA  ', '   ASSSA   ', '           ')
            .aisle('FGWWGGGWWGF', 'TI       IT', 'TI       IT', 'TI       IT', 'AGWWGGGWWGA', ' AAIGIGIAA ', '   SGIGS   ', '    SSS    ')
            .aisle('FGGGGPGGGGF', 'DI       ID', 'DI       ID', 'DI       ID', 'SGGGGPGGGGS', 'SSAIIPIIASS', '  SSIPISS  ', '    SSS    ')
            .aisle('FGWWGGGWWGF', 'TI       IT', 'TI       IT', 'TI       IT', 'AGWWGGGWWGA', ' AAIGIGIAA ', '   SGIGS   ', '    SSS    ')
            .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', ' AGGWGWGGA ', '  AAIIIAA  ', '   ASSSA   ', '           ')
            .aisle(' FGGWGWGGF ', ' A33   33A ', ' A33   33A ', ' A33   33A ', '  AGWGWGA  ', '  AAAAAAA  ', '     S     ', '           ')
            .aisle('  FFGGGFF  ', '  AAIIIAA  ', '  AAIIIAA  ', '  AAIIIAA  ', '   AAAAA   ', '    ASA    ', '           ', '           ')
            .aisle('    FFF    ', '    HDH    ', '    HDH    ', '    HDH    ', '    AKA    ', '     S     ', '           ', '           ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GCyMBlocks.CASING_STRESS_PROOF.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('H', Predicates.blocks('thermal_extra:shellite_glass'))
            .where('T', Predicates.blocks('thermal_extra:twinite_glass'))
            .where('D', Predicates.blocks('thermal_extra:dragonsteel_glass'))
            .where('I', Predicates.blocks('kubejs:soul_infused_casing'))
            .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()))
            .where('A', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get()))
            .where('3', Predicates.blocks(GTBlocks.FUSION_CASING_MK3.get()))
            .where('W', Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get()))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/stress_proof_casing",
            "gtceu:block/multiblock/implosion_compressor", false);
});