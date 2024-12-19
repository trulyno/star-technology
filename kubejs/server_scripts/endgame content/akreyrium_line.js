ServerEvents.recipes(event => {

    // Machine recipes
    event.recipes.gtceu.assembly_line('cyclonic_crystalline_sieve')
    .itemInputs(
        'gtceu:robust_machine_casing', '16x #gtceu:circuits/uv',
        '4x gtceu:double_hastelloy_x_plate', '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip',
        '16x gtceu:neutronium_large_fluid_pipe', '16x gtceu:stellarium_gear',
        '8x exnihilosequentia:netherite_mesh', '4x gtceu:uhv_electric_pump',  '4x gtceu:uhv_electric_pump',
         '4x gtceu:uhv_electric_pump',  '2x gtceu:uhv_field_generator'
    )
    .inputFluids(
        'gtceu:prismalium 9216',
        'gtceu:hsss 4608',
        'gtceu:hastelloy_x 36864'
    )
    .itemOutputs('gtceu:cyclonic_crystalline_sieve')
    .duration(24000)
    .stationResearch(
        researchRecipeBuilder => researchRecipeBuilder
            .researchStack(Item.of("gtceu:gritty_akreyrium_bucket"))
            .EUt(GTValues.VHA[GTValues.UV])
            .CWUt(144)
    )
    .EUt(GTValues.VHA[GTValues.UV]); 

    event.recipes.gtceu.assembly_line('folding_akreyrium_stabiliser')
        .itemInputs(
            'gtceu:robust_machine_casing', '4x #gtceu:circuits/uhv', '8x #gtceu:circuits/uv',
            '4x gtceu:double_hastelloy_x_plate', '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip',
            '16x gtceu:neutronium_large_fluid_pipe', '64x gtceu:light_blue_glass_lens',  '64x gtceu:lime_glass_lens', '64x gtceu:magenta_glass_lens',
            '4x gtceu:uhv_electric_pump',  '4x gtceu:uhv_electric_pump',
            '4x gtceu:uhv_sensor',  '4x gtceu:uhv_fluid_regulator', '2x gtceu:uhv_field_generator'
        )
        .inputFluids(
            'gtceu:prismalium 4608',
            'gtceu:hsse 4608',
            'gtceu:hastelloy_x 9216',
            'gtceu:borosilicate_glass 147456'
        )
        .itemOutputs('gtceu:folding_akreyrium_stabiliser')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:cyclonic_crystalline_sieve"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UV]); 

    
    event.recipes.gtceu.assembly_line('leptonic_manifold_quantiser')
        .itemInputs(
            'gtceu:robust_machine_casing', '4x #gtceu:circuits/uhv',
            '4x gtceu:double_hastelloy_x_plate', '64x gtceu:uhpic_chip', '32x gtceu:uhpic_chip',
            '16x gtceu:neutronium_large_fluid_pipe', '64x gtceu:glass_lens',
            '4x gtceu:uhv_electric_pump', '4x gtceu:uhv_sensor',  '4x gtceu:uhv_fluid_regulator',
            '16x gtceu:advanced_computer_casing'
        )
        .inputFluids(
            'gtceu:stellarium 4608',
            'gtceu:hssg 4608',
            'gtceu:hastelloy_x 9216',
            'gtceu:borosilicate_glass 36864'
        )
        .itemOutputs('gtceu:leptonic_manifold_quantiser')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:lepton_sparse_akreyrium_bucket"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UV]); 

    event.recipes.gtceu.assembly_line('leptonic_convergence_injector')
        .itemInputs(
            'gtceu:robust_machine_casing', '1x #gtceu:circuits/uhv', '16x gtceu:crystal_soc',
            '4x gtceu:double_hastelloy_x_plate', '64x gtceu:uhpic_chip',
            '4x gtceu:neutronium_huge_fluid_pipe', '64x gtceu:glass_lens',
            '4x gtceu:uhv_electric_pump', '4x gtceu:uhv_sensor',  '4x gtceu:uhv_fluid_regulator',
            '8x gtceu:advanced_computer_casing', ''
        )
        .inputFluids(
            'gtceu:weapon_grade_naquadah 2304',
            'gtceu:hssg 4608',
            'gtceu:hastelloy_x 9216',
        )
        .itemOutputs('gtceu:leptonic_convergence_injector')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:leptonic_manifold_quantiser"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VHA[GTValues.UV]); 

    // Akreyrium Processing
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
        .duration(1200)
        .EUt(2097152);

    event.recipes.gtceu.folding_akreyrium_stabiliser('electron_stabilisation')
        .inputFluids('gtceu:dense_electron_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:magenta_glass_lens")
        .itemOutputs('1x gtceu:magenta_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(200)
        .EUt(2097152);

    event.recipes.gtceu.folding_akreyrium_stabiliser('muon_stabilisation')
        .inputFluids('gtceu:dense_muon_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:lime_glass_lens")
        .itemOutputs('1x gtceu:lime_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(200)
        .EUt(2097152);

    event.recipes.gtceu.folding_akreyrium_stabiliser('tau_stabilisation')
        .inputFluids('gtceu:dense_tau_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:light_blue_glass_lens")
        .itemOutputs('1x gtceu:light_blue_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(200)
        .EUt(2097152);
});