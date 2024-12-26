ServerEvents.recipes(event => {

    //mixture
    event.recipes.gtceu.centrifuge('raw_ore_slurry')
        .inputFluids('gtceu:raw_ore_slurry 1250')
        .itemOutputs('gtceu:small_rare_earth_dust')
        .outputFluids('gtceu:molten_ore_mixture 1000')
        .duration(240)
        .EUt(512);

    //distilling
    event.recipes.gtceu.distillation_tower('molten_ore_mixture')
        .inputFluids('gtceu:molten_ore_mixture 1000')
        .itemOutputs('gtceu:stone_dust')
        .outputFluids('gtceu:molten_bauxite_ore 125', 'gtceu:molten_pitchblende_ore 125', 'gtceu:molten_molybdenite_ore 175', 'gtceu:molten_ilmenite_ore 125', 'gtceu:molten_scheelite_ore 100', 'gtceu:molten_tungstate_ore 100', 'gtceu:molten_cooperite_ore 250')
        .duration(240)
        .EUt(2048);

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
    ['bauxite', 'pitchblende', 'molybdenite', 'ilmenite', 'scheelite', 'tungstate', 'cooperite'].forEach(type => {
        event.recipes.gtceu.autoclave(`raw_${type}`)
            .itemInputs('minecraft:amethyst_cluster')
            .inputFluids(`gtceu:molten_${type}_ore 1000`)
            .itemOutputs(`gtceu:raw_${type}`)
            .duration(240)
            .EUt(512);
    });

});