
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_distillery', 'multiblock')
        .recipeType('distillation_tower')
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .rotationState(RotationState.NON_Y_AXIS)
        .pattern(definition => FactoryBlockPattern.start()    
            .aisle("AAA", "BBB", "BBB", "BBB")     
            .aisle("AAA", "B#B", "B#B", "BBB")     
            .aisle("A@A", "BBC", "BBC", "BBC")     
            .where("A", Predicates.blocks("gtceu:steam_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1)))    
            .where("B", Predicates.blocks("gtceu:steam_machine_casing"))    
            .where("#", Predicates.blocks("minecraft:air"))    
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))    
            .where("C", Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(3))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
        "gtceu:block/multiblock/distillation_tower", false);
});

};//if end