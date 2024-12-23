ServerEvents.recipes(event => {

    //mixture
    event.recipes.gtceu.centrifuge('raw_ore_slurry')
        .inputFluids('gtceu:raw_ore_slurry 1250')
        .itemOutputs('gtceu:small_monazite_pile')
        .outputFluids('gtceu:molten_ore_mixture 1000')
        .duration(240)
        .EUT(2048);

    //distilling
    event.recipes.gtceu.distillation_tower("molten_ore_mixture")
        .inputFluids('gtceu:molten_ore_mixture 1000')
        .outputFluids('gtceu:molten_bauxite_ore 125', 'gtceu:molten_pitchblende_ore 200', 'gtceu:molten_molybdenite_ore 100', 'gtceu:molten_ilmenite_ore 125', 'gtceu:molten_scheelite_ore 100', 'gtceu:molten_tungstate_ore 100', 'gtceu:molten_sheldonite_ore 250')
        .duration(240)
        .EUT(2048);

    //amethyst line

    //crystallising


});