GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('primitive_ore_processing')
		.category('ore_processing')
		.setMaxIOSize(2, 4, 1, 0)
		.setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	/* was previously kinetic_ore_factory */
	event.create('primitive_ore_factory', 'primitive')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('primitive_ore_processing')
		.appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('#FFF#', '#FFF#', '#FFF#', '##F##', '#####', '#####', '#####')
			.aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
			.aisle('FFFFF', 'F###F', 'F###F', 'F###F', '#F#F#', '#F#F#', '#B#B#')
			.aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
			.aisle('#FFF#', '#FCF#', '#FFF#', '##F##', '#####', '#####', '#####')
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where('F', Predicates.blocks(GTBlocks.CASING_PRIMITIVE_BRICKS.get())
				.setMinGlobalLimited(30)
				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
			.where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
			.where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
			.where('#', Predicates.any())
			.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_primitive_bricks", "kubejs:block/multiblock/primitive_blast_furnace", false)
		.editableUI(
			global.primitive_ui({
				name: 'primitive_ore_factory',
				size: [166, 100],
				progress: {
					pos: [77, 38],
					size: [20, 18],
					texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR
				},
				inputs: [
					{ type: 'item', index: 0, pos: [34, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 1, pos: [52, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'fluid', index: 0, pos: [34, 47], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT,GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0,0.04,1,0.22))},
				],
				outputs: [
					{ type: 'item', index: 0, pos: [104, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 1, pos: [122, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 2, pos: [122, 47], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 3, pos: [104, 47], texture: GuiTextures.PRIMITIVE_SLOT },
				]
			})
		);
});
