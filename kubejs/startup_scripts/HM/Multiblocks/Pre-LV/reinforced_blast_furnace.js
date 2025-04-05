// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('reinforced_blast_furnace')
        .category('reinforced_blast_furnace')
        .setMaxIOSize(3, 3, 0, 0)
        .setSound(GTSoundEntries.FURNACE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('reinforced_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('reinforced_blast_furnace')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('DDD', 'PPP', 'PPP', 'PPP')
            .aisle('DDD', 'P P', 'P P', 'P P')
            .aisle('DDD', 'PCP', 'PPP', 'PPP')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('kubejs:cinder_block'))
            .where('D', Predicates.blocks('kubejs:reinforced_stone_bricks'))
            .where(' ', Predicates.blocks('minecraft:air'))
            .build())
        .workableCasingRenderer('kubejs:block/hm/cinder_block',
        'gtceu:block/multiblock/primitive_blast_furnace', false)
        .editableUI(
			global.ui_builder({
				group: 'primitive',
				name: 'rugged_alloyer',
				size: [166, 50],
				background: GuiTextures.BACKGROUND,
				progress: {
					pos: [82, 16],
					size: [20, 18],
					texture: GuiTextures.PROGRESS_BAR_ARROW
				},
				inputs: [
					{ type: 'item', index: 0, pos: [16, 16], texture: GuiTextures.SLOT },
					{ type: 'item', index: 1, pos: [34, 16], texture: GuiTextures.SLOT },
					{ type: 'item', index: 2, pos: [52, 16], texture: GuiTextures.SLOT },
				],
				outputs: [
					{ type: 'item', index: 0, pos: [112, 16], texture: GuiTextures.SLOT },
					{ type: 'item', index: 1, pos: [130, 16], texture: GuiTextures.SLOT }
				],
			})
		);
}); 