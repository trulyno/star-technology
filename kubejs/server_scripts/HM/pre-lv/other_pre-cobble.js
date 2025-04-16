// packmode: hard

ServerEvents.recipes(event => {

	const plate = (metal) => `gtceu:${metal}_plate`
	const rod = (metal) => `gtceu:${metal}_rod`

	// Metallurgy Rework via Create

	event.remove({ id: /^create:pressing.*_ingot/ });
	event.remove({ output: /^create_new_age.*wire/ });

	const minecraft_metals = ['iron', 'copper', 'gold'];
	const gt_metals = ['lead', 'tin', 'zinc', 'bronze', 'brass', 'nickel', 'pig_iron', 'tin_alloy', 'potin', 'cupronickel', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy'];
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

	const long_rods = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy'];
	const double_plates = ['iron', 'copper', 'gold', 'lead', 'tin', 'bronze', 'brass', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel', 'red_alloy'];
	const gears = ['iron', 'lead', 'bronze', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel'];
	const small_gears = ['iron', 'lead', 'bronze', 'pig_iron', 'wrought_iron', 'cast_iron', 'steel'];
	const rotors = ['iron', 'copper', 'lead', 'bronze', 'pig_iron', 'steel'];
	const springs = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel', 'red_alloy'];
	const small_springs = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel'];
	const wires = ['iron', 'copper', 'gold', 'lead', 'tin', 'steel', 'red_alloy'];
	const fine_wires = ['copper', 'gold', 'lead', 'tin', 'zinc', 'steel', 'red_alloy'];
	const fluid_pipes = ['copper', 'steel', 'lead', 'bronze', 'tin_alloy', 'potin', 'steel'];
	const item_pipes = ['tin', 'brass', 'cupronickel', 'nickel'];

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

	small_gears.forEach(metal => seq_assembly(
		`gtceu:small_${metal}_gear`,
		plate(metal),
		'kubejs:incomplete_small_gear',
		[
			['deploy', rod(metal)],
		], 2
	));

	gears.forEach(metal => seq_assembly(
		`gtceu:${metal}_gear`,
		`gtceu:small_${metal}_gear`,
		'kubejs:incomplete_gear',
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

	// item_pipes.forEach(metal => {
	// 	['small', 'normal', 'large', 'huge'].forEach((size, i) => {
	// 		seq_assembly(
	// 			`gtceu:${metal}_${size}_item_pipe`,
	// 			`gtceu:${metal}_ring`,
	// 			'kubejs:incomplete_item_pipe',
	// 			[
	// 				['deploy', plate(metal)],
	// 				'press'
	// 			], Math.floor(3 * (2 ** (i - 1))) // 1, 3, 6, 12
	// 		);
	// 	});
	// });

	item_pipes.forEach(metal => {
		const small = `gtceu:${metal}_small_item_pipe`;
		const normal = `gtceu:${metal}_normal_item_pipe`;
		const large = `gtceu:${metal}_large_item_pipe`;
		const huge = `gtceu:${metal}_huge_item_pipe`;

		const inter = 'kubejs:incomplete_item_pipe';
		const sequence = [
			['deploy', plate(metal)],
			'press',
		];

		seq_assembly(small, `gtceu:${metal}_foil`, inter, sequence, 1);
		seq_assembly(normal, small, inter, sequence, 2);
		seq_assembly(large, normal, inter, sequence, 3);
		seq_assembly(huge, large, inter, sequence, 6);

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

	//==================================================================//

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
	event.smelting(`kubejs:charcoal_pellet`, `#minecraft:logs_that_burn`).id('kjs:smelting/charcoal_pellet_manual_only');
	event.recipes.create.crushing(['2x kubejs:charcoal_pellet', Item.of('kubejs:charcoal_pellet').withChance(0.5)], 'minecraft:charcoal');
	event.recipes.create.milling(['gtceu:charcoal_dust'], 'minecraft:charcoal');

	event.remove({ id: 'thermal:rubber_3' });
	event.recipes.create.compacting(Fluid.of('thermal:latex', 16), `8x minecraft:jungle_log`).heatRequirement('lowheated');
	event.recipes.create.mixing(Fluid.of('gtceu:rubber', 288), [Fluid.of('thermal:latex', 288), '1x gtceu:sulfur_dust']).heatRequirement('superheated');
	event.recipes.create.compacting(`1x thermal:cured_rubber`, Fluid.of('gtceu:rubber', 144));
	event.recipes.create.compacting(`1x gtceu:rubber_plate`, `2x thermal:cured_rubber`);

	event.shapeless(Item.of('gtceu:wood_plate', 2), [
		'#forge:tools/files', '#minecraft:planks', '#minecraft:planks', '#minecraft:planks', '#forge:tools/saws'
	]);
	event.recipes.create.cutting(['gtceu:wood_plate'], '#minecraft:planks');

	event.shapeless(Item.of('gtceu:treated_wood_plate', 2), [
		'#forge:tools/files', '#forge:treated_wood', '#forge:treated_wood', '#forge:treated_wood', '#forge:tools/saws'
	]);
	event.recipes.create.cutting(['gtceu:treated_wood_plate'], '#forge:treated_wood');

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

	event.recipes.create.mechanical_crafting('thermal:redstone_servo', [
		'TPT',
		' F ',
		'TPT'
	], {
		P: 'gtceu:iron_plate',
		T: 'create:electron_tube',
		F: 'gtceu:fine_copper_wire'
	});

	event.recipes.create.mechanical_crafting('gtceu:ulv_stone_barrel', [
		'PN NP',
		'NSRSN',
		' SCS ',
		'NSTSN',
		'PN NP'
	], {
		R: 'gtceu:iron_rotor',
		S: 'minecraft:stone',
		P: 'gtceu:nickel_plate',
		T: 'thermal:redstone_servo',
		C: 'minecraft:cauldron',
		N: 'gtceu:iron_plate'
	});

	event.recipes.create.mechanical_crafting('gtceu:primitive_ore_factory', [
		'BPB',
		'RSR',
		'BFB'
	], {
		R: 'gtceu:brass_rod',
		S: 'thermal:redstone_servo',
		P: 'gtceu:brass_plate',
		B: 'gtceu:firebricks',
		F: 'minecraft:furnace'
	});

	event.remove({ id: 'gtceu:smelting/smelt_dust_bronze_to_ingot' });
	event.remove({ id: 'gtceu:smelting/smelt_dust_brass_to_ingot' });

	event.recipes.create.mixing('2x gtceu:brass_dust', ['1x gtceu:zinc_dust', '3x gtceu:copper_dust']).heatRequirement('lowheated');
	event.recipes.create.mixing('2x gtceu:bronze_dust', ['1x gtceu:tin_dust', '3x gtceu:copper_dust']).heatRequirement('lowheated');
	event.recipes.create.mixing(Fluid.of('gtceu:brass', 576), ['1x gtceu:zinc_ingot', '3x minecraft:copper_ingot']).heatRequirement('superheated');
	event.recipes.create.mixing(Fluid.of('gtceu:bronze', 576), ['1x gtceu:tin_ingot', '3x minecraft:copper_ingot']).heatRequirement('superheated');
	event.recipes.create.compacting(`1x gtceu:brass_ingot`, Fluid.of('gtceu:brass', 192));
	event.recipes.create.compacting(`1x gtceu:bronze_ingot`, Fluid.of('gtceu:bronze', 192));

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

	event.recipes.create.mechanical_crafting('gtceu:ulv_barrel', [
		'PN NP',
		'NLRLN',
		' LCL ',
		'NLTLN',
		'PN NP'
	], {
		R: 'gtceu:iron_rotor',
		L: '#forge:stripped_logs',
		P: 'gtceu:treated_wood_plate',
		T: 'thermal:redstone_servo',
		C: 'minecraft:cauldron',
		N: 'gtceu:wood_plate'
	});

	event.replaceInput({ id: 'gtceu:shaped/coke_oven' },
		'#forge:tools/wrenches',
		'minecraft:furnace'
	);

	event.remove({id: 'exnihilosequentia:ens_porcelain_clay'});
	event.recipes.create.mixing(Item.of('exnihilosequentia:porcelain_clay',2), ['2x minecraft:clay_ball', 'minecraft:bone_meal', '1x gtceu:small_ash_dust']);

	event.recipes.create.compacting('kubejs:unfired_raw_ceramic_casting_mold', '4x exnihilosequentia:porcelain_clay');
	event.recipes.create.compacting(['kubejs:unfired_ball_ceramic_casting_mold', 'minecraft:bowl'], ['kubejs:unfired_raw_ceramic_casting_mold', 'minecraft:bowl']);
	event.recipes.create.compacting(['kubejs:unfired_ingot_ceramic_casting_mold', 'gtceu:wood_plate'], ['kubejs:unfired_raw_ceramic_casting_mold', 'gtceu:wood_plate']);

	event.recipes.gtceu.auto_scavenger('flint')
		.notConsumable('minecraft:coarse_dirt')
		.chancedOutput('kubejs:flint_shard', 9500, 0)
		.chancedOutput('kubejs:flint_shard', 8000, 0)
		.chancedOutput('kubejs:flint_shard', 6500, 0)
		.duration(200);

	event.shaped('gtceu:ulv_auto_scavenger',[
		'GRG',
		'PCP',
		'TET'
	],{
		G: 'gtceu:small_bronze_gear',
		R: 'kubejs:scavenging_rod',
		P: 'create:precision_mechanism',
		C: 'create:brass_casing',
		T: 'gtceu:treated_wood_plate',
		E: 'create:electron_tube'
	});
	event.recipes.create.mechanical_crafting('gtceu:ulv_advanced_composter',[
		'PRP',
		'PGP',
		'ISI'
	],{
		P: 'gtceu:treated_wood_slab',
		G: 'minecraft:glass',
		R: 'gtceu:iron_gear',
		I: 'gtceu:iron_plate',
		S: 'thermal:redstone_servo'
	});

});