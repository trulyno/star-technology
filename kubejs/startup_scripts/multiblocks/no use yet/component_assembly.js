
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('component_assembly')
        .category('component_assembly')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 1, 0)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('component_assembly', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_assembly')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSSSSSS', 'SSSSSSS', 'SSSSSSS')
            .aisle('SSSSSSS', 'S S   S', 'SSSGGGS')
            .aisle('SSSSSSS', 'SCSGGGS', '       ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))          
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/implosion_compressor", false);
});