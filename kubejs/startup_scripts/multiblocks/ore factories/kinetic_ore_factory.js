
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('kinetic_ore_factory')
        .category('kinetic_ore_factory')
        .setMaxIOSize(1, 4, 1, 0)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('kinetic_ore_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('kinetic_ore_factory')
        //.recipeModifier(GTRecipeModifiers.fastParallel.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#FFF#', '#FFF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('FFFFF', 'F###F', 'F###F', 'F###F', '#F#F#', '#F#F#', '#B#B#')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('#FFF#', '#FCF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get()).setMinGlobalLimited(30)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1)))
            .where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
            .where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_primitive_bricks",
        "kubejs:block/multiblock/primitive_blast_furnace", false);
});