
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse_growing')
        .category('greenhouse')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Greenhouse
    event.create('mystical_greenhouse', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType('greenhouse_growing', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/extruder");

});