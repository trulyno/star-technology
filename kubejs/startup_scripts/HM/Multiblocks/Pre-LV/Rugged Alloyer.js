GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rugged_alloyer')
        .category('rugged_alloyer')
        .setMaxIOSize(3, 2, 0, 0)
        .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rugged_alloyer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rugged_alloyer')
		.pattern(definition => FactoryBlockPattern.start()	
            .aisle("AAA", "AAA", "AAA", "AAA") 	
            .aisle("AAA", "A#A", "A#A", "A#A") 	
            .aisle("AAA", "ABA", "AAA", "AAA") 	
            .where("A", Predicates.blocks("kubejs:reinforced_stone_bricks"))	
            .where("#", Predicates.blocks("minecraft:air"))	
            .where("B", Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer("kubejs:block/hm/reinforced_stone_bricks",
			"gtceu:block/multiblock/primitive_blast_furnace", false);
});