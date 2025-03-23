
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

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

		[{ fuel: 'coals', burnMultiplier: .5 }, { fuel: 'logs', burnMultiplier: 1.2 }].forEach(coal => {
			event.recipes.gtceu.kiln(`brick_${coal.fuel}`)
				.itemInputs('4x gtceu:compressed_clay', `#minecraft:${coal.fuel}`)
				.itemOutputs('4x minecraft:brick')
				.duration(800 * coal.burnMultiplier);
			event.recipes.gtceu.kiln(`coke_oven_brick_${coal.fuel}`)
				.itemInputs('4x gtceu:compressed_coke_clay', `2x #minecraft:${coal.fuel}`)
				.itemOutputs('4x gtceu:coke_oven_brick')
				.duration(1000 * coal.burnMultiplier);
			event.recipes.gtceu.kiln(`firebrick_${coal.fuel}`)
				.itemInputs('4x gtceu:compressed_fireclay', `2x #minecraft:${coal.fuel}`)
				.itemOutputs('4x gtceu:firebrick')
				.duration(1200 * coal.burnMultiplier);
			event.recipes.gtceu.kiln(`glass_${coal.fuel}`)
				.itemInputs('gtceu:glass_dust', `#minecraft:${coal.fuel}`)
				.itemOutputs('minecraft:glass')
				.duration(1600 * coal.burnMultiplier);

			// Rugged Alloyer and Chunk Processing

			[{ ore: 'hematite', metal: 'minecraft:iron' }, { ore: 'pyrite', metal: 'minecraft:iron' }, { ore: 'magnetite', metal: 'minecraft:iron' },
			{ ore: 'cassiterite', metal: 'gtceu:tin' }, { ore: 'sphalerite', metal: 'gtceu:zinc' }, { ore: 'galena', metal: 'gtceu:lead' },
			{ ore: 'raw_electrum', metal: 'gtceu:raw_electrum' }].forEach(chunks => {
				event.recipes.gtceu.rugged_alloyer(`${chunks.ore}_chunks_${coal.fuel}`)
					.itemInputs(`3x kubejs:${chunks.ore}_crushed_ore_chunk`, `#minecraft:${coal.fuel}`)
					.itemOutputs(`${chunks.metal}_ingot`, 'gtceu:ash_dust')
					.duration(400 * coal.burnMultiplier);
				event.smelting(`2x ${chunks.metal}_nugget`, `kubejs:${chunks.ore}_crushed_ore_chunk`);
			});
			event.recipes.gtceu.rugged_alloyer(`chalcopyrite_chunks_${coal.fuel}`)
				.itemInputs(`3x kubejs:chalcopyrite_crushed_ore_chunk`, `#minecraft:${coal.fuel}`)
				.itemOutputs(`minecraft:copper_ingot`, 'gtceu:ash_dust')
				.duration(400 * coal.burnMultiplier);
			event.smelting(`2x gtceu:copper_nugget`, `kubejs:chalcopyrite_crushed_ore_chunk`);
			event.recipes.gtceu.rugged_alloyer(`andesite_alloy_${coal.fuel}`)
				.itemInputs('4x exnihilosequentia:andesite_pebble', '4x gtceu:zinc_nugget', `2x #minecraft:${coal.fuel}`)
				.itemOutputs('2x create:andesite_alloy', 'gtceu:ash_dust')
				.duration(600 * coal.burnMultiplier);
			event.remove({ output: /^create:.*rose_quartz/ });
			event.recipes.gtceu.rugged_alloyer(`rose_quartz_${coal.fuel}`)
				.itemInputs('12x minecraft:redstone', '1x gtceu:quartzite_gem', `2x #minecraft:${coal.fuel}`)
				.itemOutputs('1x create:rose_quartz', 'gtceu:ash_dust')
				.duration(600 * coal.burnMultiplier);
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
			E: 'gtceu:raw_electrum_ingot',
			R: 'minecraft:redstone'
		});

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
		[{ output: 'minecraft:bricks' }, { output: 'gtceu:firebricks' }, { output: 'gtceu:coke_oven_bricks' }, { output: 'minecraft:mud_bricks' }].forEach(r => {
			event.remove({ output: `${r.output}` });
		});

		[{ type: '', modItem: 'minecraft', modBlock: 'minecraft' }, { type: 'coke_oven_', modItem: 'gtceu', modBlock: 'gtceu' }, { type: 'fire', modItem: 'gtceu', modBlock: 'gtceu' },
		{ type: 'stone_', modItem: 'kubejs', modBlock: 'minecraft' }, { type: 'mud_', modItem: 'kubejs', modBlock: 'minecraft' }].forEach(brick => {
			event.shaped(Item.of(`${brick.modBlock}:${brick.type}bricks`, 2), [
				'BBB',
				'BCB',
				'BBB'
			], {
				B: `${brick.modItem}:${brick.type}brick`,
				C: 'gtceu:concrete_bucket'
			});
			event.shaped(Item.of(`${brick.modBlock}:${brick.type}bricks`, 2), [
				'BBB',
				'BCB',
				'BBB'
			], {
				B: `${brick.modItem}:${brick.type}brick`,
				C: {
					'type': 'forge:partial_nbt',
					'item': 'woodenbucket:wooden_bucket',
					'nbt': {
						'Fluid': {
							Amount: 1000, FluidName: 'gtceu:concrete'
						}
					}
				}
			});
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

		event.remove({ output: 'minecraft:stonecutter' })
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
		event.recipes.gtceu.primitive_mixer('concrete')
			.itemInputs('3x gtceu:stone_dust', 'gtceu:calcite_dust', '2x gtceu:gypsum_dust')
			.inputFluids('minecraft:water 1000')
			.outputFluids('gtceu:concrete 1000')
			.duration(240);
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

		event.remove({ output: 'minecraft:furnace' });
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

		event.remove({ output: 'minecraft:campfire' });
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
		event.shaped(Item.of('exnihilosequentia:jungle_barrel'), [
			'S S',
			'SRS',
			'SBS'
		], {
			S: 'minecraft:jungle_slab',
			B: 'woodenbucket:wooden_bucket',
			R: 'gtceu:sticky_resin'
		});

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

		event.remove({ id: 'minecraft:clay' })
		event.recipes.gtceu.primitive_mixer('clay')
			.itemInputs('exnihilosequentia:dust')
			.inputFluids('minecraft:water 1000')
			.itemOutputs('minecraft:clay')
			.duration(160);

		event.recipes.gtceu.primitive_mixer('mud')
			.itemInputs('minecraft:dirt')
			.inputFluids('minecraft:water 1000')
			.itemOutputs('minecraft:mud')
			.duration(160);

		event.shaped(Item.of('gtceu:wood_gear'), [
			'BBB',
			'BSB',
			'BBB'
		], {
			B: 'gtceu:wood_bolt',
			S: '#minecraft:wooden_slabs'
		});

		event.shaped(Item.of('gtceu:ulv_primitive_mixer'), [
			'GCG',
			'CBC',
			'GCG'
		], {
			G: 'gtceu:wood_gear',
			C: 'minecraft:cobblestone',
			B: 'exnihilosequentia:jungle_barrel'
		});

		event.remove({ output: 'gtceu:compressed_coke_clay' })
		event.remove({ id: 'gtceu:shapeless/fireclay_dust' })
		event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust');
		event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball');
		event.recipes.create.pressing('kubejs:mud_brick', 'kubejs:packed_mud_ball');
		event.recipes.create.pressing('gtceu:compressed_coke_clay', 'gtceu:coke_clay_dust');

		// Metalurgy Rework via Create

		event.remove({ id: /^create:pressing.*_ingot/ })
		event.remove({ output: /^create_new_age.*wire/ })
		const GTMetals = ['lead', 'raw_electrum', 'tin', 'zinc', 'bronze', 'brass', 'nickel', 'pig_iron', 'tin_alloy', 'nickle', 'potin', 'cupronickle']
		const MinecraftMetals = ['iron', 'copper', 'gold']
		const MetalInc = ['iron', 'copper', 'gold', 'lead', 'raw_electrum', 'tin', 'bronze', 'brass', 'pig_iron', 'tin_alloy', 'nickle', 'potin', 'cupronickle']
		GTMetals.forEach(type => {
			event.recipes.create.pressing([Item.of(`gtceu:${type}_plate`).withChance(0.5)], `gtceu:${type}_ingot`);
		});
		MinecraftMetals.forEach(type => {
			event.recipes.create.pressing([Item.of(`gtceu:${type}_plate`).withChance(0.5)], `minecraft:${type}_ingot`);
		});
		MetalInc.forEach(type => {
			event.recipes.create.cutting([`gtceu:${type}_rod`, Item.of(`gtceu:${type}_rod`).withChance(1)], `gtceu:${type}_plate`);
			event.recipes.create.pressing([Item.of(`gtceu:${type}_ring`).withChance(1)], `gtceu:${type}_rod`);
			event.recipes.create.pressing([Item.of(`gtceu:${type}_foil`).withChance(1)], `gtceu:${type}_plate`);
			event.recipes.create.cutting([`gtceu:${type}_bolt`, Item.of(`gtceu:${type}_bolt`).withChance(1)], `gtceu:${type}_rod`);
			event.recipes.create.pressing([Item.of(`gtceu:${type}_screw`).withChance(1)], `gtceu:${type}_bolt`);
		});

		const SEQLRod = ['iron', 'copper', 'gold', 'lead', 'raw_electrum', 'tin', 'bronze', 'brass', 'pig_iron'];
		const SEQDPlates = ['iron', 'copper', 'gold', 'lead', 'raw_electrum', 'tin', 'bronze', 'brass', 'pig_iron'];
		const SEQGear = ['iron', 'lead', 'raw_electrum', 'bronze', 'pig_iron'];
		const SEQSmGear = ['iron', 'raw_electrum', 'bronze', 'pig_iron'];
		const SEQRotor = ['iron', 'copper', 'lead', 'raw_electrum', 'bronze', 'pig_iron'];
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

		event.remove({ id: /^gtceu:.*glass_dust_flint.*/ });
		event.recipes.gtceu.primitive_mixer('glass')
			.itemInputs('2x gtceu:quartz_sand_dust', '1x gtceu:flint_dust')
			.itemOutputs('1x gtceu:glass_dust')
			.duration(320);
		event.recipes.create.mixing('1x gtceu:glass_dust', ['2x gtceu:quartz_sand_dust', '1x gtceu:flint_dust']);

		event.recipes.gtceu.primitive_mixer('fireclay')
			.itemInputs('1x gtceu:clay_dust', '1x gtceu:brick_dust')
			.itemOutputs('2x gtceu:fireclay_dust')
			.duration(160);
		event.recipes.create.mixing('2x gtceu:fireclay_dust', ['1x gtceu:clay_dust', '1x gtceu:brick_dust']);

		event.recipes.gtceu.primitive_mixer('coke_clay')
			.itemInputs('5x gtceu:quartz_sand_dust', '3x gtceu:clay_dust')
			.itemOutputs('3x gtceu:coke_clay_dust')
			.duration(200);
		event.recipes.create.mixing('3x gtceu:coke_clay_dust', ['5x gtceu:quartz_sand_dust', '3x gtceu:clay_dust']);
		event.recipes.gtceu.centrifuge('coke_clay')
			.itemInputs('3x gtceu:coke_clay_dust')
			.itemOutputs('5x gtceu:quartz_sand_dust', '3x gtceu:clay_dust')
			.duration(168)
			.EUt(30);

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
		event.recipes.create.compacting(Fluid.of('thermal:latex', 5), `16x minecraft:jungle_log`).heatRequirement('lowheated');
		event.recipes.create.mixing(Fluid.of('gtceu:rubber', 288), [Fluid.of('thermal:latex', 288), '1x gtceu:sulfur_dust']).heatRequirement('superheated');
		event.recipes.create.compacting(`1x thermal:cured_rubber`, Fluid.of('gtceu:rubber', 144));
		event.recipes.create.compacting(`1x gtceu:rubber_plate`, `3x thermal:cured_rubber`);

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
			'#forge:tools/files', '#minecraft:planks', '#minecraft:planks'
		]);

		event.shapeless(Item.of('gtceu:treated_wood_plate', 2), [
			'#forge:tools/files', '#forge:treated_wood', '#forge:treated_wood'
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

		event.remove({ output: 'thermal:drill_head' });
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
			'ArrSA'
		], {
			M: '#forge:tools/mallets',
			H: '#forge:tools/hammers',
			W: '#forge:tools/wrenches',
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
			B: 'gtceu:raw_electrum_bolt',
			N: 'minecraft:glass_pane',
			Q: 'create:polished_rose_quartz'
		});

		event.remove({ output: 'thermal:redstone_servo' })
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

		let prec = 'gtceu:gold_plate'
		event.recipes.create.sequenced_assembly([
			Item.of(`create:precision_mechanism`).withChance(.8),
		], `gtceu:gold_plate`, [
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
		]).transitionalItem(mech);

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

		// Post Cobble-Gen, Pre-Circuit

		event.remove({ output: 'thermal:device_tree_extractor' });
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

		event.shaped(Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"gtceu:concrete"}}'), [
			'GCG',
			'SSS',
			' B '
		], {
			G: 'gtceu:gypsum_dust',
			C: 'gtceu:calcite_dust',
			S: 'gtceu:stone_dust',
			B: Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT()
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

		const latexType = [{ fuel: 'minecraft:bone_meal', circ: '1' }, { fuel: 'thermal:compost', circ: '2' }, { fuel: 'gtceu:fertilizer', circ: '3' }]
		latexType.forEach(latex => {
			event.recipes.gtceu.latex_plantation(`latex_${latex.circ}`)
				.chancedInput(`${latex.fuel}`, 2500, 0)
				.circuit(latex.circ)
				.outputFluids(`thermal:latex ${100 + 50 * latex.circ}`)
				.duration(160);
		});
		event.recipes.gtceu.latex_plantation(`latex`)
			.circuit(0)
			.outputFluids(`thermal:latex 100`)
			.duration(160);
	});

}; // if end