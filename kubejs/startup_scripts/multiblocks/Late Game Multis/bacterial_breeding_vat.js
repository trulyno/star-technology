
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('bacterial_breeding_vat')
        .category('bacterial_breeding_vat')
        .setEUIO('in')
        .setMaxIOSize(3, 6, 3, 0)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bacterial_breeding_vat', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bacterial_breeding_vat')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('  FFFFF  ', '    T    ', '    T    ', '  TTTTT  ', '         ', '         ', '         ', '         ','  KKKKK  ')
            .aisle(' FFKKKFF ', ' T KKK T ', ' T KKK T ', ' TTKKKTT ', '   KKK   ', '   KMK   ', '   KMK   ', '   KKK   ',' KK   KK ')
            .aisle('FFKKKKKFF', '  K   K  ', '  K P K  ', 'TTK   KTT', '  K P K  ', '  MK KM  ', '  MKKKM  ', '  K   K  ','KK     KK')
            .aisle('FKKKKKKKF', ' K     K ', ' K  P  K ', 'TK     KT', ' K  P  K ', ' KK   KK ', ' KKGGGKK ', ' K     K ','K       K')
            .aisle('FKKKKKKKF', 'TKPPPPPKT', 'TK  P  KT', 'TKPPPPPKT', ' K  P  K ', ' MPPPPPM ', ' MKGGGKM ', ' K     K ','K       K')
            .aisle('FKKKKKKKF', ' K     K ', ' K  P  K ', 'TK     KT', ' K  P  K ', ' KK   KK ', ' KKGGGKK ', ' K     K ','K       K')
            .aisle('FFKKKKKFF', '  K   K  ', '  K P K  ', 'TTK   KTT', '  K P K  ', '  MK KM  ', '  MKKKM  ', '  K   K  ','KK     KK')
            .aisle(' FFKKKFF ', ' T KKK T ', ' T KKK T ', ' TTKKKTT ', '   KKK   ', '   KCK   ', '   KKK   ', '   KKK   ',' KK   KK ')
            .aisle('  FFFFF  ', '    T    ', '    T    ', '  TTTTT  ', '         ', '         ', '         ', '         ','  KKKKK  ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('K', Predicates.blocks('kubejs:peek_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('F', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))     
            .where('M', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('T', Predicates.blocks('gtceu:trinaquadalloy_frame'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/casings/machine_casing_peek",
        "gtceu:block/multiblock/large_chemical_reactor", false);
});