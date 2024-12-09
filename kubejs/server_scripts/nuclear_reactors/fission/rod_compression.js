ServerEvents.recipes(event => {

    //compressing fuels into fuel rods
    //thorium 232
    event.recipes.gtceu.canner('thorium_232_rod')
        .itemInputs('4x gtceu:thorium_dust', 'gtceu:aluminium_fluid_cell')
        .itemOutputs('kubejs:thorium_fuel_rod')
        .duration(200)
        .EUt(1024);   

    //uranium 238
    event.recipes.gtceu.canner('uranium_238_rod')
        .itemInputs('4x gtceu:uranium_dust', 'gtceu:aluminium_fluid_cell')
        .itemOutputs('kubejs:low_enriched_uranium_fuel_rod')
        .duration(240)
        .EUt(1536);   

});