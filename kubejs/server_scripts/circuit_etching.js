
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_reactor('copper_chloride')
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:chlorine 1000')
        .itemOutputs('2x gtceu:copper_chloride_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor('copper_chloride')
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:chlorine 1000')
        .itemOutputs('2x gtceu:copper_chloride_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV]);


    event.recipes.gtceu.mixer('cupric_chloride_solution')
        .itemInputs('1x gtceu:copper_chloride_dust')
        .inputFluids('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:cupric_chloride_solution 1000')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu.chemical_reactor('phenolic_circuit_board_copper')
        .itemInputs('gtceu:phenolic_circuit_board', '4x gtceu:silver_foil')
        .inputFluids('gtceu:cupric_chloride_solution 50')
        .itemOutputs('gtceu:phenolic_printed_circuit_board')
        .duration(300)
        .EUt(30);

    event.recipes.gtceu.large_chemical_reactor('phenolic_circuit_board_copper')
        .itemInputs('4x gtceu:silver_foil', 'gtceu:phenolic_circuit_board')
        .inputFluids('gtceu:cupric_chloride_solution 50')
        .itemOutputs('gtceu:phenolic_printed_circuit_board')
        .duration(300)
        .EUt(30);

    event.recipes.gtceu.chemical_reactor('plastic_circuit_board_copper')
        .itemInputs('gtceu:plastic_circuit_board', '6x gtceu:copper_foil')
        .inputFluids('gtceu:cupric_chloride_solution 125')
        .itemOutputs('gtceu:plastic_printed_circuit_board')
        .duration(600)
        .EUt(30);

    event.recipes.gtceu.large_chemical_reactor('plastic_circuit_board_copper')
        .itemInputs('6x gtceu:copper_foil', 'gtceu:plastic_circuit_board')
        .inputFluids('gtceu:cupric_chloride_solution 125')
        .itemOutputs('gtceu:plastic_printed_circuit_board')
        .duration(600)
        .EUt(30);

    event.recipes.gtceu.chemical_reactor('epoxy_circuit_board_copper')
        .itemInputs('gtceu:epoxy_circuit_board', '8x gtceu:electrum_foil')
        .inputFluids('gtceu:cupric_chloride_solution 250')
        .itemOutputs('gtceu:epoxy_printed_circuit_board')
        .duration(900)
        .EUt(30);

    event.recipes.gtceu.large_chemical_reactor('epoxy_circuit_board_copper')
        .itemInputs('8x gtceu:electrum_foil', 'gtceu:epoxy_circuit_board')
        .inputFluids('gtceu:cupric_chloride_solution 250')
        .itemOutputs('gtceu:epoxy_printed_circuit_board')
        .duration(900)
        .EUt(30);

    event.recipes.gtceu.chemical_reactor('fiber_reinforced_circuit_board_copper')
        .itemInputs('gtceu:fiber_reinforced_circuit_board', '12x gtceu:annealed_copper_foil')
        .inputFluids('gtceu:cupric_chloride_solution 500')
        .itemOutputs('gtceu:fiber_reinforced_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(30);

    event.recipes.gtceu.large_chemical_reactor('fiber_reinforced_circuit_board_copper')
        .itemInputs('12x gtceu:annealed_copper_foil', 'gtceu:fiber_reinforced_circuit_board')
        .inputFluids('gtceu:cupric_chloride_solution 500')
        .itemOutputs('gtceu:fiber_reinforced_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(30);

    event.recipes.gtceu.chemical_reactor('multilayer_fiber_reinforced_circuit_board_copper')
        .itemInputs('gtceu:multilayer_fiber_reinforced_circuit_board', '8x gtceu:platinum_foil')
        .inputFluids('gtceu:cupric_chloride_solution 1000')
        .itemOutputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1500)
        .EUt(120);

    event.recipes.gtceu.large_chemical_reactor('multilayer_fiber_reinforced_circuit_board_copper')
        .itemInputs('8x gtceu:platinum_foil', 'gtceu:multilayer_fiber_reinforced_circuit_board')
        .inputFluids('gtceu:cupric_chloride_solution 1000')
        .itemOutputs('gtceu:multilayer_fiber_reinforced_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1500)
        .EUt(120);

    event.recipes.gtceu.chemical_reactor('wetware_circuit_board_copper')
        .itemInputs('gtceu:wetware_circuit_board', '32x gtceu:niobium_titanium_foil')
        .inputFluids('gtceu:cupric_chloride_solution 2500')
        .itemOutputs('gtceu:wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(480);

    event.recipes.gtceu.large_chemical_reactor('wetware_circuit_board_copper')
        .itemInputs('32x gtceu:niobium_titanium_foil', 'gtceu:wetware_circuit_board')
        .inputFluids('gtceu:cupric_chloride_solution 2500')
        .itemOutputs('gtceu:wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(480);

    event.recipes.gtceu.chemical_reactor('draconic_wetware_circuit_board_sodium')
        .itemInputs('kubejs:draconic_wetware_circuit_board', '48x gtceu:trinium_foil')
        .inputFluids('gtceu:sodium_persulfate 20000')
        .itemOutputs('kubejs:draconic_wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2100)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('draconic_wetware_circuit_board_sodium')
        .itemInputs('48x gtceu:trinium_foil', 'kubejs:draconic_wetware_circuit_board')
        .inputFluids('gtceu:sodium_persulfate 20000')
        .itemOutputs('kubejs:draconic_wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2100)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.chemical_reactor('draconic_wetware_circuit_board_iron')
        .itemInputs('kubejs:draconic_wetware_circuit_board', '48x gtceu:trinium_foil')
        .inputFluids('gtceu:iron_iii_chloride 10000')
        .itemOutputs('kubejs:draconic_wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2100)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('draconic_wetware_circuit_board_iron')
        .itemInputs('48x gtceu:trinium_foil', 'kubejs:draconic_wetware_circuit_board')
        .inputFluids('gtceu:iron_iii_chloride 10000')
        .itemOutputs('kubejs:draconic_wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2100)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.chemical_reactor('draconic_wetware_circuit_board_copper')
        .itemInputs('kubejs:draconic_wetware_circuit_board', '48x gtceu:trinium_foil')
        .inputFluids('gtceu:cupric_chloride_solution 5000')
        .itemOutputs('kubejs:draconic_wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2100)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('draconic_wetware_circuit_board_copper')
        .itemInputs('48x gtceu:trinium_foil', 'kubejs:draconic_wetware_circuit_board')
        .inputFluids('gtceu:cupric_chloride_solution 5000')
        .itemOutputs('kubejs:draconic_wetware_printed_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2100)
        .EUt(GTValues.VA[GTValues.EV]);

});
