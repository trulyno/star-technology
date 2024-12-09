
ServerEvents.recipes(event => {
    const dirt = 'minecraft:dirt';
    const gravel = 'minecraft:gravel';
    const cdirt = 'minecraft:coarse_dirt';
    const sand = 'minecraft:sand';
    const dust = 'exnihilosequentia:dust';
    const black = 'exnihilosequentia:crushed_blackstone'
    const netherrack = 'exnihilosequentia:crushed_netherrack'
    const endstone = 'exnihilo:crushed_end_stone'

    function sieve(mesh, chance, input, result, wlog) {
        event.custom({
            "type": `exnihilosequentia:sifting`,
            "input": input,
            "result": result,
            "rolls": [{
                chance: chance,
                mesh: mesh
            }],
            "waterlogged": wlog
        })
    }

    function hammer(input, result) {
        event.custom({
            "type": `exnihilosequentia:hammer`,
            "input": input,
            "results": [result]
        })
    }

    function heat(block, heat) {
        event.custom({
            "type": `exnihilosequentia:heat`,
            "block": block,
            "amount": heat
        })
    }

    sieve('string', 0.05, dirt, 'minecraft:cactus', false);
    sieve('string', 0.05, dirt, 'minecraft:sunflower', false);
    sieve('string', 0.05, dirt, 'minecraft:sugar_cane', false);
    sieve('string', 0.03, dirt, 'minecraft:cocoa_beans', false);
    sieve('string', 0.3, dirt, 'thermal:flax_seeds', false);
    sieve('string', 0.3, dirt, 'thermal:slime_mushroom_spores', false);
    sieve('string', 0.05, sand, 'exnihilosequentia:brain_coral_larva', true);
    sieve('string', 0.05, sand, 'exnihilosequentia:tube_coral_larva', true);
    sieve('string', 0.05, sand, 'exnihilosequentia:bubble_coral_larva', true);
    sieve('string', 0.05, sand, 'exnihilosequentia:horn_coral_larva', true);
    sieve('string', 0.05, sand, 'exnihilosequentia:fire_coral_larva', true);
    sieve('string', 0.05, sand, 'minecraft:sea_pickle', true);
    sieve('string', 0.05, sand, 'kelp', true);
    sieve('string', 0.05, sand, 'minecraft:seagrass', true);

    // gravel and blackstone
    sieve('string', 0.45, gravel, 'gtceu:crushed_iron_ore', false);
    sieve('string', 0.25, gravel, 'gtceu:crushed_magnetite_ore', false);
    sieve('string', 0.65, gravel, 'gtceu:crushed_copper_ore', false);
    sieve('string', 0.3, gravel, 'gtceu:crushed_tin_ore', false);
    sieve('string', 0.25, gravel, 'gtceu:crushed_sphalerite_ore', false);
    sieve('string', 0.4, black, 'gtceu:crushed_galena_ore', false);
    sieve('string', 0.3, black, 'gtceu:crushed_stibnite_ore', false);  

    sieve('flint', 0.1, gravel, 'gtceu:crushed_silver_ore', false);
    sieve('flint', 0.05, gravel, 'gtceu:crushed_gold_ore', false);
    sieve('flint', 0.2, black, 'gtceu:crushed_pentlandite_ore', false);
    sieve('flint', 0.25, gravel, 'gtceu:crushed_chalcopyrite_ore', false);
    sieve('flint', 0.25, black, 'gtceu:crushed_bornite_ore', false);
    sieve('flint', 0.25, gravel, 'gtceu:crushed_cassiterite_ore', false);
    
    sieve('iron', 0.12, gravel, 'gtceu:crushed_pyrolusite_ore', false);
    sieve('iron', 0.05, gravel, 'gtceu:crushed_lepidolite_ore', false);
    sieve('iron', 0.1, black, 'gtceu:crushed_cobaltite_ore', false);
    sieve('iron', 0.16, black, 'gtceu:crushed_beryllium_ore', false);
    sieve('iron', 0.21, black, 'gtceu:crushed_chromite_ore', false);
    sieve('iron', 0.05, gravel, 'gtceu:crushed_pyrochlore_ore', false);
    sieve('iron', 0.05, gravel, 'gtceu:crushed_vanadium_magnetite_ore', false);

    sieve('diamond', 0.12, black, 'gtceu:crushed_molybdenite_ore', false);
    sieve('diamond', 0.1, black, 'gtceu:crushed_pitchblende_ore', false);
    sieve('diamond', 0.05, gravel, 'gtceu:crushed_tantalite_ore', false);
    sieve('diamond', 0.075, black, 'gtceu:crushed_ilmenite_ore', false);
    sieve('diamond', 0.18, gravel, 'gtceu:crushed_bauxite_ore', false);
    sieve('diamond', 0.02, gravel, 'gtceu:crushed_pollucite_ore', false);

    sieve('emerald', 0.15, gravel, 'gtceu:crushed_tungstate_ore', false);
    sieve('emerald', 0.125, gravel, 'gtceu:crushed_scheelite_ore', false);
    sieve('emerald', 0.35, black, 'gtceu:crushed_bastnasite_ore', false);
    sieve('emerald', 0.25, black, 'gtceu:crushed_cooperite_ore', false);
    sieve('emerald', 0.12, black, 'gtceu:crushed_barite_ore', false);

    sieve('netherite', 0.01, black, 'gtceu:crushed_naquadah_ore', false);

    // sand
    sieve('string', 0.075, sand, 'minecraft:diamond', false);
    sieve('string', 0.08, sand, 'minecraft:lapis_lazuli', false);
    sieve('string', 0.1, sand, 'minecraft:amethyst_shard', false);
    sieve('string', 0.05, sand, 'minecraft:emerald', false);
    sieve('string', 0.2, sand, 'minecraft:quartz', false);

    sieve('flint', 0.075, sand, 'gtceu:crushed_diamond_ore', false);
    sieve('flint', 0.05, sand, 'gtceu:crushed_emerald_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_green_sapphire_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_sapphire_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_ruby_ore', false);
    // sieve('flint', 0.1, sand, 'gtceu:raw_opal', false);
    sieve('flint', 0.1, sand, 'minecraft:coal', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_quartzite_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_certus_quartz_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_salt_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_rock_salt_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_saltpeter_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:crushed_realgar_ore', false);

    sieve('iron', 0.14, sand, 'gtceu:crushed_blue_topaz_ore', false);
    sieve('iron', 0.14, sand, 'gtceu:crushed_topaz_ore', false);
    sieve('iron', 0.08, sand, 'gtceu:crushed_yellow_garnet_ore', false);
    sieve('iron', 0.08, sand, 'gtceu:crushed_red_garnet_ore', false);
    sieve('iron', 0.1, sand, 'gtceu:crushed_garnet_sand_ore', false);
    sieve('iron', 0.2, sand, 'gtceu:crushed_apatite_ore', false);
    sieve('iron', 0.15, sand, 'gtceu:crushed_monazite_ore', false);

    //sieve('diamond', 0.01, sand, 'mmt:moonstone', false);
    //sieve('diamond', 0.01, sand, 'mmt:sunstone', false);

    // dust
    sieve('string', 0.4, dust, 'minecraft:redstone', false);
    sieve('string', 0.4, dust, 'minecraft:glowstone_dust', false);
    sieve('string', 0.3, dust, 'gtceu:tiny_sulfur_dust', false);
    sieve('string', 0.05, dust, 'minecraft:ender_pearl', false);
    sieve('netherite', 0.01, dust, 'minecraft:echo_shard', false);

    sieve('flint', 0.25, dust, 'ae2:sky_dust', false);
    
    // xycraft gems
    sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_blue', true);
    sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_red', true);
    sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_green', true);
    sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_light', true);
    sieve('string', 0.75, dust, 'xycraft_world:xychorium_gem_dark', true);
    
});

