LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:dead_bush")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:stick").withChance(100)]
        );
    
    event
        .addBlockLootModifier("minecraft:dead_bush")
        .matchMainHand(Item.of('gtceu:flisnt_knife'))
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [2, 3],
            [Item.of("farmersdelight:straw").withChance(100)]
        );
})