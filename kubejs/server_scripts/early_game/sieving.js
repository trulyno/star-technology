
ServerEvents.recipes(event => {
    const dirt = 'minecraft:dirt';
    const gravel = '#forge:gravel';
    const cdirt = 'minecraft:coarse_dirt';
    const sand = '#minecraft:sand';
    const dust = 'exnihilosequentia:dust';
    const black = 'exnihilosequentia:crushed_blackstone'
    const netherrack = 'exnihilosequentia:crushed_netherrack'
    const endstone = 'exnihilo:crushed_end_stone'

    function sieve(mesh, chance, input, result, wlog) {
        event.custom({
            "type": `exnihilosequentia:sieve`,
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
    sieve('string', 0.45, gravel, 'gtceu:iron_crushed_ore', false);
    sieve('string', 0.25, gravel, 'gtceu:magnetite_crushed_ore', false);
    sieve('string', 0.35, gravel, 'gtceu:copper_crushed_ore', false);
    sieve('string', 0.3, gravel, 'gtceu:tin_crushed_ore', false);
    sieve('string', 0.25, gravel, 'gtceu:sphalerite_crushed_ore', false);
    sieve('string', 0.4, black, 'gtceu:galena_crushed_ore', false);
    sieve('string', 0.3, black, 'gtceu:stibnite_crushed_ore', false);  

    sieve('flint', 0.1, gravel, 'gtceu:silver_crushed_ore', false);
    sieve('flint', 0.05, gravel, 'gtceu:gold_crushed_ore', false);
    sieve('flint', 0.2, black, 'gtceu:pentlandite_crushed_ore', false);
    sieve('flint', 0.25, gravel, 'gtceu:chalcopyrite_crushed_ore', false);
    sieve('flint', 0.25, black, 'gtceu:bornite_crushed_ore', false);
    sieve('flint', 0.25, gravel, 'gtceu:cassiterite_crushed_ore', false);
    
    sieve('iron', 0.12, gravel, 'gtceu:pyrolusite_crushed_ore', false);
    sieve('iron', 0.05, gravel, 'gtceu:lepidolite_crushed_ore', false);
    sieve('iron', 0.1, black, 'gtceu:cobaltite_crushed_ore', false);
    sieve('iron', 0.16, black, 'gtceu:beryllium_crushed_ore', false);
    sieve('iron', 0.21, black, 'gtceu:chromite_crushed_ore', false);
    sieve('iron', 0.05, gravel, 'gtceu:pyrochlore_crushed_ore', false);
    sieve('iron', 0.05, gravel, 'gtceu:vanadium_magnetite_crushed_ore', false);

    sieve('diamond', 0.12, black, 'gtceu:molybdenite_crushed_ore', false);
    sieve('diamond', 0.02, black, 'gtceu:pitchblende_crushed_ore', false);
    sieve('diamond', 0.05, gravel, 'gtceu:tantalite_crushed_ore', false);
    sieve('diamond', 0.075, black, 'gtceu:ilmenite_crushed_ore', false);
    sieve('diamond', 0.18, gravel, 'gtceu:bauxite_crushed_ore', false);
    sieve('diamond', 0.02, gravel, 'gtceu:pollucite_crushed_ore', false);

    sieve('emerald', 0.15, gravel, 'gtceu:tungstate_crushed_ore', false);
    sieve('emerald', 0.125, gravel, 'gtceu:scheelite_crushed_ore', false);
    sieve('emerald', 0.35, black, 'gtceu:bastnasite_crushed_ore', false);
    sieve('emerald', 0.25, black, 'gtceu:cooperite_crushed_ore', false);
    sieve('emerald', 0.12, black, 'gtceu:barite_crushed_ore', false);

    sieve('netherite', 0.01, black, 'gtceu:naquadah_crushed_ore', false);

    // sand
    sieve('string', 0.075, sand, 'minecraft:diamond', false);
    sieve('string', 0.08, sand, 'minecraft:lapis_lazuli', false);
    sieve('string', 0.1, sand, 'minecraft:amethyst_shard', false);
    sieve('string', 0.05, sand, 'minecraft:emerald', false);
    sieve('string', 0.2, sand, 'minecraft:quartz', false);

    sieve('flint', 0.075, sand, 'gtceu:diamond_crushed_ore', false);
    sieve('flint', 0.05, sand, 'gtceu:emerald_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:green_sapphire_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:sapphire_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:ruby_crushed_ore', false);
    // sieve('flint', 0.1, sand, 'gtceu:raw_opal', false);
    sieve('flint', 0.1, sand, 'minecraft:coal', false);
    sieve('flint', 0.1, sand, 'gtceu:quartzite_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:certus_quartz_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:salt_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:rock_salt_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:saltpeter_crushed_ore', false);
    sieve('flint', 0.1, sand, 'gtceu:realgar_crushed_ore', false);

    sieve('iron', 0.14, sand, 'gtceu:blue_topaz_crushed_ore', false);
    sieve('iron', 0.14, sand, 'gtceu:topaz_crushed_ore', false);
    sieve('iron', 0.08, sand, 'gtceu:yellow_garnet_crushed_ore', false);
    sieve('iron', 0.08, sand, 'gtceu:red_garnet_crushed_ore', false);
    sieve('iron', 0.1, sand, 'gtceu:garnet_sand_crushed_ore', false);
    sieve('iron', 0.2, sand, 'gtceu:apatite_crushed_ore', false);
    sieve('iron', 0.15, sand, 'gtceu:monazite_crushed_ore', false);

    //sieve('diamond', 0.01, sand, 'mmt:moonstone', false);
    //sieve('diamond', 0.01, sand, 'mmt:sunstone', false);

    // dust
    sieve('string', 0.4, dust, 'minecraft:redstone', false);
    sieve('string', 0.4, dust, 'minecraft:glowstone_dust', false);
    sieve('string', 0.3, dust, 'gtceu:sulfur_tiny_dust', false);
    sieve('string', 0.05, dust, 'minecraft:ender_pearl', false);
    sieve('netherite', 0.01, dust, 'minecraft:echo_shard', false);

    sieve('flint', 0.25, dust, 'ae2:sky_dust', false);
    
});

