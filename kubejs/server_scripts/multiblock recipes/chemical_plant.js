
ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('chemical_plant_controller')
        .itemInputs('gtceu:zpm_machine_hull', '4x gtceu:zpm_electric_motor', 'gtceu:naquadah_alloy_rotor', '2x gtceu:niobium_titanium_large_fluid_pipe', '4x #gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288')
        .itemOutputs('gtceu:chemical_plant')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.chemical_plant('fluoroantimonic_acid')
        .itemInputs('gtceu:antimony_dust')
        .inputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .outputFluids('gtceu:fluoroantimonic_acid 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_plant('polybenzimidazole_with_phenol')
        .inputFluids('gtceu:benzene 2000', 'gtceu:phenol 1000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(24)
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_plant('polybenzimidazole_without_phenol')
        .inputFluids('gtceu:benzene 3000', 'gtceu:carbon_dioxide 2000', 'gtceu:ammonia 4000', 'gtceu:oxygen 5000')
        .outputFluids('gtceu:polybenzimidazole 1000', 'minecraft:water 9000')
        .circuit(25)
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

});