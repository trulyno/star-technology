// packmode: hard

LootJS.modifiers((event) => {
	event
		.addBlockLootModifier('minecraft:dead_bush')
		.removeLoot(Ingredient.all)
		.addLoot('minecraft:stick')
		.limitCount([1, 2]);
	event
		.addBlockLootModifier('minecraft:dead_bush')
		.matchMainHand(Item.of('gtceu:flisnt_knife'))
		.removeLoot(Ingredient.all)
		.addLoot('farmersdelight:straw')
		.limitCount([2, 3]);
	event
		.addBlockLootModifier('minecraft:campfire')
		.removeLoot(Ingredient.all)
		.addLoot(
			LootEntry.of('gtceu:ash_dust').limitCount([2, 3]),
			LootEntry.of('farmersdelight:tree_bark').limitCount([0, 1]),
		);
	// .addWeightedLoot(
	// 	[3, 10],
	// 	[Item.of('gtceu:ash_dust').withChance(50), Item.of('farmersdelight:tree_bark').withChance(25)]
	// );

	['oak', 'spruce', 'birch', 'dark_oak', 'jungle', 'acacia'].forEach(tree => {
		event
			.addBlockLootModifier(`minecraft:${tree}_leaves`)
			.matchMainHand(Item.of('exnihilosequentia:wooden_crook'))
			.addLoot(
				LootEntry.of(`minecraft:${tree}_sapling`).when(c => c.randomChance(0.15)),
				(tree == 'jungle') && LootEntry.of('minecraft:cocoa_beans').when(c => c.randomChance(0.01)),
			);
	});
});