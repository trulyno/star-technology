
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steam_workshop')
        .category('steam_workshop')
        .setMaxIOSize(12, 1, 0, 0)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_workshop', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['primitive_workshop','steam_workshop'])
		.pattern(definition => FactoryBlockPattern.start()	
            .aisle("EBBBE", "A###A", "A###A", "A###A", "#AAA#") 	
            .aisle("BCCCB", "#####", "#####", "#####", "A###A") 	
            .aisle("BCDCB", "#####", "#####", "#####", "A###A") 	
            .aisle("BCCCB", "#####", "#####", "#####", "A###A") 	
            .aisle("EBBBE", "A###A", "A###A", "A###A", "#AAA#") 	
            .where("A", Predicates.blocks('gtceu:bronze_frame'))	
            .where("B", Predicates.blocks('gtceu:industrial_steam_casing'))	
            .where("#", Predicates.any())	
            .where("C", Predicates.blocks('gtceu:steam_machine_casing'))	
            .where("E", Predicates.blocks('gtceu:bronze_machine_casing')
                .or(Predicates.blocks('gtceu:steam_output_bus'))
                .or(Predicates.blocks('gtceu:steam_input_bus')))	
            .where("D", Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
			"gtceu:block/machines/extruder", false);
});

};//if end