
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_plant('mythrilium_proc_1')
        .itemInputs('gtceu:mythrilium_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .itemOutputs('2x gtceu:trichloromythrilium_dust', 'gtceu:silicon_dust')
        .outputFluids('gtceu:hydrofluoric_acid 6000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.chemical_plant('mythrilium_proc_2')
        .itemInputs('gtceu:trichloromythrilium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('gtceu:mythrilium_oxide_dust')
        .outputFluids('gtceu:chlorine 6000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.heat_chamber('mythrilium_proc_3')
        .itemInputs('gtceu:mythrilium_oxide_dust', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:mythril_dust', 'gtceu:nether_rare_earth_dust')
        .outputFluids('gtceu:carbon_monoxide 1000')
        .duration(2400)
        .EUt(100000);

});