global.recipe_types(event => {
    event.create('composting')
        .category('composting')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

global.machines(event => {
    event.create('advanced_composter', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
                .recipeType('composting')
                .workableCasingRenderer('minecraft:block/stripped_dark_oak_log', 'gtceu:block/machines/advanced_composter', false);
        }
    );
});