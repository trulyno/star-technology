GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rock_sifter')
        .category('rock_sifter')
        .setMaxIOSize(2, 12, 0, 0)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rock_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rock_sifter')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##FFF##', '##TTT##', '##TIT##', '##TIT##', '##TIT##', '##TTT##', '##FFF##')
            .aisle('#FTTTF#', '#GRTRG#', '#GRTRG#', '#GRTRG#', '#GRTRG#', '#GRTRG#', '#FRRRF#')
            .aisle('FTTTTTF', 'TRAAART', 'TRAAART', 'TRAAART', 'TRAAART', 'TRAAART', 'FRRRRRF')
            .aisle('FTTTTTF', 'TTAAATT', 'ITAAATI', 'ITAAATI', 'ITAAATI', 'TTAAATT', 'FRRBRRF')
            .aisle('FTTTTTF', 'TRAAART', 'TRAAART', 'TRAAART', 'TRAAART', 'TRAAART', 'FRRRRRF')
            .aisle('#FTTTF#', '#GRTRG#', '#GRTRG#', '#GRTRG#', '#GRTRG#', '#GRTRG#', '#FRRRF#')
            .aisle('##FFF##', '##TCT##', '##TIT##', '##TIT##', '##TIT##', '##TTT##', '##FFF##')
            .where('R', Predicates.blocks('gtceu:robust_machine_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)))
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
            .where('G', Predicates.blocks('thermal_extra:shellite_glass'))
            .where('A', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('I', Predicates.blocks('gtceu:rtm_alloy_coil_block'))
            .where('B', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
        "gtceu:block/multiblock/implosion_compressor", false);
});