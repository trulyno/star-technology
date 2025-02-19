GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('kiln')
        .category('kiln')
        .setMaxIOSize(2, 1, 0, 0)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('kiln', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('kiln')
		.pattern(definition => FactoryBlockPattern.start()	
            .aisle("AAA", "BBB", "BBB", "#B#", "#B#") 	
            .aisle("AAA", "BCB", "B#B", "B#B", "B#B") 	
            .aisle("AAA", "BDB", "BBB", "#B#", "#B#") 	
            .where("A", Predicates.blocks("kubejs:reinforced_stone_bricks"))	
            .where("B", Predicates.blocks("minecraft:bricks"))	
            .where("#", Predicates.any())	
            .where("C", Predicates.blocks("minecraft:campfire"))	
            .where("D", Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer("minecraft:block/bricks",
			"gtceu:block/multiblock/primitive_blast_furnace", false);
});