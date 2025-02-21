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
            .aisle("BBB", "BBB", "BBB", "#B#", "#A#") 	
            .aisle("BBB", "BCB", "B#B", "B#B", "A#A") 	
            .aisle("BBB", "BDB", "BBB", "#B#", "#A#") 	
            .where("A", Predicates.blocks('minecraft:stripped_jungle_wood'))	
            .where("B", Predicates.blocks("minecraft:mud_bricks"))	
            .where("#", Predicates.any())	
            .where("C", Predicates.blocks("minecraft:campfire"))	
            .where("D", Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer("minecraft:block/mud_bricks",
			"gtceu:block/multiblock/primitive_blast_furnace", false);
});