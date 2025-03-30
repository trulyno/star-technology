
/*
    Harvester Segment:
        Allows outputing of particles from the particle accelerator.
        Will output 1 particle (measured in mB).
        If a non-ready for harvest particle is introduced, the particle will be voided.

*/

if (global.option('enable_particle_accelerator')) {
    
    GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

        event.create('pa_harvester')
            .category('particle_accelerator')
            .setMaxIOSize(0, 1, 0, 1)
            .setSound(GTSoundEntries.ARC);

    });

    GTCEuStartupEvents.registry('gtceu:machine', event => {

        event.create('pa_harvester', 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeType('pa_harvester')
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('     ', 'C   F', 'C   F', 'C   F', '     ')
                .aisle('C   F', 'CCCC ', 'CCCCC', 'CCCC ', 'C   F')
                .aisle('C   F', 'CCCCC', 'I   O', 'CCCCC', 'C   F')
                .aisle('C   F', 'CCCC ', 'CCKCC', 'CCCC ', 'C   F')
                .aisle('     ', 'C   F', 'C   F', 'C   F', '     ')
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('F', Predicates.blocks('gtceu:hastelloy_c_276_frame'))
                .where('C', Predicates.blocks('start_core:auxiliary_boosted_fusion_casing_mk1'))
                .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))     
                .where('O', Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1))
                .where(' ', Predicates.any())
                .build())
            .workableCasingRenderer('start_core:block/casings/fusion/auxiliary_boosted_fusion_casing_mk1',
            'gtceu:block/machines/object_holder', false);
            
    });
}