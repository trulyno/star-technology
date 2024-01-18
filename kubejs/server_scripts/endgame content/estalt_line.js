
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_plant('estaltine_proc_1')
        .itemInputs('2x gtceu:estaltine_dust', '2x gtceu:carbon_dust')
        .inputFluids('gtceu:sulfuric_acid 8000')
        .itemOutputs('4x gtceu:estaltine_sulfate_dust')
        .outputFluids('gtceu:hydrogen_sulfide 1000', 'gtceu:ethane 1000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.chemical_plant('estaltine_proc_2')
        .itemInputs('2x gtceu:estaltine_sulfate_dust')
        .inputFluids('gtceu:hydrofluoric_acid 4000')
        .itemOutputs('gtceu:estaltine_fluoride_dust')
        .outputFluids('gtceu:sulfuric_acid 2000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.chemical_plant('estaltine_proc_3')
        .itemInputs('gtceu:estaltine_fluoride_dust', '4x gtceu:sodium_hydroxide_dust')
        .itemOutputs('gtceu:estaltine_hydroxide_dust', '4x gtceu:sodium_fluoride_dust')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.electrolyzer('estaltine_proc_4')
        .itemInputs('gtceu:estaltine_hydroxide_dust')
        .itemOutputs('gtceu:estaltine_oxide_dust')
        .outputFluids('minecraft:water 2000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.heat_chamber('estaltine_proc_5')
        .itemInputs('gtceu:estaltine_oxide_dust', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:estalt_dust', 'gtceu:nether_rare_earth_dust')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(2400)
        .EUt(100000);

});