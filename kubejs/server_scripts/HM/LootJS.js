
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

LootJS.modifiers((event) => {
   
    event
        .addBlockLootModifier('minecraft:dead_bush')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [1, 2],
            [Item.of('minecraft:stick').withChance(100)]
        );
    
    event
        .addBlockLootModifier('minecraft:dead_bush')
        .matchMainHand(Item.of('gtceu:flisnt_knife'))
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [2, 3],
            [Item.of('farmersdelight:straw').withChance(100)]
        );
    
    ['oak','spruce','birch','dark_oak','jungle','acacia'].forEach(tree=>{
    event
        .addBlockLootModifier(`minecraft:${tree}_leaves`)
        .matchMainHand(Item.of('exnihilosequentia:wooden_crook'))
        .addWeightedLoot(
            [0,1],
            [Item.of(`minecraft:${tree}_sapling`).withChance(50)]
        );

        event
            .addBlockLootModifier('minecraft:campfire')
            .removeLoot(Ingredient.all)
            .addWeightedLoot(
                [3, 10],
                [Item.of('gtceu:ash_dust').withChance(50), Item.of('farmersdelight:tree_bark').withChance(25)]
            );
    });
});

};//if end