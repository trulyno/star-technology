
GTCEuStartupEvents.registry('gtceu:machine', event => {
    function largeCube(type, casing) {
        event.create(`t_large_${type}`, 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType(type)
            .tooltips("Can only have §bone§f energy hatch")
            .tooltips("Has §6Perfect Overclock")
            .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('CCC', 'CCC', 'CCC')
                .aisle('CCC', 'C C', 'CCC')
                .aisle('CCC', 'CKC', 'CCC')
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('C', Predicates.blocks(`kubejs:${casing}_casing`).setMinGlobalLimited(5)
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))
                .where(' ', Predicates.air())
                .build())
            .workableCasingRenderer(`kubejs:block/casings/${casing}_casing`,
            `gtceu:block/machines/${type}`, false);
    }

    // Generic Cubes
    largeCube('bender', 'birmabright');
    largeCube('centrifuge', 'tumbaga');
    largeCube('electrolyzer', 'duralumin');
    largeCube('extruder', 'beryllium_aluminium_alloy');
    largeCube('forming_press', 'elgiloy');
    largeCube('lathe', 'beryllium_bronze');
    largeCube('macerator', 'blue_steel');
    largeCube('mixer', 'kovar');
    largeCube('ore_washer', 'hydronalium');
    largeCube('sifter', 'zamak');
    largeCube('thermal_centrifuge', 'silicon_bronze');
    largeCube('wiremill', 'sterling_silver');


    // Large Rock Crusher
    event.create('large_rock_crusher', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_rock_crusher')
        .tooltips("Can only have §bone§f energy hatch")
        .tooltips("Has §6Perfect Overclock")
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


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // Large Rock Crusher Recipe Type
    event.create('large_rock_crusher')
        .category('large_rock_crusher')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 0)
        .setSound(GTSoundEntries.FORGE_HAMMER);
});