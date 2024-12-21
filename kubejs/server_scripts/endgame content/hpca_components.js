ServerEvents.recipes(event => {
    event.recipes.gtceu.super_pressure_heat_chamber('graphite_nanoparticle_coolant')
        .itemInputs('64x gtceu:tiny_graphite_dust', '64x gtceu:tiny_graphite_dust')
        .inputFluids('gtceu:utopian_akreyrium 1000', 'gtceu:pcb_coolant 1000')
        .outputFluids('gtceu:akreyrium_pcb_graphite_nanoparticle_coolant 1000')
        .duration(200)
        .EUt(120000)

    event.recipes.gtceu.assembly_line('nanofluidic_heat_sink')
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
                .researchStack(Item.of("gtceu:hpca_heat_sink_component"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
        )
        .EUt(GTValues.VHA[GTValues.UV]); 
})