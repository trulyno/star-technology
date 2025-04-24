GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('nuclear_fission')
        .category('nuclear_fission')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('nuclear_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_fission')
        .generator(true)
        .regressWhenWaiting(false)
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHHHH','VHGHV','VHGHV','VHGHV','HHHHH')
            .aisle('HHHHH','H   H','H   H','H   H','HHHHH')
            .aisle('HHHHH','G P G','G P G','G P G','HHHHH')
            .aisle('HHHHH','H   H','H   H','H   H','HHHHH')
            .aisle('HHCHH','VHGHV','VHGHV','VHGHV','HHHHH')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)))
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where(' ', Predicates.air())
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/high_temperature_smelting_casing',
        'gtceu:block/multiblock/implosion_compressor', false);
        
});