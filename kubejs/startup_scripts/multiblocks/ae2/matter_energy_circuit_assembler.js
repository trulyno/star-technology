GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('precise_me_circuit_assembler')
        .category('precise_me_circuit_assembler')
        .setMaxIOSize(3, 1, 3, 0)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('precise_me_circuit_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('precise_me_circuit_assembler')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .appearanceBlock(GCYMBlocks.CASING_LARGE_SCALE_ASSEMBLING)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle("AABBBBBAA", "ACCCCCCCA", "AAAAAAAAA") 
			.aisle("AEEEEEEEA", "BDDDDDDDB", "AAAAAAAAA") 
			.aisle("AAAAEAAAA", "ACCCDCCCA", "AAAAAAAAA") 
			.aisle("   A@A   ", "   CCC   ", "   AAA   ")
			.where("@", Predicates.controller(Predicates.blocks(definition.get())))
			.where("A", Predicates.blocks("gtceu:large_scale_assembler_casing")
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
				.or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
				.or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
			.where("B", Predicates.blocks("gtceu:assembly_line_grating"))
			.where("C", Predicates.blocks("ae2:quartz_glass"))
			.where("D", Predicates.blocks("gtceu:high_power_casing"))
			.where("E", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
			.where(" ", Predicates.any())
			.build())
		.workableCasingRenderer('gtceu:block/casings/gcym/large_scale_assembling_casing',
			'gtceu:block/machines/circuit_assembler', false);
});