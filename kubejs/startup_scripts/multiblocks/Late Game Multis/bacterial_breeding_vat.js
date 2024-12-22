
// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('bacterial_breeding_vat')
//         .category('bacterial_breeding_vat')
//         .setEUIO('in')
//         .setMaxIOSize(2, 3, 3, 0)
//         .setSound(GTSoundEntries.CHEMICAL);
// });

// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('bacterial_breeding_vat', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('bacterial_breeding_vat')
//         .pattern(definition => FactoryBlockPattern.start()

//             .aisle('  FFFFF  ','    T    ','    T    ','  TTTTT  ','         ','         ','         ','         ')
//             .aisle(' FFKKKFF ',' T KKK T ',' T KKK T ',' TTKKKTT ','   KKK   ','   KMK   ','   KMK   ','   KKK   ')
//             .aisle('FFKKKKKFF','  K   K  ','  K P K  ','TTK   KTT','  K P K  ','  MK KM  ','  MKKKM  ','  K   K  ')
//             .aisle('FKKKKKKKF',' K     K ',' K  P  K ','TK     KT',' K  P  K ',' KK   KK ',' KKGGGKK ',' K     K ')
//             .aisle('FKKKKKKKF','TKPPPPPKT','TK  P  KT','TKPPPPPKT',' K  P  K ','MKPPPPPKM',' MKGGGKM ',' K     K ')
//             .aisle('FKKKKKKKF',' K     K ',' K  P  K ','TK     KT',' K  P  K ',' KK   KK ',' KKGGGKK ',' K     K ')
//             .aisle('FFKKKKKFF','  K   K  ','  K P K  ','TTK   KTT','  K P K  ','  MK KM  ','  MKKKM  ','  K   K  ')
//             .aisle(' FFKKKFF ',' T KKK T ',' T KKK T ',' TTKKKTT ','   KKK   ','   KCK   ','   KMK   ','   KKK   ')
//             .aisle('  FFFFF  ','    T    ','    T    ','  TTTTT  ','         ','         ','         ','         ')
//             .where('C', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('K', Predicates.blocks('kubejs:peek_casing'))
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes()))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//             .where('F', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
//             .where('S', Predicates.blocks(GTBlocks.FILTER_CASING_STERILE.get()))
//             .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))     
//             .where('M', Predicates.blocks(GCyMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()))
//             .where('G', Predicates.blocks('gtceu:laminated_glass'))
//             .where('T', Predicates.blocks('gtceu:trinaquadalloy_frame'))
//             .where(' ', Predicates.any())
//             .build())
//         .workableCasingRenderer("kubejs:block/casings/machine_casing_peek",
//         "gtceu:block/multiblock/large_chemical_reactor", false);
// });