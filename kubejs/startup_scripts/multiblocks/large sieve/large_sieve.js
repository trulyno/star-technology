
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_sieve')
        .category('large_sieve')
        .setEUIO('in')
        .setMaxIOSize(1, 25, 0, 0)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_sieve', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_sieve')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('TTOTT', 'FTTTF', 'F   F', 'F   F', 'F   F', 'F   F', 'TTTTT')
            .aisle('TTPTT', 'TTFTT', ' SSS ', '  S  ', '  S  ', ' SSS ', 'TTFTT')
            .aisle('TFPFT', 'TFPFT', ' SPS ', ' S S ', ' S S ', ' SPS ', 'TFIFT')
            .aisle('TTTTT', 'TTFTT', ' SSS ', '  S  ', '  S  ', ' SSS ', 'TTFTT')
            .aisle('TTCTT', 'FTTTF', 'F   F', 'F   F', 'F   F', 'F   F', 'TTTTT')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('T', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
            .where('S', Predicates.blocks(GCyMBlocks.CASING_STRESS_PROOF.get()))
            .where('F', Predicates.blocks('gtceu:tungsten_steel_frame'))     
            .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))     
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))     
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
        "gtceu:block/multiblock/implosion_compressor", false);
});