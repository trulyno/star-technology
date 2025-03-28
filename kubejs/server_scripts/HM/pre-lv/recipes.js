// packmode: hard

ServerEvents.tags('item', event => {
	const metals = [
		'tin',
		'zinc',
		'lead',
	];

	metals.forEach(metal => {
		event.removeAll(`forge:ingots/${metal}`);
		event.removeAll(`forge:nuggets/${metal}`);

		event.add(`forge:ingots/${metal}`, `gtceu:${metal}_ingot`);
		event.add(`forge:nuggets/${metal}`, `gtceu:${metal}_nugget`);
	});
});

ServerEvents.recipes(event => {
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
	// ~~~~~~~~~~~ PRE-COBBLEGEN ~~~~~~~~~~~ //
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

	// Remove Tools (Wooden, Stone, Flint)

	const tools = ['mortar', 'pickaxe', 'shovel', 'axe', 'sword', 'knife', 'hoe'];

	const materials = [
		{ mod: 'minecraft', material: 'wooden' },
		{ mod: 'minecraft', material: 'stone' },
		{ mod: 'gtceu', material: 'flint' },
	];

	materials.forEach(type => {
		tools.forEach(tool => {
			const { mod, material } = type;

			event.remove({ output: `${mod}:${material}_${tool}` });
		});
	});

	// Adjust recipes that use above tools

	event.remove({ output: 'ftbquests:loot_crate_opener' })

	event.replaceInput({ id: 'chipped:benches/carpenters_table' }, 'minecraft:wooden_axe', 'gtceu:flisnt_axe');
	event.replaceInput({ id: 'farmersdelight:cooking_pot' }, 'minecraft:wooden_shovel', 'gtceu:flisnt_shovel');

	// Flarn't Tools

	event.shapeless(Item.of('minecraft:stick'), [
		'#forge:tools/saws', '#minecraft:wooden_slabs'
	]);

	event.shaped(Item.of('gtceu:flisnt_axe'), [
		'FT',
		'ST'
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	});

	event.shaped(Item.of('gtceu:flisnt_saw'), [
		'FS',
		'FT'
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	});

	event.shaped(Item.of('gtceu:flisnt_knife'), [
		'F',
		'T'
	], {
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	});

	event.shaped(Item.of('gtceu:flisnt_shovel'), [
		'  F',
		' TS',
		'T  '
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	});

	event.shaped(Item.of('gtceu:flisnt_pickaxe'), [
		'FFF',
		'RTS',
		' T '
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood',
		R: 'kubejs:flint_shard'
	});

	event.shaped(Item.of('gtceu:flisnt_sword'), [
		' F ',
		' F ',
		' T '
	], {
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	});

	event.shaped(Item.of('gtceu:flisnt_hammer'), [
		'FCF',
		'CFC',
		'STS'
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood',
		C: '#forge:cobblestone'
	});

	event.shaped(Item.of('exnihilosequentia:wooden_crook'), [
		'TT',
		'ST',
		' T'
	], {
		S: '#forge:string',
		T: '#forge:rods/wood'
	});

	event.shaped(Item.of('gtceu:flisnt_file'), [
		' FQ',
		'FQF',
		'TFS'
	], {
		S: '#forge:string',
		F: 'kubejs:flint_shard',
		T: '#forge:rods/wood',
		Q: 'gtceu:quartzite_gem'
	});

	event.shapeless(Item.of('gtceu:long_wood_rod'), [
		'#forge:tools/files', 'minecraft:stick', 'minecraft:stick']);

	event.shaped(Item.of('kubejs:basic_scavenging_rod'), [
		'SPP',
		'RLP',
		'TRS'
	], {
		S: '#forge:string',
		P: 'minecraft:iron_nugget',
		T: 'gtceu:long_wood_rod',
		R: 'gtceu:sticky_resin',
		L: 'gtceu:wood_plate'
	});

	event.shaped(Item.of('kubejs:scavenging_rod'), [
		'SPP',
		'RLP',
		'TRH'
	], {
		S: '#forge:tools/screwdrivers',
		H: '#forge:tools/hammers',
		P: 'gtceu:iron_rod',
		T: 'gtceu:long_wood_rod',
		R: 'gtceu:iron_screw',
		L: 'gtceu:iron_plate'
	});

	// Kiln

	event.remove({ id: 'minecraft:brick' });
	event.remove({ id: 'gtceu:smelting/firebrick' });
	event.remove({ id: 'gtceu:smelting/coke_oven_brick' });

	[
		{ fuel: 'coals', burnMultiplier: 1 },
		{ fuel: 'poor_coals', burnMultiplier: 1.8 }
	].forEach(coal => {
		const { fuel, burnMultiplier: burn } = coal;

		event.recipes.gtceu.kiln(`brick_${fuel}`)
			.itemInputs('4x gtceu:compressed_clay', `#minecraft:${fuel}`)
			.itemOutputs('4x minecraft:brick')
			.duration(400 * burn);
		event.recipes.gtceu.kiln(`coke_oven_brick_${fuel}`)
			.itemInputs('4x gtceu:compressed_coke_clay', `2x #minecraft:${fuel}`)
			.itemOutputs('4x gtceu:coke_oven_brick')
			.duration(500 * burn);
		event.recipes.gtceu.kiln(`firebrick_${fuel}`)
			.itemInputs('4x gtceu:compressed_fireclay', `2x #minecraft:${fuel}`)
			.itemOutputs('4x gtceu:firebrick')
			.duration(600 * burn);
		event.recipes.gtceu.kiln(`glass_${fuel}`)
			.itemInputs('gtceu:glass_dust', `#minecraft:${fuel}`)
			.itemOutputs('minecraft:glass')
			.duration(800 * burn);

		// Rugged Alloyer and Chunk Processing

		[
			{ ore: 'hematite', metal: 'iron' },
			{ ore: 'pyrite', metal: 'iron' },
			{ ore: 'magnetite', metal: 'iron' },
			{ ore: 'cassiterite', metal: 'tin' },
			{ ore: 'sphalerite', metal: 'zinc' },
			{ ore: 'chalcopyrite', metal: 'copper' },
			{ ore: 'galena', metal: 'lead' },
		].forEach(chunk => {
			const { ore, metal } = chunk;
			const t = (ore == 'chalcopyrite') ? 2 : 1;
			const mod = (metal == 'iron') ? 'minecraft' : 'gtceu';

			event.recipes.gtceu.rugged_alloyer(`${ore}_chunks_${fuel}`)
				.itemInputs(`2x kubejs:${ore}_crushed_ore_chunk`, `#forge:nuggets/${metal}`, `#minecraft:${fuel}`)
				.itemOutputs(`#forge:ingots/${metal}`, 'gtceu:ash_dust')
				.duration(200 * t * burn);
			if (fuel == 'coals') event.smelting(`2x ${mod}:${metal}_nugget`, `kubejs:${ore}_crushed_ore_chunk`);
		});

		// event.recipes.gtceu.rugged_alloyer(`chalcopyrite_chunks_${fuel}`)
		// 	.itemInputs(`3x kubejs:chalcopyrite_crushed_ore_chunk`, `#minecraft:${fuel}`)
		// 	.itemOutputs(`minecraft:copper_ingot`, 'gtceu:ash_dust')
		// 	.duration(400 * burn);
		// event.smelting(`2x gtceu:copper_nugget`, `kubejs:chalcopyrite_crushed_ore_chunk`);
		event.remove({ output: /^create:.*rose_quartz/ });
		event.recipes.gtceu.rugged_alloyer(`rose_quartz_${fuel}`)
			.itemInputs('10x minecraft:redstone', 'gtceu:quartzite_gem', `2x #minecraft:${fuel}`)
			.itemOutputs('create:rose_quartz', 'gtceu:ash_dust')
			.duration(600 * burn);
		event.recipes.gtceu.rugged_alloyer(`andesite_alloy_${fuel}`)
			.itemInputs('4x exnihilosequentia:andesite_pebble', '4x gtceu:zinc_nugget', `2x #minecraft:${fuel}`)
			.itemOutputs('4x create:andesite_alloy', 'gtceu:ash_dust')
			.duration(600 * burn);
	});

	event.remove({ id: /^exnihilosequentia:ens_.*_sieve/ })
	event.shaped(Item.of('exnihilosequentia:jungle_sieve'), [
		'S S',
		'SFS',
		'NRN'
	], {
		S: 'minecraft:jungle_slab',
		F: 'gtceu:wood_frame',
		N: 'minecraft:jungle_fence',
		R: '#forge:string'
	});

	[
		// 'oak',
		// 'spruce',
		// 'birch',
		'jungle',
		// 'acacia',
		// 'dark_oak',
		// 'cherry',
		// 'bamboo',
		// 'crimson',
		// 'warped'
	].forEach(log => {
		event.remove({ id: `gtceu:shaped/${log}_fence` });
		event.shaped(Item.of(`minecraft:${log}_fence`, 2), [
			'PSP',
			'PSP',
			'PSP'
		], {
			P: `minecraft:${log}_planks`,
			S: '#forge:rods/wooden'
		});
		event.remove({ id: `create:cutting/${log}_log` });
		event.recipes.create.cutting([`minecraft:stripped_${log}_log`, Item.of(`farmersdelight:tree_bark`).withChance(1)], `minecraft:${log}_log`);
		event.remove({ output: `functionalstorage:${log}_1` });
		event.remove({ output: `functionalstorage:${log}_2` });
		event.remove({ output: `functionalstorage:${log}_4` });
		event.shaped(Item.of(`functionalstorage:${log}_1`), [
			'WSW',
			'SCS',
			'WSW'
		], {
			W: 'gtceu:iron_screw',
			S: `minecraft:${log}_slab`,
			C: 'minecraft:chest'
		});
		event.shaped(Item.of(`functionalstorage:${log}_2`, 2), [
			'D',
			'D'
		], {
			D: `functionalstorage:${log}_1`
		});
		event.shaped(Item.of(`functionalstorage:${log}_4`, 2), [
			'D',
			'D'
		], {
			D: `functionalstorage:${log}_2`
		});
		event.shaped(Item.of(`functionalstorage:${log}_4`, 4), [
			'DD',
			'DD'
		], {
			D: `functionalstorage:${log}_1`
		});
	});

	event.replaceInput({ id: 'gtceu:shaped/bronze_primitive_blast_furnace' },
		'#forge:plates/iron',
		'gtceu:wrought_iron_plate'
	);

	event.shaped(Item.of('minecraft:crafting_table'), [
		'PCP',
		'PRP'
	], {
		C: 'farmersdelight:canvas',
		P: 'gtceu:wood_plate',
		R: 'gtceu:sticky_resin'
	});

	event.remove({ output: 'gtceu:matchbox' });
	event.shaped(Item.of('gtceu:matchbox'), [
		'RRR',
		'TST',
		' B '
	], {
		R: '#forge:string',
		T: '#forge:rods/wooden',
		S: 'farmersdelight:straw',
		B: 'minecraft:bowl'
	});

	event.remove({ id: 'minecraft:flint_and_steel' });
	event.shapeless(Item.of('minecraft:flint_and_steel'), [
		'gtceu:steel_ring', 'minecraft:flint'
	]);

	event.shaped(Item.of('gtceu:rugged_alloyer'), [
		'RER',
		'AFA',
		'CCC'
	], {
		A: 'minecraft:iron_ingot',
		C: 'kubejs:reinforced_stone_bricks',
		F: 'minecraft:furnace',
		E: 'minecraft:copper_ingot',
		R: 'minecraft:redstone'
	});

	event.remove({ id: 'gtceu:shaped/bowl' })
	event.shaped(Item.of('minecraft:bowl', 2),
		[
			'A',
			'B'
		], {
		A: '#forge:tools/knives',
		B: '#minecraft:planks'
	});

	event.remove({ id: 'minecraft:bowl' });
	event.shapeless(Item.of('kubejs:plant_fibers'), [
		'#forge:tools/knives',
		'farmersdelight:straw'
	]);
	event.shapeless(Item.of('farmersdelight:straw'), [
		'#forge:tools/knives',
		'farmersdelight:tree_bark'
	]);

	event.remove({ id: 'exnihilosequentia:ens_string_mesh' });
	event.shaped(Item.of('exnihilosequentia:string_mesh'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		S: '#forge:string',
		C: 'farmersdelight:canvas'
	});

	event.remove({ id: 'minecraft:kjs/gtceu_wood_plate' });

	// Bricks

	event.remove({ id: 'minecraft:stone_bricks' });

	[
		'minecraft:bricks',
		'gtceu:firebricks',
		'gtceu:coke_oven_bricks',
		'minecraft:mud_bricks',
	].forEach(brick => event.remove({ output: brick }));

	[
		{ type: '', modItem: 'minecraft', modBlock: 'minecraft' },
		{ type: 'coke_oven_', modItem: 'gtceu', modBlock: 'gtceu' },
		{ type: 'fire', modItem: 'gtceu', modBlock: 'gtceu' },
		{ type: 'stone_', modItem: 'kubejs', modBlock: 'minecraft' },
		{ type: 'mud_', modItem: 'kubejs', modBlock: 'minecraft' },
	].forEach(brick => {
		const { type, modItem, modBlock } = brick;

		const item = `${modItem}:${type}brick`;
		const block = `${modBlock}:${type}bricks`;

		const buckets = [
			'gtceu:concrete_bucket',
			{
				type: 'forge:partial_nbt',
				item: 'woodenbucket:wooden_bucket',
				nbt: {
					Fluid: {
						FluidName: 'gtceu:concrete',
						Amount: 1000,
					}
				}
			}
		]

		buckets.forEach(bucket => {
			event.shaped(Item.of(block, 2), [
				'BBB',
				'BCB',
				'BBB'
			], {
				B: item,
				C: bucket,
			});
		});

		event.recipes.create.compacting(block, [`4x ${item}`, Fluid.of('gtceu:concrete', 500)]);
	});

	event.shaped(Item.of('kubejs:reinforced_stone_bricks'), [
		'NHN',
		'NBN',
		'NFN'
	], {
		N: 'minecraft:iron_nugget',
		B: 'minecraft:stone_bricks',
		H: '#forge:tools/hammers',
		F: '#forge:tools/files'
	});

	event.shaped(Item.of('kubejs:mud_brick', 4), [
		'CCC',
		'CMC',
		'CCC'
	], {
		C: 'kubejs:packed_mud_ball',
		M: 'gtceu:brick_wooden_form'
	}).keepIngredient('gtceu:brick_wooden_form');

	event.shapeless(Item.of('kubejs:stone_brick'), [
		'#forge:tools/files', 'minecraft:stone'
	]);

	event.shaped(Item.of('minecraft:stonecutter'), [
		'PSP',
		'TFT'
	], {
		T: 'minecraft:stone_slab',
		P: 'gtceu:wood_plate',
		S: 'gtceu:iron_buzz_saw_blade',
		F: 'gtceu:wood_frame'
	});

	event.remove({ id: /^gtceu:mixer\/concrete.*/ })
	event.recipes.gtceu.mixer('concrete')
		.itemInputs('3x gtceu:stone_dust', 'gtceu:calcite_dust', '2x gtceu:gypsum_dust')
		.inputFluids('minecraft:water 1000')
		.outputFluids('gtceu:concrete 1000')
		.duration(50)
		.EUt(6);

	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "minecraft:packed_mud"
			}
		],
		"result": [
			{
				"count": 4,
				"item": "kubejs:packed_mud_ball"
			}
		],
		"tool": {
			"item": "minecraft:bowl"
		}
	});

	event.shaped(Item.of('minecraft:furnace'), [
		'SCS',
		'CFC',
		'MMM'
	], {
		S: 'minecraft:cobblestone_slab',
		C: 'minecraft:cobblestone',
		F: 'minecraft:campfire',
		M: 'minecraft:mud_bricks'
	});

	event.shaped(Item.of('minecraft:composter'), [
		'PMP',
		'PRP',
		'WSW'
	], {
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets',
		R: 'gtceu:sticky_resin',
		W: 'gtceu:wood_screw',
		S: '#minecraft:wooden_slabs'
	});

	event.shaped(Item.of('minecraft:campfire', '{BlockStateTag:{lit:"false"}}'), [
		'BTB',
		'TST',
		'LLL'
	], {
		T: '#balm:wooden_rods',
		S: 'farmersdelight:straw',
		B: 'farmersdelight:tree_bark',
		L: '#minecraft:logs'
	});

	// Adjusted Recipes

	event.remove({ output: '#exnihilosequentia:crucibles' });
	event.remove({ output: '#exnihilosequentia:barrels' });
	event.remove({ output: 'woodenbucket:wooden_bucket' });
	event.remove({ id: 'gtceu:shaped_fluid_container/treated_wood_planks' });

	event.shaped(Item.of('woodenbucket:wooden_bucket'), [
		'B B',
		'BRB',
		'TBT'
	], {
		T: 'gtceu:wood_bolt',
		B: 'farmersdelight:tree_bark',
		R: 'gtceu:sticky_resin'
	});

	event.shapeless(Item.of('gtceu:wood_bolt', 2), [
		'#forge:tools/saws', 'minecraft:stick'
	]);

	event.remove({ id: 'minecraft:clay' });
	event.recipes.create.compacting('minecraft:clay', '4x minecraft:clay_ball');

	event.shaped(Item.of('gtceu:wood_gear'), [
		'BBB',
		'BSB',
		'BBB'
	], {
		B: 'gtceu:wood_bolt',
		S: '#minecraft:wooden_slabs'
	});

	event.remove({ id: 'gtceu:shapeless/fireclay_dust' })
	event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust');
	event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball');
	event.recipes.create.pressing('kubejs:mud_brick', 'kubejs:packed_mud_ball');
	event.recipes.create.pressing('gtceu:compressed_coke_clay', 'gtceu:coke_clay_dust');

	// Metalurgy Rework via Create

	event.remove({ id: /^create:pressing.*_ingot/ })
	event.remove({ output: /^create_new_age.*wire/ })
	const GTMetals = ['lead', 'tin', 'zinc', 'bronze', 'brass', 'nickel', 'pig_iron', 'tin_alloy', 'nickle', 'potin', 'cupronickle']
	const MinecraftMetals = ['iron', 'copper', 'gold']
	const MetalInc = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron', 'tin_alloy', 'nickle', 'potin', 'cupronickle']
	GTMetals.forEach(type => {
		event.recipes.create.pressing([Item.of(`4x gtceu:${type}_plate`)], `gtceu:${type}_block`);
		event.recipes.create.compacting(`gtceu:${type}_plate`, `2x gtceu:${type}_ingot`);
	});
	MinecraftMetals.forEach(type => {
		event.recipes.create.pressing([Item.of(`4x gtceu:${type}_plate`)], `minecraft:${type}_block`);
		event.recipes.create.compacting(`gtceu:${type}_plate`, `2x minecraft:${type}_ingot`);
	});
	MetalInc.forEach(type => {
		event.recipes.create.cutting([`gtceu:${type}_rod`, Item.of(`gtceu:${type}_rod`).withChance(1)], `gtceu:${type}_plate`);
		event.recipes.create.pressing([Item.of(`gtceu:${type}_ring`).withChance(1)], `gtceu:${type}_rod`);
		event.recipes.create.pressing([Item.of(`gtceu:${type}_foil`).withChance(1)], `gtceu:${type}_plate`);
		event.recipes.create.cutting([`gtceu:${type}_bolt`, Item.of(`gtceu:${type}_bolt`).withChance(1)], `gtceu:${type}_rod`);
		event.recipes.create.pressing([Item.of(`gtceu:${type}_screw`).withChance(1)], `gtceu:${type}_bolt`);
	});

	const SEQLRod = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron'];
	const SEQDPlates = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron'];
	const SEQGear = ['iron', 'lead', 'bronze', 'pig_iron'];
	const SEQSmGear = ['iron', 'bronze', 'pig_iron'];
	const SEQRotor = ['iron', 'copper', 'lead', 'bronze', 'pig_iron'];
	const SEQSpring = ['iron', 'copper', 'gold', 'lead', 'tin'];
	const SEQSmSpring = ['iron', 'copper', 'gold', 'lead', 'tin'];
	const SEQWire = ['iron', 'copper', 'gold', 'lead', 'tin'];
	const SEQFiWire = ['copper', 'gold', 'lead', 'tin', 'zinc'];
	const SEQCable = ['lead', 'red_alloy', 'tin'];
	const SEQFluidPipe = ['copper', 'steel', 'lead', 'bronze', 'tin_alloy', 'potin'];
	const SEQItemPipe = ['tin', 'brass', 'cupronickel', 'nickel'];

	event.recipes.create.mixing('2x gtceu:pig_iron_dust', ['2x gtceu:iron_dust', 'gtceu:charcoal_dust']).heatRequirement('lowheated');

	// ~~~~~~ Sequenced Assembly ~~~~~~ //

	// Long Rods

	SEQLRod.forEach(type => {
		let inter = 'kubejs:incomplete_long_metal_rod'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:long_${type}_rod`).withChance(1),
		], `gtceu:${type}_rod`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_rod`]),
			event.recipes.createPressing(inter, inter),
		]).transitionalItem(inter).loops(1)
	});

	// Double Plates

	SEQDPlates.forEach(type => {
		let inter = 'kubejs:incomplete_double_metal_plate'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:double_${type}_plate`).withChance(1),
		], `gtceu:${type}_plate`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
			event.recipes.createPressing(inter, inter),
		]).transitionalItem(inter).loops(1)
	});

	// Gears

	SEQGear.forEach(type => {
		let inter = 'kubejs:incomplete_metal_gear'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:${type}_gear`).withChance(1),
		], `gtceu:${type}_plate`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_rod`]),
			event.recipes.createPressing(inter, inter),
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
		]).transitionalItem(inter).loops(4)
	});

	// Small Gears

	SEQSmGear.forEach(type => {
		let inter = 'kubejs:incomplete_small_metal_gear'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:small_${type}_gear`).withChance(1),
		], `gtceu:${type}_plate`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_rod`]),
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
		]).transitionalItem(inter).loops(2)
	});

	// Rotor

	SEQRotor.forEach(type => {
		let inter = 'kubejs:incomplete_metal_rotor'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:${type}_rotor`).withChance(1),
		], `gtceu:${type}_ring`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
			event.recipes.createPressing(inter, inter),
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_screw`]),
		]).transitionalItem(inter).loops(4)
	});

	// Spring

	SEQSpring.forEach(type => {
		let inter = 'kubejs:incomplete_metal_spring'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:${type}_spring`).withChance(1),
		], `gtceu:long_${type}_rod`, [
			event.recipes.createPressing(inter, inter),
		]).transitionalItem(inter).loops(4)
	});

	// Small Spring

	SEQSmSpring.forEach(type => {
		let inter = 'kubejs:incomplete_small_metal_spring'
		event.recipes.create.sequenced_assembly([
			Item.of(`2x gtceu:small_${type}_spring`).withChance(1),
		], `gtceu:long_${type}_rod`, [
			event.recipes.createPressing(inter, inter),
			event.recipes.createCutting(inter, inter),
		]).transitionalItem(inter).loops(4)
	});

	// Wire

	SEQWire.forEach(type => {
		let inter = 'kubejs:incomplete_metal_single_wire'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:${type}_single_wire`).withChance(1),
		], `gtceu:${type}_plate`, [
			event.recipes.createDeploying(inter, [inter, '#forge:tools/wire_cutters']),
			event.recipes.createCutting(inter, inter),
		]).transitionalItem(inter).loops(2)
	});

	// Fine Wire

	SEQFiWire.forEach(type => {
		let inter = 'kubejs:incomplete_metal_fine_wire'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:fine_${type}_wire`).withChance(1),
		], `gtceu:${type}_foil`, [
			event.recipes.createDeploying(inter, [inter, '#forge:tools/wire_cutters']),
			event.recipes.createCutting(inter, inter),
		]).transitionalItem(inter).loops(2)
	});

	// Cable

	function SEQCableAssembly(Metal, Multi, Loops) {
		let inter = 'kubejs:incomplete_metal_cable'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:${Metal}_${Multi}_cable`).withChance(1),
		], `gtceu:${Metal}_${Multi}_wire`, [
			event.recipes.createFilling(inter, [Fluid.of('gtceu:rubber', 72), inter]),
			event.recipes.createPressing(inter, inter),
		]).transitionalItem(inter).loops(Loops);
	};

	SEQCable.forEach(element => {
		SEQCableAssembly(element, 'single', 2)
		SEQCableAssembly(element, 'double', 4)
		SEQCableAssembly(element, 'quadruple', 8)
	});

	// Pipe

	function SEQFluidPipeAssembly(Metal, Multi, Loops) {
		let inter = 'kubejs:incomplete_metal_fluid_pipe'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:${Metal}_${Multi}_fluid_pipe`).withChance(1),
		], `gtceu:${Metal}_ring`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${Metal}_plate`]),
			event.recipes.createPressing(inter, inter),
		]).transitionalItem(inter).loops(Loops);
	};

	SEQFluidPipe.forEach(type => {
		let inter = 'kubejs:incomplete_metal_fluid_pipe'
		event.recipes.create.sequenced_assembly([
			Item.of(`2x gtceu:${type}_tiny_fluid_pipe`).withChance(1),
		], `gtceu:${type}_ring`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
			event.recipes.createCutting(inter, inter),
			event.recipes.createPressing(inter, inter),
		]).transitionalItem(inter).loops(1);

		SEQFluidPipeAssembly(type, 'small', 1)
		SEQFluidPipeAssembly(type, 'normal', 3)
		SEQFluidPipeAssembly(type, 'large', 6)
		SEQFluidPipeAssembly(type, 'huge', 12)
	});

	function SEQItemPipeAssembly(Metal, Multi, Loops) {
		let inter = 'kubejs:incomplete_metal_item_pipe'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:${Metal}_${Multi}_item_pipe`).withChance(1),
		], `gtceu:${Metal}_ring`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:${Metal}_plate`]),
			event.recipes.createPressing(inter, inter),
		]).transitionalItem(inter).loops(Loops);
	};

	SEQItemPipe.forEach(type => {
		SEQItemPipeAssembly(type, 'small', 1)
		SEQItemPipeAssembly(type, 'normal', 3)
		SEQItemPipeAssembly(type, 'large', 6)
		SEQItemPipeAssembly(type, 'huge', 12)
	});

	event.recipes.shapeless(Item.of('gtceu:wood_screw'), ['#forge:tools/files', 'gtceu:wood_bolt', 'gtceu:wood_bolt']);
	[{ size: 'small', loops: 1 }, { size: 'normal', loops: 3 }, { size: 'large', loops: 6 }].forEach(woodpipe => {
		let inter = 'gtceu:wood_plate'
		event.recipes.create.sequenced_assembly([
			Item.of(`gtceu:wood_${woodpipe.size}_fluid_pipe`).withChance(1),
		], `gtceu:wood_plate`, [
			event.recipes.createDeploying(inter, [inter, `gtceu:wood_plate`]),
			event.recipes.createDeploying(inter, [inter, 'gtceu:wood_screw']),
			event.recipes.createPressing(inter, inter),
			event.recipes.createCutting(inter, inter)
		]).transitionalItem(inter).loops(woodpipe.loops);
	});

	event.recipes.shaped(Item.of('gtceu:kiln'), [
		'BBB',
		'BFB',
		'PSP'
	], {
		B: 'minecraft:mud_bricks',
		F: 'minecraft:furnace',
		P: 'gtceu:iron_plate',
		S: 'gtceu:iron_screw'
	});

	event.recipes.create.mechanical_crafting('gtceu:primitive_pump', [
		'TNT',
		'SVR',
		'CLC'
	], {
		N: 'gtceu:wood_normal_fluid_pipe',
		R: 'gtceu:iron_rotor',
		T: 'gtceu:treated_wood_planks',
		L: 'gtceu:wood_large_fluid_pipe',
		C: 'minecraft:cobblestone_slab',
		S: 'gtceu:iron_screw',
		V: 'thermal:redstone_servo'
	});

	// ['flint','clay','brick'].forEach(Dust=>{event.recipes.shaped(Item.of(`gtceu:small_${Dust}_dust`), ['D','M'],{M:'#forge:tools/mortars',D:`minecraft:${Dust}`})});

	event.remove({ id: /gtceu:.*glass.*_dust_flint.*/ });
	event.recipes.create.mixing('2x gtceu:glass_dust', ['2x gtceu:quartz_sand_dust', '1x gtceu:flint_dust']);

	event.recipes.create.mixing('2x gtceu:fireclay_dust', ['1x gtceu:clay_dust', '1x gtceu:brick_dust']);
	event.recipes.gtceu.mixer('fireclay')
		.itemInputs('1x gtceu:clay_dust', '1x gtceu:brick_dust')
		.itemOutputs('2x gtceu:fireclay_dust')
		.duration(80)
		.EUt(6);

	event.recipes.gtceu.mixer('coke_clay')
		.itemInputs('4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust')
		.itemOutputs('8x gtceu:coke_clay_dust')
		.duration(240)
		.EUt(6);
	event.recipes.create.mixing('8x gtceu:coke_clay_dust', ['4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust']);
	event.recipes.gtceu.centrifuge('coke_clay')
		.itemInputs('8x gtceu:coke_clay_dust')
		.itemOutputs('4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust')
		.duration(168)
		.EUt(30);

	event.remove({ id: 'minecraft:charcoal' });
	event.smelting(`kubejs:charcoal_pellet`, `#minecraft:logs_that_burn`);

	event.shaped(Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:concrete"}}'), [
		'GCG',
		'SSS',
		' B '
	], {
		G: 'gtceu:gypsum_dust',
		C: 'gtceu:calcite_dust',
		S: 'gtceu:stone_dust',
		B: {
			type: "forge:partial_nbt",
			item: "woodenbucket:wooden_bucket",
			nbt: {
				Fluid: {
					FluidName: "minecraft:water",
					Amount: 1000,
				}
			}
		}
	}).modifyResult((grid, result) => {
		const bucket = grid.find('woodenbucket:wooden_bucket');

		bucket.nbt.Fluid.FluidName = "gtceu:concrete";
		bucket.nbt.Damage++;

		return bucket;
	}).replaceIngredient('woodenbucket:wooden_bucket', 'minecraft:air');

	event.shaped('gtceu:concrete_bucket', [
		'GCG',
		'SSS',
		' B '
	], {
		G: 'gtceu:gypsum_dust',
		C: 'gtceu:calcite_dust',
		S: 'gtceu:stone_dust',
		B: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:air');

	['stone', 'gypsum', 'calcite'].forEach(dust => {
		const pebble = (dust == 'gypsum') ? 'dripstone' : dust;

		event.shapeless(`gtceu:tiny_${dust}_dust`, ['#forge:tools/mortars', `exnihilosequentia:${pebble}_pebble`]);
		event.recipes.gtceu.macerator(`small_${dust}_dust`)
			.itemInputs(`exnihilosequentia:${pebble}_pebble`)
			.itemOutputs(`gtceu:small_${dust}_dust`)
			.duration(23)
			.EUt(2);
	});


	event.recipes.create.mixing(Fluid.of('gtceu:concrete', 1000), [Fluid.of('minecraft:water', 1000), '3x gtceu:stone_dust', 'gtceu:calcite_dust', '2x gtceu:gypsum_dust']);

	// Create Recipes
	event.recipes.shaped(Item.of('create:item_vault'), [
		'SFS',
		'FBF',
		'SFS'
	], {
		S: 'gtceu:iron_screw',
		B: 'minecraft:barrel',
		F: 'gtceu:iron_foil'
	});

	event.remove({ id: 'thermal:rubber_3' });
	event.recipes.create.compacting(Fluid.of('thermal:latex', 16), `8x minecraft:jungle_log`).heatRequirement('lowheated');
	event.recipes.create.mixing(Fluid.of('gtceu:rubber', 288), [Fluid.of('thermal:latex', 288), '1x gtceu:sulfur_dust']).heatRequirement('superheated');
	event.recipes.create.compacting(`1x thermal:cured_rubber`, Fluid.of('gtceu:rubber', 144));
	event.recipes.create.compacting(`1x gtceu:rubber_plate`, `2x thermal:cured_rubber`);

	event.recipes.create.mechanical_crafting('create:mechanical_arm', [
		'HAR',
		' R ',
		'RN ',
		'BPB',
		'GCG'
	], {
		G: 'create:cogwheel',
		B: 'gtceu:brass_plate',
		H: 'create:brass_hand',
		R: 'gtceu:brass_rod',
		N: 'gtceu:brass_ring',
		A: 'create:andesite_alloy',
		P: 'create:precision_mechanism',
		C: 'create:brass_casing'
	});

	event.recipes.shaped(Item.of('create:spout'), [
		'PPP',
		'GCG',
		'RIR'
	], {
		G: 'minecraft:glass_pane',
		C: 'create:copper_casing',
		P: 'gtceu:copper_plate',
		R: 'gtceu:rubber_ring',
		I: 'gtceu:copper_normal_fluid_pipe'
	});

	event.shapeless('create:shaft', ['#forge:tools/files', '2x create:andesite_alloy']);

	event.recipes.shaped(Item.of('create:encased_chain_drive', 2), [
		'SN ',
		'NCN',
		' NS'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		N: 'minecraft:chain'
	});

	event.recipes.shaped(Item.of('create:adjustable_chain_gearshift', 2), [
		'SNT',
		'NCN',
		'TNS'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		N: 'minecraft:chain',
		T: 'create:electron_tube'
	});

	event.recipes.shaped(Item.of('create:gearshift'), [
		'RCG'
	], {
		R: 'minecraft:redstone_torch',
		C: 'create:andesite_casing',
		G: 'create:cogwheel'
	});

	event.recipes.shaped(Item.of('create:sequenced_gearshift'), [
		'RCG'
	], {
		R: 'create:electron_tube',
		C: 'create:brass_casing',
		G: 'create:cogwheel'
	});

	event.recipes.shaped(Item.of('create:depot'), [
		'APA',
		'SCS'
	], {
		P: 'gtceu:iron_plate',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy',
		S: 'gtceu:iron_screw'
	});

	event.recipes.shaped(Item.of('create:fluid_tank', 2), [
		'PGP',
		'GCG',
		'PGP'
	], {
		G: 'minecraft:glass_pane',
		C: 'create:copper_casing',
		P: 'gtceu:copper_plate',
	});

	event.recipes.shaped(Item.of('create:weighted_ejector'), [
		'DPA',
		'GCS'
	], {
		G: 'create:cogwheel',
		A: 'create:andesite_alloy',
		P: 'minecraft:stone_pressure_plate',
		C: 'create:depot',
		S: 'create:shaft',
		D: 'gtceu:gold_plate'
	});

	event.recipes.create.mechanical_crafting('create:steam_engine', [
		'GSG',
		' A ',
		'PAP',
		'PCP'
	], {
		G: 'gtceu:gold_ring',
		S: 'create:shaft',
		A: 'create:andesite_alloy',
		P: 'gtceu:copper_plate',
		C: 'create:copper_casing'
	});

	event.shapeless(Item.of('gtceu:wood_plate', 2), [
		'#forge:tools/files', '#minecraft:planks', '#minecraft:planks', '#minecraft:planks', '#forge:tools/saws'
	]);

	event.shapeless(Item.of('gtceu:treated_wood_plate', 2), [
		'#forge:tools/files', '#forge:treated_wood', '#forge:treated_wood', '#forge:treated_wood', '#forge:tools/saws'
	]);

	event.shaped(Item.of('create:andesite_casing'), [
		'PMP',
		'AFA',
		'PHP'
	], {
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets',
		A: 'create:andesite_alloy',
		F: 'gtceu:wood_frame',
		H: '#forge:tools/hammers'
	});

	event.shaped(Item.of('create:copper_casing'), [
		'RMR',
		'PFP',
		'RHR'
	], {
		P: 'gtceu:pig_iron_plate',
		M: '#forge:tools/mallets',
		R: 'gtceu:copper_small_fluid_pipe',
		F: 'gtceu:pig_iron_frame',
		H: '#forge:tools/hammers'
	});

	event.shaped(Item.of('create:brass_casing'), [
		'PMP',
		'AFA',
		'PHP'
	], {
		P: 'gtceu:treated_wood_plate',
		M: '#forge:tools/mallets',
		A: 'gtceu:double_brass_plate',
		F: 'gtceu:treated_wood_frame',
		H: '#forge:tools/hammers'
	});

	event.shaped(Item.of('create:piston_extension_pole', 3), [
		'P',
		'A',
		'P'
	], {
		P: 'gtceu:wood_plate',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('create:hand_crank'), [
		' PA',
		'RPM',
		'GP '
	], {
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets',
		A: 'create:andesite_alloy',
		R: 'gtceu:sticky_resin',
		G: 'gtceu:wood_gear'
	});

	event.shaped(Item.of('create:mechanical_press'), [
		'PLP',
		'GCG',
		'AVA'
	], {
		C: 'create:andesite_casing',
		P: 'gtceu:wood_plate',
		A: 'create:andesite_alloy',
		L: 'create:piston_extension_pole',
		G: 'gtceu:wood_gear',
		V: 'minecraft:anvil'
	});

	event.shaped(Item.of('create:mechanical_saw'), [
		'MSW',
		'ACA'
	], {
		M: '#forge:tools/mallets',
		W: '#forge:tools/wrenches',
		S: 'gtceu:iron_buzz_saw_blade',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('gtceu:iron_buzz_saw_blade'), [
		'HPM',
		'PPP',
		'WPF'
	], {
		M: '#forge:tools/mallets',
		W: '#forge:tools/wrenches',
		F: '#forge:tools/files',
		H: '#forge:tools/hammers',
		P: 'gtceu:iron_plate',
	});

	event.shaped(Item.of('create:windmill_bearing'), [
		'RPR',
		'GCG',
		'GSG'
	], {
		R: 'gtceu:sticky_resin',
		G: 'gtceu:wood_gear',
		S: 'create:shaft',
		C: 'create:andesite_casing',
		P: '#minecraft:wooden_slabs'
	});

	event.shaped(Item.of('create:white_sail', 2), [
		'ASC',
		'SCS',
		'CSA'
	], {
		A: 'create:andesite_alloy',
		S: '#forge:rods/wooden',
		C: 'farmersdelight:canvas'
	});

	event.shaped(Item.of('create:millstone'), [
		'WCM',
		'GAG',
		'SSS'
	], {
		W: '#forge:tools/wrenches',
		M: '#forge:tools/mallets',
		C: 'create:chute',
		G: 'create:cogwheel',
		A: 'create:andesite_casing',
		S: '#forge:stone'
	});

	event.recipes.create.mechanical_crafting('create:crushing_wheel', [
		' SSS ',
		'SAMAS',
		'SMFMS',
		'SAMAS',
		' SSS '
	], {
		S: '#forge:stone',
		A: 'create:andesite_casing',
		F: 'create:shaft',
		M: 'gtceu:wood_frame'
	});

	event.shaped(Item.of('create:andesite_funnel', 2), [
		'AIA',
		'ARA'
	], {
		R: 'gtceu:rubber_plate',
		A: 'create:andesite_alloy',
		I: 'gtceu:iron_foil'
	});

	event.shaped(Item.of('create:brass_funnel', 2), [
		'PEP',
		'RBR'
	], {
		P: 'gtceu:brass_plate',
		R: 'gtceu:brass_rod',
		E: 'create:electron_tube',
		B: 'gtceu:rubber_plate'
	});

	event.shaped(Item.of('create:andesite_tunnel', 2), [
		' FM',
		'FCF',
		'AF '
	], {
		F: 'create:andesite_funnel',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy',
		M: '#forge:tools/mallets'
	});

	event.shaped(Item.of('create:brass_tunnel', 2), [
		' FM',
		'FCF',
		'TF '
	], {
		F: 'create:brass_funnel',
		C: 'create:brass_casing',
		T: 'create:electron_tube',
		M: '#forge:tools/mallets'
	});

	let drill = 'gtceu:double_iron_plate'
	event.recipes.create.sequenced_assembly([
		Item.of('thermal:drill_head').withChance(1),
	], drill, [
		event.recipes.createDeploying(drill, [drill, 'create:andesite_alloy']),
		event.recipes.createDeploying(drill, [drill, 'create:andesite_alloy']),
		event.recipes.createPressing(drill, drill),
		event.recipes.createDeploying(drill, [drill, 'gtceu:iron_plate']),
		event.recipes.createCutting(drill, drill),
	]).transitionalItem(drill).loops(2)

	event.shaped(Item.of('create:mechanical_drill'), [
		'MDH',
		'ACA',
		'ASA'
	], {
		M: '#forge:tools/mallets',
		H: '#forge:tools/hammers',
		S: 'create:shaft',
		C: 'create:andesite_casing',
		D: 'thermal:drill_head',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('create:brass_hand'), [
		'BBB',
		'PPP',
		'ARA'
	], {
		B: 'gtceu:brass_bolt',
		P: 'gtceu:brass_plate',
		R: 'gtceu:zinc_ring',
		A: 'create:andesite_alloy'
	});

	event.shaped(Item.of('create:deployer'), [
		'EPE',
		'SCS',
		'AHA'
	], {
		E: 'create:electron_tube',
		P: 'create:piston_extension_pole',
		S: 'create:shaft',
		A: 'create:andesite_alloy',
		C: 'create:andesite_casing',
		H: 'create:brass_hand'
	});

	event.shaped(Item.of('create:fluid_pipe', 3), [
		'PFP',
		'FPF'
	], {
		P: 'gtceu:copper_normal_fluid_pipe',
		F: 'gtceu:copper_foil'
	});

	event.shaped(Item.of('create:chute', 4), [
		'PCP',
		'PHP'
	], {
		P: 'gtceu:iron_plate',
		C: 'minecraft:chest',
		H: 'minecraft:hopper'
	});

	event.shaped(Item.of('create:smart_chute'), [
		'FTF',
		'FCF'
	], {
		F: 'gtceu:brass_foil',
		C: 'create:chute',
		T: 'create:electron_tube'
	});

	event.shaped(Item.of('create:water_wheel'), [
		'PPP',
		'SCS',
		'PPP'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		P: 'gtceu:wood_plate'
	});

	event.recipes.create.mechanical_crafting('create:large_water_wheel', [
		' PPP ',
		'PSSSP',
		'PSWSP',
		'PSSSP',
		' PPP '
	], {
		S: '#forge:rods/wooden',
		P: 'gtceu:wood_plate',
		W: 'create:water_wheel'
	});

	event.shaped(Item.of('create:whisk'), [
		'NWN',
		'RAR',
		'RPR'
	], {
		W: '#forge:tools/wrenches',
		R: 'gtceu:iron_rod',
		P: 'gtceu:iron_plate',
		A: 'create:andesite_alloy',
		N: 'gtceu:iron_ring'
	});

	event.shaped(Item.of('create:cogwheel', 2), [
		' SM',
		'PGP',
		' S '
	], {
		S: 'create:shaft',
		G: 'gtceu:wood_gear',
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets'
	});

	event.shaped(Item.of('create:large_cogwheel', 2), [
		' SM',
		'PGP',
		' S '
	], {
		S: 'create:shaft',
		G: 'create:cogwheel',
		P: 'gtceu:wood_plate',
		M: '#forge:tools/mallets'
	});

	event.shaped(Item.of('create:mechanical_mixer'), [
		'MLW',
		'GCG',
		'AHA'
	], {
		L: 'create:piston_extension_pole',
		M: '#forge:tools/mallets',
		W: '#forge:tools/wrenches',
		G: 'create:cogwheel',
		C: 'create:andesite_casing',
		A: 'create:andesite_alloy',
		H: 'create:whisk'
	});

	event.shaped(Item.of('create:basin'), [
		'A A',
		'ACA',
		'PAP'
	], {
		A: 'create:andesite_alloy',
		C: 'minecraft:cauldron',
		P: 'gtceu:lead_plate'
	});

	event.shaped(Item.of('createlowheated:basic_burner'), [
		'RRR',
		'R R',
		'PAP'
	], {
		A: 'create:andesite_alloy',
		R: 'gtceu:lead_rod',
		P: 'gtceu:lead_plate'
	});

	event.shaped(Item.of('create:propeller'), [
		'SAR',
		'ZPZ',
		'MAS'
	], {
		P: 'gtceu:pig_iron_rotor',
		A: 'create:andesite_alloy',
		R: '#forge:tools/screwdrivers',
		M: '#forge:tools/mallets',
		Z: 'gtceu:zinc_plate',
		S: 'gtceu:iron_screw'
	});

	event.shaped(Item.of('create:encased_fan'), [
		'RPR',
		'SCF',
		'RPR'
	], {
		P: 'gtceu:wood_plate',
		R: 'gtceu:zinc_rod',
		F: 'create:propeller',
		S: 'create:shaft',
		C: 'create:andesite_casing'
	});

	event.remove({ output: /^create:.*sand_paper/ });
	const sandType = ['sand', 'red_sand'];
	sandType.forEach(sand => {
		event.recipes.create.mixing(Item.of(`1x create:${sand}_paper`).withChance(.8), ['1x farmersdelight:canvas', `1x minecraft:${sand}`, 'gtceu:sticky_resin']);
	});

	event.recipes.create.sandpaper_polishing(Item.of('create:polished_rose_quartz').withChance(.7), 'create:rose_quartz');

	event.shaped(Item.of('create:electron_tube'), [
		'NNN',
		'NQN',
		'BGB'
	], {
		G: 'gtceu:iron_ring',
		B: 'gtceu:copper_bolt',
		N: 'minecraft:glass_pane',
		Q: 'create:polished_rose_quartz'
	});

	event.recipes.create.mechanical_crafting('thermal:redstone_servo', [
		'TPT',
		' F ',
		'TPT'
	], {
		P: 'gtceu:iron_plate',
		T: 'create:electron_tube',
		F: 'gtceu:fine_gold_wire'
	});

	event.recipes.create.mechanical_crafting('gtceu:ulv_stone_barrel', [
		'PP PP',
		'PSRSP',
		' SCS ',
		'PSTSP',
		'PP PP'
	], {
		R: 'gtceu:iron_rotor',
		S: 'minecraft:stone',
		P: 'gtceu:nickel_plate',
		T: 'thermal:redstone_servo',
		C: 'minecraft:cauldron'
	});

	let prec = 'gtceu:double_gold_plate'
	event.recipes.create.sequenced_assembly([
		Item.of(`create:precision_mechanism`),
	], `gtceu:double_gold_plate`, [
		event.recipes.createDeploying(prec, [prec, `create:cogwheel`]),
		event.recipes.createDeploying(prec, [prec, `create:large_cogwheel`]),
		event.recipes.createPressing(prec, prec),
		event.recipes.createDeploying(prec, [prec, `gtceu:iron_screw`]),
		event.recipes.createPressing(prec, prec)
	]).transitionalItem(prec).loops(4);

	let mech = 'create:brass_casing'
	event.recipes.create.sequenced_assembly([
		Item.of(`create:mechanical_crafter`).withChance(1),
	], `create:brass_casing`, [
		event.recipes.createDeploying(mech, [mech, `create:cogwheel`]),
		event.recipes.createPressing(mech, mech),
		event.recipes.createDeploying(mech, [mech, `create:precision_mechanism`]),
		event.recipes.createDeploying(mech, [mech, `minecraft:crafting_table`]),
		event.recipes.createPressing(mech, mech)
	]).transitionalItem(mech).loops(1);

	event.recipes.create.mechanical_crafting('gtceu:primitive_ore_factory', [
		'RPR',
		'RSR',
		'BFB',
		'BBB'
	], {
		R: 'gtceu:brass_rod',
		S: 'thermal:redstone_servo',
		P: 'gtceu:brass_plate',
		B: 'gtceu:firebricks',
		F: 'minecraft:campfire'
	});

	event.remove({ id: 'gtceu:smelting/smelt_dust_bronze_to_ingot' });
	event.remove({ id: 'gtceu:smelting/smelt_dust_brass_to_ingot' });
	event.recipes.create.mixing('2x gtceu:brass_dust', ['1x gtceu:zinc_dust', '3x gtceu:copper_dust']).heatRequirement('lowheated');
	event.recipes.create.mixing('2x gtceu:bronze_dust', ['1x gtceu:tin_dust', '3x gtceu:copper_dust']).heatRequirement('lowheated');
	event.recipes.create.mixing(Fluid.of('gtceu:brass', 144), ['1x gtceu:brass_dust']).heatRequirement('lowheated');
	event.recipes.create.mixing(Fluid.of('gtceu:bronze', 144), ['1x gtceu:bronze_dust']).heatRequirement('lowheated');
	event.recipes.create.mixing(Fluid.of('gtceu:brass', 432), ['1x gtceu:zinc_ingot', '3x minecraft:copper_ingot']).heatRequirement('superheated');
	event.recipes.create.mixing(Fluid.of('gtceu:bronze', 432), ['1x gtceu:tin_ingot', '3x minecraft:copper_ingot']).heatRequirement('superheated');
	event.recipes.create.compacting(`1x gtceu:brass_ingot`, Fluid.of('gtceu:brass', 144));
	event.recipes.create.compacting(`1x gtceu:bronze_ingot`, Fluid.of('gtceu:bronze', 144));

	event.recipes.create.mechanical_crafting('create:flywheel', [
		' PPP ',
		'PS SP',
		'P T P',
		'PS SP',
		' PPP '
	], {
		T: 'create:shaft',
		P: 'gtceu:brass_rod',
		S: '#forge:rods/wooden'
	});

	event.remove({ id: 'minecraft:minecart' });

	event.recipes.create.mechanical_crafting('create:sticker', [
		'ASA',
		'DRD'
	], {
		S: 'minecraft:slime_block',
		A: 'create:andesite_alloy',
		D: 'gtceu:double_iron_plate',
		R: 'minecraft:redstone'
	});

	event.shaped(Item.of('create:nozzle'), [
		'ASA',
		'SSS',
		'APA'
	], {
		A: 'create:andesite_alloy',
		S: '#forge:string',
		P: 'gtceu:iron_plate'
	});

	event.shaped(Item.of('create:mechanical_bearing'), [
		'R',
		'B',
		'S'
	], {
		R: 'gtceu:sticky_resin',
		B: 'create:windmill_bearing',
		S: 'create:shaft'
	});

	event.shapeless(Item.of('create:clockwork_bearing'), [
		'create:brass_casing', 'create:mechanical_bearing', 'create:electron_tube'
	]);

	event.recipes.create.mechanical_crafting('create:gantry_carriage', [
		'SPS',
		'GCG'
	], {
		S: 'create:shaft',
		C: 'create:andesite_casing',
		G: 'create:cogwheel',
		P: 'minecraft:sticky_piston'
	});

	event.recipes.create.mechanical_crafting('create:rotation_speed_controller', [
		'RGR',
		'SMS',
		'PCP'
	], {
		R: 'gtceu:brass_ring',
		G: 'create:cogwheel',
		S: 'create:shaft',
		P: 'gtceu:brass_plate',
		C: 'create:brass_casing',
		M: 'create:precision_mechanism'
	});

	event.shaped(Item.of('create:gantry_shaft', 2), [
		' RP',
		'RSR',
		'PR '
	], {
		R: 'gtceu:small_redstone_dust',
		P: 'gtceu:wood_plate',
		S: 'create:shaft'
	});

	event.recipes.create.mechanical_crafting('gtceu:ulv_barrel', [
		'PP PP',
		'PLRLP',
		' LCL ',
		'PLTLP',
		'PP PP'
	], {
		R: 'gtceu:iron_rotor',
		L: '#forge:stripped_logs',
		P: 'gtceu:treated_wood_plate',
		T: 'thermal:redstone_servo',
		C: 'minecraft:cauldron'
	});

	event.replaceInput({ id: 'gtceu:shaped/coke_oven' },
		'#forge:tools/wrenches',
		'minecraft:furnace'
	);

	// Post Cobble-Gen, Pre-Circuit

	event.recipes.create.mechanical_crafting('gtceu:bronze_brick_casing', [
		'DDD',
		'BBB'
	], {
		D: 'gtceu:double_bronze_plate',
		B: 'minecraft:bricks'
	});

	event.recipes.create.mechanical_crafting('gtceu:steel_brick_casing', [
		'WSW',
		'BBB'
	], {
		W: 'gtceu:double_wrought_iron_plate',
		S: 'gtceu:double_steel_plate',
		B: 'minecraft:bricks'
	});

	event.recipes.create.mechanical_crafting('gtceu:latex_plantation', [
		'RSR',
		'PGP',
		'BTB'
	], {
		R: 'gtceu:iron_rod',
		S: 'gtceu:lead_spring',
		P: 'gtceu:iron_plate',
		G: '#forge:glass',
		B: 'minecraft:bricks',
		T: 'thermal:redstone_servo'
	});

	event.recipes.create.mechanical_crafting('exnihilosequentia:flint_mesh', [
		'FSFSFSF',
		'SRSRSRS',
		'FSFSFSF',
		'SRSRSRS',
		'FSFSFSF',
		'SRSRSRS',
		'FSFSFSF'
	], {
		F: 'minecraft:flint',
		R: 'gtceu:tin_ring',
		S: '#forge:string'
	});

	event.recipes.gtceu.assembler('fluid_cell_frame')
		.itemInputs('gtceu:bronze_frame', '4x gtceu:tin_foil')
		.inputFluids('gtceu:glass 432')
		.itemOutputs('thermal:fluid_cell_frame')
		.duration(200)
		.EUt(7);

	event.remove({ id: /gtceu:shaped\/.*_drum/ });

	//Mass Removals

	const CreateRemoval = ['windmill_bearing', 'spout', 'fluid_pipe', 'chute', 'depot', 'basin', 'mechanical_mixer', 'mechanical_press', 'hand_crank', 'millstone',
		'crushing_wheel', 'smart_chute', 'fluid_tank', 'steam_engine', 'piston_extension_pole', 'mechanical_bearing', 'clockwork_bearing', 'weighted_ejector',
		'encased_fan', 'large_water_wheel', 'encased_chain_drive', 'gearshift', 'gantry_shaft', 'gantry_carriage', 'mechanical_drill', 'sticker', 'mechanical_saw',
		'deployer', 'andesite_casing', 'brass_casing', 'mechanical_crafter', 'copper_casing', 'sequenced_gearshift', 'nozzle', 'adjustable_chain_gearshift', 'water_wheel',
		'andesite_funnel', 'mechanical_arm', 'item_vault', 'flywheel', 'brass_hand', 'whisk', 'propeller', 'electron_tube', 'rotation_speed_controller', 'brass_tunnel',
		'andesite_tunnel', 'brass_funnel', 'white_sail'];
	CreateRemoval.forEach(item => {
		event.remove({ output: `create:${item}` });
	});
	const ThermalRemoval = ['redstone_servo', 'device_tree_extractor', 'drill_head', 'fluid_cell_frame'];
	ThermalRemoval.forEach(item => {
		event.remove({ output: `thermal:${item}` });
	});
	const GtceuRemoval = ['primitive_pump', 'lp_steam_alloy_smelter', 'compressed_coke_clay', 'matchbox'];
	GtceuRemoval.forEach(item => {
		event.remove({ output: `gtceu:${item}` });
	});
	const MinecraftRemoval = ['stonecutter', 'furnace', 'campfire', 'composter']
	MinecraftRemoval.forEach(item => {
		event.remove({ output: `minecraft:${item}` })
	});
});