
/*
    Accelerator Segment:
        Speeds up particles.
        Uses energy proportional to the speed of the particle.
        Can have at most one energy hatch.
        4A and 16A energy hatches do not impact recipe time.
        Accelerating particles to more than max speed will void them.

*/

if (global.option('enable_particle_accelerator')) {
    
    GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

        event.create('pa_accelerator')
            .category('particle_accelerator')
            .setEUIO('in')
            .setMaxIOSize(0, 1, 0, 1)
            .setSound(GTSoundEntries.ARC);

    });

    GTCEuStartupEvents.registry('gtceu:machine', event => {

        event.create('pa_accelerator', 'multiblock')
            .rotationState(RotationState.ALL)
            .recipeType('pa_accelerator')
            .recipeModifiers([])
            .pattern(definition => FactoryBlockPattern.start()
                .aisle('         ', 'C       C', 'C       C', 'C       C', '         ')
                .aisle('C       C', 'CC     CC', 'CCCCECCCC', 'CC     CC', 'C       C')
                .aisle('C       C', 'CCeeeeeCC', 'I       I', 'CCeeeeeCC', 'C       C')
                .aisle('C       C', 'CC     CC', 'CCCCKCCCC', 'CC     CC', 'C       C')
                .aisle('         ', 'C       C', 'C       C', 'C       C', '         ')
                .where('K', Predicates.controller(Predicates.blocks(definition.get())))
                .where('F', Predicates.blocks('gtceu:hastelloy_c_276_frame'))
                .where('C', Predicates.blocks('start_core:auxiliary_boosted_fusion_casing_mk1'))
                .where('e', Predicates.blocks('gtceu:electrolytic_cell'))
                .where('I', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1)))     
                .where('E', Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                .where(' ', Predicates.any())
                .build())
            .workableCasingRenderer('start_core:block/casings/fusion/auxiliary_boosted_fusion_casing_mk1',
            'gtceu:block/machines/object_holder', false);
            
    });
}