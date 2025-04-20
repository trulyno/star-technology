GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('auto_scavenger')
        .category('auto_scavenger')
        .setEUIO('in')
        .setMaxIOSize(1, 3, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('auto_scavenger', 'simple')
    .tiers(GTValues.ULV)
    .definition((tier, builder) =>{
    builder
        .recipeType('auto_scavenger')
        .workableCasingRenderer('create:block/brass_casing', 'gtceu:block/machines/rock_crusher', false)
    });
});