ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.circuit_assembler(id('basic_energy_core'))
        .itemInputs('gtceu:silicon_wafer', '4x #gtceu:capacitors', '2x #gtceu:diodes', 'gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('kubejs:basic_energy_core')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.polarizer(id('basic_to_regular_energy_core'))
        .itemInputs('kubejs:basic_energy_core')
        .itemOutputs('kubejs:regular_energy_core')
        .duration(1000)
        .EUt(25);

    event.recipes.gtceu.polarizer(id('regular_to_intermediate_energy_core'))
        .itemInputs('kubejs:regular_energy_core')
        .itemOutputs('kubejs:intermediate_energy_core')
        .duration(2000)
        .EUt(125);

    event.recipes.gtceu.polarizer(id('intermediate_to_advanced_energy_core'))
        .itemInputs('kubejs:intermediate_energy_core')
        .itemOutputs('kubejs:advanced_energy_core')
        .duration(5000)
        .EUt(500);

    event.recipes.gtceu.polarizer(id('advanced_to_elite_energy_core'))
        .itemInputs('kubejs:advanced_energy_core')
        .itemOutputs('kubejs:elite_energy_core')
        .duration(12500)
        .EUt(2000);

    event.recipes.gtceu.polarizer(id('elite_to_ultimate_energy_core'))
        .itemInputs('kubejs:elite_energy_core')
        .itemOutputs('kubejs:ultimate_energy_core')
        .duration(31250)
        .EUt(8000);

    event.recipes.gtceu.circuit_assembler(id('basic_solar_cell'))
        .itemInputs('gtceu:silicon_plate', 'kubejs:basic_energy_core', '2x #gtceu:circuits/lv', '2x gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('solarflux:photovoltaic_cell_1')
        .duration(200)
        .EUt(30);

    event.recipes.gtceu.circuit_assembler(id('regular_solar_cell'))
        .itemInputs('gtceu:plastic_printed_circuit_board', 'kubejs:regular_energy_core', '2x #gtceu:circuits/mv', '2x gtceu:copper_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarflux:photovoltaic_cell_2')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.circuit_assembler(id('intermediate_solar_cell'))
        .itemInputs('gtceu:plastic_printed_circuit_board', 'kubejs:intermediate_energy_core', '2x #gtceu:circuits/hv', '2x gtceu:gold_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('solarflux:photovoltaic_cell_3')
        .duration(200)
        .EUt(200);

    event.recipes.gtceu.circuit_assembler(id('advanced_solar_cell'))
        .itemInputs('gtceu:epoxy_printed_circuit_board', 'kubejs:advanced_energy_core', '2x #gtceu:circuits/ev', '2x gtceu:aluminium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('solarflux:photovoltaic_cell_4')
        .duration(200)
        .EUt(1000);

    event.recipes.gtceu.circuit_assembler(id('elite_solar_cell'))
        .itemInputs('gtceu:fiber_reinforced_printed_circuit_board', 'kubejs:elite_energy_core', '2x #gtceu:circuits/iv', '2x gtceu:platinum_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('solarflux:photovoltaic_cell_5')
        .duration(200)
        .EUt(3400);

    event.recipes.gtceu.circuit_assembler(id('ultimate_solar_cell'))
        .itemInputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board', 'kubejs:ultimate_energy_core', '2x #gtceu:circuits/luv', '2x gtceu:niobium_titanium_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 216')
        .itemOutputs('solarflux:photovoltaic_cell_6')
        .duration(200)
        .EUt(12000);

    function solarCreation(type, material, wafer)
        {
        event.recipes.gtceu.assembler(`solar_generator_${type}`)
            .itemInputs(`3x gtceu:double_${material}_plate`, `3x gtceu:${wafer}_wafer`, `solarflux:photovoltaic_cell_${type}`)
            .inputFluids(`gtceu:soldering_alloy ${144*type}`)
            .itemOutputs(`solarflux:sp_${type}`)
            .duration(200)
            .EUt(`${8*(4**type)}`);
        }
    function solarCreationCompact(type, material, wafer, circuit)
            {
            event.recipes.gtceu.assembler(`solar_generator_${type}`)
                .itemInputs(`gtceu:dense_${material}_plate`, `gtceu:${wafer}_wafer`, `4x solarflux:sp_${type-1}`, `#gtceu:circuits/${circuit}`)
                .inputFluids(`gtceu:soldering_alloy ${144*(type)}`)
                .itemOutputs(`solarflux:sp_${type}`)
                .duration(200)
                .EUt(`${8*(4**(type))}`);
            }

    solarCreation('1','steel','silicon')
    solarCreation('2','aluminium','silicon')
    solarCreation('3','stainless_steel','phosphorus')
    solarCreation('4','titanium','phosphorus')
    solarCreation('5','tungsten_steel','naquadah')
    solarCreation('6','rhodium_plated_palladium','naquadah')
    solarCreationCompact('7','naquadah_alloy','neutronium', 'zpm')
    solarCreationCompact('8','darmstadtium','neutronium', 'uv')

});
