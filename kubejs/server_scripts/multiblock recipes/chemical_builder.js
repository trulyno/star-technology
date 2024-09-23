ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('chemical_builder')
        .itemInputs('gtceu:uv_machine_hull', '4x gtceu:uv_electric_motor', 'gtceu:weapon_grade_naquadah_rotor', '2x gtceu:duranium_large_fluid_pipe', '4x #gtceu:circuits/uv')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288', 'gtceu:polyether_ether_ketone 1008')
        .itemOutputs('gtceu:chemical_builder')
        .duration(950)
        .EUt(GTValues.VA[GTValues.UEV]);
    
    event.recipes.gtceu.chemical_builder('propene')
        .itemInputs('3x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .outputFluids('gtceu:propene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(0);

    event.recipes.gtceu.chemical_builder('ethane')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .outputFluids('gtceu:ethane 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(1);

    event.recipes.gtceu.chemical_builder('butene')
        .itemInputs('4x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 8000')
        .outputFluids('gtceu:butene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(2);

    event.recipes.gtceu.chemical_builder('styrene')
        .itemInputs('8x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 8000')
        .outputFluids('gtceu:styrene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(3);

    event.recipes.gtceu.chemical_builder('phenol')
        .itemInputs('6x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:propene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(4);

    event.recipes.gtceu.chemical_builder('acetone')
        .itemInputs('3x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:acetone 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(5);

    event.recipes.gtceu.chemical_builder('toluene')
        .itemInputs('7x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 8000')
        .outputFluids('gtceu:toluene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(6);

    event.recipes.gtceu.chemical_builder('benzene')
        .itemInputs('6x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .outputFluids('gtceu:benzene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(15);

    event.recipes.gtceu.chemical_builder('butadiene')
        .itemInputs('4x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .outputFluids('gtceu:butadiene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(8);

    event.recipes.gtceu.chemical_builder('ethylene')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .outputFluids('gtceu:ethylene 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(9);

    event.recipes.gtceu.chemical_builder('octane')
        .itemInputs('8x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 18000')
        .outputFluids('gtceu:acetone 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(10);

    event.recipes.gtceu.chemical_builder('acetic_acid')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 4000', 'gtceu:oxygen 2000')
        .outputFluids('gtceu:acetic_acid 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(11);

    event.recipes.gtceu.chemical_builder('methanol')
        .itemInputs('gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 4000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:methanol 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(12);

    event.recipes.gtceu.chemical_builder('ethanol')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000', 'gtceu:oxygen 1000')
        .outputFluids('gtceu:ethanol 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(13);

    event.recipes.gtceu.chemical_builder('methyl_acetate')
        .itemInputs('3x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 6000', 'gtceu:oxygen 2000')
        .outputFluids('gtceu:methyl_acetate 1000')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.IV])
        .circuit(14);

});