
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
});