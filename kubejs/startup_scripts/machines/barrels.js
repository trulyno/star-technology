
global.recipe_types(event => {
    event.create('stone_barrel')
        .category('stone_barrel')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

    event.create('barrel')
        .category('barrel')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

    event.create('barrel_composting')
        .category('barrel_composting')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

    event.create('barrel_transformation')
        .category('barrel_transformation')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
})

global.machines(event => {
    event.create('stone_barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
            .recipeType('stone_barrel')
            .workableCasingRenderer('minecraft:block/stone', 'gtceu:block/machines/item_collector', false);
        }
    );

    event.create('barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
            .recipeTypes('barrel','barrel_composting','barrel_transformation')
            .workableCasingRenderer('minecraft:block/stripped_oak_log', 'gtceu:block/machines/item_collector', false);
        }
    );
});
