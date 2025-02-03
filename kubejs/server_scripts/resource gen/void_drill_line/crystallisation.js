ServerEvents.recipes(event => {

    //alternate production
    event.recipes.gtceu.mixer('molten_ore_mixture_easy')
        .inputFluids(`minecraft:lava 32000`)
        .itemInputs(`64x gtceu:stone_dust`)
        .outputFluids('gtceu:molten_ore_mixture 12000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.mixer('molten_ore_mixture_complex')
        .inputFluids(`minecraft:lava 48000`)
        .itemInputs(`48x gtceu:stone_dust`, `2x gtceu:metal_mixture_dust`)
        .outputFluids('gtceu:molten_ore_mixture 20000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV]);
    
    //distilling
    event.recipes.gtceu.distillation_tower('molten_ore_mixture')
        .inputFluids('gtceu:molten_ore_mixture 10000')
        .itemOutputs('gtceu:metal_mixture_dust')
        .outputFluids('gtceu:molten_bauxite_ore 1500', 'gtceu:molten_pitchblende_ore 1250', 'gtceu:molten_molybdenite_ore 1000', 'gtceu:molten_ilmenite_ore 1000', 'gtceu:molten_bastnasite_ore 1000' ,'gtceu:molten_tungstate_ore 2000', 'gtceu:molten_cooperite_ore 2250')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.EV]);

    //amethyst line
    event.recipes.gtceu.cutter('small_amethyst_bud')
        .itemInputs('minecraft:amethyst_shard')
        .itemOutputs('2x minecraft:small_amethyst_bud')
        .duration(240)
        .EUt(512);

    event.recipes.gtceu.laser_engraver('medium_amethyst_bud')
        .itemInputs('2x minecraft:small_amethyst_bud')
        .notConsumable('#forge:lenses/purple')
        .itemOutputs('minecraft:medium_amethyst_bud')
        .duration(240)
        .EUt(512);

    event.recipes.gtceu.chemical_bath('large_amethyst_bud')
        .itemInputs('minecraft:medium_amethyst_bud')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('minecraft:large_amethyst_bud')
        .duration(240)
        .EUt(512);

    event.recipes.gtceu.autoclave('amethyst_cluster')
        .itemInputs('minecraft:large_amethyst_bud', 'gtceu:calcite_dust')
        .inputFluids('gtceu:distilled_water 125')
        .itemOutputs('minecraft:amethyst_cluster')
        .duration(240)
        .EUt(512);

    //crystallising
    ['bauxite', 'pitchblende', 'molybdenite', 'ilmenite', 'tungstate', 'cooperite', 'bastnasite'].forEach(type => {
        event.recipes.gtceu.autoclave(`raw_${type}`)
            .itemInputs('gtceu:stone_dust')
            .inputFluids(`gtceu:molten_${type}_ore 500`)
            .itemOutputs(`gtceu:raw_${type}`)
            .duration(160)
            .EUt(GTValues.VA[GTValues.HV]);
    });

});