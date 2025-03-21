ServerEvents.recipes(event => {

    // Machine recipes
    event.recipes.gtceu.assembly_line('cyclonic_sifter')
        .itemInputs('gtceu:uhv_machine_hull', '12x #gtceu:circuits/uhv','16x gtceu:neutronium_large_fluid_pipe', '16x gtceu:stellarium_gear',
            '8x gtceu:uhv_electric_pump', '4x gtceu:uhv_electric_motor', '2x gtceu:uhv_field_generator', '6x gtceu:pure_netherite_gear')
        .inputFluids('gtceu:prismalium 9216','gtceu:gritty_akreyrium 224000')
        .itemOutputs('gtceu:cyclonic_sifter')
        .duration(24000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:gritty_akreyrium_bucket'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 

    event.recipes.gtceu.assembly_line('folding_akreyrium_stabiliser')
        .itemInputs('gtceu:uhv_machine_hull', '8x #gtceu:circuits/uhv', '16x #gtceu:circuits/uv','16x gtceu:small_pure_netherite_gear','32x gtceu:neutronium_normal_fluid_pipe',
            '64x gtceu:light_blue_glass_lens','64x gtceu:lime_glass_lens','64x gtceu:magenta_glass_lens','8x gtceu:uhv_field_generator',
            '8x gtceu:uhv_fluid_regulator','4x gtceu:uhv_sensor','8x gtceu:pure_netherite_rotor')
        .inputFluids('gtceu:hsse 9216','gtceu:borosilicate_glass 147456')
        .itemOutputs('gtceu:folding_akreyrium_stabiliser')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:cyclonic_sifter'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 

    
    event.recipes.gtceu.assembly_line('manifold_centrifuge')
        .itemInputs(
            'gtceu:uhv_machine_hull', '24x #gtceu:circuits/uhv','64x kubejs:uepic_chip', '32x kubejs:uepic_chip',
            '16x gtceu:neutronium_large_fluid_pipe', '64x gtceu:glass_lens','64x gtceu:fine_indium_tin_barium_titanium_cuprate_wire','16x gtceu:pure_netherite_foil',
            '4x gtceu:uhv_electric_pump', '6x gtceu:uhv_emitter',  '4x gtceu:uhv_fluid_regulator')
        .inputFluids('gtceu:naquadria 24048','gtceu:borosilicate_glass 36864')
        .itemOutputs('gtceu:manifold_centrifuge')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:lepton_sparse_akreyrium_bucket'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 

    event.recipes.gtceu.assembly_line('injection_mixer')
        .itemInputs(
            'gtceu:uhv_machine_hull', '24x #gtceu:circuits/uhv', '48x gtceu:crystal_soc','64x kubejs:uepic_chip','8x gtceu:neutronium_huge_fluid_pipe', '64x gtceu:glass_lens',
            '4x gtceu:small_pure_netherite_gear','2x gtceu:small_zalloy_gear','6x gtceu:uhv_electric_pump','6x gtceu:uhv_electric_pump','2x gtceu:uhv_fluid_regulator')
        .inputFluids('gtceu:weapon_grade_naquadah 2304','gtceu:stellarium 2304','gtceu:twinite 20736','gtceu:utopian_akreyrium 1250')
        .itemOutputs('gtceu:injection_mixer')
        .duration(32000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:manifold_centrifuge'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(144)
        )
        .EUt(GTValues.VA[GTValues.UV]); 

    // Akreyrium Processing
    event.recipes.gtceu.cyclonic_sifter('akreyrium_sieving')
        .chancedInput('1x kubejs:netherite_reinforced_mesh', 500, -50)
        .inputFluids('gtceu:gritty_akreyrium 100000')
        .outputFluids('gtceu:lepton_sparse_akreyrium 1000')
        .itemOutputs('1x kubejs:crystallised_akreyrium')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.injection_mixer('electron_densification')
        .inputFluids('gtceu:sparse_electron_akreyrium 1000')
        .inputFluids('gtceu:twinite 144')
        .outputFluids('gtceu:dense_electron_akreyrium 1000')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.injection_mixer('muon_densification')
        .inputFluids('gtceu:sparse_muon_akreyrium 1000')
        .inputFluids('gtceu:weapon_grade_naquadah 16')
        .outputFluids('gtceu:dense_muon_akreyrium 1000')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.injection_mixer('tau_densification')
        .inputFluids('gtceu:sparse_tau_akreyrium 1000')
        .inputFluids('gtceu:stellarium 16')
        .outputFluids('gtceu:dense_tau_akreyrium 1000')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser('lepton_stable_stabilisation')
        .inputFluids('gtceu:lepton_sparse_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', '1x gtceu:gray_glass_lens')
        .itemOutputs('1x gtceu:gray_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 10')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser('electron_stabilisation')
        .inputFluids('gtceu:dense_electron_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', '1x gtceu:magenta_glass_lens')
        .itemOutputs('1x gtceu:magenta_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 500')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser('muon_stabilisation')
        .inputFluids('gtceu:dense_muon_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', '1x gtceu:lime_glass_lens')
        .itemOutputs('1x gtceu:lime_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 500')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser('tau_stabilisation')
        .inputFluids('gtceu:dense_tau_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', '1x gtceu:light_blue_glass_lens')
        .itemOutputs('1x gtceu:light_blue_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 500')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV]);
});