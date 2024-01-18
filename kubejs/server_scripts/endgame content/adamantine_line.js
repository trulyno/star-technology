
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_plant('adamantite_proc_1')
        .itemInputs('2x gtceu:adamantite_dust', '6x gtceu:sodium_hydroxide_dust')
        .itemOutputs('2x gtceu:adamantite_hydroxide_dust', 'gtceu:antimony_dust', '3x gtceu:sodium_fluoride_dust')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.chemical_plant('adamantite_proc_2')
        .itemInputs('2x gtceu:adamantite_hydroxide_dust')
        .itemOutputs('gtceu:adamantite_oxide_dust')
        .outputFluids('minecraft:water 3000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.heat_chamber('adamantite_proc_3')
        .itemInputs('gtceu:adamantite_oxide_dust', '3x gtceu:carbon_dust')
        .itemOutputs('gtceu:adamantine_dust', 'gtceu:nether_rare_earth_dust')
        .outputFluids('gtceu:carbon_monoxide 3000')
        .duration(2400)
        .EUt(100000);

});