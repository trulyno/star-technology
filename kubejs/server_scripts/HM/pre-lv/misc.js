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
	event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust');
	event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball');
	event.recipes.create.pressing('kubejs:mud_brick', 'kubejs:packed_mud_ball');
	event.recipes.create.pressing('gtceu:compressed_coke_clay', 'gtceu:coke_clay_dust');

	['andesite', 'granite', 'diorite'].forEach(stone => {
		event.remove({ id: `create:compacting/${stone}_from_flint` });
	});
	event.remove({ id: 'create:compacting/blaze_cake' });

	event.recipes.shapeless(Item.of('gtceu:wood_screw'), ['#forge:tools/files', 'gtceu:wood_bolt', 'gtceu:wood_bolt']);

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

	replace_shaped('gtceu:treated_wood_rod', [
		'SP'
	], {
		S: '#forge:tools/saws',
		P: 'gtceu:treated_wood_slab',
	});

	event.remove({ id: 'gtceu:smelting/wrought_iron_nugget' });

	event.recipes.gtceu.stirling_generator('basic')
		.itemInputs('gtceu:charcoal_block')
		.inputFluids('minecraft:water 500')
		.outputFluids('minecraft:water 400')
		.duration(200)
		.EUt(-8);

		event.replaceInput({type: 'gtceu:fluid_solidifier'}, 'gtceu:ball_casting_mold', '#kubejs:ball_casting_mold');
		event.replaceInput({type: 'gtceu:fluid_solidifier'}, 'gtceu:ingot_casting_mold', '#kubejs:ingot_casting_mold');
	
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
		});

	//Mass Removals

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