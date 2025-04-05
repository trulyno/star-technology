// packmode: hard

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('primitive_steam_turbine')
        .category('primitive_steam_turbine')
        .setEUIO('out')
        .setMaxIOSize(1, 0, 1, 1)
        .setSound(GTSoundEntries.BOILER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('primitive_steam_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_steam_turbine')
        .generator(true)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ABBA", "AAAA") 
            .aisle("AAAA", "CDDE", "AAAA") 
            .aisle("AAAA", "ABBA", "AAAA")
            .where('B', Predicates.blocks('kubejs:high_steam_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1)))
            .where('C', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
            .where('A', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('D', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('E', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('gtceu:block/casings/steam/steel/side',
        'gtceu:block/generators/steam_turbine', false);
        
});