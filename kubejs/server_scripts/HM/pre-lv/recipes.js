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

	event.remove('minecraft:planks', 'gtceu:wood_plate');
	event.remove('minecraft:planks', 'gtceu:treated_wood_plate');
});

ServerEvents.recipes(event => {
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
	// ~~~~~~~~~~~ PRE-COBBLEGEN ~~~~~~~~~~~ //
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

	const replace_shaped = (output, pattern, symbols) => {
		event.remove({ type: "minecraft:crafting_shaped", output: output });
		event.shaped(output, pattern, symbols);
	}

	const replace_shapeless = (output, ingredients) => {
		event.remove({ type: "minecraft:crafting_shapeless", output: output });
		event.shapeless(output, ingredients);
	}

	const plate = (metal) => `gtceu:${metal}_plate`
	const rod = (metal) => `gtceu:${metal}_rod`

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

	// Tool Recipes

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

	[
		'oak',
		'spruce',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
		'mangrove',
		'cherry',
		'bamboo',
		'crimson',
		'warped'
	].forEach(log => {
		replace_shaped(`exnihilosequentia:${log}_sieve`, [
			'S S',
			'SFS',
			'NRN'
		], {
			S: `minecraft:${log}_slab`,
			F: 'gtceu:wood_frame',
			N: `minecraft:${log}_fence`,
			R: '#forge:string'
		});

		event.remove({ type: 'minecraft:crafting_shaped', output: `minecraft:${log}_fence` });
		event.shaped(`2x minecraft:${log}_fence`, [
			'PSP',
			'PSP',
			'PSP',
		], {
			P: `minecraft:${log}_planks`,
			S: 'minecraft:stick',
		})

		event.remove({ id: `create:cutting/${log}_log` });
		event.recipes.create.cutting([`minecraft:stripped_${log}_log`, 'farmersdelight:tree_bark'], `minecraft:${log}_log`);

		if (log == 'bamboo') return;

		event.remove({ output: `functionalstorage:${log}_1` });
		event.remove({ output: `functionalstorage:${log}_2` });
		event.remove({ output: `functionalstorage:${log}_4` });

		event.shaped(`functionalstorage:${log}_1`, [
			'WSW',
			'SCS',
			'WSW'
		], {
			W: 'gtceu:iron_screw',
			S: `minecraft:${log}_slab`,
			C: 'minecraft:chest'
		});
		event.shapeless(`2x functionalstorage:${log}_2`, [`2x functionalstorage:${log}_1`]);
		event.shapeless(`2x functionalstorage:${log}_4`, [`2x functionalstorage:${log}_2`]);
		event.shaped(`4x functionalstorage:${log}_4`, [
			'DD',
			'DD'
		], { D: `functionalstorage:${log}_1` });
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
		'BEB',
		'AFA',
		'BRB'
	], {
		A: 'minecraft:iron_ingot',
		B: 'kubejs:reinforced_stone_bricks',
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
	event.recipes.create.cutting(['kubejs:plant_fibers'], 'farmersdelight:straw');
	event.recipes.create.cutting(['farmersdelight:straw'], 'farmersdelight:tree_bark');

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

		event.recipes.create.compacting(block, [`4x ${item}`, Fluid.of('gtceu:concrete', 400)]);
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

	event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:iron_ingot', 'gtceu:iron_plate');
	event.replaceInput({ id: 'minecraft:blast_furnace' }, 'minecraft:smooth_stone', 'kubejs:reinforced_stone_bricks');

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

	event.recipes.create.mixing('minecraft:clay', ['exnihilosequentia:dust', Fluid.of('minecraft:water', 250)]);

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

	['andesite', 'granite', 'diorite'].forEach(stone => {
		event.remove({ id: `create:compacting/${stone}_from_flint` });
	});
	event.remove({ id: 'create:compacting/blaze_cake' });

	// Metallurgy Rework via Create

	event.remove({ id: /^create:pressing.*_ingot/ });
	event.remove({ output: /^create_new_age.*wire/ });

	const minecraft_metals = ['iron', 'copper', 'gold'];
	const gt_metals = ['lead', 'tin', 'zinc', 'bronze', 'brass', 'nickel', 'pig_iron', 'tin_alloy', 'potin', 'cupronickel'];
	const all_metals = minecraft_metals.concat(gt_metals);

	all_metals.forEach(metal => {
		const mod = minecraft_metals.includes(metal) ? 'minecraft' : 'gtceu';

		event.recipes.create.pressing([`4x gtceu:${metal}_plate`], `${mod}:${metal}_block`);
		event.recipes.create.compacting(plate(metal), `2x ${mod}:${metal}_ingot`);

		event.recipes.create.cutting([`2x gtceu:${metal}_rod`], plate(metal));
		event.recipes.create.pressing([`gtceu:${metal}_ring`], rod(metal));
		event.recipes.create.pressing([`gtceu:${metal}_foil`], plate(metal));
		event.recipes.create.cutting([`2x gtceu:${metal}_bolt`], rod(metal));
		event.recipes.create.compacting([`gtceu:${metal}_screw`], `2x gtceu:${metal}_bolt`);
	});

	const long_rods = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron'];
	const double_plates = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron'];
	const gears = ['iron', 'lead', 'bronze', 'pig_iron'];
	const small_gears = ['iron', 'bronze', 'pig_iron'];
	const rotors = ['iron', 'copper', 'lead', 'bronze', 'pig_iron'];
	const springs = ['iron', 'copper', 'gold', 'lead', 'tin'];
	const small_springs = ['iron', 'copper', 'gold', 'lead', 'tin'];
	const wires = ['iron', 'copper', 'gold', 'lead', 'tin'];
	const fine_wires = ['copper', 'gold', 'lead', 'tin', 'zinc'];
	const cables = ['lead', 'red_alloy', 'tin'];
	const fluid_pipes = ['copper', 'steel', 'lead', 'bronze', 'tin_alloy', 'potin'];
	const item_pipes = ['tin', 'brass', 'cupronickel', 'nickel'];

	event.recipes.create.mixing('2x gtceu:pig_iron_dust', ['2x gtceu:iron_dust', 'gtceu:charcoal_dust']).heatRequirement('lowheated');

	// ~~~~~~ Sequenced Assembly ~~~~~~ //

	const seq_assembly = (output, input, inter, sequence, loops) => {
		const steps = sequence.map(step => {
			let result;

			if (step == 'cut') result = event.recipes.createCutting(inter, inter);
			if (step == 'press') result = event.recipes.createPressing(inter, inter);
			if (Array.isArray(step)) {
				const [type, fluitem] = step;

				if (type == 'fill') result = event.recipes.createFilling(inter, [inter, fluitem]);
				if (type == 'deploy') result = event.recipes.createDeploying(inter, [inter, fluitem]);
			}

			return result;
		});

		event.recipes.create.sequenced_assembly(
			output,
			input,
			steps
		).transitionalItem(inter).loops(loops);
	}

	long_rods.forEach(metal => seq_assembly(
		`gtceu:long_${metal}_rod`,
		rod(metal),
		'kubejs:incomplete_long_rod',
		[
			['deploy', rod(metal)],
			'press',
		], 1
	));

	double_plates.forEach(metal => seq_assembly(
		`gtceu:double_${metal}_plate`,
		plate(metal),
		'kubejs:incomplete_double_plate',
		[
			['deploy', plate(metal)],
			'press',
		], 1
	));

	gears.forEach(metal => seq_assembly(
		`gtceu:${metal}_gear`,
		plate(metal),
		'kubejs:incomplete_gear',
		[
			['deploy', rod(metal)],
			'press',
			['deploy', plate(metal)],
		], 4
	));

	small_gears.forEach(metal => seq_assembly(
		`gtceu:small_${metal}_gear`,
		plate(metal),
		'kubejs:incomplete_small_gear',
		[
			['deploy', rod(metal)],
			['deploy', plate(metal)],
		], 2
	));

	rotors.forEach(metal => seq_assembly(
		`gtceu:${metal}_rotor`,
		`gtceu:${metal}_ring`,
		'kubejs:incomplete_rotor',
		[
			['deploy', plate(metal)],
			'press',
			['deploy', `gtceu:${metal}_screw`],
		], 4
	));

	springs.forEach(metal => seq_assembly(
		`gtceu:${metal}_spring`,
		`gtceu:long_${metal}_rod`,
		'kubejs:incomplete_spring',
		['press'], 2
	));

	small_springs.forEach(metal => seq_assembly(
		`2x gtceu:small_${metal}_spring`,
		`gtceu:long_${metal}_rod`,
		'kubejs:incomplete_small_spring',
		['cut', 'press'], 2
	));

	wires.forEach(metal => seq_assembly(
		`gtceu:${metal}_single_wire`,
		plate(metal),
		'kubejs:incomplete_single_wire',
		[
			['deploy', '#forge:tools/wire_cutters'],
			'cut',
		], 2
	));

	fine_wires.forEach(metal => seq_assembly(
		`gtceu:fine_${metal}_wire`,
		`gtceu:${metal}_foil`,
		'kubejs:incomplete_fine_wire',
		[
			['deploy', '#forge:tools/wire_cutters'],
			'cut',
		], 2
	));

	cables.forEach(metal => {
		['single', 'double', 'quadruple'].forEach((size, i) => {
			seq_assembly(
				`gtceu:${metal}_${size}_cable`,
				`gtceu:${metal}_${size}_wire`,
				'kubejs:incomplete_cable',
				[
					['fill', Fluid.of('gtceu:rubber', 72)],
					'press'
				], 2 ** (i + 1)
			);
		});
	});

	item_pipes.forEach(metal => {
		['small', 'normal', 'large', 'huge'].forEach((size, i) => {
			seq_assembly(
				`gtceu:${metal}_${size}_item_pipe`,
				`gtceu:${metal}_ring`,
				'kubejs:incomplete_item_pipe',
				[
					['deploy', plate(metal)],
					'press'
				], Math.floor(3 * (2 ** (i - 1))) // 1, 3, 6, 12
			);
		});
	});

	fluid_pipes.forEach(metal => {
		const tiny = `gtceu:${metal}_tiny_fluid_pipe`;
		const small = `gtceu:${metal}_small_fluid_pipe`;
		const normal = `gtceu:${metal}_normal_fluid_pipe`;
		const large = `gtceu:${metal}_large_fluid_pipe`;
		const huge = `gtceu:${metal}_huge_fluid_pipe`;

		const inter = 'kubejs:incomplete_fluid_pipe';
		const sequence = [
			['deploy', plate(metal)],
			'press',
		];

		seq_assembly(small, `gtceu:${metal}_foil`, inter, sequence, 1);
		seq_assembly(normal, small, inter, sequence, 2);
		seq_assembly(large, normal, inter, sequence, 3);
		seq_assembly(huge, large, inter, sequence, 6);

		event.recipes.create.cutting(Item.of(tiny, 2), small);
	});

	['small', 'normal', 'large'].forEach((pipe, i) => { // Wooden Pipes
		seq_assembly(
			`gtceu:wood_${pipe}_fluid_pipe`,
			`gtceu:wood_plate`,
			'kubejs:incomplete_fluid_pipe',
			[
				['deploy', 'gtceu:wood_plate'],
				['deploy', 'gtceu:wood_screw'],
				'press',
				'cut',
			], i == 0 ? 1 : 3 * i
		);
	});

	// ====================================================================== //

	event.recipes.shapeless(Item.of('gtceu:wood_screw'), ['#forge:tools/files', 'gtceu:wood_bolt', 'gtceu:wood_bolt']);

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


	event.recipes.create.mixing(Fluid.of('gtceu:concrete', 1200), [Fluid.of('minecraft:water', 1000), '3x gtceu:stone_dust', 'gtceu:calcite_dust', '2x gtceu:gypsum_dust']);

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
	event.recipes.create.cutting(['gtceu:wood_plate'], '#minecraft:planks');

	event.shapeless(Item.of('gtceu:treated_wood_plate', 2), [
		'#forge:tools/files', '#forge:treated_wood', '#forge:treated_wood', '#forge:treated_wood', '#forge:tools/saws'
	]);
	event.recipes.create.cutting(['gtceu:treated_wood_plate'], '#forge:treated_wood');

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

	event.remove('createlowheated:basic_burner');
	event.shaped('createlowheated:basic_burner', [
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
	event.recipes.create.mixing(Fluid.of('gtceu:brass', 432), ['1x gtceu:zinc_ingot', '3x minecraft:copper_ingot']).heatRequirement('superheated');
	event.recipes.create.mixing(Fluid.of('gtceu:bronze', 432), ['1x gtceu:tin_ingot', '3x minecraft:copper_ingot']).heatRequirement('superheated');
	event.recipes.create.compacting(`1x gtceu:brass_ingot`, Fluid.of('gtceu:brass', 144));
	event.recipes.create.compacting(`1x gtceu:bronze_ingot`, Fluid.of('gtceu:bronze', 144));

	['brass', 'bronze', 'pig_iron'].forEach(dust => {
		event
			.blasting(`gtceu:${dust}_ingot`, `gtceu:${dust}_dust`)
			.id(`kubejs:${dust}_dust_blasting_manual_only`);
	});

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

	event.remove({ id: 'minecraft:iron_trapdoor' });
	event.shaped('minecraft:iron_trapdoor', [
		' P ',
		'PTP',
		' P ',
	], {
		P: 'gtceu:iron_plate',
		T: '#minecraft:trapdoors'
	});

	event.replaceInput({ output: 'minecraft:compass' }, 'gtceu:red_alloy_bolt', 'gtceu:copper_bolt');

	event.remove({ id: 'architects_palette:smelting/charcoal_block_from_logs_that_burn_smoking' });
	event.remove({ id: 'minecraft:stone_bricks_from_stone_stonecutting' });
	event.remove('rechiseled:chisel'); // Remove Chisel, replacement recipe later

	event.remove({ output: 'create:super_glue' });
	event.recipes.create.mechanical_crafting('create:super_glue', [
		'RP',
		'NR',
	], {
		R: 'gtceu:sticky_resin',
		P: 'gtceu:iron_plate',
		N: 'minecraft:iron_nugget',
	});

	replace_shaped('gtceu:treated_wood_rod', [
		'SP'
	], {
		S: '#forge:tools/saws',
		P: 'gtceu:treated_wood_slab',
	});

	event.remove({ id: 'gtceu:smelting/wrought_iron_nugget' });

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