GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('solid_blast_furnace')
        .category('solid_blast_furnace')
        .setMaxIOSize(3, 3, 0, 0)
        .setSound(GTSoundEntries.FURNACE)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('solid_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['primitive_blast_furnace', 'solid_blast_furnace'])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('DDD', 'PPP', 'PPP', 'PPP')
            .aisle('DDD', 'P#P', 'P#P', 'P#P')
            .aisle('DDD', 'PCP', 'PPP', 'PPP')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gtceu:solid_machine_casing').setMinGlobalLimited(15)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/primitive_blast_furnace", false);
});