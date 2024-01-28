
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('essence_burning')
        .category('essence')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Greenhouse
    event.create('essence_burner', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType('essence_burning', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/cutter");

});