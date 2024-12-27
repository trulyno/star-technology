ServerEvents.recipes(event => {

    event.recipes.gtceu.centrifuge('sea_water')
        .inputFluids('exnihilosequentia:sea_water 1500')
        .outputFluids('gtceu:salt_water 1000')
        .itemOutputs('gtceu:saltpeter_dust', 'gtceu:rock_salt_dust', 'gtceu:small_borax_dust')
        .duration(50)
        .EUt(16);

    //large barrel
    event.recipes.gtceu.large_barrel('sea_water')
        .notConsumable('minecraft:sand')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:sea_water 1000')
        .duration(80);

});