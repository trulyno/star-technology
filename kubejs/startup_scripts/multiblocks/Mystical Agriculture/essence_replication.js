GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('essence_replication')
        .category('essence_replication')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('essence_replicator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('essence_replication')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_INVAR_HEATPROOF)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('IIIII', '#####', '#####', '#####', 'IIIII')
            .aisle('ISSSI', '#FGF#', '#FGF#', '#FGF#', 'ISSSI')
            .aisle('ISSSI', '#G#G#', '#G#G#', '#G#G#', 'ISSSI')
            .aisle('ISSSI', '#FGF#', '#FGF#', '#FGF#', 'ISSSI')
            .aisle('IICII', '#####', '#####', '#####', 'IIIII')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get()).setMinGlobalLimited(23)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('S', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
            .where('F', Predicates.blocks(Block.getBlock('gtceu:aluminium_frame')))
            .where('G', Predicates.blocks('thermal:obsidian_glass'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_heatproof",
        "gtceu:block/multiblock/implosion_compressor", false);
});