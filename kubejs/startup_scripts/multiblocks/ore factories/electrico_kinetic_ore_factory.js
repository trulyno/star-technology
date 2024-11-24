
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('electrico_kinetic_ore_factory')
        .category('kinetic_ore_factory')
        .setEUIO('in')
        .setMaxIOSize(1, 8, 2, 1)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electrico_kinetic_ore_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electrico_kinetic_ore_factory')
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' AAA ', ' FFF ', ' FFF ', '  F  ', '     ', '     ', '     ')
            .aisle('AFFFA', 'FG GF', 'F   F', ' F F ', ' FFF ', '  F  ', '  B  ')
            .aisle('AFFFA', 'F P F', 'F P F', 'F P F', ' FPF ', ' FMF ', ' B B ')
            .aisle('AFFFA', 'FG GF', 'F   F', ' F F ', ' FFF ', '  F  ', '  B  ')
            .aisle(' AAA ', ' FCF ', ' FFF ', '  F  ', '     ', '     ', '     ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('A', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
            .where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "kubejs:block/multiblock/primitive_blast_furnace", false);
});