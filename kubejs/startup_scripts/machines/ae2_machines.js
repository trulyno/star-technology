GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('me_circuit_assembler')
        .category('me_circuit_assembler')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

    event.create('me_core_assembler')
        .category('me_core_assembler')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('me_circuit_assembler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV)
        .definition((tier, builder) => {
            builder
                .recipeType('me_circuit_assembler')
                .workableTieredHullRenderer("gtceu:block/machines/circuit_assembler")
        }
    );

    event.create('me_core_assembler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV)
        .definition((tier, builder) => {
            return builder
                .recipeType('me_core_assembler')
                .workableTieredHullRenderer("gtceu:block/machines/assembler")
        }
    );

});