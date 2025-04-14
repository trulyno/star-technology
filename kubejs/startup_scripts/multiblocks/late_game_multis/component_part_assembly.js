GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('component_part_assembly')
        .category('component_part_assembly')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 2, 0)
        // .setHasResearchSlot(true)  need to figure out how this works
        .setSound(GTSoundEntries.ASSEMBLER)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('component_part_assembly', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_part_assembly')
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSSSS', 'SSSSS', ' SSS ')
            .aisle('HHBHH', 'G#A#G', ' GGG ')
            .aisle('HHPHH', 'G#C#G', ' GGG ')
            .aisle('HHBHH', 'G#A#G', ' GGG ')
            .aisle('SSSSS', 'SSKSS', ' SSS ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('kubejs:enriched_naquadah_machine_casing').setMinGlobalLimited(16)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))          
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('H', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where('#', Predicates.blocks('minecraft:air'))
            .where('A', Predicates.blocks('gtceu:assembly_line_unit'))
            .where('C', Predicates.blocks('gtceu:fusion_coil'))
            .where('B', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
            .where('P', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('kubejs:block/casings/naquadah/casing',
        'gtceu:block/multiblock/implosion_compressor', false);

});
