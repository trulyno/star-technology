
ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('large_sieve')
        .itemInputs('gtceu:iv_machine_hull', '2x #gtceu:circuits/iv', '2x gtceu:tungsten_steel_double_plate' ,'4x gtceu:tungsten_carbide_gear')
        .itemOutputs('gtceu:large_sieve')
        .duration(1200)
        .EUt(1240);

    event.recipes.gtceu.large_sieve('gravel_sieving')
        .itemInputs('64x minecraft:gravel')
        .itemOutputs('64x gtceu:tin_crushed_ore', '64x gtceu:copper_crushed_ore', '64x gtceu:iron_crushed_ore', '64x gtceu:sphalerite_crushed_ore', '64x gtceu:magnetite_crushed_ore',
            '64x gtceu:chalcopyrite_crushed_ore', '64x gtceu:gold_crushed_ore', '64x gtceu:cassiterite_crushed_ore', '64x gtceu:silver_crushed_ore',
            '64x gtceu:pyrochlore_crushed_ore', '64x gtceu:vanadium_magnetite_crushed_ore', '64x gtceu:lepidolite_crushed_ore', '64x gtceu:pyrolusite_crushed_ore',
            '64x gtceu:bauxite_crushed_ore', '64x gtceu:pollucite_crushed_ore', '64x gtceu:tantalite_crushed_ore',
            '64x gtceu:tungstate_crushed_ore', '64x gtceu:scheelite_crushed_ore')
        .duration(400)
        .EUt(6400);

    event.recipes.gtceu.large_sieve('sand_sieving')
        .itemInputs('64x minecraft:sand')
        .itemOutputs('64x minecraft:diamond', '64x minecraft:emerald', '64x minecraft:amethyst_shard', '64x minecraft:quartz', '64x minecraft:lapis_lazuli',
            '64x minecraft:coal', '64x gtceu:diamond_crushed_ore', '64x gtceu:quartzite_crushed_ore', '64x gtceu:green_sapphire_crushed_ore', 
            '64x gtceu:emerald_crushed_ore', '64x gtceu:saltpeter_crushed_ore', '64x gtceu:ruby_crushed_ore', '64x gtceu:realgar_crushed_ore', 
            '64x gtceu:rock_salt_crushed_ore', '64x gtceu:salt_crushed_ore', '64x gtceu:certus_quartz_crushed_ore', '64x gtceu:sapphire_crushed_ore',
            '64x gtceu:monazite_crushed_ore', '64x gtceu:topaz_crushed_ore', '64x gtceu:yellow_garnet_crushed_ore', '64x gtceu:red_garnet_crushed_ore', 
            '64x gtceu:apatite_crushed_ore', '64x gtceu:topaz_crushed_ore', '64x gtceu:garnet_sand_crushed_ore')
        .duration(400)
        .EUt(6400);

    event.recipes.gtceu.large_sieve('dust_sieving')
        .itemInputs('64x exnihilosequentia:dust')
        .itemOutputs('64x minecraft:ender_pearl', '64x minecraft:glowstone_dust', '64x minecraft:redstone', '64x gtceu:sulfur_dust', '64x ae2:sky_dust', '64x minecraft:echo_shard')
        .duration(400)
        .EUt(6400);

    event.recipes.gtceu.large_sieve('blackstone_sieving')
        .itemInputs('64x exnihilosequentia:crushed_blackstone')
        .itemOutputs('64x gtceu:stibnite_crushed_ore', '64x gtceu:galena_crushed_ore', '64x gtceu:pentlandite_crushed_ore', '64x gtceu:bornite_crushed_ore', 
            '64x gtceu:cobaltite_crushed_ore', '64x gtceu:chromite_crushed_ore', '64x gtceu:beryllium_crushed_ore', '64x gtceu:pitchblende_crushed_ore', 
            '64x gtceu:ilmenite_crushed_ore', '64x gtceu:molybdenite_crushed_ore', '64x gtceu:bastnasite_crushed_ore', '64x gtceu:barite_crushed_ore', 
            '64x gtceu:cooperite_crushed_ore', '64x gtceu:naquadah_crushed_ore')
        .duration(400)
        .EUt(6400);
});