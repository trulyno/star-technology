// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({ type: 'gtceu:circuit_assembler'});
    event.remove({ output: /^gtceu:.*electronic_circuit/ })

    // Manufacturing Facility Controller
    event.recipes.gtceu.assembler(id('circuit_manufacturing_facility'))
      .itemInputs('3x gtceu:lv_machine_hull', '16x #gtceu:circuits/ulv', '8x kubejs:ulv_robot_arm', '2x create:mechanical_arm',
        '6x kubejs:ulv_conveyor_module', '8x gtceu:steel_gear', '4x kubejs:ulv_electric_motor','2x kubejs:ulv_emitter', '24x gtceu:tin_single_cable')
      .inputFluids('gtceu:tin 1296')
      .itemOutputs('gtceu:circuit_manufacturing_facility')
      .circuit(2)
      .duration(3600)
      .EUt(8);

    // Electronic Circuits Line
    event.remove({ output: 'gtceu:resistor' });
    event.remove({ output: 'gtceu:diode' });
    event.remove({ output: 'gtceu:resin_printed_circuit_board' });
    event.remove({ output: 'gtceu:resin_circuit_board' });

    event.recipes.gtceu.circuit_facility(id('ulv_electronic_circuit'))
        .itemInputs('thermal:redstone_servo', '2x gtceu:double_wrought_iron_plate', '4x gtceu:fine_copper_wire', '2x create:electron_tube', 'gtceu:glass_tube')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('3x gtceu:vacuum_tube')
        .duration(400)
        .EUt(7);

    event.recipes.gtceu.circuit_facility(id('lv_electronic_circuit'))
        .itemInputs('gtceu:resin_printed_circuit_board', '3x gtceu:steel_plate', '6x gtceu:resistor',
                    '4x gtceu:vacuum_tube', '4x gtceu:red_alloy_single_cable', '8x gtceu:copper_bolt')
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('gtceu:basic_electronic_circuit')
        .duration(400)
        .EUt(30);

    event.recipes.gtceu.circuit_facility(id('mv_electronic_circuit'))
        .itemInputs('gtceu:resin_printed_circuit_board', '3x gtceu:double_steel_plate', '8x gtceu:fine_red_alloy_wire', '4x gtceu:resistor',
            '4x gtceu:diode', '4x gtceu:basic_electronic_circuit', '4x gtceu:tin_single_cable', '12x gtceu:copper_bolt')
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('gtceu:good_electronic_circuit')
        .duration(400)
        .EUt(120);
    
    // Parts
    event.recipes.gtceu.circuit_assembler(id('redstone_servo'))
        .itemInputs('2x create:electron_tube', '2x gtceu:steel_plate', '2x gtceu:red_alloy_bolt')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x thermal:redstone_servo')
        .duration(600)
        .EUt(6);

    event.recipes.gtceu.circuit_assembler(id('electron_tube'))
        .itemInputs('gtceu:glass_tube', 'create:polished_rose_quartz', 'gtceu:red_alloy_bolt', 'gtceu:steel_ring')
        .inputFluids('gtceu:tin 72')
        .itemOutputs('3x create:electron_tube')
        .duration(400)
        .EUt(4);

    event.recipes.gtceu.circuit_assembler(id('resistor'))
        .itemInputs('3x minecraft:paper', 'gtceu:coke_dust', 'gtceu:copper_single_wire')
        .inputFluids('gtceu:glue 100')
        .itemOutputs('2x gtceu:resistor')
        .duration(400)
        .EUt(7);

    event.recipes.gtceu.circuit_assembler(id('diode'))
        .itemInputs('6x gtceu:fine_annealed_copper_wire', 'gtceu:small_gallium_arsenide_dust', 'gtceu:glass_tube')
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('2x gtceu:diode')
        .duration(600)
        .EUt(8);

    // Boards
    event.recipes.gtceu.assembler(id('resin_circuit_board'))
        .itemInputs('gtceu:wood_plate', '3x gtceu:sticky_resin')
        .inputFluids('gtceu:glue 100')
        .itemOutputs('gtceu:resin_circuit_board')
        .duration(200)
        .EUt(4);

    event.recipes.gtceu.assembler(id('resin_printed_circuit_board'))
        .itemInputs('gtceu:resin_circuit_board', '6x gtceu:copper_foil')
        .inputFluids('gtceu:glue 100')
        .itemOutputs('gtceu:resin_printed_circuit_board')
        .duration(200)
        .EUt(4);

});