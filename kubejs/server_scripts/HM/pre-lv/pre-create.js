// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

	// Tool Recipes

	event.shapeless(Item.of('minecraft:stick'), [
		'#forge:tools/saws', '#minecraft:wooden_slabs'
	]).id('start:shapeless/stick');

	event.shaped(Item.of('gtceu:flisnt_axe'), [
		'FT',
		'ST'
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	}).id('start:shaped/flisnt_axe');

	event.shaped(Item.of('gtceu:flisnt_saw'), [
		'FS',
		'FT'
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	}).id('start:shaped/flisnt_saw');

	event.shaped(Item.of('gtceu:flisnt_knife'), [
		'F',
		'T'
	], {
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	}).id('start:shaped/flisnt_knife');

	event.shaped(Item.of('gtceu:flisnt_shovel'), [
		'  F',
		' TS',
		'T  '
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	}).id('start:shaped/flisnt_shovel');

	event.shaped(Item.of('gtceu:flisnt_pickaxe'), [
		'FFF',
		'RTS',
		' T '
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood',
		R: 'kubejs:flint_shard'
	}).id('start:shaped/flisnt_pickaxe');

	event.shaped(Item.of('gtceu:flisnt_sword'), [
		' F ',
		' F ',
		' T '
	], {
		F: 'minecraft:flint',
		T: '#forge:rods/wood'
	}).id('start:shaped/flisnt_sword');

	event.shaped(Item.of('gtceu:flisnt_hammer'), [
		'FCF',
		'CFC',
		'STS'
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood',
		C: '#forge:cobblestone'
	}).id('start:shaped/flisnt_hammer');

	event.shaped(Item.of('gtceu:flisnt_scythe'), [
		'FFT',
		'RST',
		'  T'
	], {
		S: '#forge:string',
		F: 'minecraft:flint',
		T: '#forge:rods/wood',
		R: 'kubejs:flint_shard'
	}).id('start:shaped/flisnt_scythe');

	event.shaped(Item.of('exnihilosequentia:wooden_crook'), [
		'TT',
		'ST',
		' T'
	], {
		S: '#forge:string',
		T: '#forge:rods/wood'
	}).id('start:shaped/wooden_crook');

	event.shaped(Item.of('gtceu:flisnt_file'), [
		' FQ',
		'FQF',
		'TFS'
	], {
		S: '#forge:string',
		F: 'kubejs:flint_shard',
		T: '#forge:rods/wood',
		Q: 'gtceu:quartzite_gem'
	}).id('start:shaped/flisnt_file');

	event.shapeless(Item.of('gtceu:long_wood_rod'), [
		'#forge:tools/files', 'minecraft:stick', 'minecraft:stick']).id('start:shapeless/long_wood_rod');

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
	}).id('start:shaped/basic_scavenging_rod');

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
	}).id('start:shaped/scavenging_rod');

	// Kiln

	event.remove({ id: 'minecraft:brick' });
	event.remove({ id: 'gtceu:smelting/fireclay_brick' });
	event.remove({ id: 'gtceu:smelting/coke_oven_brick' });

	[
		{ fuel: 'coals', burnMultiplier: 1 },
		{ fuel: 'poor_coals', burnMultiplier: 1.8 }
	].forEach(coal => {
		const { fuel, burnMultiplier: burn } = coal;

		event.recipes.gtceu.kiln(id(`brick_${fuel}`))
			.itemInputs('4x gtceu:compressed_clay', `#minecraft:${fuel}`)
			.itemOutputs('4x minecraft:brick')
			.duration(400 * burn);
		event.recipes.gtceu.kiln(id(`coke_oven_brick_${fuel}`))
			.itemInputs('4x gtceu:compressed_coke_clay', `2x #minecraft:${fuel}`)
			.itemOutputs('4x gtceu:coke_oven_brick')
			.duration(500 * burn);
		event.recipes.gtceu.kiln(id(`firebrick_${fuel}`))
			.itemInputs('4x gtceu:compressed_fireclay', `2x #minecraft:${fuel}`)
			.itemOutputs('4x gtceu:firebrick')
			.duration(600 * burn);
		event.recipes.gtceu.kiln(id(`glass_${fuel}`))
			.itemInputs('gtceu:glass_dust', `#minecraft:${fuel}`)
			.itemOutputs('minecraft:glass')
			.duration(800 * burn);

		['ingot', 'ball'].forEach(MoldType => {
			event.recipes.gtceu.kiln(id(`${MoldType}_ceramic_casting_mold_firing_${fuel}`))
				.itemInputs(`kubejs:unfired_${MoldType}_ceramic_casting_mold`, `#minecraft:${fuel}`)
				.itemOutputs(`kubejs:${MoldType}_ceramic_casting_mold`)
				.duration(300 * burn);
		});

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

			event.recipes.gtceu.rugged_alloyer(id(`${ore}_chunks_${fuel}`))
				.itemInputs(`2x kubejs:${ore}_crushed_ore_chunk`, `#forge:nuggets/${metal}`, `#minecraft:${fuel}`)
				.itemOutputs(`#forge:ingots/${metal}`, 'gtceu:tiny_ash_dust')
				.duration(200 * t * burn);

			if (fuel == 'coals') {
				event
					.smelting(`2x ${mod}:${metal}_nugget`, `kubejs:${ore}_crushed_ore_chunk`)
					.id(`kjs:smelting/${ore}_crushed_ore_chunk_manual_only`);
			}
		});

		event.remove({ type: 'minecraft:crafting_shapeless', output: 'create:rose_quartz' });
		event.recipes.gtceu.rugged_alloyer(id(`rose_quartz_${fuel}`))
			.itemInputs('10x minecraft:redstone', 'gtceu:quartzite_gem', `2x #minecraft:${fuel}`)
			.itemOutputs('create:rose_quartz', 'gtceu:tiny_ash_dust')
			.duration(600 * burn);
		event.recipes.gtceu.rugged_alloyer(id(`andesite_alloy_${fuel}`))
			.itemInputs('4x exnihilosequentia:andesite_pebble', '4x gtceu:zinc_nugget', `2x #minecraft:${fuel}`)
			.itemOutputs('4x create:andesite_alloy', 'gtceu:tiny_ash_dust')
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
		event.remove({output: `exnihilosequentia:${log}_sieve`});
		event.shaped(`exnihilosequentia:${log}_sieve`, [
			'S S',
			'SFS',
			'NRN'
		], {
			S: `minecraft:${log}_slab`,
			F: 'gtceu:wood_frame',
			N: `minecraft:${log}_fence`,
			R: '#forge:string'
		}).id(`start:shaped/ens_${log}_sieve`);

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
		event.recipes.create.cutting([`minecraft:stripped_${log}_log`, 'farmersdelight:tree_bark'], `minecraft:${log}_log`).id(`start:cutting/stripped_${log}_log`);

		if (log == 'bamboo') return;

		event.remove({output: `functionalstorage:${log}_1`});
		event.shaped(`functionalstorage:${log}_1`, [
			'WSW',
			'SCS',
			'WSW'
		], {
			W: 'gtceu:iron_screw',
			S: `minecraft:${log}_slab`,
			C: 'minecraft:chest'
		}).id(`start:shaped/funcstor_${log}_drawer_1x`);

		event.remove({output: `functionalstorage:${log}_2`});
		event.shapeless(`2x functionalstorage:${log}_2`, [`2x functionalstorage:${log}_1`]);

		event.remove({output: `functionalstorage:${log}_4`});
		event.shapeless(`2x functionalstorage:${log}_4`, [`2x functionalstorage:${log}_2`]);
		
		event.shaped(`4x functionalstorage:${log}_4`, [
			'DD',
			'DD'
		], { D: `functionalstorage:${log}_1` }).id(`start:shaped/${log}_1_alt`);
	});

	event.remove({id: `minecraft:crafting_table`});
	event.shaped(Item.of('minecraft:crafting_table'), [
		'PCP',
		'PRP'
	], {
		C: 'farmersdelight:canvas',
		P: 'gtceu:wood_plate',
		R: 'gtceu:sticky_resin'
	});

	event.remove({output: 'gtceu:matchbox'});
	event.shaped(Item.of('gtceu:matchbox'), [
		'RRR',
		'TST',
		' B '
	], {
		R: '#forge:string',
		T: '#forge:rods/wooden',
		S: 'farmersdelight:straw',
		B: 'minecraft:bowl'
	}).id(`start:shaped/fire_starter`);

	event.remove({ id: 'minecraft:flint_and_steel' });
	event.shapeless(Item.of('minecraft:flint_and_steel'), [
		'gtceu:steel_ring', 'minecraft:flint'
	]).id('start:shapeless/flint_and_steel');

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
	}).id('start:shaped/rugged_alloyer');

	event.remove({output: 'minecraft:bowl'});
	event.shaped(Item.of('minecraft:bowl', 2),
		[
			'A',
			'B'
		], {
		A: '#forge:tools/knives',
		B: '#minecraft:planks'
	}).id(`start:shaped/bowls`);

	event.shapeless(Item.of('kubejs:plant_fibers'), [
		'#forge:tools/knives',
		'farmersdelight:straw'
	]).id('start:shapeless/plant_fibers');

	event.shapeless(Item.of('farmersdelight:straw'), [
		'#forge:tools/knives',
		'farmersdelight:tree_bark'
	]).id('start:shapeless/straw');

	event.recipes.create.cutting(['kubejs:plant_fibers'], 'farmersdelight:straw').id('start:cutting/plant_fibers');
	event.recipes.create.cutting(['farmersdelight:straw'], 'farmersdelight:tree_bark').id('start:cutting/straw');

	event.remove({output: 'exnihilosequentia:string_mesh'})
	event.shaped(Item.of('exnihilosequentia:string_mesh'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		S: '#forge:string',
		C: 'farmersdelight:canvas'
	}).id(`start:shaped/ens_string_mesh`);

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
			{type: 'gtceu:concrete_bucket', variant: 'bucket'},
			{type:
			{
				type: 'forge:partial_nbt',
				item: 'woodenbucket:wooden_bucket',
				nbt: {
					Fluid: {
						FluidName: 'gtceu:concrete',
						Amount: 1000,
					}
				}
			}, variant: 'wood_bucket'}
		]

		buckets.forEach(bucket => {
			event.shaped(Item.of(block, 2), [
				'BBB',
				'BCB',
				'BBB'
			], {
				B: item,
				C: bucket.type,
			}).id(`start:shaped/${bucket.variant}_${type}bricks`);
		});

		event.recipes.create.compacting(block, [`4x ${item}`, Fluid.of('gtceu:concrete', 400)]).id(`start:compacting/${type}bricks`);
	});

	event.shaped(Item.of('kubejs:reinforced_stone_bricks', 2), [
		'NHN',
		'NBN',
		'NFN'
	], {
		N: 'minecraft:iron_nugget',
		B: 'minecraft:stone_bricks',
		H: '#forge:tools/hammers',
		F: '#forge:tools/files'
	}).id('start:shaped/reinforced_stone_bricks');

	event.shaped(Item.of('kubejs:mud_brick', 4), [
		'CCC',
		'CMC',
		'CCC'
	], {
		C: 'kubejs:packed_mud_ball',
		M: 'gtceu:brick_wooden_form'
	}).keepIngredient('gtceu:brick_wooden_form').id('start:shaped/mud_brick');

	event.shapeless(Item.of('kubejs:stone_brick'), ['#forge:tools/files', 'minecraft:stone']).id('start:shapeless/stone_brick');
	event.recipes.create.cutting(['kubejs:stone_brick'], 'minecraft:stone').id('start:cutting/stone_brick');

	event.shaped(Item.of('minecraft:stonecutter'), [
		'PSP',
		'TFT'
	], {
		T: 'minecraft:stone_slab',
		P: 'gtceu:wood_plate',
		S: 'gtceu:iron_buzz_saw_blade',
		F: 'gtceu:wood_frame'
	}).id('start:shaped/stonecutter');

	event.remove({ id: /^gtceu:mixer\/concrete.*/ })
	event.recipes.gtceu.mixer(id('concrete'))
		.itemInputs('3x gtceu:stone_dust', 'gtceu:calcite_dust', '2x gtceu:gypsum_dust')
		.inputFluids('minecraft:water 1000')
		.outputFluids('gtceu:concrete 1000')
		.duration(50)
		.EUt(6);

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
	}).replaceIngredient('woodenbucket:wooden_bucket', 'minecraft:air').id('start:shaped/liquid_concrete_wooden_bucket');

	event.shaped('gtceu:concrete_bucket', [
		'GCG',
		'SSS',
		' B '
	], {
		G: 'gtceu:gypsum_dust',
		C: 'gtceu:calcite_dust',
		S: 'gtceu:stone_dust',
		B: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:air').id('start:shaped/liquid_concrete_iron_bucket');

	['stone', 'gypsum', 'calcite'].forEach(dust => {
		const pebble = (dust == 'gypsum') ? 'dripstone' : dust;

		event.shapeless(`gtceu:tiny_${dust}_dust`, ['#forge:tools/mortars', `exnihilosequentia:${pebble}_pebble`]).id(`start:shapeless/tiny_${dust}_dust`);
		event.recipes.gtceu.macerator(id(`small_${dust}_dust`))
			.itemInputs(`exnihilosequentia:${pebble}_pebble`)
			.itemOutputs(`gtceu:small_${dust}_dust`)
			.duration(23)
			.EUt(2);
	});

	event.recipes.create.mixing(Fluid.of('gtceu:concrete', 1200), [Fluid.of('minecraft:water', 1000), '3x gtceu:stone_dust', 'gtceu:calcite_dust', '2x gtceu:gypsum_dust']).id('start:create_mixer/liquid_concrete');

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
	}).id('start:cutting_board/packed_mud_ball');

	event.shaped(Item.of('minecraft:furnace'), [
		'SCS',
		'CFC',
		'MMM'
	], {
		S: 'minecraft:cobblestone_slab',
		C: 'minecraft:cobblestone',
		F: 'minecraft:campfire',
		M: 'minecraft:mud_bricks'
	}).id('start:shaped/furnace');

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
	}).id('start:shaped/composter');

	event.shaped(Item.of('minecraft:campfire', '{BlockStateTag:{lit:"false"}}'), [
		'BTB',
		'TST',
		'LLL'
	], {
		T: '#balm:wooden_rods',
		S: 'farmersdelight:straw',
		B: 'farmersdelight:tree_bark',
		L: '#minecraft:logs'
	}).id('start:shaped/campfire');

	event.recipes.shaped(Item.of('gtceu:kiln'), [
		'BBB',
		'BFB',
		'PSP'
	], {
		B: 'minecraft:mud_bricks',
		F: 'minecraft:furnace',
		P: 'gtceu:iron_plate',
		S: 'gtceu:iron_screw'
	}).id('start:shaped/kiln');

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
	}).id('start:shaped/wooden_bucket');

	event.shapeless(Item.of('gtceu:wood_bolt', 2), [
		'#forge:tools/saws', 'minecraft:stick'
	]).id('start:shapeless/wood_bolt');

	event.remove({ id: 'minecraft:clay' });
	event.recipes.create.compacting('minecraft:clay', '4x minecraft:clay_ball').id('start:compacting/clay');

	event.recipes.create.mixing('minecraft:clay', ['exnihilosequentia:dust', Fluid.of('minecraft:water', 250)]).id('start:create_mixer/clay');

	event.shaped(Item.of('gtceu:wood_gear'), [
		'BBB',
		'BSB',
		'BBB'
	], {
		B: 'gtceu:wood_bolt',
		S: '#minecraft:wooden_slabs'
	}).id('start:shaped/wood_gear');

});