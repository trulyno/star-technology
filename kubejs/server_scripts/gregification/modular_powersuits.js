
ServerEvents.recipes(event => {

    event.remove({ mod: 'powersuits'});
    event.remove({ mod: 'numina'});

    event.recipes.gtceu.assembler('ps_table')
        .itemInputs('gtceu:iv_machine_hull', '2x gtceu:ev_field_generator', '4x gtceu:ev_robot_arm', 'gtceu:computer_monitor_cover')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('powersuits:tinkertable')
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('ps_helmet')
        .itemInputs('2x #gtceu:circuits/iv', '5x gtceu:tungsten_double_cable', 'gtceu:lapotron_crystal', 'gtceu:ev_sensor', 'gtceu:ev_field_generator', '4x gtceu:tungsten_steel_screw', '5x gtceu:iridium_plate', '20x gtceu:ruthenium_foil', '32x gtceu:fine_rhodium_wire')
        .inputFluids('gtceu:blue_steel 1440')
        .itemOutputs('powersuits:powerarmor_head')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('ps_chestplate')
        .itemInputs('2x #gtceu:circuits/iv', '8x gtceu:tungsten_double_cable', 'gtceu:lapotron_crystal', '2x gtceu:ev_emitter', 'gtceu:ev_field_generator', '4x gtceu:tungsten_steel_screw', '8x gtceu:iridium_plate', '32x gtceu:ruthenium_foil', '48x gtceu:fine_rhodium_wire')
        .inputFluids('gtceu:red_steel 2304')
        .itemOutputs('powersuits:powerarmor_torso')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('ps_leggings')
        .itemInputs('2x #gtceu:circuits/iv', '7x gtceu:tungsten_double_cable', 'gtceu:lapotron_crystal', '4x gtceu:ev_electric_motor', 'gtceu:ev_field_generator', '4x gtceu:tungsten_steel_screw', '7x gtceu:iridium_plate', '28x gtceu:ruthenium_foil', '40x gtceu:fine_rhodium_wire')
        .inputFluids('gtceu:vanadium_steel 2016')
        .itemOutputs('powersuits:powerarmor_legs')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('ps_boots')
        .itemInputs('2x #gtceu:circuits/iv', '4x gtceu:tungsten_double_cable', 'gtceu:lapotron_crystal', '2x gtceu:ev_electric_piston', 'gtceu:ev_field_generator', '4x gtceu:tungsten_steel_screw', '4x gtceu:iridium_plate', '16x gtceu:ruthenium_foil', '16x gtceu:fine_rhodium_wire')
        .inputFluids('gtceu:black_steel 1152')
        .itemOutputs('powersuits:powerarmor_feet')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('ps_hand')
        .itemInputs('2x #gtceu:circuits/iv', '1x gtceu:tungsten_double_cable', 'gtceu:lapotron_crystal', '2x gtceu:ev_robot_arm', 'gtceu:ev_field_generator', '4x gtceu:tungsten_steel_screw', '3x gtceu:iridium_plate', '8x gtceu:ruthenium_foil', '8x gtceu:fine_rhodium_wire')
        .inputFluids('gtceu:tungsten_steel 288')
        .itemOutputs('powersuits:powerfist')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('numina:battery_basic')
        .itemInputs('2x #gtceu:circuits/ev', 'gtceu:lapotron_crystal', '2x gtceu:shellite_double_wire', '2x gtceu:iridium_plate', 'gtceu:double_battery_alloy_plate')
        .itemOutputs('numina:battery_basic')
        .inputFluids('gtceu:soldering_alloy 720')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);
    
    event.recipes.gtceu.assembler('numina:battery_advanced')
        .itemInputs('2x #gtceu:circuits/iv', 'gtceu:lapotronic_energy_orb', '2x gtceu:shellite_quadruple_wire', '8x gtceu:fine_rhodium_wire', '2x gtceu:double_battery_alloy_plate')
        .itemOutputs('numina:battery_advanced')
        .inputFluids('gtceu:soldering_alloy 1440')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV]);
    
    event.recipes.gtceu.assembler('numina:battery_elite')
        .itemInputs('2x #gtceu:circuits/luv', 'gtceu:lapotronic_energy_orb_cluster', '4x gtceu:twinite_quadruple_wire', '16x gtceu:fine_rhodium_wire', '24x gtceu:ruthenium_foil', '8x gtceu:double_battery_alloy_plate')
        .itemOutputs('numina:battery_elite')
        .inputFluids('gtceu:soldering_alloy 2160')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembly_line('numina:battery_ultimate')
        .itemInputs('2x #gtceu:circuits/zpm', 'gtceu:energy_module', '8x gtceu:dragonsteel_hex_wire', '64x gtceu:advanced_smd_transistor', '64x gtceu:advanced_smd_resistor', '64x gtceu:advanced_smd_capacitor', '64x gtceu:advanced_smd_diode', '64x gtceu:advanced_smd_inductor', 'gtceu:zpm_voltage_coil', '32x gtceu:double_battery_alloy_plate', '2x gtceu:uhpic_chip' )
        .inputFluids('gtceu:soldering_alloy 4608', 'gtceu:naquadria 3456')
        .itemOutputs('numina:battery_ultimate')
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);
});