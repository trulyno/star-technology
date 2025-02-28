// Coarse Dirt Scavenging

BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
	if (!event.player.isCrouching() || event.player.getMainHandItem() !== null) return;

	if (Math.random() < 0.25) event.block.popItemFromFace(Item.of('kubejs:flint_shard'), 'up');

	if (Math.random() < 0.002) event.block.popItemFromFace(Item.of('minecraft:cookie'), 'up');
});

BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
	if (event.player.getMainHandItem() !== 'kubejs:basic_scavenging_rod') return;
	if (event.player.getOffHandItem() !== null) return;

	if (Math.random() < 0.50) event.block.popItemFromFace(Item.of('kubejs:flint_shard'), 'up');
	if (Math.random() < 0.50) event.block.popItemFromFace(Item.of('kubejs:flint_shard'), 'up');

	if (Math.random() < 0.003) event.block.popItemFromFace(Item.of('minecraft:cookie'), 'up');
});

BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
	if (event.player.getMainHandItem() !== 'kubejs:scavenging_rod') return;
	if (event.player.getOffHandItem() !== null) return;

	if (Math.random() < 0.40) event.block.popItemFromFace(Item.of('minecraft:flint'), 'up');
	if (Math.random() < 0.40) event.block.popItemFromFace(Item.of('kubejs:flint_shard'), 'up');

	if (Math.random() < 0.004) event.block.popItemFromFace(Item.of('minecraft:cookie'), 'up');
});

// Placing campfires as unlit

// const campfires = ['minecraft:campfire', 'minecraft:soul_campfire'];

// BlockEvents.placed(event => {
// 	const { block } = event;

// 	if (block.id !== 'minecraft:campfire') return;
// 	if (block.id !== 'minecraft:soul_campfire') return;

// 	block.setBlockState("lit", false);
// });

// In-world crafting for Crucible and Crafting Table

const crucible_stages = [
	{ hit: 'minecraft:stripped_jungle_log', tool: 'forge:tools/knives', get: 'kubejs:crucible_stage_1' },
	{ hit: 'kubejs:crucible_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crucible_stage_2' },
	{ hit: 'kubejs:crucible_stage_2', tool: 'forge:tools/saws', get: 'kubejs:crucible_stage_3' },
	{ hit: 'kubejs:crucible_stage_3', tool: 'forge:tools/knives', get: 'exnihilosequentia:jungle_crucible' },
];

const table_stages = [
	{ hit: 'minecraft:jungle_planks', tool: 'forge:tools/saws', get: 'kubejs:crafting_stage_1' },
	{ hit: 'kubejs:crafting_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crafting_stage_2' },
	{ hit: 'kubejs:crafting_stage_2', tool: 'forge:tools/knives', get: 'kubejs:crafting_stage_3' },
];

crucible_stages.forEach(crucible => {
	const { hit, tool, get } = crucible;

	BlockEvents.rightClicked(hit, event => {
		if (!event.player.getMainHandItem().hasTag(tool)) return;
		if (event.player.getOffHandItem() !== null) return;

		event.block.set(get);
		event.block.popItemFromFace(Item.of('gtceu:wood_dust'), 'up');
	});
});

table_stages.forEach(table => {
	const { hit, tool, get } = table;

	BlockEvents.rightClicked(hit, event => {
		if (!event.player.getMainHandItem().hasTag(tool)) return;
		if (event.player.getOffHandItem() !== null) return;

		event.block.set(get);
	});
});

BlockEvents.rightClicked('kubejs:crafting_stage_3', event => {
	const { block, item } = event;

	if (item.id !== 'farmersdelight:canvas') return;

	block.set('minecraft:crafting_table');
	item.count--;
});

// Crafting Recipes

ServerEvents.recipes(event => {
	event.shaped(Item.of('minecraft:flint'), [
		'SS',
		'SS'
	], {
		S: 'kubejs:flint_shard'
	});

	event.remove({ id: 'minecraft:coarse_dirt' })
	event.shaped(Item.of('minecraft:coarse_dirt'), [
		' S ',
		'SDS',
		' S '
	], {
		S: 'kubejs:flint_shard',
		D: 'minecraft:dirt'
	});

	event.recipes.gtceu.primitive_mixer('coarse_dirt')
		.itemInputs('16x minecraft:dirt', '12x minecraft:flint')
		.itemOutputs('16x minecraft:coarse_dirt')
		.duration(600);

	['andesite', 'basalt', 'blackstone', 'deepslate', 'diorite', 'granite', 'tuff', 'calcite', 'dripstone'].forEach(stone => {
		event.shaped(Item.of(`exnihilosequentia:crushed_${stone}`), [
			'PP',
			'PP'
		], {
			P: `exnihilosequentia:${stone}_pebble`
		});
	});

	event.shaped(Item.of('minecraft:cobblestone'), [
		'PP',
		'PP'
	], {
		P: 'exnihilosequentia:stone_pebble'
	});

});

// Jungle Wood Stripping (Bark + Resin)

BlockEvents.rightClicked('minecraft:jungle_log', event => {
	const { player, block, item } = event;

	if (!item.hasTag('minecraft:axes')) return;

	block.set('minecraft:stripped_jungle_log');
	event.block.popItem(Item.of('farmersdelight:tree_bark'));
	(Math.random() < 0.1) && event.block.popItem(Item.of('gtceu:sticky_resin'));

	event.cancel(true);
});

// Dead Bush -> Jungle Sapling

BlockEvents.rightClicked('minecraft:dead_bush', event => {
	const { player, block, item } = event;

	if (item.id !== 'kubejs:water_bowl') return;

	block.set('minecraft:jungle_sapling');
	player.setMainHandItem(Item.of('minecraft:bowl'));
});

// Water Bowls

BlockEvents.rightClicked('exnihilosequentia:jungle_crucible', event => {
	const { player, block, item } = event;
	const { FluidName: fluid, Amount: amount } = block.entityData.tank;

	if (item.id !== 'minecraft:bowl') return;
	if (fluid !== 'minecraft:water' || amount < 250) return;

	block.mergeEntityData({ tank: { FluidName: 'minecraft:water', Amount: amount - 250 } });

	if (item.count > 1) {
		player.give(Item.of('kubejs:water_bowl'));
		item.count--;
	} else {
		player.setMainHandItem(Item.of('kubejs:water_bowl'));
	}
});