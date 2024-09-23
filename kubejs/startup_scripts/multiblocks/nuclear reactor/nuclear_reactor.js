// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('nuclear_reactor')
//         .category('nuclear_reactor')
//         .setEUIO('out')
//         .setMaxIOSize(2, 1, 1, 1)
//         .setSound(GTSoundEntries.ARC);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('nuclear_reactor', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('nuclear_reactor')
//         // .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('  HHH SSS HHH  ', '   H  SSS  H   ', '      SSS      ', '      SSS      ', '      SSS      ', '      SSS      ', '      SSS      ', '      SSS      ', '      SSS      ', '   H  SSS  H   ', '  HHH SSS HHH  ')
//             .aisle('  HHH SSS HHH  ', '  HHH  H  HHH  ', '   F   F   F   ', '   F   H   F   ', '   F   H   F   ', '   F   H   F   ', '   F   H   F   ', '   F   H   F   ', '   F   F   F   ', '  HHH  H  HHH  ', '  HHH SSS HHH  ')
//             .aisle('  HHHHHHHHHHH  ', '   H  NNN  H   ', '     NNNNN     ', '     NNNNN     ', '     NNNNN     ', '     NNNNN     ', '     NNNNN     ', '     NNNNN     ', '     NNNNN     ', '   H  NNN  H   ', '  HHHHHHHHHHH  ')
//             .aisle('    HHHHHHH    ', '     NNNNN     ', '    NIIIIIN    ', '    NIIIIIN    ', '    NIIIIIN    ', '    NIIIIIN    ', '    NIIIIIN    ', '    NIIIIIN    ', '    NIIIIIN    ', '     NNNNN     ', '    HHHHHHH    ')
//             .aisle('CCC HHHHHHH CCC', ' C  NNNNNNN  C ', ' C  NIIIIIN  C ', ' C  NIB BIN  C ', ' C  NIB BIN  C ', ' CCCNIB BINCCC ', ' C  NIB BIN  C ', ' C  NIB BIN  C ', ' C  NIIIIIN  C ', ' C  NNNNNNN  C ', 'CCC HHHHHHH CCC')
//             .aisle('COC HHHHHHH COC', 'CPC NNNNNNN CPC', 'CPC NIIIIIN CPC', 'CPC NI B IN CPC', 'CPCCNI B INCCPC', 'CPPPNI B INPPPC', 'CPCCNI B INCCPC', 'CPC NI B IN CPC', 'CPC NIIIIIN CPC', 'CPC NNNNNNN CPC', 'COC HHHHHHH COC')
//             .aisle('CCC HHHHHHH CCC', ' C  NNNNNNN  C ', ' C  NIIIIIN  C ', ' C  NIB BIN  C ', ' C  NIB BIN  C ', ' CCCNIB BINCCC ', ' C  NIB BIN  C ', ' C  NIB BIN  C ', ' C  NIIIIIN  C ', ' C  NNNNNNN  C ', 'CCC HHHHHHH CCC')
//             .aisle('    HHHHHHH    ', '     NNNNN     ', '    NIIIIIN    ', '    NIIIIIN    ', '    NIITIIN    ', '    NIITIIN    ', '    NIITIIN    ', '    NIITIIN    ', '    NIITIIN    ', '     NNNNN     ', '    HHHHHHH    ')
//             .aisle('  HHHHHHHHHHH  ', '   H  NNN  H   ', '     NNTNN     ', '     NTTTN     ', '     NTTTN     ', '     NTTTN     ', '     NTTTN     ', '     NTTTN     ', '     NNTNN     ', '   H  NNN  H   ', '  HHHHHHHHHHH  ')
//             .aisle('  HHH SSS HHH  ', '  HHH  K  HHH  ', '   F       F   ', '   F       F   ', '   F       F   ', '   F       F   ', '   F       F   ', '   F       F   ', '   F       F   ', '  HHH     HHH  ', '  HHH     HHH  ')
//             .aisle('  HHH     HHH  ', '   H       H   ', '               ', '               ', '               ', '               ', '               ', '               ', '               ', '   H       H   ', '  HHH     HHH  ')
//             .where('K', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('N', Predicates.blocks('kubejs:austenitic_stainless_steel_304_casing'))
//             .where('F', Predicates.blocks('gtceu:blue_steel_frame'))
//             .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get()))
//             .where('B', Predicates.blocks('gtceu:beryllium_block'))
//             .where('H', Predicates.blocks(GTBlocks.CASING_INVAR_HEATPROOF.get()))
//             .where('I', Predicates.blocks('kubejs:inconel_625_casing'))
//             .where('T', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
//             .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
//                 .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//                 .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)))
//             .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
//             .where('O', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setMinGlobalLimited(1)
//                     .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setMinGlobalLimited(1))
//                     .or(Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())))
//             .where(' ', Predicates.air())
//             .build())
//         .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
//         "gtceu:block/multiblock/implosion_compressor", false);
// });
// 15 x 11 x 11
/* Materials:
    Nuclear Casing
    Blue Steel Frame
    Clean Stainless Steel Casing
    Graphite Block
    Heat Proof Invar Casing
    Inconel Casing
    Laminated Glass
    Solid Machine Casing
    Steel Pipe Casing
*/