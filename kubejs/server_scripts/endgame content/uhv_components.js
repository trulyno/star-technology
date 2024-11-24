
ServerEvents.recipes(event => {
    
    event.recipes.gtceu.assembly_line('uhv_electric_motor')
        .itemInputs('gtceu:long_magnetic_zapolgium_rod', '4x gtceu:long_zalloy_rod', '8x gtceu:zalloy_round', '64x gtceu:fine_zirconium_wire', '64x gtceu:fine_zirconium_wire', '2x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:lubricant 1000', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_motor')
        .duration(600)
        .EUt(250000);

    event.recipes.gtceu.assembly_line('uhv_electric_pump')
        .itemInputs('gtceu:uhv_electric_motor', 'gtceu:neutronium_large_fluid_pipe', '2x gtceu:zalloy_plate', '8x gtceu:zalloy_screw', '16x gtceu:silicone_rubber_ring', 'gtceu:zircalloy_4_rotor', '2x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:lubricant 1000', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_pump')
        .duration(600)
        .EUt(250000);

    event.recipes.gtceu.assembler('uhc_fluid_regulator')
        .itemInputs('gtceu:uhv_electric_pump', '2x #gtceu:circuits/uhv')
        .itemOutputs('gtceu:uhv_fluid_regulator')
        .duration(50)
        .EUt(1000000)
        .circuit(1);

    event.recipes.gtceu.assembly_line('uhv_conveyor_module')
        .itemInputs('2x gtceu:uhv_electric_motor', '2x gtceu:zalloy_plate', '4x gtceu:zalloy_ring', '16x gtceu:zalloy_round', '4x gtceu:zalloy_screw', '2x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:lubricant 1000', 'gtceu:styrene_butadiene_rubber 3456', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_conveyor_module')
        .duration(600)
        .EUt(250000);

    event.recipes.gtceu.assembly_line('uhv_electric_piston')
        .itemInputs('gtceu:uhv_electric_motor', '4x gtceu:zalloy_plate', '4x gtceu:zalloy_ring', '16x gtceu:zalloy_round', '4x gtceu:zalloy_rod', 'gtceu:zircalloy_4_gear', '2x gtceu:small_zircalloy_4_gear', '2x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576', 'gtceu:lubricant 1000', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_piston')
        .duration(600)
        .EUt(250000);

    event.recipes.gtceu.assembly_line('uhv_robot_arm')
        .itemInputs('4x gtceu:long_zalloy_rod', 'gtceu:zalloy_gear', '3x gtceu:small_zalloy_gear', '2x gtceu:uhv_electric_motor', 'gtceu:uhv_electric_piston', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '4x #gtceu:circuits/zpm', '4x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1728', 'gtceu:lubricant 1000', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_robot_arm')
        .duration(600)
        .EUt(250000);

    event.recipes.gtceu.assembly_line('uhv_field_generator')
        .itemInputs('gtceu:zalloy_frame', '6x gtceu:zalloy_plate', '2x gtceu:gravi_star', '2x gtceu:uhv_emitter', '2x #gtceu:circuits/uhv', '64x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire', '64x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire', '4x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1728', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_field_generator')
        .duration(600)
        .EUt(250000);

    event.recipes.gtceu.assembly_line('uhv_emitter')
        .itemInputs('gtceu:zalloy_frame', 'gtceu:uhv_electric_motor', '4x gtceu:long_zalloy_rod', '2x gtceu:gravi_star', '2x #gtceu:circuits/uhv', '64x gtceu:neutronium_foil', '32x gtceu:neutronium_foil', '4x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_emitter')
        .duration(600)
        .EUt(250000);

    event.recipes.gtceu.assembly_line('uhv_sensor')
        .itemInputs('gtceu:zalloy_frame', 'gtceu:uhv_electric_motor', '4x gtceu:zalloy_plate', '2x gtceu:gravi_star', '2x #gtceu:circuits/uhv', '64x gtceu:neutronium_foil', '32x gtceu:neutronium_foil', '4x gtceu:zirconium_selenide_diiodide_single_cable')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_sensor')
        .duration(600)
        .EUt(250000);
});