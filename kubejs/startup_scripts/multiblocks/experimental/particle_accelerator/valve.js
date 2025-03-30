
/*
    Valve Segment:
        Allows inputing of particles into the particle accelerator.
        Will input 2 particles (2mB).
        Can take either 1 type or 2 types of perticles, but no more.
        Does not include protection against recipe conflict to emphasize the automation challenge.
        Will always take 4t to insert particles.

*/

if (global.option('enable_particle_accelerator')) {
    
    GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

        event.create('pa_valve')
            .category('particle_accelerator')
            .setMaxIOSize(0, 2, 0, 1)
            .setSound(GTSoundEntries.ARC);

    });

    GTCEuStartupEvents.registry('gtceu:machine', event => {

        event.create('pa_valve', 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeType('pa_valve')
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('     ', 'F   C', 'F   C', 'F   C', '     ')
                .aisle('F   C', ' CCCC', 'CCCCC', ' CCCC', 'F   C')
                .aisle('F   C', 'CCCCC', 'I   O', 'CCCCC', 'F   C')
                .aisle('F   C', ' CCCC', 'CCKCC', ' CCCC', 'F   C')
                .aisle('     ', 'F   C', 'F   C', 'F   C', '     ')
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
