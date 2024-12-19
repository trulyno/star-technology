
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('runic_circuitry_assembling_station')
        .category('runic_circuitry_assembling_station')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setSound(GTSoundEntries.ELECTROLYZER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('runic_circuitry_assembling_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('runic_circuitry_assembling_station')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', ' LLCCCLL ', ' LLCCCLL ', ' LLCCCLL ', '         ')
            .aisle(' LLLLLLL ', ' P     P ', ' P     P ', ' P     P ', ' P     P ', ' P     P ', ' P     P ', ' LLLLLLL ', 'LP     PL', 'LP     PL', 'LP     PL', ' LLLLLLL ')
            .aisle(' LAAAAAL ', '         ', '         ', '         ', '         ', '         ', '         ', ' LAAAAAL ', 'L P   P L', 'L P   P L', 'L P   P L', ' LLLLLLL ')
            .aisle(' LAHHHAL ', '   333   ', '         ', '         ', '         ', '         ', '   333   ', ' LAHHHAL ', 'C  P P  C', 'C  P P  C', 'C  P P  C', ' LLLLLLL ')
            .aisle(' LAHEHAL ', '   3S3   ', '    S    ', '    D    ', '    B    ', '    S    ', '   3E3   ', ' LAHEHAL ', 'C       C', 'C       C', 'C       C', ' LLLLLLL ')
            .aisle(' LAHHHAL ', '   333   ', '         ', '         ', '         ', '         ', '   333   ', ' LAHHHAL ', 'C  P P  C', 'C  P P  C', 'C  P P  C', ' LLLLLLL ')
            .aisle(' LAAAAAL ', '         ', '         ', '         ', '         ', '         ', '         ', ' LAAAAAL ', 'L P   P L', 'L P   P L', 'L P   P L', ' LLLLLLL ')
            .aisle(' LLLKLLL ', ' P     P ', ' P     P ', ' P     P ', ' P     P ', ' P     P ', ' P     P ', ' LLLLLLL ', 'LP     PL', 'LP     PL', 'LP     PL', ' LLLLLLL ')
            .aisle('         ', '         ', '         ', '         ', '         ', '         ', '         ', '         ', ' LLCCCLL ', ' LLCCCLL ', ' LLCCCLL ', '         ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('L', Predicates.blocks('kubejs:lumium_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('C', Predicates.heatingCoils())
            .where('H', Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get()))
            .where('3', Predicates.blocks(GTBlocks.FUSION_CASING_MK3.get()))
            .where('A', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_CONTROL.get()))
            .where('E', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_LINE.get()))
            .where('S', Predicates.blocks('kubejs:stellarium_casing'))
            .where('B', Predicates.blocks('kubejs:laser_casing'))
            .where('D', Predicates.blocks('thermal_extra:dragonsteel_glass'))
            .where('P', Predicates.blocks('gtceu:prismalium_frame'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/casings/casing-lumium",
            "gtceu:block/multiblock/implosion_compressor", false);
});