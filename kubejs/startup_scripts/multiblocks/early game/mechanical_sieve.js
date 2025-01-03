
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mechanical_sieve')
        .category('mechanical_sieve')
        .setMaxIOSize(2, 6, 0, 0)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mechanical_sieve', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mechanical_sieve')
        //.appearanceBlock('kubejs:wood_casing')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F...F', 'F...F', 'F...F', 'FFFFF', 'WWWWW', 'WWWWW', 'WWWWW')
            .aisle('.....', '.....', '.....', 'FWWWF', 'WMMMW', 'W...W', 'W...W')
            .aisle('.....', '.....', '.....', 'FWWWF', 'WMMMW', 'W...W', 'W...W')
            .aisle('.....', '.....', '.....', 'FWWWF', 'WMMMW', 'W...W', 'W...W')
            .aisle('F...F', 'F...F', 'F...F', 'FFFFF', 'WWCWW', 'WWWWW', 'WWWWW')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('W', Predicates.blocks('kubejs:wood_casing')
                //.or(Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1)))
            .where('F', Predicates.blocks('gtceu:treated_wood_frame'))     
            .where('M', Predicates.blocks('kubejs:meshblock'))
            .where('.', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/casings/casing-wood",
        "gtceu:block/machines/macerator", false);
});