
global.recipe_types(event => {
    event.create('hellforge')
        .category('hellforge')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 8, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
    
});

global.machines(event => {
    event.create('hellforge', 'simple')
        .tiers(GTValues.UEV)
        .definition((tier, builder) => {
            return builder
                .recipeType('hellforge')
                .workableTieredHullRenderer("gtceu:block/machines/electric_furnace")
        }
    );

});