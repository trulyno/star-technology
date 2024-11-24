ServerEvents.recipes(event => {

    //fission reactions (depleting rods)
    //thorium 232
    event.recipes.gtceu.nuclear_fission('thorium_232')
        .itemInputs('kubejs:thorium_fuel_rod')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('kubejs:depleted_thorium_fuel_rod')
        .duration(600)
        .EUt(-4096);

    //uranium 238
    event.recipes.gtceu.nuclear_fission('uranium_238')
        .itemInputs('kubejs:low_enriched_uranium_fuel_rod')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('kubejs:depleted_low_enriched_uranium_fuel_rod')
        .duration(600)
        .EUt(-4096);
    
});