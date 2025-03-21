// Coarse Dirt Scavenging

BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
	const { player, block } = event;
	const main_hand = player.getMainHandItem();
	const pop_up = (item, chance) => (Math.random() < chance) && block.popItemFromFace(item, 'up');

	if (main_hand == null && player.getOffHandItem() == null && player.isCrouching()) {
		pop_up('kubejs:flint_shard', 0.25);
		pop_up('minecraft:cookie', 0.002);
	};

	if (main_hand == 'kubejs:basic_scavenging_rod') {
		pop_up('kubejs:flint_shard', 0.5);
		pop_up('kubejs:flint_shard', 0.5);
		pop_up('minecraft:cookie', 0.003);
	};

	if (main_hand == 'kubejs:scavenging_rod') {
		pop_up('minecraft:flint', 0.4);
		pop_up('kubejs:flint_shard', 0.4);
		pop_up('minecraft:cookie', 0.004);
	};
});

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
		event.player.addItem(Item.of('gtceu:wood_dust'));
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
	const { player, block, item, level } = event;

	if (!item.hasTag('minecraft:axes')) return;

	player.addItem(Item.of('farmersdelight:tree_bark'));
	if (Math.random() < 0.1) player.addItem(Item.of('gtceu:sticky_resin'));

	block.set('minecraft:stripped_jungle_log');
	level.playSound(null, block.pos, "minecraft:item.axe.strip", "blocks");
	player.swing();

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