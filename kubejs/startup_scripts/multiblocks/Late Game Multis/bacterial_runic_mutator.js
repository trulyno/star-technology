
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('bacterial_runic_mutator')
        .category('bacterial_runic_mutator')
        .setEUIO('in')
        .setMaxIOSize(3, 6, 3, 0)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bacterial_runic_mutator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bacterial_runic_mutator')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('   KKKKK   ','   KKKKK   ','           ','           ','           ','           ','           ','           ','           ','           ','           ','           ','           ')
            .aisle(' KKKKKKKKK ',' KKKKKKKKK ','           ','           ','           ','           ','           ','  AA   AA  ','  AAAAAAA  ','  AAAAAAA  ','  AAAAAAA  ','   AAAAA   ','           ')
            .aisle(' KTMMMMMTK ',' KTHHHHHTK ','  T     T  ','  T     T  ','  T     T  ','  T     T  ','  T     T  ',' ATT   TTA ',' AT TTT TA ',' ATCSSSCTA ',' AT  T  TA ','  AA T AA  ','   AAAAA   ')
            .aisle('KKMMFFFMMKK','KKHHGGGHHKK','           ','           ','           ','           ','           ',' AT     TA ',' A   T   A ',' ACCCSCCCA ',' A       A ',' AA     AA ','  AAAAAAA  ')
            .aisle('KKMFFFFFMKK','KKHGGGGGHKK','           ','           ','           ','           ','           ','     T     ',' AT  S  TA ',' ASCCCCCSA ',' A       A ',' A       A ','  AAAAAAA  ')
            .aisle('KKMFFKFFMKK','KKHGGKGGHKK','     K     ','           ','     *     ','     C     ','     C     ','    TCT    ',' ATTSFSTTA ',' ASSCTCSSA ',' AT  T  TA ',' AT  T  TA ','  AAAAAAA  ')
            .aisle('KKMFFFFFMKK','KKHGGGGGHKK','           ','           ','           ','           ','           ','     T     ',' AT  S  TA ',' ASCCCCCSA ',' A       A ',' A       A ','  AAAAAAA  ')
            .aisle('KKMMFFFMMKK','KKHHGGGHHKK','           ','           ','           ','           ','           ',' AT     TA ',' A   T   A ',' ACCCSCCCA ',' A       A ',' AA     AA ','  AAAAAAA  ')
            .aisle(' KTMMMMMTK ',' KTHHHHHTK ','  T     T  ','  T     T  ','  T     T  ','  T     T  ','  T     T  ',' ATT   TTA ',' AT TTT TA ',' ATCSSSCTA ',' AT  T  TA ','  AA T AA  ','   AAAAA   ')
            .aisle(' KKKKKKKKK ',' KKKKKKKKK ','           ','           ','           ','           ','           ','  AA   AA  ','  AAAAAAA  ','  AAAAAAA  ','  AAAAAAA  ','   AAAAA   ','           ')
            .aisle('   KKKKK   ','   KK#KK   ','           ','           ','           ','           ','           ','           ','           ','           ','           ','           ','           ')

            .where('#', Predicates.controller(Predicates.blocks(definition.get())))
            .where('K', Predicates.blocks('kubejs:peek_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('A', Predicates.blocks('gtceu:atomic_casing'))
            .where('T', Predicates.blocks('gtceu:trinaquadalloy_frame'))
            .where('M', Predicates.blocks('gtceu:fusion_casing_mk3'))
            .where('C', Predicates.blocks('gtceu:high_power_casing'))
            .where('S', Predicates.blocks('gtceu:sterilizing_filter_casing'))
            .where('H', Predicates.blocks('gtceu:heat_vent'))
            .where('F', Predicates.blocks('gtceu:fusion_coil'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('*', Predicates.blocks('thermal_extra:shellite_glass'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/casings/machine_casing_peek",
        "gtceu:block/multiblock/implosion_compressor", false);
});