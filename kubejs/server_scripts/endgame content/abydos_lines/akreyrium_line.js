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
        .itemOutputs('1x kubejs:crystalline_akreyrium', '1x kubejs:amorphous_akreyrium')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV]);

    // Coalescing Superalloy mixing
    event.recipes.gtceu.mixer('lepton_coalescing_superalloy_dust')
        .itemInputs(
            '4x gtceu:thallium_tungstate_dust', '2x gtceu:nickel_dust', '4x gtceu:graphene_dust', '3x gtceu:niobium_dust', "4x gtceu:bismuth_dust"
        ).itemOutputs('17x gtceu:lepton_coalescing_superalloy_dust')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV]);
    
    // Leptonic Flux Recipe
    event.recipes.gtceu.mixer('leptonic_flux_akreyrium')
        .itemInputs('1x kubejs:amorphous_akreyrium')
        .inputFluids('gtceu:lepton_coalescing_superalloy 864', 'gtceu:lepton_sparse_akreyrium 1000')
        .outputFluids('gtceu:lepton_flux_akreyrium 1000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);

    // Empty injection catalyst recipe
    event.recipes.gtceu.assembler('blank_injection_catalyst')
        .itemInputs(
            '1x gtceu:petri_dish', '2x kubejs:uhv_microfluidic_flow_valve', '32x gtceu:neutronium_foil',
            '16x kubejs:uhv_high_strength_panel', '8x gtceu:neutronium_screw'
        ).inputFluids('gtceu:polyether_ether_ketone 512')
        .itemOutputs('1x kubejs:blank_injection_catalyst')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UV]);

    
    event.recipes.gtceu.injection_mixer('lepton_flavour_foundational_flux')
        .itemInputs('1x kubejs:amorphous_akreyrium')
        .inputFluids('gtceu:lepton_coalescing_superalloy 864')
        .outputFluids('gtceu:lepton_flavour_foundational_flux 1000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.UV]);

    //-----------------------------------------------------------------------------
    // TAU BRANCH
    //-----------------------------------------------------------------------------

    // Intermediate to catalyst
    event.recipes.gtceu.mixer('light_tau_infusion_flux')
        .inputFluids('gtceu:stellarium 144', 'gtceu:lepton_flavour_foundational_flux 1000')
        .outputFluids('gtceu:light_tau_infusion_flux 1000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.distillation_tower('light_tau_infusion_flux_decomp')
        .inputFluids('gtceu:light_tau_infusion_flux 1000')
        .outputFluids('gtceu:superlight_tau_infusion_flux 800', 'gtceu:heavy_tau_infusion_flux 200')
        .itemOutputs('1x kubejs:aspect_of_weight')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.brewery('heavy_tau_conversion')
        .inputFluids('gtceu:superlight_tau_infusion_flux 1000')
        .itemInputs('1x kubejs:aspect_of_weight')
        .outputFluids('gtceu:heavy_tau_infusion_flux 500')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.injection_mixer('heavy_tau_densification')
        // TODO: Better idea for "densifying/heavying" items which can be freely
        // consumed.
        .itemInputs('1x kubejs:aspect_of_weight', '1x gtceu:tungsten_dust', '1x gtceu:osmiridium_dust')
        .inputFluids('gtceu:heavy_tau_infusion_flux 1000')
        .outputFluids('gtceu:superheavy_tau_infusion_flux 1000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.mixer('tau_infusion_flux_unification')
        .itemInputs('1x kubejs:aspect_of_weight')
        .inputFluids('gtceu:superheavy_tau_infusion_flux 2000', 'gtceu:superlight_tau_infusion_flux 2000')
        .outputFluids('gtceu:ethereal_tau_infusion_flux 5000')
        .duration(420)
        .EUt(GTValues.VA[GTValues.UV]);

    // Tau canning
    event.recipes.gtceu.canner('tau_canner')
        .itemInputs('1x kubejs:blank_injection_catalyst')
        .inputFluids('gtceu:ethereal_tau_infusion_flux 125')
        .itemOutputs('1x kubejs:tau_injection_catalyst')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
    
    //-----------------------------------------------------------------------------
    // MUON BRANCH
    //-----------------------------------------------------------------------------
    
    // Intermediate to catalyst
    event.recipes.gtceu.mixer('twinkling_muon_infusion_flux')
        .inputFluids('gtceu:weapon_grade_naquadah 144', 'gtceu:lepton_flavour_foundational_flux 1000')
        .outputFluids('gtceu:twinkling_muon_infusion_flux 1000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.ZPM]);
    

    // Normal chemical reactor
    event.recipes.gtceu.chemical_reactor('glowstone_muon_lighting')
        .inputFluids('gtceu:twinkling_muon_infusion_flux 1000', 'gtceu:glowstone 288')
        .outputFluids('gtceu:glowing_muon_infusion_flux 1000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.LuV]);
        
    event.recipes.gtceu.chemical_reactor('lava_muon_lighting')
        .inputFluids('gtceu:glowing_muon_infusion_flux 1000', 'minecraft:lava 1000')
        .outputFluids('gtceu:shining_muon_infusion_flux 1000')
        .duration(460)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_reactor('blaze_muon_lighting')
        .inputFluids('gtceu:shining_muon_infusion_flux 1000', 'gtceu:blaze 576')
        .outputFluids('gtceu:radiant_muon_infusion_flux 1000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.UV]);
        
    // Large chemical reactor
    event.recipes.gtceu.large_chemical_reactor('glowstone_muon_lighting')
        .inputFluids('gtceu:twinkling_muon_infusion_flux 1000', 'gtceu:glowstone 288')
        .outputFluids('gtceu:glowing_muon_infusion_flux 1000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.LuV]);
        
    event.recipes.gtceu.large_chemical_reactor('lava_muon_lighting')
        .inputFluids('gtceu:glowing_muon_infusion_flux 1000', 'minecraft:lava 1000')
        .outputFluids('gtceu:shining_muon_infusion_flux 1000')
        .duration(460)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.large_chemical_reactor('blaze_muon_lighting')
        .inputFluids('gtceu:shining_muon_infusion_flux 1000', 'gtceu:blaze 576')
        .outputFluids('gtceu:radiant_muon_infusion_flux 1000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.injection_mixer('muon_unification')
        .inputFluids('gtceu:twinkling_muon_infusion_flux 1000', 'gtceu:glowing_muon_infusion_flux 1000', 'gtceu:shining_muon_infusion_flux 1000', 'gtceu:radiant_muon_infusion_flux 1000')
        .outputFluids('gtceu:brilliant_muon_infusion_flux 4000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.UV]);

    // Muon canning
    event.recipes.gtceu.canner('muon_canner')
        .itemInputs('1x kubejs:blank_injection_catalyst')
        .inputFluids('gtceu:brilliant_muon_infusion_flux 125')
        .itemOutputs('1x kubejs:muon_injection_catalyst')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    //-----------------------------------------------------------------------------
    // ELECTRON BRANCH
    //-----------------------------------------------------------------------------
    
    // Intermediate to catalyst
    event.recipes.gtceu.mixer('mono_phase_electron_infusion_flux')
        .inputFluids('gtceu:zalloy 144', 'gtceu:lepton_flavour_foundational_flux 1000')
        .outputFluids('gtceu:mono_phase_electron_infusion_flux 1000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.ZPM]);
    
    // Agent
    event.recipes.gtceu.distillation_tower('di_phase_electron_infusion_agent')
        .inputFluids('gtceu:mono_phase_electron_infusion_flux 1000')
        .itemOutputs('1x gtceu:di_phase_electron_infusion_agent_dust')
        .outputFluids('gtceu:lepton_coalescing_superalloy 864')
        .duration(120)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.polarizer('tri_phase_electron_infusion_agent')
        .itemInputs('1x gtceu:di_phase_electron_infusion_agent_dust')
        .itemOutputs('1x gtceu:tri_phase_electron_infusion_agent_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.electromagnetic_separator('tri_phase_separation')
        .itemInputs('1x gtceu:tri_phase_electron_infusion_agent_dust')
        .itemOutputs('10x gtceu:gamma_phase_electron_infusion_agent_dust', '5x gtceu:beta_phase_electron_infusion_agent_dust', '1x gtceu:alpha_phase_electron_infusion_agent_dust')
        .duration(360)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.polarizer('gamma_phase_electron_infusion_agent')
        .itemInputs('1x gtceu:gamma_phase_electron_infusion_agent_dust')
        .itemOutputs('1x gtceu:beta_phase_electron_infusion_agent_dust')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.polarizer('beta_phase_electron_infusion_agent_dust')
        .itemInputs('1x gtceu:beta_phase_electron_infusion_agent_dust')
        .itemOutputs('1x gtceu:alpha_phase_electron_infusion_agent_dust')
        .duration(160)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.injection_mixer('electron_unification')
        .inputFluids('gtceu:lepton_coalescing_superalloy 864')
        .itemInputs('16x gtceu:alpha_phase_electron_infusion_agent_dust')
        .outputFluids('gtceu:alternating_phase_electron_infusion_flux 1000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.UV]);

    // Electron canning
    event.recipes.gtceu.canner('electron_canner')
        .itemInputs('1x kubejs:blank_injection_catalyst')
        .inputFluids('gtceu:alternating_phase_electron_infusion_flux 125')
        .itemOutputs('1x kubejs:electron_injection_catalyst')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);
    
    // Injection
    const add_injection_recipe = (akreyType, amount, catalyst) => {
        event.recipes.gtceu.injection_mixer(`${akreyType}_${amount}_${catalyst}`)
            .itemInputs(`1x ${catalyst}`)
            .itemOutputs('1x kubejs:defiled_injection_catalyst')
            .inputFluids(`gtceu:sparse_${akreyType}_akreyrium 1000`)
            .outputFluids(`gtceu:dense_${akreyType}_akreyrium ${amount}`)
            .duration(200)
            .EUt(GTValues.VHA[GTValues.UHV]);
    }

    add_injection_recipe('tau', 1000, 'kubejs:tau_injection_catalyst')
    add_injection_recipe('muon', 200, 'kubejs:tau_injection_catalyst')
    add_injection_recipe('electron', 200, 'kubejs:tau_injection_catalyst')

    add_injection_recipe('tau', 200, 'kubejs:muon_injection_catalyst')
    add_injection_recipe('muon', 1000, 'kubejs:muon_injection_catalyst')
    add_injection_recipe('electron', 200, 'kubejs:muon_injection_catalyst')

    add_injection_recipe('tau', 200, 'kubejs:electron_injection_catalyst')
    add_injection_recipe('muon', 200, 'kubejs:electron_injection_catalyst')
    add_injection_recipe('electron', 1000, 'kubejs:electron_injection_catalyst')

    // Defiled washer
    event.recipes.gtceu.chemical_bath('defiled_injection_catalyst_washing')
        .itemInputs('1x kubejs:defiled_injection_catalyst')
        .inputFluids('gtceu:fluoroantimonic_acid 80')
        .itemOutputs('1x kubejs:blank_injection_catalyst')
        .duration(360)
        .EUt(GTValues.VA[GTValues.EV]);

    // Stabilisation recipes
    event.recipes.gtceu.folding_akreyrium_stabiliser('lepton_flux_stabilisation')
        .inputFluids('gtceu:lepton_flux_akreyrium 1000')
        .itemInputs('1x kubejs:crystalline_akreyrium', '1x gtceu:gray_glass_lens')
        .itemOutputs('1x gtceu:gray_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 10', 'gtceu:lepton_coalescing_superalloy 720')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser('electron_stabilisation')
        .inputFluids('gtceu:dense_electron_akreyrium 1000')
        .itemInputs('1x kubejs:crystalline_akreyrium', '1x gtceu:magenta_glass_lens')
        .itemOutputs('1x gtceu:magenta_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 500', 'gtceu:lepton_coalescing_superalloy 720')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser('muon_stabilisation')
        .inputFluids('gtceu:dense_muon_akreyrium 1000')
        .itemInputs('1x kubejs:crystalline_akreyrium', '1x gtceu:lime_glass_lens')
        .itemOutputs('1x gtceu:lime_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 500', 'gtceu:lepton_coalescing_superalloy 720')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.folding_akreyrium_stabiliser('tau_stabilisation')
        .inputFluids('gtceu:dense_tau_akreyrium 1000')
        .itemInputs('1x kubejs:crystalline_akreyrium', '1x gtceu:light_blue_glass_lens')
        .itemOutputs('1x gtceu:light_blue_glass_lens')
        .outputFluids('gtceu:utopian_akreyrium 500', 'gtceu:lepton_coalescing_superalloy 720')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV]);
});