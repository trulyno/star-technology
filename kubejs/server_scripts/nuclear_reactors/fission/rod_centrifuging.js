ServerEvents.recipes(event => {
    
    //depleted rod separation
    //thorium 232
    event.recipes.gtceu.centrifuge('depleted_thorium_232')
        .itemInputs('kubejs:depleted_thorium_fuel_rod')
        .itemOutputs('4x gtceu:uranium_235_dust', 'gtceu:aluminium_fluid_cell')
        .duration(200)
        .EUt(1024);   

    //uranium 238
    event.recipes.gtceu.centrifuge('depleted_uranium_238')
        .itemInputs('kubejs:depleted_low_enriched_uranium_fuel_rod')
        .itemOutputs('4x gtceu:plutonium_dust', 'gtceu:aluminium_fluid_cell')
        .duration(240)
        .EUt(1536);   

});