
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('t_large_thermal_centrifuge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('thermal_centrifuge')
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('CCC', 'C C', 'CCC')
            .aisle('CCC', 'CKC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:silicon_bronze_casing').setMinGlobalLimited(5)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
            .where(' ', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/casings/silicon_bronze_casing",
        "gtceu:block/machines/thermal_centrifuge", false);
});