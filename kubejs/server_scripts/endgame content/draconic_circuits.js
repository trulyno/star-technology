
ServerEvents.recipes(event => {

    event.recipes.gtceu.circuit_assembler('draconic_wetware_circuit_board')
        .itemInputs('32x gtceu:wetware_circuit_board', '4x gtceu:petri_dish', 'gtceu:uhv_electric_pump', 'gtceu:uhv_sensor', '2x #gtceu:circuits/zpm', '4x gtceu:stellarium_foil')
        .inputFluids('gtceu:sterilized_growth_medium 6000')
        .itemOutputs('32x kubejs:draconic_wetware_circuit_board')
        .duration(1200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.circuit_assembler('draconic_neuro_processing_unit')
        .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '8x kubejs:draconic_brain_matter_cells', '16x gtceu:polybenzimidazole_small_fluid_pipe', '16x gtceu:blue_steel_plate', '32x gtceu:silicone_rubber_foil', '16x gtceu:tritanium_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 500')
        .itemOutputs('32x kubejs:draconic_neuro_processing_unit')
        .duration(600)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.circuit_assembler('draconic_processor')
        .itemInputs('kubejs:draconic_neuro_processing_unit', 'gtceu:highly_advanced_soc', 'gtceu:qbit_cpu_chip', '12x gtceu:advanced_smd_capacitor', '12x gtceu:advanced_smd_transistor', '16x gtceu:fine_uranium_rhodium_dinaquadide_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
        .itemOutputs('2x kubejs:draconic_wetware_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.circuit_assembler('draconic_processor_assembly')
        .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '2x kubejs:draconic_wetware_processor', '8x gtceu:advanced_smd_inductor', '16x gtceu:advanced_smd_capacitor', '48x gtceu:ram_chip', '24x gtceu:fine_uranium_rhodium_dinaquadide_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 144')
        .itemOutputs('2x kubejs:draconic_wetware_processor_assembly')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('draconic_processor_supercomputer')
        .itemInputs('2x gtceu:neutronium_frame', '2x kubejs:draconic_wetware_processor_assembly', '16x gtceu:advanced_smd_diode', '32x gtceu:nor_memory_chip', '64x gtceu:ram_chip', '32x gtceu:fine_uranium_rhodium_dinaquadide_wire', '64x gtceu:polyether_ether_ketone_foil', '4x gtceu:tritanium_plate')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152')
        .itemOutputs('kubejs:draconic_wetware_processor_computer')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('draconic_processor_mainframe')
        .itemInputs('2x gtceu:neutronium_frame', '2x kubejs:draconic_wetware_processor_computer', '48x gtceu:advanced_smd_diode', '48x gtceu:advanced_smd_capacitor', '48x gtceu:advanced_smd_transistor', '48x gtceu:advanced_smd_resistor', '48x gtceu:advanced_smd_inductor', '64x gtceu:polyether_ether_ketone_foil', '32x gtceu:polyether_ether_ketone_foil', '64x gtceu:ram_chip', '2x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '16x gtceu:tritanium_plate')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 2880', 'gtceu:polyether_ether_ketone 1152')
        .itemOutputs('kubejs:draconic_wetware_processor_mainframe')
        .duration(2000)
        .EUt(GTValues.VHA[GTValues.UHV]);

});