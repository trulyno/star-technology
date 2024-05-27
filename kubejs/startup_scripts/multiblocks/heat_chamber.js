
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('heat_chamber')
        .category('heat_chamber')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('heat_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('heat_chamber')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('     EEE     ', '             ', '             ', '             ', '             ', '             ','     EEE     ', '             ', '             ', '             ','     EEE     ', '             ', '             ', '             ', '             ', '             ','     EEE     ')
            .aisle('   EEEEEEE   ', '             ', '             ', '             ', '             ', '             ','   EEEEEEE   ', '             ', '             ', '             ','   EEEEEEE   ', '             ', '             ', '             ', '             ', '             ','   EEEEEEE   ')
            .aisle('  EEEEEEEEE  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ','  EEEEEEEEE  ', '   N     N   ', '   N     N   ', '   N     N   ','  EEEEEEEEE  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ','  EEEEEEEEE  ')
            .aisle(' EEEEEEEEEEE ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ','  EEEEEEEEE  ', '  N  AHA  N  ', '  N  AHA  N  ', '  N  AHA  N  ',' EEEEEEEEEEE ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ','  EEEEEEEEE  ')
            .aisle(' EEEEEEEEEEE ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ',' EEEEEEEEEEE ', '    A A A    ', '    A A A    ', '    A A A    ',' EEEEEEEEEEE ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ',' EEEEEEEEEEE ')
            .aisle('EEEEEEEEEEEEE', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ','EEEEEEEEEEEEE', '   A  A  A   ', '   A  A  A   ', '   A  A  A   ','EEEEEEEEEEEEE', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ','EEEEEEEEEEEEE')
            .aisle('EEEEEEEEEEEEE', '  G  P P  G  ', '  GPPP PPPG  ', '  GPPP PPPG  ', '  GPPP PPPG  ', '  GPPP PPPG  ','EEEEEEEEEEEEE', '   HAAAAAH   ', '   HAAAAAH   ', '   HAAAAAH   ','EEEEEEEEEEEEE', '  GPPP PPPG  ', '  GPPP PPPG  ', '  GPPP PPPG  ', '  GPPP PPPG  ', '  GPPP PPPG  ','EEEEEEEEEEEEE')
            .aisle('EEEEEEEEEEEEE', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ','EEEEEEEEEEEEE', '   A  A  A   ', '   A  A  A   ', '   A  A  A   ','EEEEEEEEEEEEE', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ', '  F   P   F  ','EEEEEEEEEEEEE')
            .aisle(' EEEEEEEEEEE ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ',' EEEEEEEEEEE ', '    A A A    ', '    A A A    ', '    A A A    ',' EEEEEEEEEEE ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ', '   I  P  I   ',' EEEEEEEEEEE ')
            .aisle(' EEEEEEEEEEE ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ',' EEEEEEEEEEE ', '  N  AHA  N  ', '  N  AHA  N  ', '  N  AHA  N  ',' EEEEEEEEEEE ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ', '    I P I    ','  EEEEEEEEE  ')
            .aisle('  EEEEEEEEE  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ','  EEEEEEEEE  ', '   N     N   ', '   N     N   ', '   N     N   ','  EEEEEEEEE  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ', '  N  FGF  N  ','  EEEEEEEEE  ')
            .aisle('   EEEEEEE   ', '             ', '             ', '             ', '             ', '             ','   EEEEEEE   ', '             ', '             ', '             ','   EEEEEEE   ', '             ', '             ', '             ', '             ', '             ','   EEEEEEE   ')
            .aisle('     HHH     ', '     HCH     ', '      H      ', '             ', '             ', '             ','     EEE     ', '             ', '             ', '             ','     EEE     ', '             ', '             ', '             ', '             ', '             ','     EEE     ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get()) //htsm 1 casing GCyMBlocks.CASING_STRESS_PROOF.get()
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('A', Predicates.heatingCoils()) // coils
            .where('N', Predicates.blocks('gtceu:neutronium_frame')) // neutronium frame
            .where('E', Predicates.blocks('kubejs:enderium_casing')) // enderium casing
            .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get())) // pipe casing
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_TUNGSTENSTEEL.get())) //firebox casing
            .where('G', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get())) // engine intake
            .where('I', Predicates.blocks(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get())) // htsm 2 casing GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get()
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/high_temperature_smelting_casing",
            "gtceu:block/multiblock/implosion_compressor", false);
});