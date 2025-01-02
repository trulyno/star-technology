ServerEvents.recipes(event => {

    event.recipes.gtceu.centrifuge('sea_water')
        .inputFluids('exnihilosequentia:sea_water 1250')
        .outputFluids('gtceu:salt_water 1000')
        .itemOutputs('gtceu:crushed_saltpeter_ore', 'gtceu:crushed_rock_salt_ore', 'gtceu:small_borax_dust')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV]);

    //large barrel
    event.recipes.gtceu.large_barrel('sea_water')
        .notConsumable('minecraft:sand')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:sea_water 1000')
        .duration(80);

    //larger barrel
    event.recipes.gtceu.larger_barrel('sea_water')
        .itemInputs('minecraft:sand')
        .inputFluids('minecraft:water 16000')
        .outputFluids('exnihilosequentia:sea_water 16000')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV]);

});