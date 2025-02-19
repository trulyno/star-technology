LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:dead_bush")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [1, 2],
            [Item.of("minecraft:stick").withChance(100)]
        );
})