
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

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
			.burnTime(320)
			.texture(`kubejs:item/hm/pre-lv/charcoal_pellet`);

		event.create('water_bowl')
			.displayName('Water Bowl')
			.rarity('common')
			.unstackable()
			.texture(`kubejs:item/hm/pre-lv/water_bowl`);

		// ================================================================================== //

		const to_id = (name) => name.toLowerCase().replace(/\s/g, '_') // move to helpers?

		const ores = ['Hematite', 'Cassiterite', 'Chalcopyrite', 'Sphalerite', 'Pyrite', 'Magnetite', 'Galena', 'Raw Electrum']

		ores.forEach(ore => {
			const name = `${ore} Crushed Ore Chunk`;
			const id = to_id(name);

			event.create(id)
				.displayName(name)
				.texture('kubejs:item/hm/pre-lv/' + id)
		});

		// ================================================================================== //

		const metals = ['Metal'] // is this a placeholder?

		const parts = (metal) => [
			`Incomplete Long ${metal} Rod`,
			`Incomplete Double ${metal} Plate`,
			`Incomplete ${metal} Gear`,
			`Incomplete Small ${metal} Gear`,
			`Incomplete ${metal} Rotor`,
			`Incomplete ${metal} Spring`,
			`Incomplete Small ${metal} Spring`,
			`Incomplete 1x ${metal} Wire`,
			`Incomplete ${metal} Fine Wire`,
			`Incomplete ${metal} Cable`,
			`Incomplete ${metal} Fluid Pipe`,
			`Incomplete ${metal} Item Pipe`,
		]

		metals.forEach(metal => {
			parts(metal).forEach(part =>
				event
					.create(to_id(part))
					.displayName(part)
			);
		});

		// ================================================================================== //

		event.create('basic_scavenging_rod')
			.displayName('Basic Scavenging Rod')
			.rarity('common')
			.maxDamage(256)
			.unstackable()
			.texture(`kubejs:item/hm/pre-lv/basic_scavenging_rod`);

		event.create('scavenging_rod')
			.displayName('Scavenging Rod')
			.rarity('common')
			.maxDamage(512)
			.unstackable()
			.texture(`kubejs:item/hm/pre-lv/scavenging_rod`);

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
	});

}; // if end