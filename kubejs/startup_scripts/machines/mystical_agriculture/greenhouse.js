
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

    event.create('mystical_greenhouse', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            builder
                .recipeType('greenhouse_growing')
                .workableTieredHullRenderer('gtceu:block/machines/extruder')
        });

});