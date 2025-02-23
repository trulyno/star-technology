StartupEvents.registry('item', event => {
	event.create('flint_shard')
		.displayName('Flint Shard')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/flint_shard`);

	event.create('plant_fibers')
		.displayName('Plant Fibers')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/plant_fibers`);

	event.create('packed_mud_ball')
		.displayName('Packed Mud Ball')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/packed_mud_ball`);

	event.create('packed_mud_brick')
		.displayName('Packed Mud Brick')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/packed_mud_brick`);

    event.create('coke_clay_dust')
        .displayName('Coke Clay Dust')
        .rarity('common')
        .texture(`kubejs:item/hm/pre-lv/coke_clay_dust`);

	event.create('water_bowl')
		.displayName('Water Bowl')
		.rarity('common')
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/water_bowl`);

	event.create('fire_starter')
		.displayName('Fire Starter')
		.rarity('common')
		.maxDamage(16)
		.unstackable()

	const oreType = ['Hematite', 'Cassiterite', 'Chalcopyrite', 'Sphalerite', 'Pyrite', 'Magnetite', 'Galena', 'Raw_Electrum']

    oreType.forEach(type => {
        event.create(`${type.toLowerCase()}_crushed_ore_chunk`)
            .displayName(`Crushed ${type.replace(/_/, ' ')} Ore Chunk`)
            .texture(`kubejs:item/hm/pre-lv/${type.toLowerCase()}_crushed_ore_chunk`);
    });

});

StartupEvents.registry('block', event => {
	event.create('reinforced_stone_bricks')
		.displayName('Reinforced Stone Bricks')
		.hardness(5)
		.resistance(1)
		.soundType('stone')
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/hm/reinforced_stone_bricks');

	[{ id: 'crucible_stage_1', name: 'Slightly Hollowed Log' }, { id: 'crucible_stage_2', name: 'Fairly Hollowed Log' }, { id: 'crucible_stage_3', name: 'Mostly Hollowed Log' }].forEach(crucible => {
		event.create(`${crucible.id}`)
			.displayName(`${crucible.name}`)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");
	});

	[{ id: 'crafting_stage_1', name: 'axe chipped crafting table base' }, { id: 'crafting_stage_2', name: 'knife chipped crafting table base' }, { id: 'crafting_stage_3', name: 'saw chipped crafting table base' }].forEach(table => {
		event.create(`${table.id}`)
			.displayName(`${table.name}`)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");
	});
});