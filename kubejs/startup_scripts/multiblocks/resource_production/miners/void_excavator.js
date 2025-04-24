GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('void_excavator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('void_excavation')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' SFS ', '  E  ', '  E  ', '  E  ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ')
            .aisle('SSSSS', ' ERE ', ' EGE ', '  E  ', '  E  ', '  E  ', '  E  ', '     ', '     ', '     ', '     ', '     ')
            .aisle('FSSSF', 'ERRRE', 'EGHGE', 'EEGEE', ' EGE ', ' EGE ', ' EGE ', '  E  ', '  E  ', '  E  ', '  E  ', '  E  ')
            .aisle('SSSSS', ' ERE ', ' EGE ', '  E  ', '  E  ', '  E  ', '  E  ', '     ', '     ', '     ', '     ', '     ')
            .aisle(' SCS ', '  E  ', '  E  ', '  E  ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('gtceu:robust_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(4).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('F', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
            .where('R', Predicates.blocks('gtceu:rtm_alloy_coil_block'))
            .where('E', Predicates.blocks('gtceu:tungsten_steel_frame'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('H', Predicates.blocks('gtceu:stress_proof_casing'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel',
        'gtceu:block/multiblock/large_miner', false);
        
});