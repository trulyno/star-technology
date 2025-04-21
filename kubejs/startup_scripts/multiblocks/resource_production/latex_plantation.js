
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('latex_plantation')
        .category('latex_plantation')
        .setMaxIOSize(3, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SOFT_MALLET_TOOL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('latex_plantation', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('latex_plantation')
        .appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BOB','SSS','###','###','###','#L#','###')
            .aisle('BDB','BGB','#G#','#G#','#G#','LGL','#L#')
            .aisle('BIB','BCB','SSS','###','###','#L#','###')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('minecraft:bricks'))
            .where('O', Predicates.abilities(PartAbility.EXPORT_FLUIDS)
                .or(Predicates.blocks('minecraft:bricks')))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS)
                .or(Predicates.blocks('minecraft:bricks')))
            .where('S', Predicates.blocks('minecraft:brick_slab'))
            .where('L', Predicates.blocks('minecraft:jungle_leaves'))
            .where('G', Predicates.blocks('minecraft:jungle_log'))
            .where('D', Predicates.blocks('minecraft:dirt'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("minecraft:block/bricks","gtceu:block/machines/extractor", false)
        .editableUI(
			global.ui_builder({
				group: 'primitive',
				name: 'latex',
				size: [166, 100],
				background: GuiTextures.PRIMITIVE_BACKGROUND,
				progress: {
					pos: [77, 38],
					size: [20, 18],
					texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR
				},
				inputs: [
					{ type: 'item', index: 0, pos: [52, 38], texture: GuiTextures.PRIMITIVE_SLOT }
				],
				outputs: [
					{ type: 'fluid', index: 0, pos: [104, 38], texture: GuiTextures.PRIMITIVE_SLOT },
				]
			})
		);
});