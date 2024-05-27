
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_reactor('blizz_dust')
        .itemInputs('gtceu:cobalt_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('thermal:blizz_powder')
        .duration(200)
        .EUt(7680);

    event.recipes.gtceu.large_chemical_reactor('blizz_dust')
        .itemInputs('gtceu:cobalt_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('thermal:blizz_powder')
        .duration(200)
        .EUt(7680);

    event.recipes.gtceu.chemical_reactor('blitz_dust')
        .itemInputs('gtceu:platinum_dust')
        .inputFluids('gtceu:deuterium 1000')
        .itemOutputs('thermal:blitz_powder')
        .duration(200)
        .EUt(1920);

     event.recipes.gtceu.large_chemical_reactor('blitz_dust')
        .itemInputs('gtceu:platinum_dust')
        .inputFluids('gtceu:deuterium 1000')
        .itemOutputs('thermal:blitz_powder')
        .duration(200)
        .EUt(1920);

    event.recipes.gtceu.chemical_reactor('basalz_dust')
        .itemInputs('gtceu:rhodium_dust')
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('thermal:basalz_powder')
        .duration(200)
        .EUt(480);

     event.recipes.gtceu.large_chemical_reactor('basalz_dust')
        .itemInputs('gtceu:rhodium_dust')
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('thermal:basalz_powder')
        .duration(200)
        .EUt(480);

    event.recipes.gtceu.macerator('basalz_powder')
        .itemInputs('thermal:basalz_rod')
        .itemOutputs('4x thermal:basalz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.macerator('blizz_powder')
        .itemInputs('thermal:blizz_rod')
        .itemOutputs('4x thermal:blizz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.macerator('blitz_powder')
        .itemInputs('thermal:blitz_rod')
        .itemOutputs('4x thermal:blitz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.mixer('earth_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:basalz_powder')
        .itemOutputs('3x thermal:earth_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('ice_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:blizz_powder')
        .itemOutputs('3x thermal:ice_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('lightning_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:blitz_powder')
        .itemOutputs('3x thermal:lightning_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('nether_star_essence')
        .itemInputs('8x minecraft:fire_charge', '8x thermal:earth_charge', '8x thermal:ice_charge', '8x thermal:lightning_charge')
        .chancedOutput('mysticalagriculture:nether_star_essence', 8000, 500)
        .duration(360)
        .EUt(512);

    event.recipes.gtceu.chemical_bath('nether_star_shard')
        .itemInputs('mysticalagriculture:nether_star_essence')
        .inputFluids('gtceu:radon 100')
        .itemOutputs('mysticalagradditions:nether_star_shard')
        .duration(300)
        .EUt(496);

    event.recipes.gtceu.macerator('nether_star_dust')
        .itemInputs('mysticalagradditions:nether_star_shard')
        .itemOutputs('gtceu:small_nether_star_dust')
        .duration(400)
        .EUt(496);

});
