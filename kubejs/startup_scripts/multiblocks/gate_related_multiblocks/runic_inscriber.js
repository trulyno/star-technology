
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('runic_enscibe_manipulate')
        .category('runic_enscibe_manipulate')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Greenhouse
    event.create('runic_enscibe_manipulate', 'simple')
    .tiers(GTValues.UHV)
    .definition((tier, builder) => {
        builder
        .recipeType('runic_enscibe_manipulate')
        .workableTieredHullRenderer("gtceu:block/machines/extruder");
    })
});