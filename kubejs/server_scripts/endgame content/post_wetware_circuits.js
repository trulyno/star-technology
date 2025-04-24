ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembly_line(id('wetware_based_runic_neuroloom'))
        .itemInputs('2x gtceu:ancient_runicalium_frame', '4x gtceu:wetware_processor_mainframe', '64x gtceu:advanced_smd_diode', '64x gtceu:advanced_smd_capacitor', '64x gtceu:advanced_smd_transistor',
            '64x gtceu:advanced_smd_resistor', '64x gtceu:advanced_smd_inductor', '64x gtceu:polyether_ether_ketone_foil', '64x gtceu:polyether_ether_ketone_foil', '48x kubejs:qram_chip', 
            '24x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '32x gtceu:tritanium_plate')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 2880', 'gtceu:polyether_ether_ketone 1152', 'gtceu:sterilized_growth_medium 5000')
        .itemOutputs('kubejs:wetware_based_runic_neuroloom')
        .duration(1440)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack('kubejs:computational_super_matrix')
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(160)
        )
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.circuit_assembler(id('draconic_wetware_circuit_board'))
        .itemInputs('32x gtceu:wetware_circuit_board', '4x gtceu:petri_dish', 'gtceu:uhv_electric_pump', 'gtceu:uhv_sensor', '2x #gtceu:circuits/zpm', '4x gtceu:stellarium_foil')
        .inputFluids('gtceu:sterilized_growth_medium 6000')
        .itemOutputs('32x kubejs:draconic_wetware_circuit_board')
        .duration(1200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    // event.recipes.gtceu.circuit_assembler(id('draconic_neuro_processing_unit'))
    //     .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '8x kubejs:draconic_brain_matter_cells', '16x gtceu:polybenzimidazole_small_fluid_pipe', '16x gtceu:blue_steel_plate', '32x gtceu:silicone_rubber_foil', '16x gtceu:tritanium_bolt')
    //     .inputFluids('gtceu:sterilized_growth_medium 500')
    //     .itemOutputs('1x kubejs:draconic_neuro_processing_unit')
    //     .duration(600)
    //     .cleanroom(CleanroomType.CLEANROOM)
    //     .EUt(GTValues.VHA[GTValues.UV]);

    // event.recipes.gtceu.circuit_assembler(id('draconic_wetware_microchip_processor'))
    //     .itemInputs('kubejs:draconic_neuro_processing_unit', 'gtceu:crystal_cpu', 'gtceu:qbit_cpu_chip', '12x gtceu:advanced_smd_capacitor', '12x gtceu:advanced_smd_transistor', '16x gtceu:fine_yttrium_barium_cuprate_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
    //     .itemOutputs('3x kubejs:draconic_wetware_microchip_processor')
    //     .duration(200)
    //     .cleanroom(CleanroomType.CLEANROOM)
    //     .EUt(GTValues.VHA[GTValues.UV]);

    // event.recipes.gtceu.circuit_assembler(id('draconic_wetware_microchip_processor_cheap'))
    //     .itemInputs('kubejs:draconic_neuro_processing_unit', 'gtceu:highly_advanced_soc', '16x gtceu:fine_yttrium_barium_cuprate_wire', '8x gtceu:iron_selenide_over_strontium_titanium_oxide_bolt')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
    //     .itemOutputs('6x kubejs:draconic_wetware_microchip_processor')
    //     .duration(50)
    //     .cleanroom(CleanroomType.CLEANROOM)
    //     .EUt(GTValues.VHA[GTValues.UEV]);

    // event.recipes.gtceu.circuit_assembler(id('draconic_processor'))
    //     .itemInputs('kubejs:draconic_neuro_processing_unit', 'gtceu:crystal_cpu', 'gtceu:qbit_cpu_chip', '12x gtceu:advanced_smd_capacitor', '12x gtceu:advanced_smd_transistor', '16x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
    //     .itemOutputs('2x kubejs:draconic_wetware_processor')
    //     .duration(200)
    //     .cleanroom(CleanroomType.CLEANROOM)
    //     .EUt(GTValues.VHA[GTValues.UV]);

    // event.recipes.gtceu.circuit_assembler(id('draconic_processor_assembly'))
    //     .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '2x kubejs:draconic_wetware_processor', '8x gtceu:advanced_smd_inductor', '16x gtceu:advanced_smd_capacitor', '18x kubejs:qram_chip', '24x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 144')
    //     .itemOutputs('2x kubejs:draconic_wetware_processor_assembly')
    //     .duration(400)
    //     .cleanroom(CleanroomType.CLEANROOM)
    //     .EUt(GTValues.VHA[GTValues.UV]);

    // event.recipes.gtceu.assembly_line(id('draconic_processor_supercomputer'))
    //     .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '2x kubejs:draconic_wetware_processor_assembly', '16x gtceu:advanced_smd_diode', '8x kubejs:3d_nor_chip', '24x kubejs:qram_chip', '32x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire', '64x gtceu:polyether_ether_ketone_foil', '4x gtceu:tritanium_plate')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152')
    //     .itemOutputs('kubejs:draconic_wetware_processor_computer')
    //     .duration(400)
    //     .stationResearch(
    //         researchRecipeBuilder => researchRecipeBuilder
    //             .researchStack('kubejs:draconic_wetware_processor_assembly')
    //             .EUt(GTValues.VHA[GTValues.UHV])
    //             .CWUt(144)
    //     )
    //     .EUt(GTValues.VHA[GTValues.UHV]);

    // event.recipes.gtceu.assembly_line(id('draconic_processor_mainframe'))
    //     .itemInputs('2x gtceu:neutronium_frame', '2x kubejs:draconic_wetware_processor_computer', '48x gtceu:advanced_smd_diode', '48x gtceu:advanced_smd_capacitor', '48x gtceu:advanced_smd_transistor', '48x gtceu:advanced_smd_resistor', '48x gtceu:advanced_smd_inductor', '64x gtceu:polyether_ether_ketone_foil', '32x gtceu:polyether_ether_ketone_foil', '24x kubejs:qram_chip', '2x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '16x gtceu:tritanium_plate')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 2880', 'gtceu:polyether_ether_ketone 1152')
    //     .itemOutputs('kubejs:draconic_wetware_processor_mainframe')
    //     .duration(2000)
    //     .stationResearch(
    //         researchRecipeBuilder => researchRecipeBuilder
    //             .researchStack('kubejs:draconic_wetware_processor_computer')
    //             .EUt(GTValues.VHA[GTValues.UHV])
    //             .CWUt(176)
    //     )
    //     .EUt(GTValues.VHA[GTValues.UEV]);

});