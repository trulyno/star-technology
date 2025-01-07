
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_ore_processing')
        .category('ore_processing')
        .setMaxIOSize(2, 4, 1, 0)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /* Previously Kinetic Ore factory */
    event.create('primitive_ore_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_ore_processing')
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#FFF#', '#FFF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('FFFFF', 'F###F', 'F###F', 'F###F', '#F#F#', '#F#F#', '#B#B#')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('#FFF#', '#FCF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get()).setMinGlobalLimited(30)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
            .where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_primitive_bricks",
        "kubejs:block/multiblock/primitive_blast_furnace", false);
});