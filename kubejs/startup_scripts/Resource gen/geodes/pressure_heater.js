GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('pressure_heater')
        .category('pressure_heater')
        .setMaxIOSize(2, 2, 0, 0)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('pressure_heater', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('pressure_heater')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#H###H#', 'HH###HH', 'HHHSHHH', 'HHSISHH', 'HHHSHHH', 'HH###HH', '#H###H#')
            .aisle('#HHHHH#', 'HHHHHHH', 'FPBBBPF', 'FPBPBPF', 'FPBBBPF', 'HHHHHHH', '#HHHHH#')
            .aisle('#HGGGH#', 'HHBBBHH', 'HB###BH', 'HB#P#BH', 'HB###BH', 'HHBBBHH', '#HGGGH#')
            .aisle('#HGGGH#', 'HHBBBHH', 'GB###BG', 'GB#P#BG', 'GB###BG', 'HHBBBHH', '#HGGGH#')
            .aisle('#HGGGH#', 'HHBBBHH', 'GB###BG', 'GB#P#BG', 'GB###BG', 'HHBBBHH', '#HGGGH#')
            .aisle('#HGGGH#', 'HHBBBHH', 'GB###BG', 'GB#P#BG', 'GB###BG', 'HHBBBHH', '#HGGGH#')
            .aisle('#HGGGH#', 'HHBBBHH', 'HB###BH', 'HB#P#BH', 'HB###BH', 'HHBBBHH', '#HGGGH#')
            .aisle('#HHCHH#', 'HHHHHHH', 'FPBBBPF', 'FPBPBPF', 'FPBBBPF', 'HHHHHHH', '#HHHHH#')
            .aisle('#H###H#', 'HH###HH', 'HHHSHHH', 'HHSOSHH', 'HHHSHHH', 'HH###HH', '#H###H#')
            .where('H', Predicates.blocks('gtceu:heatproof_machine_casing')
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))     
            .where('B', Predicates.blocks('gtceu:cupronickel_coil_block'))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('S', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_heatproof",
        "gtceu:block/multiblock/blast_furnace", false);
});