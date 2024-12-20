
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_rotor_machine')
        .category('large_rotor_machine')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 0, 0)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_rotor_machine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_rotor_machine')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('W       W', 'WW WWW WW', 'SS EEE SS', 'SS EEE SS', '   WWW   ', '         ')
            .aisle('   FFF   ', 'WWW   WWW', 'SSS   SSS', 'SSS   SSS', '  TTTTT  ', '         ')
            .aisle('  FFFFF  ', ' WW   WW ', ' S     S ', ' SW   WS ', ' T     T ', '  TTTTT  ')
            .aisle(' FFFFFFF ', 'W  W W  W', 'E       E', 'E  W W  E', 'WT     TW', '  TCCCT  ')
            .aisle(' FFFFFFF ', 'W   W   W', 'E   W   E', 'E   W   E', 'WT  W  TW', '  TCWCT  ')
            .aisle(' FFFFFFF ', 'W  W W  W', 'E       E', 'E  W W  E', 'WT     TW', '  TCCCT  ')
            .aisle('  FFFFF  ', ' WW   WW ', ' S     S ', ' SW   WS ', ' T     T ', '  TTTTT  ')
            .aisle('   FFF   ', 'WWW   WWW', 'SSS   SSS', 'SSS   SSS', '  TTTTT  ', '         ')
            .aisle('W       W', 'WW WKW WW', 'SS EEE SS', 'SS EEE SS', '   WWW   ', '         ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('W', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('S', Predicates.blocks('kubejs:shellite_casing'))
            .where('T', Predicates.blocks('kubejs:twinite_casing'))
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get()))
            .where('E', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where('C', Predicates.blocks(GTBlocks.FILTER_CASING_STERILE.get()))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "gtceu:block/multiblock/implosion_compressor", false);
});