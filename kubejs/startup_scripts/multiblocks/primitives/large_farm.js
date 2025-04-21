GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('large_farm')
        .category('large_farm')
        .setMaxIOSize(1, 2, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SAW_TOOL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('large_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_farm')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('PPPPP', 'F   F', 'F   F', ' FFF ')
            .aisle('PDDDP', '     ', '     ', 'F   F')
            .aisle('PDWDP', '     ', '     ', 'F   F')
            .aisle('PDDDP', '     ', '     ', 'F   F')
            .aisle('PPCPP', 'F   F', 'F   F', ' FFF ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)))          
            .where('D', Predicates.blocks('minecraft:farmland'))
            .where('F', Predicates.blocks('gtceu:treated_wood_frame'))
            .where('W', Predicates.fluids('minecraft:water'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/treated_wood_planks',
        'gtceu:block/machines/cutter', false);

});