
ServerEvents.recipes(event => {

    event.recipes.gtceu.distillation_tower('molten_mythrillic_mixture')
        .inputFluids('gtceu:molten_mythrillic_mixture 300000')
        .outputFluids('gtceu:mythrillic 200000')
        .outputFluids('gtceu:highly_unstable_nether_magma 25000')
        .outputFluids('gtceu:molten_ore_mixture 75000')
        .itemOutputs('32x gtceu:netherrack_dust')
        .duration(3600)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.electrolyzer('mythrillic_dust')
        .inputFluids('gtceu:mythrillic 1000')
        .outputFluids('gtceu:mystical_nether_magma 250')
        .itemOutputs('gtceu:mythrillic_dust','gtceu:small_mythrillic_dust')

    event.recipes.gtceu.heat_chamber('mythrillic_carbinide')
        .itemInputs('gtceu:mythrillic_dust')
        .itemOutputs('gtceu:mythrillic_carbinide_dust')
        .outputFluids('gtceu:hydrogen 14000')

    event.recipes.gtceu.electric_blast_furnace('mythrillic_metlide')
        .itemInputs('gtceu:mythrillic_carbinide_dust')
        .inputFluids('gtceu:oxygen 12000')
        .itemOutputs('gtceu:mythrillic_metlide_dust')
        .outputFluids('gtceu:carbon_dioxide 6000')

    event.recipes.gtceu.electromagnetic_separator('mythrillic_metnide')
        .itemInputs('gtceu:mythrillic_metlide_dust')
        .itemOutputs('gtceu:mythrillic_metnide_dust')
        .itemOutputs('2x gtceu:vanadium_dust')

    event.recipes.gtceu.large_chemical_reactor('mythrillic_hydride')
        .itemInputs('gtceu:mythrillic_metnide_dust')
        .inputFluids('gtceu:hydrochloric_acid 12000')
        .itemOutputs('6x gtceu:mythrillic_hydride_dust')
        .itemOutputs('3x gtceu:zirconium_tetrachloride_dust')

    event.recipes.gtceu.electric_blast_furnace('mythril')
        .itemInputs('gtceu:mythrillic_hydride_dust')
        .itemInputs('gtceu:sulfur_dust')
        .itemOutputs('gtceu:mythril_dust')
        .outputFluids('gtceu:hydrogen_sulfide 1000')

    event.replaceInput({id: 'gtceu:electric_blast_furnace/blast_mythril_gas'},
        Fluid.of('gtceu:krypton 10'),
        Fluid.of('gtceu:xenon 10')
    );
});