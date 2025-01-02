GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('larger_barrel')
        .category('larger_barrel')
        .setMaxIOSize(3, 3, 3, 3)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('larger_barrel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('larger_barrel')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .appearanceBlock(GCYMBlocks.CASING_WATERTIGHT)
        .pattern(definition => FactoryBlockPattern.start()	
            .aisle("ABBBA", "BBBBB", "BBBBB", "BBBBB", "ABBBA") 	
            .aisle("ACCCA", "CD#DC", "C#E#C", "CD#DC", "ACCCA") 	
            .aisle("ACCCA", "CF#FC", "C#D#C", "CF#FC", "ACCCA") 	
            .aisle("ACCCA", "CFEFC", "CEDEC", "CFEFC", "ACCCA") 	
            .aisle("ACCCA", "CF#FC", "C#D#C", "CF#FC", "ACCCA") 	
            .aisle("ACCCA", "CD#DC", "C#E#C", "CD#DC", "ACCCA") 	
            .aisle("ABBBA", "BBBBB", "BB@BB", "BBBBB", "ABBBA") 	
            .where("A", Predicates.blocks("gtceu:watertight_steel_frame"))	
            .where("B", Predicates.blocks("gtceu:watertight_casing")
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(3))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(3))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3)))
            .where("C", Predicates.blocks("kubejs:wood_casing"))	
            .where("D", Predicates.blocks("gtceu:steel_pipe_casing"))	
            .where("#", Predicates.blocks("minecraft:air"))	
            .where("E", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))	
            .where("F", Predicates.blocks("gtceu:ptfe_pipe_casing"))	
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/watertight_casing",
            "gtceu:block/machines/brewery", false);
});