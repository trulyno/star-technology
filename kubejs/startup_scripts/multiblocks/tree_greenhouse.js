GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('tree_greenhouse')
        .category('tree_greenhouse')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 3, 1)
        .setSound(GTSoundEntries.BOILER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('tree_greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('tree_greenhouse')
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHHHHHH', '#FGGGF#', '#FGGGF#', '#FGGGF#', '##FFF##')
            .aisle('HHHHHHH', 'FB###BF', 'FB###BF', 'FB###BF', '#F###F#')
            .aisle('HHHHHHH', 'G#####G', 'G#####G', 'G##L##G', 'F#####F')
            .aisle('HHHDHHH', 'G##O##G', 'G##O##G', 'G#LOL#G', 'F##L##F')
            .aisle('HHHHHHH', 'G#####G', 'G#####G', 'G##L##G', 'F#####F')
            .aisle('HHHHHHH', 'FB###BF', 'FB###BF', 'FB###BF', '#F###F#')
            .aisle('HHHCHHH', '#FGGGF#', '#FGGGF#', '#FGGGF#', '##FFF##')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(39)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks('gtceu:soul_infused_block'))
            .where('O', Predicates.blocks('minecraft:oak_log'))
            .where('L', Predicates.blocks('minecraft:oak_leaves'))
            .where('D', Predicates.blocks('minecraft:dirt'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('G', Predicates.blocks('thermal:obsidian_glass'))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/implosion_compressor", false);
});