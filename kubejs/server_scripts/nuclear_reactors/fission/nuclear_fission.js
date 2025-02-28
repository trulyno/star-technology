ServerEvents.recipes(event => {

    //fission reactions (depleting rods)
    //thorium 232
    event.recipes.gtceu.nuclear_fission('thorium_232')
        .itemInputs('kubejs:thorium_fuel_rod')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('kubejs:depleted_thorium_fuel_rod')
        .duration(300)
        .EUt(-8192);

    //uranium 238
    event.recipes.gtceu.nuclear_fission('uranium_238')
        .itemInputs('kubejs:low_enriched_uranium_fuel_rod')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('kubejs:depleted_low_enriched_uranium_fuel_rod')
        .duration(300)
        .EUt(-12288);

    //uranium 235
    event.recipes.gtceu.nuclear_fission('uranium_235')
        .itemInputs('kubejs:highly_enriched_uranium_fuel_rod')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('kubejs:depleted_highly_enriched_uranium_fuel_rod')
        .duration(300)
        .EUt(-16384);
    
});