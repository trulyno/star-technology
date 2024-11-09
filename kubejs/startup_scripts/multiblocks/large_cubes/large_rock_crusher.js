
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_rock_crusher')
        .category('large_rock_crusher')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 0)
        .setSound(GTSoundEntries.FORGE_HAMMER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_rock_crusher', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_rock_crusher')
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('CCC', 'C C', 'CCC')
            .aisle('CCC', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:red_steel_casing').setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
            .where(' ', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/casings/red_steel_casing",
        "gtceu:block/machines/rock_crusher", false);
});