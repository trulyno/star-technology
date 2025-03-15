GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('rugged_alloyer')
		.category('rugged_alloyer')
		.setMaxIOSize(3, 2, 0, 0)
		.setSound(GTSoundEntries.FURNACE)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('rugged_alloyer', 'primitive')
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
		.workableCasingRenderer("kubejs:block/hm/reinforced_stone_bricks", "gtceu:block/machines/electric_furnace", false)
		.editableUI(
			global.ui_builder({
				group: 'primitive',
				name: 'primitive_ore_factory',
				size: [166, 100],
				background: GuiTextures.PRIMITIVE_BACKGROUND,
				progress: {
					pos: [77, 38],
					size: [20, 18],
					texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR
				},
				inputs: [
					{ type: 'item', index: 0, pos: [34, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 1, pos: [52, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 2, pos: [70, 29], texture: GuiTextures.PRIMITIVE_SLOT },
				],
				outputs: [
					{ type: 'item', index: 0, pos: [104, 29], texture: GuiTextures.PRIMITIVE_SLOT },
					{ type: 'item', index: 1, pos: [122, 29], texture: GuiTextures.PRIMITIVE_SLOT },
				],
			})
		)
});