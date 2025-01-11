ServerEvents.recipes(event => {

    //alternate production
    event.recipes.gtceu.large_chemical_reactor('molten_ore_mixture')
        .inputFluids(`minecraft:lava 32000`)
        .itemInputs(`64x gtceu:stone_dust`,`64x gtceu:stone_dust`)
        .outputFluids('gtceu:molten_ore_mixture 16000')
        .duration(900)
        .EUt(GTValues.VA[GTValues.EV]);
    
    //distilling
    event.recipes.gtceu.distillation_tower('molten_ore_mixture')
        .inputFluids('gtceu:molten_ore_mixture 1000')
        .itemOutputs('gtceu:metal_mixture_dust')
        .outputFluids('gtceu:molten_bauxite_ore 150', 'gtceu:molten_pitchblende_ore 125', 'gtceu:molten_molybdenite_ore 150', 'gtceu:molten_ilmenite_ore 100', 'gtceu:molten_bastnasite_ore 100' ,'gtceu:molten_tungstate_ore 150', 'gtceu:molten_cooperite_ore 225')
        .duration(240)
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