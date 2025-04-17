ServerEvents.recipes(event => {
    const id = global.id;

    [
        {id: 'thorium_232', rod: 'thorium', input: ['4x gtceu:thorium_dust'], output: ['4x gtceu:uranium_235_dust'], duration: 200, energy: 1024, harvest: -8192},
        {id: 'uranium_235', rod: 'highly_enriched_uranium', input: ['4x gtceu:uranium_235_dust'], output: ['4x gtceu:plutonium_241_dust'], duration: 300, energy: 1536, harvest: -16384},
        {id: 'uranium_238', rod: 'low_enriched_uranium', input: ['4x gtceu:uranium_dust'], output: ['4x gtceu:plutonium_dust'], duration: 240, energy: 1280, harvest: -12288}
    ].forEach(rod=> {
        //compressing fuels into fuel rods
        rod.input.push('gtceu:aluminium_fluid_cell');
        event.recipes.gtceu.canner(id(`${rod.rod}_rod`))
            .itemInputs(rod.input)
            .itemOutputs(`kubejs:${rod.rod}_fuel_rod`)
            .duration(rod.duration)
            .EUt(rod.energy);  

        //fission reactions (depleting rods)
        event.recipes.gtceu.nuclear_fission(id(`${rod.id}_rod`))
            .itemInputs(`kubejs:${rod.rod}_fuel_rod`)
            .inputFluids('gtceu:distilled_water 1000')
            .itemOutputs(`kubejs:depleted_${rod.rod}_fuel_rod`)
            .duration(300)
            .EUt(rod.harvest);

        //depleted rod separation
        rod.output.push('gtceu:aluminium_fluid_cell');
        event.recipes.gtceu.centrifuge(id(`depleted_${rod.id}_rod`))
            .itemInputs(`kubejs:depleted_${rod.rod}_fuel_rod`)
            .itemOutputs(rod.output)
            .duration(rod.duration)
            .EUt(rod.energy);
    });
    
});