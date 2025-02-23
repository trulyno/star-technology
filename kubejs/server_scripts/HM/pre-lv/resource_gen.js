BlockEvents.rightClicked('minecraft:coarse_dirt', event => {
	if (event.player.isCrouching() && event.player.getMainHandItem() == null) {
		if (Math.random() < 0.002) {
			event.block.popItemFromFace(Item.of('minecraft:cookie'), 'up');
		}
		if (Math.random() < 0.25) {
			event.block.popItemFromFace(Item.of('kubejs:flint_shard'), 'up');
		}
	}
});

[{hit: 'minecraft:stripped_jungle_log',tool:'axes',get: 'kubejs:crucible_stage_1'},{hit: 'kubejs:crucible_stage_1',tool:'axes',get: 'kubejs:crucible_stage_2'},
{hit: 'kubejs:crucible_stage_2',tool:'axes',get: 'kubejs:crucible_stage_3'},{hit: 'kubejs:crucible_stage_3',tool:'axes',get: 'exnihilosequentia:jungle_crucible'}].forEach (crucible => {
    BlockEvents.rightClicked(`${crucible.hit}`, event => {
    if (event.player.getMainHandItem().hasTag(`#forge:tools/${crucible.tool}` && event.player.getOffHandItem() == null))
    return
            event.block.set(`${crucible.get}`)
            event.block.popItemFromFace(Item.of('gtceu:wood_dust'), 'up')
    });
});

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

	//Sieving

	const dirt = 'minecraft:dirt';
	const gravel = 'minecraft:gravel';
	const cdirt = 'minecraft:coarse_dirt';
	const sand = 'minecraft:sand';
	const dust = 'exnihilosequentia:dust';
	const mud = 'minecraft:mud';
	const rdirt = 'minecraft:rooted_dirt';
	const myc = 'minecraft:mycelium';
	const cDrip = 'exnihilosequentia:crushed_dripstone';
	const cCalc = 'exnihilosequentia:crushed_calcite';

	function sieve(mesh, chance, input, result, wlog) {
		event.custom({
			"type": `exnihilosequentia:sifting`,
			"input": input,
			"result": result,
			"rolls": [{
				chance: chance,
				mesh: mesh
			}],
			"waterlogged": wlog
		});
	};

	[{ Crushed: 'exnihilosequentia:crushed_andesite', OreType: 'sphalerite' }, { Crushed: 'exnihilosequentia:crushed_basalt', OreType: 'pyrite' },
	{ Crushed: 'exnihilosequentia:crushed_blackstone', OreType: 'magnetite' }, { Crushed: 'exnihilosequentia:crushed_deepslate', OreType: 'galena' },
	{ Crushed: 'exnihilosequentia:crushed_tuff', OreType: 'hematite' }, { Crushed: 'exnihilosequentia:crushed_granite', OreType: 'cassiterite' },
	{ Crushed: 'exnihilosequentia:crushed_diorite', OreType: 'chalcopyrite' }].forEach(c => {
		sieve('string', .4, c.Crushed, `kubejs:${c.OreType}_crushed_ore_chunk`, false);
		sieve('string', .05, c.Crushed, `gtceu:stone_dust`, false);
		sieve('flint', .5, c.Crushed, `gtceu:crushed_${c.OreType}_ore`, false);
		sieve('flint', .1, c.Crushed, `minecraft:gravel`, false);
	});

	sieve('string', 1, cdirt, dirt, false);
	sieve('string', .1, cdirt, dirt, false);
	sieve('string', .7, cdirt, 'exnihilosequentia:stone_pebble', false);
	sieve('string', .6, cdirt, 'exnihilosequentia:stone_pebble', false);
	sieve('string', .25, cdirt, 'minecraft:flint', false);

	['andesite', 'basalt', 'blackstone', 'deepslate', 'diorite', 'granite', 'tuff'].forEach(pebble => {
		sieve('string', .3, gravel, `exnihilosequentia:${pebble}_pebble`, false);
	});
	sieve('string', .5, gravel, sand, false);

	sieve('string', .4, sand, 'exnihilosequentia:calcite_pebble', false);
	sieve('string', .4, sand, 'exnihilosequentia:dripstone_pebble', false);
	sieve('string', .5, sand, dust, false);

	sieve('string', .4, cCalc, 'gtceu:calcite_dust', false);
	sieve('string', .2, cCalc, 'gtceu:tiny_sulfur_dust', false);

	sieve('string', .4, cDrip, 'gtceu:gypsum_dust', false);
	sieve('string', .15, cDrip, 'minecraft:clay_ball', false);

	sieve('string', .25, dust, 'gtceu:small_redstone_dust', false);
	sieve('string', .15, dust, 'gtceu:quartzite_gem', false);
	sieve('string', .1, dust, 'kubejs:raw_electrum_crushed_ore_chunk', false);


});

BlockEvents.rightClicked("minecraft:jungle_log", event => {
	const { player, block, item } = event;

	if (!item.hasTag("forge:tools/axes")) return;

	block.set("minecraft:stripped_jungle_log");
	event.block.popItem(Item.of("farmersdelight:tree_bark"));
	(Math.random() < 0.1) && event.block.popItem(Item.of("gtceu:sticky_resin"));

	event.cancel(true);
});

BlockEvents.rightClicked("minecraft:dead_bush", event => {
	const { player, block, item } = event;
	if (item.id !== "kubejs:water_bowl") return

	block.set("minecraft:jungle_sapling");
	player.setMainHandItem(Item.of("minecraft:bowl"));
});

