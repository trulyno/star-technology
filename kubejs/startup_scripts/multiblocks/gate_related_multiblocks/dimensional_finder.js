
//Premise being you actually need to find the next dimensions

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('dimensional_finder')
        .category('dimensional_finder')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 0)
        .setSound(GTSoundEntries.ARC);
});

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('dimensional_finder', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('dimensional_finder')
//         .appearanceBlock(GTBlocks.CASING_STURDY)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('VVHVVVVVHVV', 'VVHHHHHHHVV', '           ', '           ', '           ', 'SS       SS', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .aisle('VHHHHHHHHHV', 'VHHHVVVHHHV', ' T       T ', ' T       T ', ' T       T ', 'SSSSSKSSSSS', '           ', '           ', '           ', ' SS     SS ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .aisle('HHHHHHHHHHH', 'HHHHHHHHHHH', '           ', '           ', '           ', ' SSSSSSSSS ', '  T     T  ', '  T     T  ', '  T     T  ', ' SSSSSSSSS ', '           ', '           ', '           ', '  SS   SS  ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .aisle('VHHHHHHHHHV', 'HVHSAAASHVH', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', ' SSSAAASSS ', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', '  SSAAASS  ', '   TXXXT   ', '   TCCCT   ', '   TXXXT   ', '  SSAAASS  ', '           ', '           ', '           ', '   SS SS   ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .aisle('VVHHHHHHHVV', 'HVHAFFFAHVH', '   XTPTX   ', '   CEEEC   ', '   XTPTX   ', ' SSATPTASS ', '   XTPTX   ', '   CWWWC   ', '   XTPTX   ', '  SATPTAS  ', '   XTPTX   ', '   CDDDC   ', '   XTPTX   ', '   ATPTA   ', '    TPT    ', '    TMT    ', '    TPT    ', '   SSASS   ', '           ', '           ', '     G     ', '    GGG    ', '    GGG    ', '    GGG    ', '    GGG    ', '     G     ', '           ', '           ')
//             .aisle('VHHHHHHHHHV', 'HVHAFFFAHVH', '   XPFPX   ', '   CEFEC   ', '   XPFPX   ', ' SSAPFPASS ', '   XPFPX   ', '   CWFWC   ', '   XPFPX   ', '  SAPFPAS  ', '   XPFPX   ', '   CDFDC   ', '   XPFPX   ', '   APFPA   ', '    PFP    ', '    TFT    ', '    PFP    ', '    AFA    ', '     G     ', '     G     ', '    GGG    ', '   GGGGG   ', '   GGLGG   ', '   GGLGG   ', '   GGGGG   ', '    GGG    ', '     G     ', '     G     ')
//             .aisle('VVHHHHHHHVV', 'HVHAFFFAHVH', '   XTPTX   ', '   CEEEC   ', '   XTPTX   ', ' SSATPTASS ', '   XTPTX   ', '   CWWWC   ', '   XTPTX   ', '  SATPTAS  ', '   XTPTX   ', '   CDDDC   ', '   XTPTX   ', '   ATPTA   ', '    TPT    ', '    TMT    ', '    TPT    ', '   SSASS   ', '           ', '           ', '     G     ', '    GGG    ', '    GGG    ', '    GGG    ', '    GGG    ', '     G     ', '           ', '           ')
//             .aisle('VHHHHHHHHHV', 'HVHSAAASHVH', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', ' SSSAAASSS ', '   SXXXS   ', '   SCCCS   ', '   SXXXS   ', '  SSAAASS  ', '   TXXXT   ', '   TCCCT   ', '   TXXXT   ', '  SSAAASS  ', '           ', '           ', '           ', '   SS SS   ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .aisle('HHHHHHHHHHH', 'HHHHHHHHHHH', '           ', '           ', '           ', ' SSSSSSSSS ', '  T     T  ', '  T     T  ', '  T     T  ', ' SSSSSSSSS ', '           ', '           ', '           ', '  SS   SS  ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .aisle('VHHHHHHHHHV', 'VHHHVVVHHHV', ' T       T ', ' T       T ', ' T       T ', 'SSSSSSSSSSS', '           ', '           ', '           ', ' SS     SS ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .aisle('VVHVVVVVHVV', 'VVHHHHHHHVV', '           ', '           ', '           ', 'SS       SS', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ', '           ')
//             .where('V', Predicates.blocks(GCyMBlocks.HEAT_VENT.get()))
//             .where('H', Predicates.blocks(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING.get())
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes()))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
//             .where('T', Predicates.blocks('gtceu:trinaquadalloy_frame'))
//             .where('S', Predicates.blocks(GTBlocks.CASING_STURDY)) //('gtceu:sturdy_machine_casing')
//             .where('A', Predicates.any()) //blocks('gtceu:advanced_computer_casing'))
//             .where('F', Predicates.blocks(GTBlocks.FUSION_COIL.get()))
//             .where('X', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
//             .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
//             .where('K', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('E', Predicates.blocks('kubejs:enderium_casing'))
//             .where('W', Predicates.blocks('kubejs:twinite_casing'))
//             .where('M', Predicates.blocks('kubejs:melodium_casing'))
//             .where('D', Predicates.blocks('kubejs:dragonsteel_casing'))
//             .where('L', Predicates.blocks('kubejs:stellarium_casing'))
//             .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
//             .where('C', Predicates.any()) //.blocks('gtceu:computer_heat_vent'))
//             .where(' ', Predicates.any())
//             .build())
//         .workableCasingRenderer("kubejs:block/casings/casing-prismalium", //to be adjusted to sturdy casing
//             "gtceu:block/multiblock/implosion_compressor", false);
// });