// priority: 1000

const EditableMachineUI = Java.loadClass('com.gregtechceu.gtceu.api.gui.editor.EditableMachineUI')
const GTSlotWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.SlotWidget')
const GTTankWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.TankWidget')

global.primitive_ui = (settings) => {
	const { name, size, progress, inputs, outputs } = settings;

	return new EditableMachineUI(
		'primitive',
		'gtceu:' + name,
		() => new WidgetGroup(),
		(template, machine) => {
			template.setSize(size[0], size[1]);
			template.setBackground(GuiTextures.PRIMITIVE_BACKGROUND);

			template.addWidget(new ProgressWidget(
				() => machine.getRecipeLogic().getProgressPercent(),
				progress.pos[0], progress.pos[1],
				progress.size[0], progress.size[1],
				progress.texture
			));

			inputs.forEach(input => {
				const { type, index, pos } = input;

				if (type == 'item') template.addWidget(new GTSlotWidget(machine.importItems.storage, index, pos[0], pos[1], true, true).setBackground(GuiTextures.PRIMITIVE_SLOT));
				if (type == 'fluid') template.addWidget(new GTTankWidget(machine.importFluids.storages[index], pos[0], pos[1], true, true).setBackground(GuiTextures.PRIMITIVE_LARGE_FLUID_TANK));
			})

			outputs.forEach(output => {
				const { type, index, pos } = output;

				if (type == 'item') template.addWidget(new GTSlotWidget(machine.exportItems.storage, index, pos[0], pos[1], true, false).setBackground(GuiTextures.PRIMITIVE_SLOT));
				if (type == 'fluid') template.addWidget(new GTTankWidget(machine.exportFluids.storages[index], pos[0], pos[1], false, true).setBackground(GuiTextures.PRIMITIVE_LARGE_FLUID_TANK));
			})
		}
	)
}

// Example Usage:

// GTCEuStartupEvents.registry('gtceu:machine', event => {
// 	event.create('primitive_ore_factory', 'primitive')
// 		.rotationState(RotationState.NON_Y_AXIS)
// 		...
// 		.editableUI(
// =============================================================================
// 			global.primitive_ui({
// 				name: 'primitive_ore_factory',
// 				size: [166, 100],
// 				progress: {
// 					pos: [77, 38],
// 					size: [20, 18],
// 					texture: GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR
// 				},
// 				inputs: [
// 					{ type: 'item', index: 0, pos: [34, 29] },
// 					{ type: 'item', index: 1, pos: [52, 29] },
// 					{ type: 'fluid', index: 0, pos: [34, 47] },
// 				],
// 				outputs: [
// 					{ type: 'item', index: 0, pos: [104, 29] },
// 					{ type: 'item', index: 1, pos: [122, 29] },
// 					{ type: 'item', index: 2, pos: [122, 47] },
// 					{ type: 'item', index: 3, pos: [104, 47] },
// 				],
// 			})
// =============================================================================
// 		);
// });
