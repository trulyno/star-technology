ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.mixer(id('enriched_estaltadyne_slurry'))
        .inputFluids('gtceu:enriched_estaltadyne_solution 1000')
        .inputFluids('gtceu:perchloric_acid 2000')
        .outputFluids('gtceu:enriched_estaltadyne_slurry 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.chemical_plant(id('enriched_estaltadyne_naquide_slurry_mixture'))
        .inputFluids('gtceu:enriched_estaltadyne_slurry 1000')
        .itemInputs('1x gtceu:enriched_naquadah_dust')
        .outputFluids('gtceu:enriched_estaltadyne_naquide_slurry_mixture 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.heat_chamber(id('hyper_enriched_estaltadyne_slurry_mixture'))
        .inputFluids('gtceu:enriched_estaltadyne_naquide_slurry_mixture 1000')
        .itemInputs('2x gtceu:ionized_sculk_dust', '1x gtceu:calcium_dust')
        .outputFluids('gtceu:hyper_enriched_estaltadyne_slurry_mixture 1000')
        .itemOutputs('1x gtceu:naquadah_dust')
        .duration(250)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.centrifuge(id('hyper_enriched_estaltadyne_slurry_mixture_decomposition'))
        .inputFluids('gtceu:hyper_enriched_estaltadyne_slurry_mixture 1000')
        .itemOutputs('1x gtceu:calcium_perchlorate_dust')
        .outputFluids('gtceu:hyper_enriched_estaltadyne_slurry_residue 1000')
        .duration(280)
        .EUt(GTValues.VH[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('hyper_enriched_estaltadyne_slurry_residue_sodium_addition'))
        .inputFluids('gtceu:hyper_enriched_estaltadyne_slurry_residue 1000')
        .itemInputs('3x gtceu:sodium_oxide_dust')
        .outputFluids('gtceu:sodium_hyper_enriched_estaltadyne_sludge 1000')
        .outputFluids('minecraft:water 1000')
        .duration(80)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.centrifuge(id('hyper_enriched_estaltadyne_concentrate'))
        .inputFluids('gtceu:sodium_hyper_enriched_estaltadyne_sludge 1000')
        .itemOutputs('2x gtceu:sodium_over_sculk_dust')
        .outputFluids('gtceu:hyper_enriched_estaltadyne_concentrate 1000')
        .duration(820)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.electrolyzer(id('enriched_estalt'))
        .inputFluids('gtceu:hyper_enriched_estaltadyne_concentrate 1000')    
        .itemOutputs('2x gtceu:enriched_estalt_dust')
        .outputFluids('gtceu:enriched_mystical_concentrate 1000')
        .duration(190)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.manifold_centrifuge(id('enriched_mystical_concentrate_decomposition'))
        .inputFluids('gtceu:enriched_mystical_concentrate 3000')
        .outputFluids('gtceu:enriched_mythrillic_mixture 1000')
        .outputFluids('gtceu:enriched_estaltadyne_mixture 1000')
        .outputFluids('gtceu:enriched_adamantamite_mixture 1000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_enriched_estalt_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

});