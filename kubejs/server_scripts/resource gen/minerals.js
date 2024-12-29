ServerEvents.recipes(event => {

    //mixture
    event.recipes.gtceu.centrifuge('raw_ore_slurry')
        .inputFluids('gtceu:raw_ore_slurry 1000')
        .outputFluids('gtceu:mixed_mineral_residue 500', 'gtceu:molten_ore_mixture 500')
        .duration(240)
        .EUt(512);

    //dissolving
    event.recipes.gtceu.electrolyzer('mixed_mineral_residue')
        .inputFluids('gtceu:mixed_mineral_residue 1500')
        .itemOutputs('gtceu:crushed_beryllium_ore')
        .outputFluids('gtceu:sulfuric_mineral_mixture 500', 'gtceu:oxygenous_mineral_mixture 750')
        .duration(240)
        .EUt(512);

    event.recipes.gtceu.centrifuge('sulfuric_mineral_mixture')
        .inputFluids('gtceu:sulfuric_mineral_mixture 1000')
        .itemOutputs('gtceu:crushed_barite_ore', 'gtceu:crushed_cobaltite_ore')
        .duration(240)
        .EUt(512);

    event.recipes.gtceu.centrifuge('oxygenous_mineral_mixture')
        .inputFluids('gtceu:oxygenous_mineral_mixture 1000')
        .itemOutputs('gtceu:crushed_tantalite_ore', 'gtceu:crushed_pyrolusite_ore', 'gtceu:crushed_cassiterite_ore')
        .duration(240)
        .EUt(512);

});

