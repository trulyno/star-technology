const EditableMachineUI = Java.loadClass('com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI')
const GTSlotWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.SlotWidget')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('kiln')
		.category('kiln')
		.setMaxIOSize(2, 1, 0, 0)
		.setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
	const builder = event.create('gtceu:kiln', 'primitive');

	builder.rotationState(RotationState.NON_Y_AXIS);
	builder.recipeType('kiln');
	builder.pattern(definition => FactoryBlockPattern.start()
		.aisle("BBB", "BBB", "BBB", "#B#", "#A#")
		.aisle("BBB", "BCB", "B#B", "B#B", "A#A")
		.aisle("BBB", "BDB", "BBB", "#B#", "#A#")
		.where("A", Predicates.blocks('minecraft:stripped_jungle_wood'))
		.where("B", Predicates.blocks("minecraft:mud_bricks"))
		.where("#", Predicates.any())
		.where("C", Predicates.blocks("minecraft:campfire"))
		.where("D", Predicates.controller(Predicates.blocks(definition.get())))
		.build()
	);
	builder.workableCasingRenderer("minecraft:block/mud_bricks", "gtceu:block/multiblock/primitive_blast_furnace", false);

	builder.editableUI(
		new EditableMachineUI(
			'primitive',
			'gtceu:kiln',
			() => new WidgetGroup(),
			(template, machine) => {
				template.setSize(166, 100)
				template.setBackground(GuiTextures.PRIMITIVE_BACKGROUND)

				template.addWidget(new GTSlotWidget(machine.importItems.storage, 0, 52, 29, true, true).setBackground(GuiTextures.PRIMITIVE_SLOT));
				template.addWidget(new GTSlotWidget(machine.importItems.storage, 1, 52, 47, true, true).setBackground(GuiTextures.PRIMITIVE_SLOT));
				template.addWidget(new GTSlotWidget(machine.exportItems.storage, 0, 104, 38, true, false).setBackground(GuiTextures.PRIMITIVE_SLOT));

				template.addWidget(new ProgressWidget(() => machine.getRecipeLogic().getProgressPercent(), 77, 38, 20, 18, GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR))
			}
		)
	);
});