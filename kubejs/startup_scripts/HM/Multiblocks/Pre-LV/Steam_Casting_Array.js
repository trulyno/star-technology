// packmode: hard

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('steam_casting_array', 'primitive')
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('fluid_solidifier')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GCYMBlocks.CASING_INDUSTRIAL_STEAM)
		.pattern(definition => FactoryBlockPattern.start()
            .aisle('AAAAA', 'AAAAA', 'AAAAA', '#B#B#') 
            .aisle('AAAAA', 'ACCCA', 'A###A', 'BBBBB') 
            .aisle('AAAAA', 'A###A', 'A###A', '#B#B#') 
            .aisle('AAAAA', 'A###A', 'A###A', '#B#B#') 
            .aisle('AAAAA', 'ACCCA', 'A###A', 'BBBBB') 
            .aisle('AAAAA', 'AA@AA', 'AAAAA', '#B#B#') 
            .where('A', Predicates.blocks('gtceu:industrial_steam_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2)))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks('gtceu:bronze_frame'))
            .where('C', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer('gtceu:block/casings/gcym/industrial_steam_casing', 'gtceu:block/machines/fluid_solidifier', false)
		.editableUI(
			global.ui_builder({
				group: 'primitive',
				name: 'steam_casting_array',
				size: [166, 50],
				background: GuiTextures.BACKGROUND,
				progress: {
					pos: [82, 16],
					size: [20, 18],
					texture: GuiTextures.PROGRESS_BAR_ARROW
				},
				inputs: [
					{ type: 'item', index: 0, pos: [34, 16], texture: GuiTextures.SLOT },
					{ type: 'fluid', index: 0, pos: [52, 16], texture: GuiTextures.SLOT },
				],
				outputs: [
					{ type: 'item', index: 0, pos: [112, 16], texture: GuiTextures.SLOT }
				],
			})
		);
});