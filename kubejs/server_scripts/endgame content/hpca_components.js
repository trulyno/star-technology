ServerEvents.recipes(event => {
    const id = global.id;
    
    event.recipes.gtceu.heat_chamber(id('graphite_nanoparticle_coolant'))
        .itemInputs('32x gtceu:graphite_dust')
        .inputFluids('gtceu:utopian_akreyrium 2000', 'gtceu:pcb_coolant 5000')
        .outputFluids('gtceu:akreyrium_pcb_graphite_nanoparticle_coolant 4000')
        .duration(250)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.assembly_line(id('nanofluidic_heat_sink'))
        .itemInputs(
            'gtceu:hpca_heat_sink_component', '4x #gtceu:circuits/zpm',
            '64x gtceu:fine_copper_wire', '64x gtceu:fine_copper_wire',
            '32x gtceu:carbon_fibers', '16x gtceu:copper_tiny_fluid_pipe'
        )
        .inputFluids(
            'gtceu:akreyrium_pcb_graphite_nanoparticle_coolant 1000',
        )
        .itemOutputs('start_core:hpca_nanofluidic_heat_sink_component')
        .duration(7200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:hpca_heat_sink_component'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
        )
        .EUt(GTValues.VHA[GTValues.UV]); 
})