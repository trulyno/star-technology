global.recipe_types(event => {
    event.create('greenhouse_growing')
        .category('greenhouse')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
    
    event.create('essence_burning')
        .category('essence')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

global.machines(event => {
    event.create('mystical_greenhouse', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            return builder
                .recipeType('greenhouse_growing')
                .workableTieredHullRenderer("gtceu:block/machines/extruder")
        }
    );

    event.create('essence_burner', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            return builder
                .recipeType('essence_burning')
                .workableTieredHullRenderer("gtceu:block/machines/cutter")
        }
    );
});