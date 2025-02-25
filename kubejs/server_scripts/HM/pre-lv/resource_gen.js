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

[{hit: 'minecraft:stripped_jungle_log',tool:'forge:tools/knives',get: 'kubejs:crucible_stage_1'},
    {hit: 'kubejs:crucible_stage_1',tool:'forge:tools/axes',get: 'kubejs:crucible_stage_2'},
    {hit: 'kubejs:crucible_stage_2',tool:'forge:tools/saws',get: 'kubejs:crucible_stage_3'},
    {hit: 'kubejs:crucible_stage_3',tool:'forge:tools/knives',get: 'exnihilosequentia:jungle_crucible'}].forEach (crucible => {
    BlockEvents.rightClicked(`${crucible.hit}`, event => {
        if (event.player.getMainHandItem().hasTag(`${crucible.tool}`) && event.player.getOffHandItem() == null) {
            event.block.set(`${crucible.get}`)
            event.block.popItemFromFace(Item.of('gtceu:wood_dust'), 'up')
        };
    });
});

[{hit: 'minecraft:jungle_planks',tool:'forge:tools/saws',get: 'kubejs:crafting_stage_1'},
    {hit: 'kubejs:crafting_stage_1',tool:'forge:tools/axes',get: 'kubejs:crafting_stage_2'},
    {hit: 'kubejs:crafting_stage_2',tool:'forge:tools/knives',get: 'kubejs:crafting_stage_3'}].forEach (table => {
    BlockEvents.rightClicked(`${table.hit}`, event => {
        if (event.player.getMainHandItem().hasTag(`${table.tool}`) && event.player.getOffHandItem() == null) {
            event.block.set(`${table.get}`)
        };
    });
});
	BlockEvents.rightClicked('kubejs:crafting_stage_3', event => {
		const { player, block, item } = event;
		if (item.id !== 'farmersdelight:canvas') return

		block.set('minecraft:crafting_table');
		player.setMainHandItem('');
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

BlockEvents.rightClicked('minecraft:jungle_log', event => {
	const { player, block, item } = event;

	if (!item.hasTag('minecraft:axes')) return;

	block.set('minecraft:stripped_jungle_log');
	event.block.popItem(Item.of('farmersdelight:tree_bark'));
	(Math.random() < 0.1) && event.block.popItem(Item.of('gtceu:sticky_resin'));

	event.cancel(true);
});

BlockEvents.rightClicked('minecraft:dead_bush', event => {
	const { player, block, item } = event;
	if (item.id !== 'kubejs:water_bowl') return

	block.set('minecraft:jungle_sapling');
	player.setMainHandItem(Item.of('minecraft:bowl'));
});

//Water Bowl Generation, Need to get ti to reduce crucible nbt

BlockEvents.rightClicked('exnihilosequentia:jungle_crucible' , event => {
	const { player, block, item } = event;
	// const nbt = block.entityData;
	// const fluidAmount = nbt.get({tank:(Amount)});
	if (item.id !== 'minecraft:bowl') return 
	// if (fluidAmount > 250) return
	// block.set(event.block.id, { waterlogged: true });
	item.count--
	player.give(Item.of('kubejs:water_bowl'));
	
});
