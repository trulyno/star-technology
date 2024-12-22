
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('bacterial_chemical_builder')
        .category('bacterial_chemical_builder')
        .setEUIO('in')
        .setMaxIOSize(3, 0, 3, 9)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bacterial_chemical_builder', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bacterial_chemical_builder')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
        .pattern(definition => FactoryBlockPattern.start()
        
            .aisle('THHHT', 'TKKKT', 'T   T', 'T   T', 'T   T', 'T   T', 'TKKKT', 'TXXXT')
            .aisle('HKKKH', 'K   K', ' KKK ', ' KMK ', ' KKK ', ' KKK ', 'K   K', 'XSSSX')
            .aisle('HKKKH', 'K P K', ' KPK ', ' MPM ', ' KPK ', ' K K ', 'K P K', 'XSSSX')
            .aisle('HKKKH', 'K   K', ' KKK ', ' KMK ', ' KKK ', ' KKK ', 'K   K', 'XSSSX')
            .aisle('THHHT', 'TKCKT', 'T   T', 'T   T', 'T   T', 'T   T', 'TKKKT', 'TXXXT')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('K', Predicates.blocks('kubejs:peek_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('S', Predicates.blocks(GTBlocks.FILTER_CASING_STERILE.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))     
            .where('M', Predicates.blocks(GCyMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()))
            .where('H', Predicates.blocks(GCyMBlocks.HEAT_VENT.get()))
            .where('X', Predicates.blocks(GTBlocks.CASING_EXTREME_ENGINE_INTAKE.get()))
            .where('T', Predicates.blocks('gtceu:trinaquadalloy_frame'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/casings/machine_casing_peek",
        "gtceu:block/multiblock/large_chemical_reactor", false);
        });