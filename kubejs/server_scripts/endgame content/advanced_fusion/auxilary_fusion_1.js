ServerEvents.recipes(event => {
    const id = global.id;
    
    //Controller Blocks
    
    event.recipes.gtceu.assembly_line(id('uhv_auxiliary_boosted_fusion_reactor'))
        .itemInputs('start_core:auxiliary_fusion_coil_mk1', '4x #gtceu:circuits/uev', 'gtceu:gravi_star', 'gtceu:double_zircalloy_4_plate',
                '2x gtceu:uv_field_generator', '64x kubejs:uepic_chip', '32x kubejs:uepic_chip', '32x gtceu:ruthenium_trinium_americium_neutronate_single_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152', 'gtceu:zirconium_selenide_diiodide 1152')
        .itemOutputs('start_core:uhv_auxiliary_boosted_fusion_reactor')
        .duration(1200)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_fusion_reactor'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(144)
            )
        .EUt(GTValues.VHA[GTValues.UHV]);

    //Casings/Coil
    
    event.recipes.gtceu.assembler(id('superconducting_coil_uhv')) //UHV tier superconducting coil
        .itemInputs('4x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '4x gtceu:niobium_titanium_foil')
        .inputFluids('gtceu:trinium 576')
        .itemOutputs('gtceu:superconducting_coil')
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler(id('auxiliary_boosted_fusion_casing_mk1'))
        .itemInputs('gtceu:uhv_machine_casing', 'start_core:auxiliary_fusion_coil_mk1', '2x kubejs:uhv_voltage_coil', 'gtceu:uv_field_generator', '6x gtceu:zircalloy_4_plate')
        .inputFluids('gtceu:polyether_ether_ketone 576')
        .itemOutputs('2x start_core:auxiliary_boosted_fusion_casing_mk1')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UHV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);


    event.recipes.gtceu.assembler(id('auxiliary_fusion_coil_mk1'))
        .itemInputs('1x gtceu:fusion_coil', '2x gtceu:zpm_field_generator', 'gtceu:zpm_electric_pump', '2x gtceu:neutron_reflector', '4x #gtceu:circuits/uv', '4x gtceu:zapolgium_small_fluid_pipe', '4x gtceu:zircalloy_4_plate')
        .inputFluids('gtceu:zirconium_selenide_diiodide 576')
        .itemOutputs('1x start_core:auxiliary_fusion_coil_mk1')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);
});