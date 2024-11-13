
//let $SteamParallelMultiblockMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_stone_barrel')
        .category('large_stone_barrel')
        .setMaxIOSize(2, 1, 2, 1)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_stone_barrel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_stone_barrel')
        //.recipeModifier((machine, recipe) => $SteamParallelMultiblockMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('DDD', 'PPP', 'PPP', 'PPP')
            .aisle('DDD', 'P#P', 'P#P', 'P#P')
            .aisle('DDD', 'PCP', 'PPP', 'PPP')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('minecraft:stone')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('D', Predicates.blocks('minecraft:stone_bricks'))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("minecraft:block/stone",
        "kubejs:block/multiblock/primitive_blast_furnace", false);
});