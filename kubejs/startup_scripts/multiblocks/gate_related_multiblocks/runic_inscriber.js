GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('runic_inscribe_manipulate')
        .category('runic_inscribe_manipulate')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('runic_inscribe_manipulate', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('runic_inscribe_manipulate')
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
        	.aisle('AAAAAAAAAAAAAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAAAA', '                       ', '                       ', '                       ', '  B    B       B    B  ', '  B    B       B    B  ', '  B    B       B    B  ', '  B    B       B    B  ', '  B    B       B    B  ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ') 	
            .aisle('AAAAAAAAAAAAAAAAAAAAAAA', 'ACCCCCCCCCCCCCCCCCCCCCA', '                       ', '                       ', '  B    B       B    B  ', '  BBBBBB       BBBBBB  ', ' CCDDDDCC     CCDDDDCC ', ' CCDDDDCC     CCDDDDCC ', ' CCDDDDCC     CCDDDDCC ', '  BBBBBB       BBBBBB  ', '  B    B       B    B  ', '                       ', '                       ', '                       ', '                       ', '          BBB          ', '                       ') 	
            .aisle('AAEAFFAEAAEAEAAEAFFAEAA', 'ACECDDCECCECECCECDDCECA', '  B    B  BCB  B    B  ', '  B    B  BCB  B    B  ', '  B    B  CCC  B    B  ', ' CCDDDDCC     CCDDDDCC ', 'GFEHFFHEFB   BFEHFFHEFG', 'GFFIFFIFFD   DFFIFFIFFG', 'GFEHFFHEFB   BFEHFFHEFG', ' CCDDDDCC     CCDDDDCC ', '  B    B       B    B  ', '                       ', '                       ', '                       ', '                       ', '         BCCCB         ', '          CCC          ') 	
            .aisle('AAAAAAAAAAAIAAAAAAAAAAA', 'ACCCCCCCCCCICCCCCCCCCCA', '          CIC          ', '          CFC          ', '  B    B  CDC  B    B  ', ' CCDDDDCC     CCDDDDCC ', 'GFFIFFIFFD D DFFIFFIFFG', 'JIIKKKKIIHDLDHIIKKKKIIJ', 'GFFIFFIFFD D DFFIFFIFFG', ' CCDDDDCC     CCDDDDCC ', '  B    B   M   B    B  ', '  B    B       B    B  ', '  B    B   N   B    B  ', '   BB  B       B  BB   ', '     BBB   O   BBB     ', '       BBBCICBBB       ', '          CCC          ') 	
            .aisle('AAEAFFAEAAEAEAAEAFFAEAA', 'ACECDDCECCECECCECDDCECA', '  B    B  BCB  B    B  ', '  B    B  BPB  B    B  ', '  B    B  CQC  B    B  ', ' CCDDDDCC     CCDDDDCC ', 'GFEHFFHEFB   BFEHFFHEFG', 'GFFIFFIFFD   DFFIFFIFFG', 'GFEHFFHEFB   BFEHFFHEFG', ' CCDDDDCC     CCDDDDCC ', '  B    B       B    B  ', '                       ', '                       ', '                       ', '                       ', '         BCCCB         ', '          CCC          ') 	
            .aisle('AAAAAAAAAAAAAAAAAAAAAAA', 'ACCCCCCCCCCCCCCCCCCCCCA', '                       ', '                       ', '  B    B       B    B  ', '  BBBBBB       BBBBBB  ', ' CCDDDDCC     CCDDDDCC ', ' CCDDDDCC     CCDDDDCC ', ' CCDDDDCC     CCDDDDCC ', '  BBBBBB       BBBBBB  ', '  B    B       B    B  ', '                       ', '                       ', '                       ', '                       ', '          BBB          ', '                       ') 	
            .aisle('AAAAAAAAAAAAAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAAAA', '                       ', '                       ', '                       ', '  B    B       B    B  ', '  B    B       B    B  ', '  B    B       B    B  ', '  B    B       B    B  ', '  B    B       B    B  ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ', '                       ') 	
            .where('A', Predicates.blocks('gtceu:high_temperature_smelting_casing'))	
            .where(' ', Predicates.any())	
            .where('B', Predicates.blocks('gtceu:void_frame'))	
            .where('C', Predicates.blocks('gtceu:atomic_casing'))	
            .where('D', Predicates.blocks('gtceu:fusion_glass'))	
            .where('E', Predicates.blocks('kubejs:stellarium_casing'))	
            .where('F', Predicates.blocks('kubejs:ancient_runicalium_casing'))	
            .where('G', Predicates.blocks('gtceu:atomic_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(3).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))) 
            .where('H', Predicates.blocks('gtceu:superconducting_coil'))	
            .where('I', Predicates.blocks('gtceu:fusion_coil'))	
            .where('J', Predicates.abilities(PartAbility.INPUT_ENERGY))	
            .where('K', Predicates.blocks('gtceu:ancient_runicalium_frame'))	
            .where('L', Predicates.blocks('kubejs:inscribe_casing'))	
            .where('M', Predicates.blocks('thermal_extra:dragonsteel_glass'))	
            .where('N', Predicates.blocks('thermal_extra:twinite_glass'))	
            .where('O', Predicates.blocks('thermal_extra:shellite_glass'))	
            .where('P', Predicates.blocks('gtceu:ulv_output_bus'))	
            .where('Q', Predicates.controller(Predicates.blocks(definition.get())))	
            .build())
        .workableCasingRenderer('gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/multiblock/implosion_compressor', false);
            
});