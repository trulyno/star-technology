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

	event.create('mud_brick')
		.displayName('Packed Mud Brick')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/packed_mud_brick`);

	event.create('stone_brick')
		.displayName('Stone Brick')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/stone_brick`);

	event.create('charcoal_pellet')
		.displayName('Charcoal Pellet')
		.rarity('common')
		.burnTime(720)
		.texture(`kubejs:item/hm/pre-lv/charcoal_pellet`);

	event.create('water_bowl')
		.displayName('Water Bowl')
		.rarity('common')
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/water_bowl`);

	// ================================================================================== //

	const to_id = (name) => name.toLowerCase().replace(/\s/g, '_') // move to helpers?

	const ores = ['Hematite', 'Cassiterite', 'Chalcopyrite', 'Sphalerite', 'Pyrite', 'Magnetite', 'Galena']

	ores.forEach(ore => {
		const name = `${ore} Crushed Ore Chunk`;
		const id = to_id(name);

		event.create(id)
			.displayName(name)
			.texture('kubejs:item/hm/pre-lv/' + id)
	});

	// ================================================================================== //

	const parts = [
		`Incomplete Long Rod`,
		`Incomplete Double Plate`,
		`Incomplete Gear`,
		`Incomplete Small Gear`,
		`Incomplete Rotor`,
		`Incomplete Spring`,
		`Incomplete Small Spring`,
		`Incomplete Single Wire`,
		`Incomplete Fine Wire`,
		`Incomplete Fluid Pipe`,
		`Incomplete Item Pipe`,
	]

	parts.forEach(part =>
		event
			.create(to_id(part))
			.displayName(part)
			.maxStackSize(64)
			.texture('kubejs:item/hm/incomplete_parts/' + to_id(part))
	);

	// ================================================================================== //

	event.create('basic_scavenging_rod')
		.displayName('Basic Scavenging Rod')
		.rarity('common')
		.maxDamage(384)
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/basic_scavenging_rod`);

	event.create('scavenging_rod')
		.displayName('Scavenging Rod')
		.rarity('common')
		.maxDamage(1024)
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/scavenging_rod`);

	// ================================================================================== //

	['Electric Motor', 'Electric Pump', 'Conveyor Module', 'Robot Arm', 'Electric Piston', 'Emitter'].forEach(ULVComp => {
		const id = `${ULVComp.toLowerCase().replace(' ','_')}`
		event.create(`ulv_${id}`)
			.displayName(`ULV ${ULVComp}`)
			.texture(`kubejs:item/hm/pre-lv/ulv_${id}`);
	});

	['Ingot', 'Ball', 'Raw'].forEach(Ceramic => {
		event.create(`unfired_${Ceramic.toLowerCase()}_ceramic_casting_mold`)
			.displayName(`Unfired ${Ceramic} Ceramic Casting Mold`)
			.texture(`kubejs:item/hm/pre-lv/unfired_${Ceramic.toLowerCase()}_ceramic_casting_mold`);
		if (Ceramic !== 'Raw')
		event.create(`${Ceramic.toLowerCase()}_ceramic_casting_mold`)
			.displayName(`${Ceramic} Ceramic Casting Mold`)
			.texture(`kubejs:item/hm/pre-lv/${Ceramic.toLowerCase()}_ceramic_casting_mold`);
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
		.tagBlock('minecraft:needs_stone_tool')
		.textureAll('kubejs:block/hm/reinforced_stone_bricks');

	// ================================================================================== //

	const crucible_stages = [
		{ id: 'crucible_stage_1', name: 'Slightly Hollowed Log' },
		{ id: 'crucible_stage_2', name: 'Fairly Hollowed Log' },
		{ id: 'crucible_stage_3', name: 'Mostly Hollowed Log' }
	]

	const table_stages = [
		{ id: 'crafting_stage_1', name: 'Shaped Stripped Log' },
		{ id: 'crafting_stage_2', name: 'Partially Carved Crafting Table' },
		{ id: 'crafting_stage_3', name: 'Uncovered Crafting Table' }
	]

	crucible_stages.forEach(crucible => {
		const { id, name } = crucible

		event.create(id)
			.displayName(name)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");
	});

	table_stages.forEach(table => {
		const { id, name } = table

		event.create(id)
			.displayName(name)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");
	});

	event.create('high_steam_machine_casing')
		.displayName('High Steam Machine Casing')
		.hardness(5)
		.resistance(1)
		.soundType('stone')
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/hm/high_steam_machine_casing');
});

ItemEvents.modification(event => {
	event.modify('minecraft:cocoa_beans', item => {
		item.foodProperties = food => {
			food.hunger(1)
			food.saturation(1)
			food.effect('minecraft:slowness', 80, 2, 1)
			food.effect('minecraft:hunger', 80, 1, .1)
			food.effect('minecraft:blindness', 20, 1, .05)
			food.fastToEat(true)
		}
	})
});