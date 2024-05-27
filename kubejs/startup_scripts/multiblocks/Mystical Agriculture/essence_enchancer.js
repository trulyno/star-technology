GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('essence_enchancing')
        .category('essence_enchancing')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('essence_enchancer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('essence_enchancing')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SBBBBBS', 'SB#M#BS', 'SBMMMBS', 'SB#M#BS', 'SBBBBBS')
            .aisle('SB#M#BS', 'F#M#M#F', 'FM###MF', 'F#M#M#F', 'SB#M#BS')
            .aisle('SBMMMBS', 'FM###MF', 'P#####P', 'FM###MF', 'SBMMMBS')
            .aisle('SB#M#BS', 'F#M#M#F', 'FM###MF', 'F#M#M#F', 'SB#M#BS')
            .aisle('SBBBBBS', 'SB#M#BS', 'SBMCMBS', 'SB#M#BS', 'SBBBBBS')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()).setMinGlobalLimited(26)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('F', Predicates.blocks(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get()))
            .where('B', Predicates.blocks('gtceu:black_steel_frame'))
            .where('M', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
        "gtceu:block/multiblock/implosion_compressor", false);
});