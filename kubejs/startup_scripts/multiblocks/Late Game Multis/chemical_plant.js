
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('chemical_plant')
        .category('chemical_plant')
        .setEUIO('in')
        .setMaxIOSize(9, 9, 9, 9)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('chemical_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('chemical_plant')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FHHHF', 'TFFFT', 'T   T', 'T   T', 'T   T', 'FFFFF')
            .aisle('HFFFH', 'FPPPF', ' FFF ', ' MMM ', ' FFF ', 'FEEEF')
            .aisle('HFFFH', 'FP PF', ' F F ', ' M M ', ' F F ', 'FEEEF')
            .aisle('HFFFH', 'FPPPF', ' FFF ', ' MMM ', ' FFF ', 'FEEEF')
            .aisle('FHHHF', 'TFCFT', 'T   T', 'T   T', 'T   T', 'FFFFF')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('kubejs:peek_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('E', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where('H', Predicates.blocks(GCyMBlocks.HEAT_VENT.get()))     
            .where('M', Predicates.blocks(GCyMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))     
            .where('T', Predicates.blocks('gtceu:tungsten_frame'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/casings/machine_casing_peek",
        "gtceu:block/multiblock/large_chemical_reactor", false);
});