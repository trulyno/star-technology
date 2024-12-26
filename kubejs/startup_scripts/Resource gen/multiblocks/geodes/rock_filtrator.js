GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rock_filtrator')
        .category('rock_filtrator')
        .setMaxIOSize(2, 12, 0, 0)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rock_filtrator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rock_filtrator')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SFS', 'SGS', 'SGS', 'SGS', 'SFS')
            .aisle('FBF', 'GMG', 'GMG', 'GMG', 'FIF')
            .aisle('SCS', 'SGS', 'SGS', 'SGS', 'SFS')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(4))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
            .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('B', Predicates.blocks('gtceu:cupronickel_coil_block'))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('M', Predicates.blocks('kubejs:mesh_block'))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/implosion_compressor", false);
});