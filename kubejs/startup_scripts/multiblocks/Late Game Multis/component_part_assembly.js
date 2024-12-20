GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('component_part_assembly')
        .category('component_part_assembly')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 2, 0)
        .setSound(GTSoundEntries.ASSEMBLER);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('component_part_assembly', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_part_assembly')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSSSS', 'SSSSS', ' SSS ')
            .aisle('HHHHH', 'G#A#G', ' GGG ')
            .aisle('HHHHH', 'G#C#G', ' GGG ')
            .aisle('HHHHH', 'G#A#G', ' GGG ')
            .aisle('SSSSS', 'SSKSS', ' SSS ')

            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(16)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))          
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('H', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where('#', Predicates.blocks('minecraft:air'))
            .where('A', Predicates.blocks('gtceu:assembly_line_unit'))
            .where('C', Predicates.blocks('gtceu:fusion_coil'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/implosion_compressor", false);
});
