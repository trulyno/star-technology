ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.molten_destabilizing(id('molten_mythrillic_mixture'))
        .inputFluids('gtceu:molten_mythrillic_mixture 300000')
        .outputFluids('gtceu:mythrillic 200000')
        .outputFluids('gtceu:highly_unstable_nether_magma 25000')
        .outputFluids('gtceu:molten_ore_mixture 75000')
        .itemOutputs('32x gtceu:netherrack_dust')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.electrolyzer(id('mythrillic_dust'))
        .inputFluids('gtceu:mythrillic 1000')
        .outputFluids('gtceu:mystical_nether_magma 250')
        .itemOutputs('gtceu:mythrillic_dust','gtceu:small_mythrillic_dust')
        .duration(140)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.heat_chamber(id('mythrillic_carbinide'))
        .itemInputs('gtceu:mythrillic_dust')
        .itemOutputs('gtceu:mythrillic_carbinide_dust')
        .outputFluids('gtceu:hydrogen 14000')
        .duration(180)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.electric_blast_furnace(id('mythrillic_metlide'))
        .itemInputs('gtceu:mythrillic_carbinide_dust')
        .inputFluids('gtceu:oxygen 12000')
        .itemOutputs('gtceu:mythrillic_metlide_dust')
        .outputFluids('gtceu:carbon_dioxide 6000')
        .duration(240)
        .blastFurnaceTemp(7250)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.electromagnetic_separator(id('mythrillic_metnide'))
        .itemInputs('gtceu:mythrillic_metlide_dust')
        .itemOutputs('gtceu:mythrillic_metnide_dust')
        .itemOutputs('2x gtceu:vanadium_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('mythrillic_hydride'))
        .itemInputs('gtceu:mythrillic_metnide_dust')
        .inputFluids('gtceu:hydrochloric_acid 12000')
        .itemOutputs('6x gtceu:mythrillic_hydride_dust')
        .itemOutputs('3x gtceu:zirconium_tetrachloride_dust')
        .duration(520)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.electric_blast_furnace(id('mythril'))
        .itemInputs('gtceu:mythrillic_hydride_dust')
        .itemInputs('gtceu:sulfur_dust')
        .itemOutputs('gtceu:mythril_dust')
        .outputFluids('gtceu:hydrogen_sulfide 1000')
        .duration(420)
        .blastFurnaceTemp(9100)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_mythril_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );
});