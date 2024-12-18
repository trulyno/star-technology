ServerEvents.recipes(event => {

    // event.remove({id: /solarflux:.*_solar_generator/});
    // event.remove({id: /solarflux:.*_battery/});
    // event.remove({id: /solarflux:.*_battery_cell/});
    // event.remove({id: /solarflux:.*_solar_cell/});
    // event.remove({id: 'solarflux:basic_energy_core'});
    // event.remove({id: 'solarflux:energy_assembler'});
    // event.remove({id: 'solarflux:energy_cable'});

    event.recipes.gtceu.circuit_assembler('basic_energy_core')
        .itemInputs('gtceu:silicon_wafer', '4x #gtceu:capacitors', '2x #gtceu:diodes', 'gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('kubejs:basic_energy_core')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.polarizer('basic_to_regular_energy_core')
        .itemInputs('kubejs:basic_energy_core')
        .itemOutputs('kubejs:regular_energy_core')
        .duration(1000)
        .EUt(25);

    event.recipes.gtceu.polarizer('regular_to_intermediate_energy_core')
        .itemInputs('kubejs:regular_energy_core')
        .itemOutputs('kubejs:intermediate_energy_core')
        .duration(2000)
        .EUt(125);

    event.recipes.gtceu.polarizer('intermediate_to_advanced_energy_core')
        .itemInputs('kubejs:intermediate_energy_core')
        .itemOutputs('kubejs:advanced_energy_core')
        .duration(5000)
        .EUt(500);

    event.recipes.gtceu.polarizer('advanced_to_elite_energy_core')
        .itemInputs('kubejs:advanced_energy_core')
        .itemOutputs('kubejs:elite_energy_core')
        .duration(12500)
        .EUt(2000);

    event.recipes.gtceu.polarizer('elite_to_ultimate_energy_core')
        .itemInputs('kubejs:elite_energy_core')
        .itemOutputs('kubejs:ultimate_energy_core')
        .duration(31250)
        .EUt(8000);

    // event.recipes.gtceu.assembler('energy_assembler')
    //     .itemInputs('12x gtceu:cobalt_rod', 'gtceu:tempered_glass', '16x #gtceu:capacitors', '4x #gtceu:diodes', '4x gtceu:soul_infused_single_wire')
    //     .inputFluids('gtceu:soldering_alloy 144')
    //     .itemOutputs('solarflux:energy_assembler')
    //     .duration(600)
    //     .EUt(30);

    event.recipes.gtceu.circuit_assembler('basic_solar_cell')
        .itemInputs('gtceu:silicon_plate', 'kubejs:basic_energy_core', '2x #gtceu:circuits/lv', '2x gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('solarflux:photovoltaic_cell_1')
        .duration(200)
        .EUt(30)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('regular_solar_cell')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'kubejs:regular_energy_core', '2x #gtceu:circuits/mv', '2x gtceu:copper_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarflux:photovoltaic_cell_2')
        .duration(200)
        .EUt(80)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('intermediate_solar_cell')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'kubejs:intermediate_energy_core', '2x #gtceu:circuits/hv', '2x gtceu:gold_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarflux:photovoltaic_cell_3')
        .duration(200)
        .EUt(200)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('advanced_solar_cell')
        .itemInputs('gtceu:epoxy_printed_circuit_board', 'kubejs:advanced_energy_core', '2x #gtceu:circuits/ev', '2x gtceu:aluminium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('solarflux:photovoltaic_cell_4')
        .duration(200)
        .EUt(1000)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('elite_solar_cell')
        .itemInputs('gtceu:fiber_reinforced_printed_circuit_board', 'kubejs:elite_energy_core', '2x #gtceu:circuits/iv', '2x gtceu:platinum_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('solarflux:photovoltaic_cell_5')
        .duration(200)
        .EUt(3400)
        .circuit(0);

    event.recipes.gtceu.circuit_assembler('ultimate_solar_cell')
        .itemInputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'kubejs:ultimate_energy_core', '2x #gtceu:circuits/luv', '2x gtceu:niobium_titanium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('solarflux:photovoltaic_cell_6')
        .duration(200)
        .EUt(12000)
        .circuit(0);

    // event.recipes.gtceu.circuit_assembler('basic_battery_cell')
    //     .itemInputs('gtceu:silicon_plate', 'solarflux:basic_energy_core', '#gtceu:circuits/lv', '2x gtceu:tin_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 12')
    //     .itemOutputs('solarflux:basic_battery_cell')
    //     .duration(200)
    //     .EUt(30)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('regular_battery_cell')
    //     .itemInputs('gtceu:plastic_printed_circuit_board', 'solarflux:regular_energy_core', '#gtceu:circuits/mv', '2x gtceu:copper_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 36')
    //     .itemOutputs('solarflux:regular_battery_cell')
    //     .duration(200)
    //     .EUt(80)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('intermediate_battery_cell')
    //     .itemInputs('gtceu:plastic_printed_circuit_board', 'solarflux:intermediate_energy_core', '#gtceu:circuits/hv', '2x gtceu:gold_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 36')
    //     .itemOutputs('solarflux:intermediate_battery_cell')
    //     .duration(200)
    //     .EUt(200)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('advanced_battery_cell')
    //     .itemInputs('gtceu:epoxy_printed_circuit_board', 'solarflux:advanced_energy_core', '#gtceu:circuits/ev', '2x gtceu:aluminium_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 72')
    //     .itemOutputs('solarflux:advanced_battery_cell')
    //     .duration(200)
    //     .EUt(1000)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('elite_battery_cell')
    //     .itemInputs('gtceu:fiber_reinforced_printed_circuit_board', 'solarflux:elite_energy_core', '#gtceu:circuits/iv', '2x gtceu:platinum_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 144')
    //     .itemOutputs('solarflux:elite_battery_cell')
    //     .duration(200)
    //     .EUt(3400)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('ultimate_battery_cell')
    //     .itemInputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'solarflux:ultimate_energy_core', '#gtceu:circuits/luv', '2x gtceu:niobium_titanium_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 216')
    //     .itemOutputs('solarflux:ultimate_battery_cell')
    //     .duration(200)
    //     .EUt(12000)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('basic_dense_battery_cell')
    //     .itemInputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'solarflux:basic_dense_energy_core', '2x #gtceu:circuits/luv', '2x gtceu:niobium_titanium_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 216')
    //     .itemOutputs('solarflux:basic_dense_battery_cell')
    //     .duration(200)
    //     .EUt(16000)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('regular_dense_battery_cell')
    //     .itemInputs('gtceu:wetware_printed_circuit_board', 'solarflux:regular_dense_energy_core', '#gtceu:circuits/zpm', '2x gtceu:vanadium_gallium_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 288')
    //     .itemOutputs('solarflux:regular_dense_battery_cell')
    //     .duration(200)
    //     .EUt(40000)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('intermediate_dense_battery_cell')
    //     .itemInputs('gtceu:wetware_printed_circuit_board', 'solarflux:intermediate_dense_energy_core', '2x #gtceu:circuits/zpm', '2x gtceu:vanadium_gallium_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 360')
    //     .itemOutputs('solarflux:intermediate_dense_battery_cell')
    //     .duration(200)
    //     .EUt(80000)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('advanced_dense_battery_cell')
    //     .itemInputs('gtceu:wetware_printed_circuit_board', 'solarflux:advanced_dense_energy_core', '#gtceu:circuits/uv', '2x gtceu:yttrium_barium_cuprate_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 432')
    //     .itemOutputs('solarflux:advanced_dense_battery_cell')
    //     .duration(200)
    //     .EUt(200000)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('elite_dense_battery_cell')
    //     .itemInputs('gtceu:wetware_printed_circuit_board', 'solarflux:elite_dense_energy_core', '2x #gtceu:circuits/uv', '2x gtceu:yttrium_barium_cuprate_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 504')
    //     .itemOutputs('solarflux:elite_dense_battery_cell')
    //     .duration(200)
    //     .EUt(400000)
    //     .circuit(1);

    // event.recipes.gtceu.circuit_assembler('ultimate_dense_battery_cell')
    //     .itemInputs('gtceu:wetware_printed_circuit_board', 'solarflux:ultimate_dense_energy_core', '#gtceu:circuits/uhv', '2x gtceu:europium_single_cable', '4x minecraft:glass_pane')
    //     .inputFluids('gtceu:soldering_alloy 576')
    //     .itemOutputs('solarflux:ultimate_dense_battery_cell')
    //     .duration(200)
    //     .EUt(1000000)
    //     .circuit(1);

    event.recipes.gtceu.assembler('basic_solar_generator')
        .itemInputs('3x gtceu:double_steel_plate', '3x gtceu:silicon_wafer', 'solarflux:photovoltaic_cell_1')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('solarflux:sp_1')
        .duration(200)
        .EUt(28);

    event.recipes.gtceu.assembler('regular_solar_generator')
        .itemInputs('3x gtceu:double_aluminium_plate', '3x gtceu:silicon_wafer', 'solarflux:photovoltaic_cell_2')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('solarflux:sp_2')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.assembler('intermediate_solar_generator')
        .itemInputs('3x gtceu:double_stainless_steel_plate', '3x gtceu:silicon_wafer', 'solarflux:photovoltaic_cell_3')
        .inputFluids('gtceu:soldering_alloy 432')
        .itemOutputs('solarflux:sp_3')
        .duration(200)
        .EUt(460);

    event.recipes.gtceu.assembler('advanced_solar_generator')
        .itemInputs('3x gtceu:double_titanium_plate', '3x gtceu:silicon_wafer', 'solarflux:photovoltaic_cell_4')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('solarflux:sp_4')
        .duration(200)
        .EUt(1024);

    event.recipes.gtceu.assembler('elite_solar_generator')
        .itemInputs('3x gtceu:double_tungsten_steel_plate', '3x gtceu:silicon_wafer', 'solarflux:photovoltaic_cell_5')
        .inputFluids('gtceu:soldering_alloy 864')
        .itemOutputs('solarflux:sp_5')
        .duration(200)
        .EUt(4600);

    event.recipes.gtceu.assembler('ultimate_solar_generator')
        .itemInputs('3x gtceu:double_rhodium_plated_palladium_plate', '3x gtceu:silicon_wafer', 'solarflux:photovoltaic_cell_6')
        .inputFluids('gtceu:soldering_alloy 1008')
        .itemOutputs('solarflux:sp_6')
        .duration(200)
        .EUt(16000);

    event.recipes.gtceu.assembler('solar_generator_7')
        .itemInputs('4x solarflux:sp_6', '#gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 1008')
        .itemOutputs('solarflux:sp_7')
        .duration(200)
        .EUt(102400);

    event.recipes.gtceu.assembler('solar_generator_8')
        .itemInputs('4x solarflux:sp_7', '#gtceu:circuits/uv')
        .inputFluids('gtceu:soldering_alloy 1008')
        .itemOutputs('solarflux:sp_8')
        .duration(200)
        .EUt(160000);

    // event.recipes.gtceu.assembler('basic_battery')
    //     .itemInputs('gtceu:ulv_machine_hull', 'solarflux:basic_battery_cell')
    //     .itemOutputs('solarflux:basic_battery')
    //     .duration(400)
    //     .EUt(8);

    // event.recipes.gtceu.assembler('regular_battery')
    //     .itemInputs('gtceu:lv_machine_hull', 'solarflux:regular_battery_cell')
    //     .itemOutputs('solarflux:regular_battery')
    //     .duration(400)
    //     .EUt(28);

    // event.recipes.gtceu.assembler('intermediate_battery')
    //     .itemInputs('gtceu:mv_machine_hull', 'solarflux:intermediate_battery_cell')
    //     .itemOutputs('solarflux:intermediate_battery')
    //     .duration(400)
    //     .EUt(120);

    // event.recipes.gtceu.assembler('advanced_battery')
    //     .itemInputs('gtceu:hv_machine_hull', 'solarflux:advanced_battery_cell')
    //     .itemOutputs('solarflux:advanced_battery')
    //     .duration(400)
    //     .EUt(420);

    // event.recipes.gtceu.assembler('elite_battery')
    //     .itemInputs('gtceu:ev_machine_hull', 'solarflux:elite_battery_cell')
    //     .itemOutputs('solarflux:elite_battery')
    //     .duration(400)
    //     .EUt(1024);

    // event.recipes.gtceu.assembler('ultimate_battery')
    //     .itemInputs('gtceu:iv_machine_hull', 'solarflux:ultimate_battery_cell')
    //     .itemOutputs('solarflux:ultimate_battery')
    //     .duration(400)
    //     .EUt(4048);

    // event.recipes.gtceu.assembler('basic_dense_battery')
    //     .itemInputs('gtceu:luv_machine_hull', 'solarflux:basic_dense_battery_cell')
    //     .itemOutputs('solarflux:basic_dense_battery')
    //     .duration(400)
    //     .EUt(12000);

    // event.recipes.gtceu.assembler('regular_dense_battery')
    //     .itemInputs('gtceu:zpm_machine_hull', 'solarflux:regular_dense_battery_cell')
    //     .itemOutputs('solarflux:regular_dense_battery')
    //     .duration(400)
    //     .EUt(40000);

    // event.recipes.gtceu.assembler('intermediate_dense_battery')
    //     .itemInputs('gtceu:zpm_machine_hull', 'solarflux:intermediate_dense_battery_cell')
    //     .itemOutputs('solarflux:intermediate_dense_battery')
    //     .duration(400)
    //     .EUt(80000);

    // event.recipes.gtceu.assembler('advanced_dense_battery')
    //     .itemInputs('gtceu:uv_machine_hull', 'solarflux:advanced_dense_battery_cell')
    //     .itemOutputs('solarflux:advanced_dense_battery')
    //     .duration(400)
    //     .EUt(200000);

    // event.recipes.gtceu.assembler('elite_dense_battery')
    //     .itemInputs('gtceu:uv_machine_hull', 'solarflux:elite_dense_battery_cell')
    //     .itemOutputs('solarflux:elite_dense_battery')
    //     .duration(400)
    //     .EUt(400000);

    // event.recipes.gtceu.assembler('ultimate_dense_battery')
    //     .itemInputs('gtceu:uhv_machine_hull', 'solarflux:ultimate_dense_battery_cell')
    //     .itemOutputs('solarflux:ultimate_dense_battery')
    //     .duration(400)
    //     .EUt(800000);

});
