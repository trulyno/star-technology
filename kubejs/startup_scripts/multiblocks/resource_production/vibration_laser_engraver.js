GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('vibration_laser_engraver')
        .category('vibration_laser_engraver')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('vibration_laser_engraver', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)    
        .recipeType('vibration_laser_engraver')
        .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('      BCCCB      ', '     DBCCCBD     ', '    DDBCCCBDD    ', '   DDBBCCCBBDD   ', '  DDBBBCCCBBBDD  ', ' DDBBEBBBBBEBBDD ', 'BBBBBBBDDDBBBBBBB', 'CCCCCBDDADDBCCCCC', 'CCCCCBDAAADBCCCCC', 'CCCCCBDDADDBCCCCC', 'BBBBBBBDDDBBBBBBB', ' DDBBEBBBBBEBBDD ', '  DDBBBCCCBBBDD  ', '   DDBBCCCBBDD   ', '    DDBCCCBDD    ', '     DBCCCBD     ', '      BCCCB      ') 
            .aisle('     DBCCCBD     ', '   BB   F   BB   ', '  BB    F    BB  ', ' BB     F     BB ', ' B             B ', 'D      GGG      D', 'B     GDDDG     B', 'C    GDDDDDG    C', 'CFFF GDDDDDG FFFC', 'C    GDDDDDG    C', 'B     GDDDG     B', 'D      GGG      D', ' B             B ', ' BB     F     BB ', '  BB    F    BB  ', '   BB   F   BB   ', '     DBCCCBD     ') 
            .aisle('    DDBCCCBDD    ', '  BB    F    BB  ', ' B             B ', ' B             B ', 'D               D', 'D               D', 'B      CCC      B', 'C     C H C     C', 'CF    CHIHC    FC', 'C     C H C     C', 'B      CCC      B', 'D               D', 'D               D', ' B             B ', ' B             B ', '  BB    F    BB  ', '    DDBCCCBDD    ') 
            .aisle('   DDBBCCCBBDD   ', ' BB     F     BB ', ' B             B ', 'D               D', 'D               D', 'B               B', 'B      CCC      B', 'C     C H C     C', 'CF    CHIHC    FC', 'C     C H C     C', 'B      CCC      B', 'B               B', 'D               D', 'D               D', ' B             B ', ' BB     F     BB ', '   DDBBCCCBBDD   ') 
            .aisle('  DDBBBCCCBBBDD  ', ' B             B ', 'D               D', 'D               D', 'B               B', 'B               B', 'B      CCC      B', 'C     C H C     C', 'C     CHIHC     C', 'C     C H C     C', 'B      CCC      B', 'B               B', 'B               B', 'D               D', 'D               D', ' B             B ', '  DDBBBCCCBBBDD  ') 
            .aisle(' DDBBEBBBBBEBBDD ', 'D      GGG      D', 'D               D', 'B               B', 'B               B', 'E               E', 'B      CCC      B', 'BG    C   C    GB', 'BG    C I C    GB', 'BG    C   C    GB', 'B      CCC      B', 'E               E', 'B               B', 'B               B', 'D               D', 'D      GGG      D', ' DDBBBBBBBBBBBDD ') 
            .aisle('BBBBBBBDDDBBBBBBB', 'B     GDDDG     B', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'BG     JJJ     GB', 'DDCCCCJ   JCCCCDD', 'DDCCCCJ I JCCCCDD', 'DDCCCCJ   JCCCCDD', 'BG     JJJ     GB', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'B     GDDDG     B', 'BBBBBBBDDDBBBBBBB') 
            .aisle('CCCCCBDDADDBCCCCC', 'C    GDDDDDG    C', 'C     C H C     C', 'C     C H C     C', 'C     C H C     C', 'BG    C   C    GB', 'DDCCCCJ   JCCCCDD', 'DD             DD', 'ADHHH       HHHDA', 'DD             DD', 'DDCCCCJ   JCCCCDD', 'BG    C   C    GB', 'C     C H C     C', 'C     C H C     C', 'C     C H C     C', 'C    GDDDDDG    C', 'CCCCCBDDADDBCCCCC') 
            .aisle('CCCCCBDAAADBCCCCC', 'CFFF GDDDDDG FFFC', 'CF    CHIHC    FC', 'CF    CHIHC    FC', 'C     CHIHC     C', 'BG    C I C    GB', 'DDCCCCJ I JCCCCDD', 'ADHHH       HHHDA', 'ADIIIII K IIIIIDA', 'ADHHH       HHHDA', 'DDCCCCJ I JCCCCDD', 'BG    C I C    GB', 'C     CHIHC     C', 'CF    CHIHC    FC', 'CF    CHIHC    FC', 'CFFF GDDDDDG FFFC', 'CCCCCBDAAADBCCCCC') 
            .aisle('CCCCCBDDADDBCCCCC', 'C    GDDDDDG    C', 'C     C H C     C', 'C     C H C     C', 'C     C H C     C', 'BG    C   C    GB', 'DDCCCCJ   JCCCCDD', 'DD             DD', 'ADHHH       HHHDA', 'DD             DD', 'DDCCCCJ   JCCCCDD', 'BG    C   C    GB', 'C     C H C     C', 'C     C H C     C', 'C     C H C     C', 'C    GDDDDDG    C', 'CCCCCBDDADDBCCCCC') 
            .aisle('BBBBBBBDDDBBBBBBB', 'B     GDDDG     B', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'BG     JJJ     GB', 'DDCCCCJ   JCCCCDD', 'DDCCCCJ I JCCCCDD', 'DDCCCCJ   JCCCCDD', 'BG     JJJ     GB', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'B      CCC      B', 'B     GDDDG     B', 'BBBBBBBDDDBBBBBBB') 
            .aisle(' DDBBEBBBBBEBBDD ', 'D      GGG      D', 'D               D', 'B               B', 'B               B', 'E               E', 'B      CCC      B', 'BG    C   C    GB', 'BG    C I C    GB', 'BG    C   C    GB', 'B      CCC      B', 'E               E', 'B               B', 'B               B', 'D               D', 'D      GGG      D', ' DDBBBBBBBBBBBDD ') 
            .aisle('  DDBBBCCCBBBDD  ', ' B             B ', 'D               D', 'D               D', 'B               B', 'B               B', 'B      CCC      B', 'C     C H C     C', 'C     CHIHC     C', 'C     C H C     C', 'B      CCC      B', 'B               B', 'B               B', 'D               D', 'D               D', ' B             B ', '  DDBBBCCCBBBDD  ') 
            .aisle('   DDBBCCCBBDD   ', ' BB     F     BB ', ' B             B ', 'D               D', 'D               D', 'B               B', 'B      CCC      B', 'C     C H C     C', 'CF    CHIHC    FC', 'C     C H C     C', 'B      CCC      B', 'B               B', 'D               D', 'D               D', ' B             B ', ' BB     F     BB ', '   DDBBCCCBBDD   ') 
            .aisle('    DDBCCCBDD    ', '  BB    F    BB  ', ' B             B ', ' B             B ', 'D               D', 'D               D', 'B      CCC      B', 'C     C H C     C', 'CF    CHIHC    FC', 'C     C H C     C', 'B      CCC      B', 'D               D', 'D               D', ' B             B ', ' B             B ', '  BB    F    BB  ', '    DDBCCCBDD    ') 
            .aisle('     DBCCCBD     ', '   BB   F   BB   ', '  BB    F    BB  ', ' BB     F     BB ', ' B             B ', 'D      GGG      D', 'B     GDDDG     B', 'C    GDDDDDG    C', 'CFFF GDDDDDG FFFC', 'C    GDDDDDG    C', 'B     GDDDG     B', 'D      GGG      D', ' B             B ', ' BB     F     BB ', '  BB    F    BB  ', '   BB   F   BB   ', '     DBCCCBD     ') 
            .aisle('      BCCCB      ', '     DBCCCBD     ', '    DDBCCCBDD    ', '   DDBBCCCBBDD   ', '  DDBBBCCCBBBDD  ', ' DDBBEBB@BBEBBDD ', 'BBBBBBBDDDBBBBBBB', 'CCCCCBDDADDBCCCCC', 'CCCCCBDAAADBCCCCC', 'CCCCCBDDADDBCCCCC', 'BBBBBBBDDDBBBBBBB', ' DDBBEBBBBBEBBDD ', '  DDBBBCCCBBBDD  ', '   DDBBCCCBBDD   ', '    DDBCCCBDD    ', '     DBCCCBD     ', '      BCCCB      ') 
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks('gtceu:heat_vent'))
            .where('B', Predicates.blocks('gtceu:vibration_safe_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(3).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1)))
            .where('C', Predicates.blocks('gtceu:fusion_glass'))
            .where('D', Predicates.blocks('gtceu:atomic_casing'))
            .where('E', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
            .where('F', Predicates.blocks('gtceu:superconducting_coil'))
            .where('G', Predicates.blocks('gtceu:palladium_substation'))
            .where('H', Predicates.blocks('gtceu:tritanium_coil_block'))
            .where('I', Predicates.blocks('kubejs:melodium_casing'))
            .where('J', Predicates.blocks(GTBlocks.FUSION_COIL.get()))
            .where('K', Predicates.blocks('gtceu:prismalium_frame'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/vibration_safe_casing',
            'gtceu:block/multiblock/fusion_reactor', false);
            
});