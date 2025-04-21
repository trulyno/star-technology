GTCEuStartupEvents.registry('gtceu:machine', event => {
	const ulv_machine = (machine) => {
		event.create(machine, 'simple')
			.tiers(GTValues.ULV)
			.definition((tier, builder) => builder.recipeType(machine));
	}

	ulv_machine('mixer');
	ulv_machine('centrifuge');
	ulv_machine('assembler');
	ulv_machine('circuit_assembler');

});