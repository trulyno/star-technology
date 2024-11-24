
ServerEvents.recipes(event => {

    event.recipes.gtceu.electric_blast_furnace('netherite')
        .itemInputs('gtceu:debris_dust', 'minecraft:gold_ingot')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('minecraft:netherite_ingot')
        .blastFurnaceTemp(5000)
        .duration(12000)
        .EUt(6500);

    event.recipes.gtceu.centrifuge('debris_dust')
        .itemInputs('mysticalagriculture:nether_agglomeratio')
        .chancedOutput('gtceu:tiny_debris_dust', 200, 500)
        .duration(20)
        .EUt(6500)
        .circuit(1);

    event.recipes.gtceu.large_chemical_reactor('purified_debris_dust')
        .itemInputs('gtceu:debris_dust')
        .inputFluids('gtceu:chlorine_trifluoride 100')
        .itemOutputs('gtceu:purified_debris_dust', '3x gtceu:tiny_titanium_trifluoride_dust')
        .outputFluids('gtceu:sulfur_dichloride 50')
        .chancedOutput('gtceu:small_purified_debris_dust', 2500, 1000)
        .duration(200)
        .EUt(6500);

    event.recipes.gtceu.chemical_bath('pure_netherite')
        .itemInputs('gtceu:purified_debris_dust')
        .inputFluids('gtceu:tetrachloroethylene 100')
        .itemOutputs('gtceu:pure_netherite_dust')
        .duration(300)
        .EUt(20450);

    event.recipes.gtceu.chemical_reactor('chlorine_trifluoride')
        .inputFluids('gtceu:chlorine 1000', 'gtceu:fluorine 3000')
        .outputFluids('gtceu:chlorine_trifluoride 1000')
        .duration(800)
        .EUt(22);

    event.recipes.gtceu.large_chemical_reactor('chlorine_trifluoride')
        .inputFluids('gtceu:chlorine 1000', 'gtceu:fluorine 3000')
        .outputFluids('gtceu:chlorine_trifluoride 1000')
        .duration(800)
        .EUt(22);

    event.recipes.gtceu.chemical_reactor('dichloroethylene')
        .inputFluids('gtceu:ethane 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:dichloroethane 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(200)
        .EUt(120)
        .circuit(1);

    event.recipes.gtceu.large_chemical_reactor('dichloroethylene')
        .inputFluids('gtceu:ethane 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:dichloroethane 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(200)
        .EUt(120);

    event.recipes.gtceu.chemical_reactor('tetrachloroetylene')
        .inputFluids('gtceu:dichloroethane', 'gtceu:chlorine 6000')
        .outputFluids('gtceu:tetrachloroethylene 1000', 'gtceu:hydrochloric_acid 4000')
        .duration(600)
        .EUt(200);

    event.recipes.gtceu.large_chemical_reactor('tetrachloroetylene')
        .inputFluids('gtceu:dichloroethane', 'gtceu:chlorine 6000')
        .outputFluids('gtceu:tetrachloroethylene 1000', 'gtceu:hydrochloric_acid 4000')
        .duration(600)
        .EUt(200);
});
