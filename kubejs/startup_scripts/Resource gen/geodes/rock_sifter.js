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
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('E#####E', 'E#RGR#E', 'ERRRRRE', 'EGOOOGE', 'ERRRRRE', 'E#RGR#E', '#######')
            .aisle('#######', '###D###', '#######', '#D#P#D#', '#######', '###D###', '#######')
            .aisle('##SSS##', '#SSDSS#', 'SSFFFSS', 'SDSPSDS', 'SSFFFSS', '#SSDSS#', '##SSS##')
            .aisle('##SHS##', '#SMMMS#', 'SMMMMMS', 'HMMMMMH', 'SMMMMMS', '#SMMMS#', '##SHS##')
            .aisle('##SHS##', '#SMMMS#', 'SMMMMMS', 'HMMMMMH', 'SMMMMMS', '#SMMMS#', '##SHS##')
            .aisle('##SHS##', '#SMMMS#', 'SMMMMMS', 'HMMMMMH', 'SMMMMMS', '#SMMMS#', '##SHS##')
            .aisle('##SHS##', '#SMMMS#', 'SMMMMMS', 'HMMMMMH', 'SMMMMMS', '#SMMMS#', '##SHS##')
            .aisle('##SHS##', '#SMMMS#', 'SMMMMMS', 'HMMMMMH', 'SMMMMMS', '#SMMMS#', '##SHS##')
            .aisle('##SSS##', '#SSDSS#', 'SSFFFSS', 'SDSPSDS', 'SSFFFSS', '#SSDSS#', '##SSS##')
            .aisle('#######', '###D###', '#######', '#D#P#D#', '#######', '###D###', '#######')
            .aisle('E#####E', 'E#RKR#E', 'ERRCRRE', 'EKRIRKE', 'ERRARRE', 'E#RKR#E', '#######')
            .where('E', Predicates.blocks('gtceu:steel_frame'))
            .where('S', Predicates.blocks('gtceu:solid_machine_casing'))
            .where('H', Predicates.blocks('thermal:obsidian_glass'))
            .where('R', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
            .where('K', Predicates.abilities(PartAbility.INPUT_KINETIC))
            .where('D', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('G', Predicates.blocks('gtceu:steel_gearbox'))
            .where('M', Predicates.blocks('kubejs:meshblock'))
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/steam/steel/top",
        "gtceu:block/multiblock/implosion_compressor", false);
});