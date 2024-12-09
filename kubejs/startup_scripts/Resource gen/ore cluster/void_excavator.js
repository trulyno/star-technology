GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('void_excavator')
        .category('void_excavator')
        .setMaxIOSize(0, 9, 1, 2)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('void_excavator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('void_excavator')
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('#SFS#', '##E##', '##E##', '##E##', '#####', '#####', '#####', '#####', '#####', '#####', '#####', '#####')
        .aisle('SSSSS', '#EGE#', '#EGE#', '##E##', '##E##', '##E##', '##E##', '#####', '#####', '#####', '#####', '#####')
        .aisle('FSSSF', 'EGAGE', 'EGAGE', 'EEPEE', '#EPE#', '#EPE#', '#EPE#', '##E##', '##E##', '##E##', '##E##', '##E##')
        .aisle('SSSSS', '#EGE#', '#EGE#', '##E##', '##E##', '##E##', '##E##', '#####', '#####', '#####', '#####', '#####')
        .aisle('#SCS#', '##E##', '##E##', '##E##', '#####', '#####', '#####', '#####', '#####', '#####', '#####', '#####')
        .where('C', Predicates.controller(Predicates.blocks(definition.get())))
        .where('S', Predicates.blocks('gtceu:solid_machine_casing').setMinGlobalLimited(8)
            .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
            .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
            .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
        .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
        .where('A', Predicates.blocks('gtceu:soul_infused_block'))
        .where('E', Predicates.blocks('gtceu:steel_frame'))
        .where('G', Predicates.blocks('gtceu:steel_gearbox'))
        .where('P', Predicates.blocks('gtceu:steel_machine_casing'))
        .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/electric_blast_furnace", false);
});