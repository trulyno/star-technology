
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

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

// Placing campfires as unlit

BlockEvents.placed(event => {
	const { block } = event;

	// if (block.id == 'minecraft:campfire') block.setBlockState({ lit: false }, 0);
	// if (event.player.getUseItem().id == 'minecraft:flint_and_steel') return;

	if (block.id == 'minecraft:campfire') block.set('minecraft:campfire', { lit: false });
	if (block.id == 'minecraft:soul_campfire') block.set('minecraft:soul_campfire', { lit: false });
});

// In-world crafting for Crucible and Crafting Table

	[{ hit: 'minecraft:stripped_jungle_log', tool: 'forge:tools/knives', get: 'kubejs:crucible_stage_1' },
	{ hit: 'kubejs:crucible_stage_1', tool: 'forge:tools/axes', get: 'kubejs:crucible_stage_2' },
	{ hit: 'kubejs:crucible_stage_2', tool: 'forge:tools/saws', get: 'kubejs:crucible_stage_3' },
	{ hit: 'kubejs:crucible_stage_3', tool: 'forge:tools/knives', get: 'exnihilosequentia:jungle_crucible' },
	].forEach(crucible => {
		const { hit, tool, get } = crucible;

		BlockEvents.rightClicked(hit, event => {
			if (!event.player.getMainHandItem().hasTag(tool)) return;
			if (event.player.getOffHandItem() !== null) return;

			event.block.set(get);
			event.block.popItemFromFace(Item.of('gtceu:wood_dust'), 'up');
		});
	});

	[{ hit: 'minecraft:jungle_log', tool: 'forge:tools/knives', get: 'kubejs:crafting_stage_1' },
	{ hit: 'kubejs:crafting_stage_1', tool: 'forge:tools/saws', get: 'kubejs:crafting_stage_2' },
	{ hit: 'kubejs:crafting_stage_2', tool: 'forge:tools/axes', get: 'kubejs:crafting_stage_3' },
	].forEach(table => {
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

	event.recipes.create.mixing('3x minecraft:coarse_dirt', ['3x minecraft:dirt', '2x minecraft:flint']);


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

	event.recipes.gtceu.stone_barrel('stone_pebble')
		.circuit(0)
		.inputFluids('minecraft:lava 10', 'minecraft:water 240')
		.itemOutputs('exnihilosequentia:stone_pebble')
		.duration(5);

	event.recipes.gtceu.stone_barrel('obsidian')
		.circuit(10)
		.inputFluids('minecraft:lava 1000', 'minecraft:water 1000')
		.itemOutputs('minecraft:obsidian')
		.duration(600);
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

};//if end