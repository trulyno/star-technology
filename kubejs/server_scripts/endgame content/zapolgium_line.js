
ServerEvents.recipes(event => {
    const toRemoveId = ['gtceu:electrolyzer/decomposition_electrolyzing_zapolite', 'gtceu:electrolyzer/decomposition_electrolyzing_zapolgium_aluminium_oxide', 'gtceu:electrolyzer/decomposition_electrolyzing_zapolgium_diiodide_oxide', 'gtceu:electrolyzer/decomposition_electrolyzing_zapolgium_oxide', 'gtceu:electrolyzer/decomposition_electrolyzing_zapolgium_chloride', 'gtceu:electrolyzer/decomposition_electrolyzing_zapolgium_hydroxide', 'gtceu:electrolyzer/decomposition_electrolyzing_zapolgium_diiodide_dioxide'];

    toRemoveId.forEach(element => {
        event.remove({id: element});
    });

    event.recipes.gtceu.electromagnetic_separator('zapolite_proc_1')
        .itemInputs('gtceu:zapolite_dust')
        .itemOutputs('gtceu:zapolgium_aluminium_oxide_dust')
        .chancedOutput('gtceu:small_zapolgium_diiodide_dioxide_dust', 4000, 1000)
        .duration(400)
        .EUt(6400);

    event.recipes.gtceu.centrifuge('zapolite_proc_2_a_1')
        .itemInputs('gtceu:zapolgium_aluminium_oxide_dust')
        .itemOutputs('gtceu:zapolgium_diiodide_oxide_dust', 'gtceu:bauxite_dust')
        .duration(800)
        .EUt(12000);

    event.recipes.gtceu.electrolyzer('zapolite_proc_2_a_2')
        .itemInputs('gtceu:zapolgium_diiodide_oxide_dust')
        .itemOutputs('gtceu:zapolgium_oxide_dust')
        .outputFluids('gtceu:iodine 2000')
        .duration(600)
        .EUt(16000);

    event.recipes.gtceu.large_chemical_reactor('zapolite_proc_2_b_1')
        .itemInputs('gtceu:zapolgium_diiodide_dioxide_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .itemOutputs('gtceu:zapolgium_oxide_dust')
        .outputFluids('gtceu:iodine 2000', 'minecraft:water 1000')
        .duration(300)
        .EUt(20000);

    event.recipes.gtceu.large_chemical_reactor('zapolite_proc_3')
        .itemInputs('gtceu:zapolgium_oxide_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('gtceu:zapolgium_chloride_dust')
        .outputFluids('minecraft:water 1000')
        .duration(600)
        .EUt(28000);

    event.recipes.gtceu.large_chemical_reactor('zapolgium_ore_proc_4')
        .itemInputs('gtceu:zapolgium_chloride_dust', '2x gtceu:potassium_hydroxide_dust')
        .itemOutputs('gtceu:zapolgium_hydroxide_dust', '2x gtceu:rock_salt_dust')
        .duration(1200)
        .EUt(56000);

    event.recipes.gtceu.electric_blast_furnace('zapolgium_proc_5')
        .itemInputs('gtceu:zapolgium_hydroxide_dust', 'gtceu:carbon_dust')
        .itemOutputs('gtceu:hot_zapolgium_ingot')
        .outputFluids('gtceu:carbon_monoxide 1000', 'gtceu:steam 1000')
        .blastFurnaceTemp(10299)
        .duration(8000)
        .EUt(98000);
});