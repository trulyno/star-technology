GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('runic_circuitry_assembling_station')
        .category('runic_circuitry_assembling_station')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('runic_circuitry_assembling_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('runic_circuitry_assembling_station')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:lumium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBBBA', 'ABBCBBA', 'ABBBBBA', '#ABBBA#', '#######', '#######', '#######', '#ABBBA#', 'ABDDDBA', 'ABDDDBA', 'ABDDDBA', '#ABBBA#') 
            .aisle('BEEEEEB', 'BFGHGFB', 'BFEEEFB', 'AFIIIFA', '#AJJJA#', '#AJJJA#', '#AJJJA#', 'AFIIIFA', 'BFEEEFB', 'BFGHGFB', 'BFEEEFB', 'ABBBBBA') 
            .aisle('BEEEEEB', 'BGGHGGB', 'BEEEEEB', 'BI   IB', '#J   J#', '#J   J#', '#J   J#', 'BI   IB', 'DEEEEED', 'DGGHGGD', 'DEEEEED', 'BBBBBBB') 
            .aisle('BEEEEEB', 'CHHKHHC', 'BEEHEEB', 'BI L IB', '#J M J#', '#J N J#', '#J M J#', 'BI L IB', 'DEEHEED', 'DHHKHHD', 'DEEEEED', 'BBBBBBB') 
            .aisle('BEEEEEB', 'BGGHGGB', 'BEEEEEB', 'BI   IB', '#J   J#', '#J   J#', '#J   J#', 'BI   IB', 'DEEEEED', 'DGGHGGD', 'DEEEEED', 'BBBBBBB') 
            .aisle('BEEEEEB', 'BFGHGFB', 'BFEEEFB', 'AFIIIFA', '#AJJJA#', '#AJJJA#', '#AJJJA#', 'AFIIIFA', 'BFEEEFB', 'BFGHGFB', 'BFEEEFB', 'ABBBBBA') 
            .aisle('ABBBBBA', 'ABB@BBA', 'ABBBBBA', '#ABBBA#', '#######', '#######', '#######', '#ABBBA#', 'ABDDDBA', 'ABDDDBA', 'ABDDDBA', '#ABBBA#') 
            .where('A', Predicates.blocks('gtceu:melodium_frame'))
            .where('B', Predicates.blocks('kubejs:lumium_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)))
            .where('C', Predicates.blocks('kubejs:lumium_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1)))
            .where('#', Predicates.any())
            .where(' ', Predicates.blocks('minecraft:air'))
            .where('D', Predicates.blocks('gtceu:naquadah_coil_block'))
            .where('E', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('F', Predicates.blocks('gtceu:high_power_casing'))
            .where('G', Predicates.blocks('gtceu:advanced_computer_casing'))
            .where('H', Predicates.blocks('gtceu:assembly_line_unit'))
            .where('I', Predicates.blocks('gtceu:fusion_coil'))
            .where('J', Predicates.blocks('gtceu:fusion_glass'))
            .where('K', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('L', Predicates.blocks('kubejs:stellarium_casing'))
            .where('M', Predicates.blocks('thermal_extra:dragonsteel_glass'))
            .where('N', Predicates.blocks('kubejs:laser_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('kubejs:block/casings/superconductors/casing-lumium',
            'gtceu:block/multiblock/implosion_compressor', false);
            
});