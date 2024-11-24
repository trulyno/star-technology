ServerEvents.recipes(event => {


    event.recipes.gtceu.cyclonic_crystalline_sieve('akreyrium_sieving')
        .chancedInput('1x exnihilosequentia:netherite_mesh', 50, 0)
        .inputFluids('gtceu:gritty_akreyrium 100000')
        .outputFluids('gtceu:lepton_sparse_akreyrium 1000')
        .itemOutputs('1x kubejs:crystallised_akreyrium')
        .duration(1200)
        .EUt(2097152);

    event.recipes.gtceu.leptonic_convergence_injector('electron_densification')
        .inputFluids('gtceu:sparse_electron_akreyrium 1000')
        .inputFluids("gtceu:twinite 144")
        .outputFluids("gtceu:dense_electron_akreyrium 1000")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.leptonic_convergence_injector('muon_densification')
        .inputFluids('gtceu:sparse_muon_akreyrium 1000')
        .inputFluids("gtceu:weapon_grade_naquadah 16")
        .outputFluids("gtceu:dense_muon_akreyrium 1000")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.leptonic_convergence_injector('tau_densification')
        .inputFluids('gtceu:sparse_tau_akreyrium 1000')
        .inputFluids("gtceu:stellarium 16")
        .outputFluids("gtceu:dense_tau_akreyrium 1000")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('lepton_stable_stabilisation')
        .inputFluids('gtceu:lepton_sparse_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:gray_glass_lens")
        .itemOutputs('1x gtceu:gray_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 10")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('electron_stabilisation')
        .inputFluids('gtceu:dense_electron_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:magenta_glass_lens")
        .itemOutputs('1x gtceu:magenta_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('muon_stabilisation')
        .inputFluids('gtceu:dense_muon_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:lime_glass_lens")
        .itemOutputs('1x gtceu:lime_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('tau_stabilisation')
        .inputFluids('gtceu:dense_tau_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:light_blue_glass_lens")
        .itemOutputs('1x gtceu:light_blue_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(3600)
        .EUt(524288);
});