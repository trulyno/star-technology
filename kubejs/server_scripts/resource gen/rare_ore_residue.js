ServerEvents.recipes(event => {

    event.recipes.gtceu.electrolyzer('rare_ore_residue')
        .inputFluids('gtceu:rare_ore_residue 1000')
        .itemOutputs('gtceu:chromite_sludge_dust', 'gtceu:monazite_sludge_dust', 'gtceu:vanadium_magnetite_sludge_dust')
        .outputFluids('gtceu:raw_ore_slurry 250')
        .duration(50)
        .EUt(128);

    event.recipes.gtceu.centrifuge('chromite_sludge')
        .itemInputs('gtceu:chromite_sludge_dust')
        .itemOutputs('2x gtceu:chromite_dust', 'gtceu:rare_metallic_residue_dust')
        .duration(50)
        .EUt(64);

    event.recipes.gtceu.centrifuge('monazite_sludge')
        .itemInputs('gtceu:monazite_sludge_dust')
        .itemOutputs('2x gtceu:monazite_dust', 'gtceu:rare_metallic_residue_dust')
        .duration(50)
        .EUt(64);

    event.recipes.gtceu.centrifuge('vanadium_magnetite_sludge')
        .itemInputs('gtceu:vanadium_magnetite_sludge_dust')
        .itemOutputs('2x gtceu:vanadium_magnetite_dust', 'gtceu:rare_metallic_residue_dust')
        .duration(50)
        .EUt(64);

    event.recipes.gtceu.electrolyzer('rare_metallic_residue')
        .itemInputs('gtceu:rare_metallic_residue_dust')
        .itemOutputs('2x gtceu:calcite_dust', 'gtceu:silver_dust')
        .duration(50)
        .EUt(128);


});