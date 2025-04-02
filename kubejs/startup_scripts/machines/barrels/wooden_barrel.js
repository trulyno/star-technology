GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    ['barrel', 'barrel_composting', 'barrel_transformation'].forEach((name) => {
        event.create(name)
            .category('barrel')
            .setEUIO('in')
            .setMaxIOSize(1, 1, 1, 1)
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.BATH);
    });

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
            .recipeTypes('barrel','barrel_composting','barrel_transformation')
            .workableCasingRenderer('minecraft:block/stripped_oak_log', 'gtceu:block/machines/wooden_barrel', false);
        }
    );
    
});