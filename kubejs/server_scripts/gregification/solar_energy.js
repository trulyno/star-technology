
ServerEvents.recipes(event => {

    event.remove({id: /solarenergy:.*_solar_generator/});
    event.remove({id: /solarenergy:.*_battery/});
    event.remove({id: /solarenergy:.*_battery_cell/});
    event.remove({id: /solarenergy:.*_solar_cell/});
    event.remove({id: 'solarenergy:basic_energy_core'});
    event.remove({id: 'solarenergy:energy_assembler'});
    event.remove({id: 'solarenergy:energy_cable'});

    event.recipes.gtceu.circuit_assembler('basic_energy_core')
        .itemInputs('gtceu:silicon_wafer', '4x #gtceu:capacitors', '2x #gtceu:diodes', 'gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('solarenergy:basic_energy_core')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.assembler('energy_assembler')
        .itemInputs('12x gtceu:cobalt_rod', 'gtceu:tempered_glass', '16x #gtceu:capacitors', '4x #gtceu:diodes', '4x gtceu:soul_infused_single_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('solarenergy:energy_assembler')
        .duration(600)
        .EUt(30);

    event.recipes.gtceu.circuit_assembler('basic_solar_cell')
        .itemInputs('gtceu:silicon_plate', 'solarenergy:basic_energy_core', '2x #gtceu:circuits/lv', '2x gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('solarenergy:basic_solar_cell')
        .duration(200)
        .EUt(30)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('regular_solar_cell')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'solarenergy:regular_energy_core', '2x #gtceu:circuits/mv', '2x gtceu:copper_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarenergy:regular_solar_cell')
        .duration(200)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('intermediate_solar_cell')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'solarenergy:intermediate_energy_core', '2x #gtceu:circuits/hv', '2x gtceu:gold_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarenergy:intermediate_solar_cell')
        .duration(200)
        .EUt(200)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('advanced_solar_cell')
        .itemInputs('gtceu:epoxy_printed_circuit_board', 'solarenergy:advanced_energy_core', '2x #gtceu:circuits/ev', '2x gtceu:aluminium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('solarenergy:advanced_solar_cell')
        .duration(200)
        .EUt(1000)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('elite_solar_cell')
        .itemInputs('gtceu:fiber_reinforced_printed_circuit_board', 'solarenergy:elite_energy_core', '2x #gtceu:circuits/iv', '2x gtceu:platinum_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('solarenergy:elite_solar_cell')
        .duration(200)
        .EUt(3400)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('ultimate_solar_cell')
        .itemInputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'solarenergy:ultimate_energy_core', '2x #gtceu:circuits/luv', '2x gtceu:niobium_titanium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('solarenergy:ultimate_solar_cell')
        .duration(200)
        .EUt(12000)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('basic_battery_cell')
        .itemInputs('gtceu:silicon_plate', 'solarenergy:basic_energy_core', '#gtceu:circuits/lv', '2x gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('solarenergy:basic_battery_cell')
        .duration(200)
        .EUt(30)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('regular_battery_cell')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'solarenergy:regular_energy_core', '#gtceu:circuits/mv', '2x gtceu:copper_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarenergy:regular_battery_cell')
        .duration(200)
        .EUt(80)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('intermediate_battery_cell')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'solarenergy:intermediate_energy_core', '#gtceu:circuits/hv', '2x gtceu:gold_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarenergy:intermediate_battery_cell')
        .duration(200)
        .EUt(200)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('advanced_battery_cell')
        .itemInputs('gtceu:epoxy_printed_circuit_board', 'solarenergy:advanced_energy_core', '#gtceu:circuits/ev', '2x gtceu:aluminium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('solarenergy:advanced_battery_cell')
        .duration(200)
        .EUt(1000)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('elite_battery_cell')
        .itemInputs('gtceu:fiber_reinforced_printed_circuit_board', 'solarenergy:elite_energy_core', '#gtceu:circuits/iv', '2x gtceu:platinum_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('solarenergy:elite_battery_cell')
        .duration(200)
        .EUt(3400)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('ultimate_battery_cell')
        .itemInputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'solarenergy:ultimate_energy_core', '#gtceu:circuits/luv', '2x gtceu:niobium_titanium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('solarenergy:ultimate_battery_cell')
        .duration(200)
        .EUt(12000)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('basic_dense_battery_cell')
        .itemInputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'solarenergy:basic_dense_energy_core', '2x #gtceu:circuits/luv', '2x gtceu:niobium_titanium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('solarenergy:basic_dense_battery_cell')
        .duration(200)
        .EUt(16000)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('regular_dense_battery_cell')
        .itemInputs('gtceu:wetware_printed_circuit_board', 'solarenergy:regular_dense_energy_core', '#gtceu:circuits/zpm', '2x gtceu:vanadium_gallium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('solarenergy:regular_dense_battery_cell')
        .duration(200)
        .EUt(40000)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('intermediate_dense_battery_cell')
        .itemInputs('gtceu:wetware_printed_circuit_board', 'solarenergy:intermediate_dense_energy_core', '2x #gtceu:circuits/zpm', '2x gtceu:vanadium_gallium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 360')
        .itemOutputs('solarenergy:intermediate_dense_battery_cell')
        .duration(200)
        .EUt(80000)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('advanced_dense_battery_cell')
        .itemInputs('gtceu:wetware_printed_circuit_board', 'solarenergy:advanced_dense_energy_core', '#gtceu:circuits/uv', '2x gtceu:yttrium_barium_cuprate_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 432')
        .itemOutputs('solarenergy:advanced_dense_battery_cell')
        .duration(200)
        .EUt(200000)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('elite_dense_battery_cell')
        .itemInputs('gtceu:wetware_printed_circuit_board', 'solarenergy:elite_dense_energy_core', '2x #gtceu:circuits/uv', '2x gtceu:yttrium_barium_cuprate_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 504')
        .itemOutputs('solarenergy:elite_dense_battery_cell')
        .duration(200)
        .EUt(400000)
        .circuit(1);

    event.recipes.gtceu.circuit_assembler('ultimate_dense_battery_cell')
        .itemInputs('gtceu:wetware_printed_circuit_board', 'solarenergy:ultimate_dense_energy_core', '#gtceu:circuits/uhv', '2x gtceu:europium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('solarenergy:ultimate_dense_battery_cell')
        .duration(200)
        .EUt(1000000)
        .circuit(1);

    event.recipes.gtceu.assembler('basic_solar_generator')
        .itemInputs('3x gtceu:double_steel_plate', '3x gtceu:silicon_wafer', 'solarenergy:basic_solar_cell')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('solarenergy:basic_solar_generator')
        .duration(200)
        .EUt(28);

    event.recipes.gtceu.assembler('regular_solar_generator')
        .itemInputs('3x gtceu:double_aluminium_plate', '3x gtceu:silicon_wafer', 'solarenergy:regular_solar_cell')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('solarenergy:regular_solar_generator')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.assembler('intermediate_solar_generator')
        .itemInputs('3x gtceu:double_stainless_steel_plate', '3x gtceu:silicon_wafer', 'solarenergy:intermediate_solar_cell')
        .inputFluids('gtceu:soldering_alloy 432')
        .itemOutputs('solarenergy:intermediate_solar_generator')
        .duration(200)
        .EUt(460);

    event.recipes.gtceu.assembler('advanced_solar_generator')
        .itemInputs('3x gtceu:double_titanium_plate', '3x gtceu:silicon_wafer', 'solarenergy:advanced_solar_cell')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('solarenergy:advanced_solar_generator')
        .duration(200)
        .EUt(1024);

    event.recipes.gtceu.assembler('elite_solar_generator')
        .itemInputs('3x gtceu:double_tungsten_steel_plate', '3x gtceu:silicon_wafer', 'solarenergy:elite_solar_cell')
        .inputFluids('gtceu:soldering_alloy 864')
        .itemOutputs('solarenergy:elite_solar_generator')
        .duration(200)
        .EUt(4600);

    event.recipes.gtceu.assembler('ultimate_solar_generator')
        .itemInputs('3x gtceu:double_rhodium_plated_palladium_plate', '3x gtceu:silicon_wafer', 'solarenergy:ultimate_solar_cell')
        .inputFluids('gtceu:soldering_alloy 1008')
        .itemOutputs('solarenergy:ultimate_solar_generator')
        .duration(200)
        .EUt(16000);

    event.recipes.gtceu.assembler('basic_battery')
        .itemInputs('gtceu:ulv_machine_hull', 'solarenergy:basic_battery_cell')
        .itemOutputs('solarenergy:basic_battery')
        .duration(400)
        .EUt(8);

    event.recipes.gtceu.assembler('regular_battery')
        .itemInputs('gtceu:lv_machine_hull', 'solarenergy:regular_battery_cell')
        .itemOutputs('solarenergy:regular_battery')
        .duration(400)
        .EUt(28);

    event.recipes.gtceu.assembler('intermediate_battery')
        .itemInputs('gtceu:mv_machine_hull', 'solarenergy:intermediate_battery_cell')
        .itemOutputs('solarenergy:intermediate_battery')
        .duration(400)
        .EUt(120);

    event.recipes.gtceu.assembler('advanced_battery')
        .itemInputs('gtceu:hv_machine_hull', 'solarenergy:advanced_battery_cell')
        .itemOutputs('solarenergy:advanced_battery')
        .duration(400)
        .EUt(420);

    event.recipes.gtceu.assembler('elite_battery')
        .itemInputs('gtceu:ev_machine_hull', 'solarenergy:elite_battery_cell')
        .itemOutputs('solarenergy:elite_battery')
        .duration(400)
        .EUt(1024);

    event.recipes.gtceu.assembler('ultimate_battery')
        .itemInputs('gtceu:iv_machine_hull', 'solarenergy:ultimate_battery_cell')
        .itemOutputs('solarenergy:ultimate_battery')
        .duration(400)
        .EUt(4048);

    event.recipes.gtceu.assembler('basic_dense_battery')
        .itemInputs('gtceu:luv_machine_hull', 'solarenergy:basic_dense_battery_cell')
        .itemOutputs('solarenergy:basic_dense_battery')
        .duration(400)
        .EUt(12000);

    event.recipes.gtceu.assembler('regular_dense_battery')
        .itemInputs('gtceu:zpm_machine_hull', 'solarenergy:regular_dense_battery_cell')
        .itemOutputs('solarenergy:regular_dense_battery')
        .duration(400)
        .EUt(40000);

    event.recipes.gtceu.assembler('intermediate_dense_battery')
        .itemInputs('gtceu:zpm_machine_hull', 'solarenergy:intermediate_dense_battery_cell')
        .itemOutputs('solarenergy:intermediate_dense_battery')
        .duration(400)
        .EUt(80000);

    event.recipes.gtceu.assembler('advanced_dense_battery')
        .itemInputs('gtceu:uv_machine_hull', 'solarenergy:advanced_dense_battery_cell')
        .itemOutputs('solarenergy:advanced_dense_battery')
        .duration(400)
        .EUt(200000);

    event.recipes.gtceu.assembler('elite_dense_battery')
        .itemInputs('gtceu:uv_machine_hull', 'solarenergy:elite_dense_battery_cell')
        .itemOutputs('solarenergy:elite_dense_battery')
        .duration(400)
        .EUt(400000);

    event.recipes.gtceu.assembler('ultimate_dense_battery')
        .itemInputs('gtceu:uhv_machine_hull', 'solarenergy:ultimate_dense_battery_cell')
        .itemOutputs('solarenergy:ultimate_dense_battery')
        .duration(400)
        .EUt(800000);

});