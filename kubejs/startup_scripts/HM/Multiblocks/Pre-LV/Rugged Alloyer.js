// // const $UI = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.primitive.PrimitiveWorkableMachine');
// // const items = Java.loadClass('com.gregtechceu.gtceu.api.machine.trait.NotifiableItemStackHandler');
// // const fluids = Java.loadClass('com.gregtechceu.gtceu.api.machine.trait.NotifiableFluidTank');
// const $ModularUI = Java.loadClass('com.lowdragmc.lowdraglib.gui.modular.ModularUI');
// const $LabelWidget = Java.loadClass('com.lowdragmc.lowdraglib.gui.widget.LabelWidget');
// const $ProgressWidget = Java.loadClass('com.lowdragmc.lowdraglib.gui.widget.ProgressWidget');
// const $GuiTextureGroup = Java.loadClass('com.lowdragmc.lowdraglib.gui.texture.GuiTextureGroup');

// const $SlotWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.SlotWidget');
// const $UITemplate = Java.loadClass('com.gregtechceu.gtceu.api.gui.UITemplate');

// function createUI(entityPlayer) {
//     return new $ModularUI(176, 166, this, entityPlayer)
//         .background(GuiTextures.PRIMITIVE_BACKGROUND)
//         .widget(new $LabelWidget(5, 5, getBlockState().getBlock().getDescriptionId()))
//         .widget(new $SlotWidget(importItems.storage, 0, 52, 20, true, true)
//             .setBackgroundTexture(
//                 new $GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_INGOT_OVERLAY)))
//         .widget(new $SlotWidget(importItems.storage, 1, 52, 38, true, true)
//             .setBackgroundTexture(
//                 new $GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_DUST_OVERLAY)))
//         .widget(new $SlotWidget(importItems.storage, 2, 52, 56, true, true)
//             .setBackgroundTexture(
//                 new $GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_FURNACE_OVERLAY)))
//         .widget(new $ProgressWidget(() => recipeLogic.getProgressPercent(), 77, 39, 20, 15,
//             GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR))
//         .widget(new $SlotWidget(exportItems.storage, 0, 104, 38, true, false)
//             .setBackgroundTexture(
//                 new $GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_INGOT_OVERLAY)))
//         .widget(new $SlotWidget(exportItems.storage, 1, 122, 38, true, false)
//             .setBackgroundTexture(
//                 new $GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_DUST_OVERLAY)))
//         .widget(new $SlotWidget(exportItems.storage, 2, 140, 38, true, false)
//             .setBackgroundTexture(
//                 new $GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_DUST_OVERLAY)))
//         .widget($UITemplate.bindPlayerInventory(entityPlayer.getInventory(), GuiTextures.PRIMITIVE_SLOT, 7, 84,
//             true));
// };

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rugged_alloyer')
        .category('rugged_alloyer')
        .setMaxIOSize(3, 2, 0, 0)
        .setSound(GTSoundEntries.FURNACE)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rugged_alloyer', 'multiblock')
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
		.workableCasingRenderer("kubejs:block/hm/reinforced_stone_bricks",
			"gtceu:block/machines/electric_furnace", false);
});