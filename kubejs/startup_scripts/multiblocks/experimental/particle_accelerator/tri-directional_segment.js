
/*
    Tri-Directional Segment:
        Allows filtering of particles in 2 directions.
        Can have either 2 inputs and 1 output, or 1 input and 2 outputs.

*/

if (global.option('enable_particle_accelerator')) {
    
    GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

        event.create('pa_tri_segment')
            .category('particle_accelerator')
            .setMaxIOSize(0, 1, 0, 1)
            .setSound(GTSoundEntries.ARC);

    });

    GTCEuStartupEvents.registry('gtceu:machine', event => {

        event.create('pa_tri_segment', 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeType('pa_tri_segment')
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('   CCC   ', '  CCCCC  ', '  CCICC  ', '  CCCCC  ', '   CCC   ')
                .aisle('         ', '   CCC   ', '   C C   ', '   CCC   ', '         ')
                .aisle('         ', '    C    ', '   C C   ', '    C    ', '         ')
                .aisle('         ', 'C   C   C', 'C  C C  C', 'C   C   C', '         ')
                .aisle('C       C', 'CC  C  CC', 'CCCC CCCC', 'CC  C  CC', 'C       C')
                .aisle('C       C', 'CCCCCCCCC', 'I       I', 'CCCCCCCCC', 'C       C')
                .aisle('C       C', 'CC     CC', 'CCCCKCCCC', 'CC     CC', 'C       C')
                .aisle('         ', 'C       C', 'C       C', 'C       C', '         ')
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('F', Predicates.blocks('gtceu:hastelloy_c_276_frame'))
                .where('C', Predicates.blocks('start_core:auxiliary_boosted_fusion_casing_mk1'))
                .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(2)
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                )
                .where(' ', Predicates.any())
                .build())
            .workableCasingRenderer('start_core:block/casings/fusion/auxiliary_boosted_fusion_casing_mk1',
            'gtceu:block/machines/object_holder', false);
            
    });
}