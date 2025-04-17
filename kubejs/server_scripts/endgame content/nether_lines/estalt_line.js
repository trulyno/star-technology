ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.molten_destabilizing(id('molten_estaltadyne_mixture'))
        .inputFluids('gtceu:molten_estaltadyne_mixture 300000')
        .outputFluids('gtceu:estaltadyne 200000')
        .outputFluids('gtceu:highly_unstable_nether_magma 50000')
        .outputFluids('gtceu:molten_ore_mixture 50000')
        .itemOutputs('32x gtceu:netherrack_dust')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.electrolyzer(id('estaltadyne_dust'))
        .inputFluids('gtceu:estaltadyne 1000')
        .outputFluids('gtceu:mystical_nether_magma 250')
        .itemOutputs('gtceu:estaltadyne_dust','gtceu:small_estaltadyne_dust')
        .duration(140)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.heat_chamber(id('metmalic_estaltadyne_dust'))
        .itemInputs('1x gtceu:estaltadyne_dust')
        .itemInputs('2x gtceu:carbon_dust')
        .itemOutputs('1x gtceu:metmalic_estaltadyne_dust')
        .outputFluids('gtceu:carbon_dioxide 2000')
        .duration(240)
        .EUt(GTValues.VH[GTValues.UEV]);

    event.recipes.gtceu.electrolyzer(id('magnemalic_estaltadyne_dust'))
        .itemInputs('1x gtceu:metmalic_estaltadyne_dust')
        .itemOutputs('2x gtceu:aluminium_dust')
        .itemOutputs('1x gtceu:magnemalic_estaltadyne_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.chemical_plant(id('tytite_estaltadyne_dust'))
        .itemInputs('1x gtceu:magnemalic_estaltadyne_dust')
        .itemInputs('15x gtceu:sodium_hydroxide_dust')
        .inputFluids('gtceu:oxygen 15000')
        .itemOutputs('1x gtceu:tytite_estaltadyne_dust')
        .itemOutputs('5x gtceu:sodium_bisulfate_dust')
        .duration(460)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.electric_blast_furnace(id('estaltadyne_hydride_dust'))
        .itemInputs('1x gtceu:tytite_estaltadyne_dust')
        .inputFluids('gtceu:hydrofluoric_acid 9000')
        .itemOutputs('1x gtceu:estaltadyne_hydride_dust')
        .itemOutputs('12x gtceu:titanium_trifluoride_dust')
        .blastFurnaceTemp(13400)
        .duration(220)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor(id('estalt_dust'))
        .itemInputs('1x gtceu:estaltadyne_hydride_dust')
        .itemInputs('15x gtceu:phosphate_dust')
        .itemOutputs('4x gtceu:estalt_dust')
        .outputFluids('gtceu:phosphoric_acid 3000')
        .duration(1200)
        .EUt(GTValues.V[GTValues.UV]);

    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_estalt_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );

});