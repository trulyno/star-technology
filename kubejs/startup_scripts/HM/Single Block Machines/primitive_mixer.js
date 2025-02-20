
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_mixer')
        .category('primitive_mixer')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_mixer', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
        builder
            .recipeType('primitive_mixer')
            .workableCasingRenderer('minecraft:block/cobblestone', 'gtceu:block/machines/mixer', false)
      )
});