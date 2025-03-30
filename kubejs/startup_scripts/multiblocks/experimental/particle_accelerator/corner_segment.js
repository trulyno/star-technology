
/*
    Corner Segment:
        Allows movement of particles at 90 degree angles

*/

if (global.option('enable_particle_accelerator')) {
    
    GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

        event.create('pa_corner_segment')
            .category('particle_accelerator')
            .setMaxIOSize(0, 1, 0, 1)
            .setSound(GTSoundEntries.ARC);

    });

    GTCEuStartupEvents.registry('gtceu:machine', event => {

        event.create('pa_corner_segment', 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeType('pa_corner_segment')
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('    CCC ', '   CCCCC', '   CCICC', '   CCCCC', '    CCC ')
                .aisle('        ', '    CCC ', '    C C ', '    CCC ', '        ')
                .aisle('        ', '     C  ', '    C C ', '     C  ', '        ')
                .aisle('        ', 'C    C  ', 'C   C C ', 'C    C  ', '        ')
                .aisle('C       ', 'C   CC  ', 'CCCC  C ', 'C   CC  ', 'C       ')
                .aisle('C       ', 'CCCCC   ', 'I    C  ', 'CCCCC   ', 'C       ')
                .aisle('C       ', 'CC      ', 'CCCKC   ', 'CC      ', 'C       ')
                .aisle('        ', 'C       ', 'C       ', 'C       ', '        ')
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('F', Predicates.blocks('gtceu:hastelloy_c_276_frame'))
                .where('C', Predicates.blocks('start_core:auxiliary_boosted_fusion_casing_mk1'))
                .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1))
                )
                .where(' ', Predicates.any())
                .build())
            .workableCasingRenderer('start_core:block/casings/fusion/auxiliary_boosted_fusion_casing_mk1',
            'gtceu:block/machines/object_holder', false);
            
    });
}