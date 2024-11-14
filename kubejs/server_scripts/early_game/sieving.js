ServerEvents.recipes(event => {
	// VARIABLES

	const gravel = '#forge:gravel';
	const sand = '#minecraft:sand';
	const dust = 'exdeorum:dust';
	const blackstone = 'exdeorum:crushed_blackstone'

	const dirt = 'minecraft:dirt';
	const coarse_dirt = 'minecraft:coarse_dirt';
	const mud = 'minecraft:mud';

	const trees = [
		'oak',
		'spruce',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
	];

	// FUNCTIONS

	function sieve(mesh, input, drops) {
		for (let i = 0; i < drops.length; i++) {
			event.custom({
				"type": "exdeorum:sieve",
				"ingredient": {
					"item": input
				},
				"mesh": `exdeorum:${mesh}_mesh`,
				"result": drops[i].item,
				"result_amount": {
					"type": "minecraft:binomial",
					"n": 1,
					"p": drops[i].chance
				}
			});
		}
	}

	function string(input, drops) {
		sieve('string', input, drops);
	}

	function flint(input, drops) {
		sieve('flint', input, drops);
	}

	function iron(input, drops) {
		sieve('iron', input, drops);
	}

	function diamond(input, drops) {
		sieve('golden', input, drops);
	}

	function emerald(input, drops) {
		sieve('diamond', input, drops);
	}

	function netherite(input, drops) {
		sieve('netherite', input, drops);
	}

	// REMOVE

	exdeorum.removeDefaultSieveRecipes(event);
	event.remove({ type: 'exdeorum:compressed_sieve' });
	event.remove({ type: 'exdeorum:compressed_hammer' });

	// STRING MESH

	string(gravel, [
		{ chance: 0.11, item: 'gtceu:crushed_iron_ore' },
		{ chance: 0.16, item: 'gtceu:crushed_copper_ore' },
		{ chance: 0.08, item: 'gtceu:crushed_tin_ore' },
		{ chance: 0.06, item: 'gtceu:crushed_sphalerite_ore' },
		{ chance: 0.06, item: 'gtceu:crushed_magnetite_ore' },
	]);

	string(sand, [
		{ chance: 0.02, item: 'minecraft:diamond' },
		{ chance: 0.05, item: 'minecraft:quartz' },
		{ chance: 0.03, item: 'minecraft:amethyst_shard' },
		{ chance: 0.02, item: 'minecraft:lapis_lazuli' },
		{ chance: 0.01, item: 'minecraft:emerald' },

		{ chance: 0.01, item: 'minecraft:kelp' },
		{ chance: 0.01, item: 'minecraft:seagrass' },
		{ chance: 0.01, item: 'minecraft:sea_pickle' },
	]);

	string(dust, [
		{ chance: 0.10, item: 'minecraft:redstone' },
		{ chance: 0.10, item: 'minecraft:glowstone_dust' },
		{ chance: 0.08, item: 'gtceu:tiny_sulfur_dust' },
		{ chance: 0.01, item: 'minecraft:ender_pearl' },
	]);

	string(blackstone, [
		{ chance: 0.10, item: 'gtceu:crushed_galena_ore' },
		{ chance: 0.08, item: 'gtceu:crushed_stibnite_ore' },
	]);

	string(dirt, [
		{ chance: 0.02, item: 'minecraft:oak_sapling' },
		{ chance: 0.02, item: 'minecraft:spruce_sapling' },
		{ chance: 0.02, item: 'minecraft:birch_sapling' },
		{ chance: 0.02, item: 'minecraft:jungle_sapling' },
		{ chance: 0.02, item: 'minecraft:acacia_sapling' },
		{ chance: 0.02, item: 'minecraft:dark_oak_sapling' },
		{ chance: 0.02, item: 'minecraft:cherry_sapling' },

		{ chance: 0.09, item: 'minecraft:wheat_seeds' },
		{ chance: 0.09, item: 'minecraft:beetroot_seeds' },
		{ chance: 0.09, item: 'minecraft:pumpkin_seeds' },
		{ chance: 0.09, item: 'minecraft:melon_seeds' },
		{ chance: 0.08, item: 'thermal:flax_seeds' },

		{ chance: 0.01, item: 'minecraft:carrot' },
		{ chance: 0.01, item: 'minecraft:bamboo' },
		{ chance: 0.01, item: 'minecraft:cactus' },
		{ chance: 0.01, item: 'minecraft:fern' },
		{ chance: 0.01, item: 'minecraft:sunflower' },
		{ chance: 0.01, item: 'minecraft:potato' },
		{ chance: 0.01, item: 'minecraft:sugar_cane' },
		{ chance: 0.01, item: 'minecraft:sweet_berries' },
		{ chance: 0.01, item: 'minecraft:large_fern' },
		{ chance: 0.01, item: 'exdeorum:mycelium_spores' },
		{ chance: 0.01, item: 'minecraft:cocoa_beans' },
	]);

	string(coarse_dirt, [
		{ chance: 0.10, item: 'minecraft:gravel' },
		{ chance: 1.00, item: 'minecraft:dirt' },
		{ chance: 0.10, item: 'minecraft:dirt' },
	]);

	string(mud, [
		{ chance: 0.03, item: 'minecraft:mangrove_propagule' },
		{ chance: 0.08, item: 'thermal:slime_mushroom_spores' },
	]);

	trees.forEach(leaf => string(`minecraft:${leaf}_leaves`, [
		{ chance: 0.05, item: `minecraft:${leaf}_sapling` },
		{ chance: 0.10, item: 'minecraft:stick' },
		{ chance: 0.05, item: 'minecraft:apple' },
		{ chance: 0.01, item: 'minecraft:golden_apple' },
	]));

	// FLINT MESH

	flint(gravel, [
		{ chance: 0.05, item: 'gtceu:crushed_silver_ore' },
		{ chance: 0.01, item: 'gtceu:crushed_gold_ore' },
		{ chance: 0.06, item: 'gtceu:crushed_cassiterite_ore' },
		{ chance: 0.06, item: 'gtceu:crushed_chalcopyrite_ore' },
	]);

	flint(sand, [
		{ chance: 0.03, item: 'gtceu:crushed_saltpeter_ore' },
		{ chance: 0.01, item: 'gtceu:crushed_emerald_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_sapphire_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_realgar_ore' },
		{ chance: 0.05, item: 'minecraft:coal' },
		{ chance: 0.03, item: 'gtceu:crushed_quartzite_ore' },
		{ chance: 0.08, item: 'gtceu:crushed_rock_salt_ore' },
		{ chance: 0.02, item: 'gtceu:crushed_diamond_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_certus_quartz_ore' },
		{ chance: 0.08, item: 'gtceu:crushed_salt_ore' },
		{ chance: 0.02, item: 'gtceu:crushed_ruby_ore' },
		{ chance: 0.01, item: 'gtceu:crushed_green_sapphire_ore' },
	]);

	flint(blackstone, [
		{ chance: 0.05, item: 'gtceu:crushed_pentlandite_ore' },
		{ chance: 0.06, item: 'gtceu:crushed_bornite_ore' },
	]);

	// IRON MESH

	iron(gravel, [
		{ chance: 0.03, item: 'gtceu:crushed_vanadium_magnetite_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_pyrochlore_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_lepidolite_ore' },
		{ chance: 0.04, item: 'gtceu:crushed_pyrolusite_ore' },
	]);

	iron(sand, [
		{ chance: 0.05, item: 'gtceu:crushed_apatite_ore' },
		{ chance: 0.04, item: 'gtceu:crushed_topaz_ore' },
		{ chance: 0.02, item: 'gtceu:crushed_red_garnet_ore' },
		{ chance: 0.04, item: 'gtceu:crushed_blue_topaz_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_garnet_sand_ore' },
		{ chance: 0.05, item: 'gtceu:crushed_monazite_ore' },
		{ chance: 0.02, item: 'gtceu:crushed_yellow_garnet_ore' },
	]);

	iron(blackstone, [
		{ chance: 0.03, item: 'gtceu:crushed_cobaltite_ore' },
		{ chance: 0.04, item: 'gtceu:crushed_beryllium_ore' },
		{ chance: 0.05, item: 'gtceu:crushed_chromite_ore' },
	]);

	// DIAMOND MESH

	diamond(gravel, [
		{ chance: 0.050, item: 'gtceu:crushed_bauxite_ore' },
		{ chance: 0.005, item: 'gtceu:crushed_pollucite_ore' },
		{ chance: 0.005, item: 'gtceu:crushed_tantalite_ore' },
	]);

	diamond(blackstone, [
		{ chance: 0.03, item: 'gtceu:crushed_pitchblende_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_molybdenite_ore' },
		{ chance: 0.02, item: 'gtceu:crushed_ilmenite_ore' },
	]);

	// EMERALD MESH

	emerald(gravel, [
		{ chance: 0.04, item: 'gtceu:crushed_tungstate_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_scheelite_ore' },
	]);

	emerald(dust, [
		{ chance: 0.02, item: 'ae2:sky_dust' },
	]);

	emerald(blackstone, [
		{ chance: 0.09, item: 'gtceu:crushed_bastnasite_ore' },
		{ chance: 0.06, item: 'gtceu:crushed_cooperite_ore' },
		{ chance: 0.03, item: 'gtceu:crushed_barite_ore' },
	]);

	// NETHERITE MESH

	netherite(dust, [
		{ chance: 0.004, item: 'minecraft:echo_shard' },
	]);

	netherite(blackstone, [
		{ chance: 0.004, item: 'gtceu:crushed_naquadah_ore' },
	]);

});