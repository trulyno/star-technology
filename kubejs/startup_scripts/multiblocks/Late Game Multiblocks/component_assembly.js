
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('component_assembly')
        .category('component_assembly')
        .setEUIO('in')
        .setMaxIOSize(6, 2, 1, 0)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('component_assembly', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_assembly')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('MSSSM', 'MSCSM', ' SSS ')
            .aisle('MSSSM', 'F#A#F', ' GSG ')
            .aisle('MSSSM', 'F#A#F', ' GSG ')
            .aisle('MSSSM', 'F#A#F', ' GSG ')
            .aisle('MMMMM', 'MMKMM', ' MMM ')

            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('gtceu:solid_machine_casing').setMinGlobalLimited(20)
            .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
            .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2) .setMinGlobalLimited(1))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))          
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('S', Predicates.blocks('gtceu:sturdy_machine_casing'))
            .where('C', Predicates.blocks('gtceu:superconducting_coil'))
            .where('#', Predicates.blocks('minecraft:air'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/implosion_compressor", false);
});