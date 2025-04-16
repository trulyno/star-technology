ServerEvents.recipes(event => {
    const id = global.id;    

    event.recipes.gtceu.electric_blast_furnace(id('silicon_carbide'))
        .itemInputs('gtceu:silicon_dioxide_dust','2x gtceu:activated_carbon_dust')
        .itemOutputs('gtceu:silicon_carbide_dust')
        .outputFluids('gtceu:carbon_dioxide')
        .blastFurnaceTemp(2000)
        .duration(500)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor(id('sicbite_1'))
        .itemInputs('gtceu:borax_dust', '16x gtceu:sodium_dust')
        .inputFluids('gtceu:hydrogen 16000')
        .itemOutputs('4x gtceu:sodium_borohydride_dust', '7x gtceu:sodium_oxide_dust')
        .outputFluids('minecraft:water 10000')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.large_chemical_reactor(id('sicbite_2'))
        .itemInputs('gtceu:bismuth_dust')
        .inputFluids('gtceu:nitric_acid 4000')
        .itemOutputs('gtceu:bismuth_3_nitrate_dust')
        .outputFluids('minecraft:water 2000', 'gtceu:nitrogen 1000', 'gtceu:oxygen 1000')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.recipes.gtceu.chemical_plant(id('sicbite_3'))
        .itemInputs('gtceu:silicon_carbide_dust', '2x gtceu:bismuth_3_nitrate_dust', '3x gtceu:tellurium_dust', '6x gtceu:sodium_borohydride_dust')
        .itemOutputs('gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '6x gtceu:sodium_nitrate_dust')
        .outputFluids('gtceu:diborane 6000')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

});