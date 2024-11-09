
//let $SteamParallelMultiblockMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_barrel')
        .category('large_barrel')
        .setMaxIOSize(2, 1, 1, 1)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_barrel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_barrel')
        //.recipeModifier((machine, recipe) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('DDD', 'PPP', 'PPP', 'PPP')
            .aisle('DDD', 'P#P', 'P#P', 'P#P')
            .aisle('DDD', 'PCP', 'PPP', 'PPP')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.TREATED_WOOD_PLANK.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks(GTBlocks.CASING_PUMP_DECK.get()))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("gtceu:block/treated_wood_planks",
        "gtceu:block/machines/brewery", false);
});