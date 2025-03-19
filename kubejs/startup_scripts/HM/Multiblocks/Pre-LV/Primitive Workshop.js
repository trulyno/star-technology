
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_workshop')
        .category('primitive_workshop')
        .setMaxIOSize(12, 1, 0, 0)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_workshop', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_workshop')
		.pattern(definition => FactoryBlockPattern.start()	
            .aisle("ABBBA", "A###A", "A###A", "A###A", "#AAA#") 	
            .aisle("BCCCB", "#####", "#####", "#####", "A###A") 	
            .aisle("BCDCB", "#####", "#####", "#####", "A###A") 	
            .aisle("BCCCB", "#####", "#####", "#####", "A###A") 	
            .aisle("ABBBA", "A###A", "A###A", "A###A", "#AAA#") 	
            .where("A", Predicates.blocks("gtceu:wood_frame"))	
            .where("B", Predicates.blocks("create:andesite_alloy_block"))	
            .where("#", Predicates.any())	
            .where("C", Predicates.blocks("create:andesite_casing"))	
            .where("D", Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer("create:block/andesite_casing",
			"gtceu:block/machines/extruder", false);
});

};//if end