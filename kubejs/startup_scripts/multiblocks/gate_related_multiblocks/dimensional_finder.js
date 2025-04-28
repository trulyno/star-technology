GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('dimensional_finder')
        .category('dimensional_finder')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_REPLICATOR , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('dimensional_finder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS) //Need to add a cant be rotated at all later on
        .recipeType('dimensional_finder')
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('VVHVVVVVHVV', 'VVHHHHHHHVV', '           ', '           ', '           ', 'SS       SS', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
            .aisle('VHHHVHVHHHV', 'VHHVVVVVHHV', ' T       T ', ' T       T ', ' T       T ', 'SSSSSSSSSSS', '           ', '           ', '           ', ' SS     SS ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '   B   B   ', '     B     ', '   B   B   ', '           ', '           ', '           ', '           ')
            .aisle('HHHHHHHHHHH', 'HHHHHHHHHHH', '           ', '           ', '           ', ' SSSSSSSSS ', '  T     T  ', '  T     T  ', '  T     T  ', ' SSSSSSSSS ', '           ', '           ', '           ', '  SS   SS  ', '           ', '           ', '           ', '           ', '           ', '           ', ' B       B ', '           ', '           ', '           ', ' B       B ', '           ', '           ', '           ')
            .aisle('VHHHHHHHHHV', 'HVHSAAASHVH', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', ' SSSAAASSS ', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', '  SSAAASS  ', '   TXXXT   ', '   TCCCT   ', '   TXXXT   ', '  SSAAASS  ', '           ', '           ', '           ', '   SS SS   ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
            .aisle('VVHHHHHHHVV', 'HVHAFFFAHVH', '   XTPTX   ', '   CEEEC   ', '   XTPTX   ', ' SSATPTASS ', '   XTPTX   ', '   CWWWC   ', '   XTPTX   ', '  SATPTAS  ', '   XTPTX   ', '   CDDDC   ', '   XTPTX   ', '   ATPTA   ', '    TPT    ', '    TMT    ', '    TPT    ', '   SSASS   ', '           ', 'B         B', '     G     ', '    GGG    ', '    GGG    ', '    GGG    ', '    GGG    ', 'B    G    B', '           ', '           ')
            .aisle('VHHHHHHHHHV', 'HVHAFFFAHVH', '   XPFPX   ', '   CEFEC   ', '   XPFPX   ', ' SSAPFPASS ', '   XPFPX   ', '   CWFWC   ', '   XPFPX   ', '  SAPFPAS  ', '   XPFPX   ', '   CDFDC   ', '   XPFPX   ', '   APFPA   ', '    PFP    ', '    MFM    ', '    PFP    ', '    AFA    ', '     G     ', '     G     ', '    GGG    ', '   GGGGG   ', '   GGLGG   ', '   GGLGG   ', '   GGGGG   ', '    GGG    ', '     G     ', '     G     ')
            .aisle('VVHHHHHHHVV', 'HVHAFFFAHVH', '   XTPTX   ', '   CEEEC   ', '   XTPTX   ', ' SSATPTASS ', '   XTPTX   ', '   CWWWC   ', '   XTPTX   ', '  SATPTAS  ', '   XTPTX   ', '   CDDDC   ', '   XTPTX   ', '   ATPTA   ', '    TPT    ', '    TMT    ', '    TPT    ', '   SSASS   ', '           ', 'B         B', '     G     ', '    GGG    ', '    GGG    ', '    GGG    ', '    GGG    ', 'B    G    B', '           ', '           ')
            .aisle('VHHHHHHHHHV', 'HVHSAAASHVH', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', ' SSSAAASSS ', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', '  SSAAASS  ', '   TXXXT   ', '   TCCCT   ', '   TXXXT   ', '  SSAAASS  ', '           ', '           ', '           ', '   SS SS   ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
            .aisle('HHHHHHHHHHH', 'HHHHHHHHHHH', '           ', '           ', '           ', ' SSSSSSSSS ', '  T     T  ', '  T     T  ', '  T     T  ', ' SSSSSSSSS ', '           ', '           ', '           ', '  SS   SS  ', '           ', '           ', '           ', '           ', '           ', '           ', ' B       B ', '           ', '           ', '           ', ' B       B ', '           ', '           ', '           ')
            .aisle('VHHHVHVHHHV', 'VHHHVVVHHHV', ' T       T ', ' T       T ', ' T       T ', 'SSSSSSSSSSS', '           ', '           ', '           ', ' SS     SS ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '   B   B   ', '     B     ', '   B   B   ', '           ', '           ', '           ', '           ')
            .aisle('VVHVVVVVHVV', 'VVHHHKHHHVV', '           ', '           ', '           ', 'SS       SS', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('H', Predicates.blocks('gtceu:high_temperature_smelting_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('T', Predicates.blocks('gtceu:trinaquadalloy_frame'))
            .where('S', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where('A', Predicates.blocks('gtceu:advanced_computer_casing'))
            .where('F', Predicates.blocks(GTBlocks.FUSION_COIL.get()))
            .where('X', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('E', Predicates.blocks('kubejs:enderium_casing'))
            .where('W', Predicates.blocks('kubejs:twinite_casing'))
            .where('M', Predicates.blocks('kubejs:melodium_casing'))
            .where('D', Predicates.blocks('kubejs:dragonsteel_casing'))
            .where('L', Predicates.blocks('kubejs:stellarium_casing'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('C', Predicates.blocks('gtceu:computer_heat_vent'))
            .where('B', Predicates.blocks('gtceu:superconducting_coil'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/high_temperature_smelting_casing',
            'gtceu:block/machines/scanner', false);
            
});