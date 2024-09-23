
ServerEvents.recipes(event => {
    const dirt = 'minecraft:dirt';
    const gravel = '#forge:gravel';
    const cdirt = 'minecraft:coarse_dirt';
    const sand = '#minecraft:sand';
    const dust = 'exdeorum:dust';
    const black = 'exdeorum:crushed_blackstone'
    const netherrack = 'exdeorum:crushed_netherrack'
    const endstone = 'exnihilo:crushed_end_stone'

    exdeorum.removeDefaultSieveRecipes(event);

    event.remove({
        type: 'exdeorum:compressed_sieve'
      });

    event.remove({
        type: 'exdeorum:compressed_hammer'
      });

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
                  "n": drops[i].maxAmount,
                  "p": drops[i].chance
                }
            });
        }
    }

    // function hammer(input, result) {
    //     event.custom({
    //         "type": `exdeorum:hammer`,
    //         "input": input,
    //         "results": [result]
    //     })
    // }

    // function heat(block, heat) {
    //     event.custom({
    //         "type": `exdeorum:heat`,
    //         "block": block,
    //         "amount": heat
    //     })
    // }

    function string(input, drops) {
        sieve('string', input, drops);
    }

    string(dirt, [
        { item: 'exdeorum:andesite_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'exdeorum:andesite_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'minecraft:pumpkin_seeds', maxAmount: 1, chance: 0.35 },
        { item: 'minecraft:carrot', maxAmount: 1, chance: 0.05 },
        { item: 'exdeorum:stone_pebble', maxAmount: 2, chance: 1 },
        { item: 'exdeorum:stone_pebble', maxAmount: 2, chance: 0.1 },
        { item: 'exdeorum:stone_pebble', maxAmount: 2, chance: 0.5 },
        // { item: 'exdeorum:dripstone_pebble', maxAmount: 1, chance: 0.1 },
        // { item: 'exdeorum:dripstone_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'exdeorum:diorite_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'exdeorum:diorite_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'minecraft:spruce_sapling', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:cherry_sapling', maxAmount: 1, chance: 0.05 },
        { item: 'exdeorum:tuff_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'exdeorum:tuff_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'thermal:flax_seeds', maxAmount: 1, chance: 0.3 },
        { item: 'minecraft:birch_sapling', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:bamboo', maxAmount: 1, chance: 0.05  },
        { item: 'minecraft:cactus', maxAmount: 1, chance: 0.05  },
        { item: 'minecraft:fern', maxAmount: 1, chance: 0.05  },
        { item: 'minecraft:dark_oak_sapling', maxAmount: 1, chance: 0.05  },
        { item: 'minecraft:acacia_sapling', maxAmount: 1, chance: 0.05  },
        { item: 'minecraft:jungle_sapling', maxAmount: 1, chance: 0.05  },
        { item: 'minecraft:melon_seeds', maxAmount: 1, chance: 0.35 },
        { item: 'minecraft:sunflower', maxAmount: 1, chance: 0.05 },
        { item: 'exdeorum:deepslate_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'exdeorum:deepslate_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'minecraft:potato', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:wheat_seeds', maxAmount: 1, chance: 0.35 },
        { item: 'minecraft:oak_sapling', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:beetroot_seeds', maxAmount: 1, chance: 0.35 },
        { item: 'exdeorum:blackstone_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'exdeorum:blackstone_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'exdeorum:grass_seeds', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:sugar_cane', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:sweet_berries', maxAmount: 1, chance: 0.05 },
        { item: 'exdeorum:basalt_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'exdeorum:basalt_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'minecraft:large_fern', maxAmount: 1, chance: 0.05 },
        { item: 'thermal:slime_mushroom_spores', maxAmount: 1, chance: 0.3 },
        { item: 'exdeorum:mycelium_spores', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:cocoa_beans', maxAmount: 1, chance: 0.03 },
        { item: 'exdeorum:calcite_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'exdeorum:calcite_pebble', maxAmount: 1, chance: 0.5 },
        { item: 'exdeorum:granite_pebble', maxAmount: 1, chance: 0.1 },
        { item: 'exdeorum:granite_pebble', maxAmount: 1, chance: 0.5 }
    ]);

    string(cdirt, [
        { item: 'minecraft:gravel', maxAmount: 1, chance: 0.4 },
        { item: 'minecraft:dirt', maxAmount: 1, chance: 1 },
        { item: 'minecraft:dirt', maxAmount: 1, chance: 0.4 }
    ]);

    string(gravel, [
        { item: 'gtceu:crushed_sphalerite_ore', maxAmount: 1, chance: 0.25 },
        { item: 'gtceu:crushed_iron_ore', maxAmount: 1, chance: 0.45 },
        { item: 'gtceu:crushed_copper_ore', maxAmount: 1, chance: 0.65 },
        { item: 'gtceu:crushed_tin_ore', maxAmount: 1, chance: 0.3 },
        { item: 'gtceu:crushed_magnetite_ore', maxAmount: 1, chance: 0.25 }
    ]);

    string(black, [
        { item: 'gtceu:crushed_stibnite_ore', maxAmount: 1, chance: 0.3 },
        { item: 'gtceu:crushed_galena_ore', maxAmount: 1, chance: 0.4 }
    ]);

    string(sand, [
        { item: 'minecraft:diamond', maxAmount: 1, chance: 0.075 },
        { item: 'minecraft:quartz', maxAmount: 1, chance: 0.2 },
        { item: 'minecraft:amethyst_shard', maxAmount: 1, chance: 0.1 },
        { item: 'minecraft:lapis_lazuli', maxAmount: 1, chance: 0.08 },
        { item: 'minecraft:emerald', maxAmount: 1, chance: 0.05 },
    ]);

    string(dust, [
        { item: 'minecraft:redstone', maxAmount: 1, chance: 0.4 },
        { item: 'gtceu:tiny_sulfur_dust', maxAmount: 1, chance: 0.3 },
        { item: 'minecraft:glowstone_dust', maxAmount: 1, chance: 0.4 },
        { item: 'minecraft:ender_pearl', maxAmount: 1, chance: 0.05 },
    ]);

    ['oak', 'dark_oak', 'birch', 'jungle', 'acacia', 'spruce'].forEach(leaf => {
        string(`minecraft:${leaf}_leaves`, [
            { item: `minecraft:${leaf}_sapling`, maxAmount: 1, chance: 0.05 },
            { item: 'minecraft:golden_apple', maxAmount: 1, chance: 0.01 },
            { item: 'minecraft:apple', maxAmount: 1, chance: 0.05 }, 
            { item: 'exdeorum:silk_worm', maxAmount: 1, chance: 0.025 }
        ]);
    });

    string('minecraft:mud', [
        { item: 'minecraft:mangrove_propagule', maxAmount: 1, chance: 0.03 }
    ]);

    string(sand, [
        { item: 'minecraft:kelp', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:seagrass', maxAmount: 1, chance: 0.05 },
        { item: 'minecraft:sea_pickle', maxAmount: 1, chance: 0.05 }
    ]);

    string(dust, [
        { item: 'xycraft_world:xychorium_gem_dark', maxAmount: 1, chance: 0.75 },
        { item: 'xycraft_world:xychorium_gem_blue', maxAmount: 1, chance: 0.75 },
        { item: 'xycraft_world:xychorium_gem_red', maxAmount: 1, chance: 0.75 },
        { item: 'xycraft_world:xychorium_gem_light', maxAmount: 1, chance: 0.75 },
        { item: 'xycraft_world:xychorium_gem_green', maxAmount: 1, chance: 0.75 }
    ]);

    function flint(input, drops) {
        sieve('flint', input, drops);
    }

    flint(gravel, [
        { item: 'gtceu:crushed_silver_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_gold_ore', maxAmount: 1, chance: 0.05 },
        { item: 'gtceu:crushed_cassiterite_ore', maxAmount: 1, chance: 0.25 },
        { item: 'gtceu:crushed_chalcopyrite_ore', maxAmount: 1, chance: 0.25 }
    ]);

    flint(sand, [
        { item: 'gtceu:crushed_saltpeter_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_emerald_ore', maxAmount: 1, chance: 0.05 },
        { item: 'gtceu:crushed_sapphire_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_realgar_ore', maxAmount: 1, chance: 0.1 },
        { item: 'minecraft:coal', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_quartzite_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_rock_salt_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_diamond_ore', maxAmount: 1, chance: 0.075 },
        { item: 'gtceu:crushed_certus_quartz_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_salt_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_ruby_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_green_sapphire_ore', maxAmount: 1, chance: 0.1 },
    ]);

    flint(dust, [
        { item: 'ae2:sky_dust', maxAmount: 1, chance: 0.25 }
    ]);

    flint(black, [
        { item: 'gtceu:crushed_pentlandite_ore', maxAmount: 1, chance: 0.2 },
        { item: 'gtceu:crushed_bornite_ore', maxAmount: 1, chance: 0.25 }
    ]);

    function iron(input, drops) {
        sieve('iron', input, drops);
    }

    iron(gravel, [
        { item: 'gtceu:crushed_vanadium_magnetite_ore', maxAmount: 1, chance: 0.05 },
        { item: 'gtceu:crushed_pyrochlore_ore', maxAmount: 1, chance: 0.05 },
        { item: 'gtceu:crushed_lepidolite_ore', maxAmount: 1, chance: 0.05 },
        { item: 'gtceu:crushed_pyrolusite_ore', maxAmount: 1, chance: 0.12 },
    ]);

    iron(sand, [
        { item: 'gtceu:crushed_apatite_ore', maxAmount: 1, chance: 0.2 },
        { item: 'gtceu:crushed_topaz_ore', maxAmount: 1, chance: 0.14 },
        { item: 'gtceu:crushed_red_garnet_ore', maxAmount: 1, chance: 0.08 },
        { item: 'gtceu:crushed_blue_topaz_ore', maxAmount: 1, chance: 0.14 },
        { item: 'gtceu:crushed_garnet_sand_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_monazite_ore', maxAmount: 1, chance: 0.15 },
        { item: 'gtceu:crushed_yellow_garnet_ore', maxAmount: 1, chance: 0.08 }
    ]);

    iron(black, [
        { item: 'gtceu:crushed_cobaltite_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_beryllium_ore', maxAmount: 1, chance: 0.16 },
        { item: 'gtceu:crushed_chromite_ore', maxAmount: 1, chance: 0.21 }
    ]);

    sieve('golden', gravel, [
        { item: 'gtceu:crushed_bauxite_ore', maxAmount: 1, chance: 0.18 },
        { item: 'gtceu:crushed_pollucite_ore', maxAmount: 1, chance: 0.02 },
        { item: 'gtceu:crushed_tantalite_ore', maxAmount: 1, chance: 0.05 }
    ]);

    sieve('golden', black, [
        { item: 'gtceu:crushed_pitchblende_ore', maxAmount: 1, chance: 0.1 },
        { item: 'gtceu:crushed_molybdenite_ore', maxAmount: 1, chance: 0.12 },
        { item: 'gtceu:crushed_ilmenite_ore', maxAmount: 1, chance: 0.075 },
    ]);

    sieve('diamond', gravel, [
        { item: 'gtceu:crushed_tungstate_ore', maxAmount: 1, chance: 0.15 },
        { item: 'gtceu:crushed_scheelite_ore', maxAmount: 1, chance: 0.125 }
    ]);

    sieve('diamond', black, [
        { item: 'gtceu:crushed_bastnasite_ore', maxAmount: 1, chance: 0.35 },
        { item: 'gtceu:crushed_cooperite_ore', maxAmount: 1, chance: 0.25 },
        { item: 'gtceu:crushed_barite_ore', maxAmount: 1, chance: 0.12 }
    ]);

    sieve('netherite', black, [
        { item: 'gtceu:crushed_naquadah_ore', maxAmount: 1, chance: 0.01 }
    ]);

    sieve('netherite', dust, [
        { item: 'minecraft:echo_shard', maxAmount: 1, chance: 0.01 }
    ]);
    
});

