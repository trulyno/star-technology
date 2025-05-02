// packmode: hard

ServerEvents.tags('item', event => {

	[
		'tin',
		'zinc',
		'lead',
	].forEach(metal => {
		event.removeAll(`forge:ingots/${metal}`);
		event.removeAll(`forge:nuggets/${metal}`);

		event.add(`forge:ingots/${metal}`, `gtceu:${metal}_ingot`);
		event.add(`forge:nuggets/${metal}`, `gtceu:${metal}_nugget`);
	});

	event.remove('minecraft:planks', 'gtceu:wood_plate');
	event.remove('minecraft:planks', 'gtceu:treated_wood_plate');
});

ServerEvents.tags('block', event => {
	event.removeAll('create:windmill_sails');
	event.add('create:windmill_sails', [/^create:.*_sail/, 'create:sail_frame']);
})

ServerEvents.recipes(event => {
    const id = global.id;
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
	// ~~~~~~~~~~~ PRE-COBBLEGEN ~~~~~~~~~~~ //
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

	const replace_shaped = (output, pattern, symbols) => {
		event.remove({ type: "minecraft:crafting_shaped", output: output });
		event.shaped(output, pattern, symbols).id(`start:shaped/${output.split(':')[1]}`);
	}

	const replace_shapeless = (output, ingredients) => {
		event.remove({ type: "minecraft:crafting_shapeless", output: output });
		event.shapeless(output, ingredients);
	}

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

	// Adjusted Recipes

	event.remove({ output: 'ftbquests:loot_crate_opener' })

	event.replaceInput({ id: 'chipped:benches/carpenters_table' }, 'minecraft:wooden_axe', 'gtceu:flisnt_axe');
	event.replaceInput({ id: 'farmersdelight:cooking_pot' }, 'minecraft:wooden_shovel', 'gtceu:flisnt_shovel');

	event.remove({ id: 'gtceu:shapeless/fireclay_dust' })
	event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust').id('start:pressing/compressed_fireclay');
	event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball').id('start:pressing/compressed_clay');
	event.recipes.create.pressing('kubejs:mud_brick', 'kubejs:packed_mud_ball').id('start:pressing/mud_brick');
	event.recipes.create.pressing('gtceu:compressed_coke_clay', 'gtceu:coke_clay_dust').id('start:pressing/compressed_coke_clay');

	['andesite', 'granite', 'diorite'].forEach(stone => {
		event.remove({ id: `create:compacting/${stone}_from_flint` });
	});
	event.remove({ id: 'create:compacting/blaze_cake' });

	event.shapeless(Item.of('gtceu:wood_screw'), ['#forge:tools/files', 'gtceu:wood_bolt', 'gtceu:wood_bolt']).id('start:shapeless/wood_screw');

	event.recipes.gtceu.assembler(id('fluid_cell_frame'))
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
	}).id('start:shaped/iron_trapdoor');

	event.remove({ id: 'architects_palette:smelting/charcoal_block_from_logs_that_burn_smoking' });
	event.remove({ id: 'minecraft:stone_bricks_from_stone_stonecutting' });
	event.remove('rechiseled:chisel'); // Remove Chisel, replacement recipe later

	replace_shaped('gtceu:treated_wood_rod', [
		'SP'
	], {
		S: '#forge:tools/saws',
		P: 'gtceu:treated_wood_slab',
	});

	event.remove({ id: 'gtceu:smelting/wrought_iron_nugget' });

	event.replaceInput({ type: 'gtceu:fluid_solidifier' }, 'gtceu:ball_casting_mold', '#kubejs:ball_casting_mold');
	event.replaceInput({ type: 'gtceu:fluid_solidifier' }, 'gtceu:ingot_casting_mold', '#kubejs:ingot_casting_mold');

	// ================================ Post Cobble-Gen, Pre-Circuit ================================

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
	}).id('start:mechanical_crafting/latex_plantation');

	event.smelting('minecraft:slime_ball', 'thermal:slime_mushroom_spores').id('kjs:smelting/slitake_manual_only').id('start:smelting/slime_ball');

	event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, 'minecraft:glowstone', '#gtceu:circuits/ulv');
	event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' }, 'minecraft:glowstone', '#gtceu:circuits/ulv');
	event.remove({ output: 'modularrouters:modular_router' });
	event.replaceInput({ output: 'functionalstorage:configuration_tool' }, 'minecraft:emerald', '#forge:dyes/lime');
	event.remove({ id: 'gtceu:shaped/casing_steel_solid' });
	event.remove({ id: 'gtceu:assembler/casing_steel_solid' });
	event.remove({ output: 'thermal:device_composter' });

	event.recipes.create.mechanical_crafting('thermal:device_composter', [
		'PRP',
		'GCG',
		'PRP'
	], {
		P: '#minecraft:planks',
		R: 'gtceu:iron_gear',
		G: 'minecraft:glass',
		C: 'gtceu:ulv_advanced_composter'
	}).id('start:mechanical_crafting/device_composter');

	event.recipes.create.mechanical_crafting('modularrouters:modular_router', [
		'PDP',
		'DED',
		'PDP'
	], {
		P: 'gtceu:steel_plate',
		D: 'gtceu:double_iron_plate',
		E: 'kubejs:ulv_emitter'
	}).id('start:mechanical_crafting/modular_router');

	event.recipes.gtceu.assembler(id('solid_machine_casing'))
		.itemInputs('6x gtceu:steel_plate', 'gtceu:steel_frame')
		.itemOutputs('2x gtceu:solid_machine_casing')
		.circuit(6)
		.duration(100)
		.EUt(8);

	event.recipes.gtceu.mixer(id('porcelain_clay'))
		.itemInputs('2x minecraft:clay_ball', 'minecraft:bone_meal', 'gtceu:small_ash_dust')
		.itemOutputs('3x exnihilosequentia:porcelain_clay')
		.duration(160)
		.EUt(4);

	event.remove({ output: 'laserio:logic_chip_raw' });
	event.remove({ output: 'laserio:logic_chip' });
	event.recipes.gtceu.circuit_assembler(id('logic_chip_raw'))
		.itemInputs('#gtceu:circuits/lv', '8x exnihilosequentia:porcelain_clay')
		.itemOutputs('laserio:logic_chip_raw')
		.duration(320)
		.EUt(7);

	event.recipes.gtceu.electric_blast_furnace(id('logic_chip'))
        .itemInputs('laserio:logic_chip_raw')
        .itemOutputs('laserio:logic_chip')
        .duration(400)
        .blastFurnaceTemp(960)
        .EUt(30);

	event.recipes.create.mechanical_crafting('gtceu:large_stone_barrel', [
		'SSUSS',
		'SPTPS',
		'UTBTU',
		'SPTPS',
		'SSUSS'
	], {
		S: 'minecraft:stone',
		U: '#gtceu:circuits/ulv',
		P: 'kubejs:ulv_electric_pump',
		T: 'gtceu:steel_small_fluid_pipe',
		B: 'gtceu:ulv_stone_barrel'
	}).id('start:mechanical_crafting/large_stone_barrel');

	event.recipes.create.mechanical_crafting('gtceu:large_barrel', [
		'SSUSS',
		'SPTPS',
		'UTBTU',
		'SPTPS',
		'SSUSS'
	], {
		S: 'gtceu:treated_wood_planks',
		U: '#gtceu:circuits/ulv',
		P: 'kubejs:ulv_electric_pump',
		T: 'gtceu:lead_small_fluid_pipe',
		B: 'gtceu:ulv_barrel'
	}).id('start:mechanical_crafting/large_barrel');

	event.recipes.create.mechanical_crafting('gtceu:large_farm', [
		'SSUSS',
		'SPTPS',
		'UTBTU',
		'SPTPS',
		'SSUSS'
	], {
		S: 'gtceu:treated_wood_planks',
		U: '#gtceu:circuits/ulv',
		P: 'kubejs:ulv_conveyor_module',
		T: 'thermal:compost',
		B: 'thermal:device_composter'
	}).id('start:mechanical_crafting/large_farm');

	event.recipes.create.mechanical_crafting('gtceu:bronze_firebox_casing', [
		'PRP',
		'RFR',
		'PRP'
	], {
		P: 'gtceu:bronze_plate',
		R: 'gtceu:bronze_rod',
		F: 'gtceu:bronze_frame'
	}).id('start:mechanical_crafting/bronze_firebox_casing');

	event.recipes.create.mechanical_crafting('gtceu:bronze_pipe_casing', [
		'PIP',
		'IFI',
		'PIP'
	], {
		P: 'gtceu:bronze_plate',
		I: 'gtceu:bronze_small_fluid_pipe',
		F: 'gtceu:bronze_frame'
	}).id('start:mechanical_crafting/bronze_pipe_casing');

	event.remove({ id: 'gtceu:compressor/compress_plate_dust_obsidian' });
	event.recipes.create.mechanical_crafting('itemcollectors:basic_collector', [
		' P ',
		' S ',
		'OOO'
	], {
		P: 'minecraft:ender_pearl',
		S: 'gtceu:steel_spring',
		O: 'gtceu:obsidian_plate'
	}).id('start:mechanical_crafting/basic_collector');

	event.recipes.create.mechanical_crafting('itemcollectors:advanced_collector', [
		' P ',
		' S ',
		'OOO'
	], {
		P: 'minecraft:ender_eye',
		S: 'gtceu:hsla_steel_spring',
		O: 'gtceu:obsidian_plate'
	}).id('start:mechanical_crafting/advanced_collector');

	let fluidPipez = 'gtceu:iron_foil'
    event.recipes.create.sequenced_assembly([
        Item.of(`3x pipez:fluid_pipe`),
    ], fluidPipez, [
        event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:copper_tiny_fluid_pipe`]),
		event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:bronze_tiny_fluid_pipe`]),
		event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:lead_tiny_fluid_pipe`]),
		event.recipes.createDeploying(fluidPipez, [fluidPipez, `gtceu:iron_foil`]),
        event.recipes.createPressing(fluidPipez, fluidPipez)
    ]).transitionalItem(fluidPipez).loops(1);

	event.remove({ output: 'architects_palette:flint_block' });
	event.shaped(Item.of('4x architects_palette:flint_block'), [
		'FFF',
		'F F',
		'FFF'
	], {
		F: 'minecraft:flint'
	});

	event.replaceInput({output: 'minecraft:fishing_rod'}, 'gtceu:iron_ring', 'gtceu:steel_ring')

	//Mass Removals

	const ThermalRemoval = ['redstone_servo', 'device_tree_extractor', 'drill_head', 'fluid_cell_frame','device_rock_gen','device_water_gen'];
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