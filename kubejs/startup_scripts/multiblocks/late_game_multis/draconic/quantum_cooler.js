
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('super_cooler')
        .category('super_cooler')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('super_cooler', 'simple')
        .tiers(GTValues.UEV)
        .definition((tier, builder) => {
            return builder
                .recipeType('super_cooler')
                .workableTieredHullRenderer("gtceu:block/machines/electric_furnace")
        }
    );

});