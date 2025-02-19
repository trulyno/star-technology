
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('essence_burning')
        .category('essence')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
    
});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('essence_burner', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            builder
                .recipeType('essence_burning')
                .workableTieredHullRenderer('gtceu:block/machines/cutter');
        });

});