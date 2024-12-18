
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_plant('estalt_dissolving')
        .itemInputs('6x gtceu:estalt_dust')
        .inputFluids('gtceu:fluoroantimonic_acid 2000')
        .outputFluids('gtceu:impure_calamatium_solution 1000', 'gtceu:impure_isovol_solution 1000')
        .duration(1200)
        .EUt(100000);

    event.recipes.gtceu.centrifuge('impure_calamatium_solution')
        .inputFluids('gtceu:impure_calamatium_solution 1000')
        .itemOutputs('gtceu:antimony_trifluoride_dust')
        .outputFluids('gtceu:calamatium_solution 1000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.centrifuge('calamatium_solution')
        .inputFluids('gtceu:calamatium_solution 1000')
        .itemOutputs('gtceu:calamatium_fluoride_dust')
        .outputFluids('minecraft:water 500')
        .duration(600)
        .EUt(30000);

    event.recipes.gtceu.chemical_reactor('calamatium_fluoride')
        .itemInputs('gtceu:calamatium_fluoride_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .itemOutputs('gtceu:calamatium_dust')
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(600)
        .EUt(30000);

    event.recipes.gtceu.large_chemical_reactor('calamatium_fluoride')
        .itemInputs('gtceu:calamatium_fluoride_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .itemOutputs('gtceu:calamatium_dust')
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(600)
        .EUt(30000);

    event.recipes.gtceu.centrifuge('impure_isovol_solution')
        .inputFluids('gtceu:impure_isovol_solution 1000')
        .itemOutputs('gtceu:antimony_trifluoride_dust')
        .outputFluids('gtceu:isovol_solution 1000')
        .duration(600)
        .EUt(100000);

    event.recipes.gtceu.centrifuge('isovol_solution')
        .inputFluids('gtceu:isovol_solution 1000')
        .itemOutputs('gtceu:isovol_fluoride_dust')
        .outputFluids('minecraft:water 500')
        .duration(600)
        .EUt(30000);

    event.recipes.gtceu.chemical_reactor('isovol_fluoride')
        .itemInputs('gtceu:isovol_fluoride_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .itemOutputs('gtceu:isovol_dust')
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(600)
        .EUt(30000);

    event.recipes.gtceu.large_chemical_reactor('isovol_fluoride')
        .itemInputs('gtceu:isovol_fluoride_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .itemOutputs('gtceu:isovol_dust')
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .duration(600)
        .EUt(30000);

    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_calamatium_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_isovol_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );
});