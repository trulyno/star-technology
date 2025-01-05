
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('barrel')
        .category('barrel')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('barrel_composting')
        .category('barrel_composting')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('barrel_transformation')
        .category('barrel_transformation')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
        builder
            .recipeTypes('barrel','barrel_composting','barrel_transformation')
            .workableCasingRenderer('minecraft:block/stripped_oak_log', 'gtceu:block/machines/centrifuge', false)
      )
});