
ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('chemical_plant_controller')
        .itemInputs('gtceu:zpm_machine_hull', '4x gtceu:zpm_electric_motor', 'gtceu:naquadah_alloy_rotor', '2x gtceu:niobium_titanium_large_fluid_pipe', '4x #gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 288')
        .itemOutputs('gtceu:chemical_plant')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembler('peek_casing')
        .itemInputs('gtceu:robust_machine_casing')
        .inputFluids('gtceu:polyether_ether_ketone 216')
        .itemOutputs('kubejs:peek_casing')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV]);

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

        event.recipes.gtceu.chemical_plant('plat_line')
        .itemInputs('6x gtceu:platinum_group_sludge_dust')
        .inputFluids('gtceu:aqua_regia 1500')
        .itemOutputs('gtceu:platinum_dust', 'gtceu:palladium_dust', 'gtceu:ruthenium_dust', 'gtceu:rhodium_dust', 'gtceu:osmium_dust', 'gtceu:iridium_dust')
        .outputFluids('gtceu:nitric_acid 500', 'gtceu:hydrochloric_acid 1000')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_plant('sulfuric_acid')
        .itemInputs('gtceu:sulfur_dust')
        .inputFluids('minecraft:water 4000')
        .outputFluids('gtceu:sulfuric_acid 1000')
        .duration(320)
        .EUt(480)
        .circuit(24);

    event.recipes.gtceu.chemical_plant('ptfe')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:fluorine 4000')
        .outputFluids('gtceu:tetrafluoroethylene 1000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.chemical_plant('epoxy')
        .inputFluids('gtceu:benzene 2000', 'gtceu:propene 2000', 'gtceu:chlorine 2000', 'gtceu:oxygen 4000')
        .outputFluids('gtceu:epoxy 1000', 'gtceu:hydrochloric_acid 1000')
        .duration(500)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_plant('naquadah_line')
        .itemInputs('2x gtceu:naquadah_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 1000')
        .itemOutputs('gtceu:enriched_naquadah_dust', 'gtceu:naquadria_dust', 'gtceu:trinium_dust', 'gtceu:antimony_dust', 'gtceu:indium_phosphide_dust')
        .outputFluids('gtceu:hydrogen 2000', 'gtceu:fluorine 7000')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.ZPM]);

});