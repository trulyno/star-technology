ServerEvents.recipes(event => {


    event.recipes.gtceu.cyclonic_crystalline_sieve('akreyrium_sieving')
        .chancedInput('1x exnihilosequentia:netherite_mesh', 50, 0)
        .inputFluids('gtceu:gritty_akreyrium 100000')
        .outputFluids('gtceu:lepton_sparse_akreyrium 1000')
        .itemOutputs('1x kubejs:crystallised_akreyrium')
        .duration(1200)
        .EUt(2097152);

    // For when the core mod is actually added, Add this recipe to the addRecipes java!:
    // // Get recipes for our leptonic manifold quantiser.
    // GTRecipeType LEPTONIC_MANIFOLD_QUANTISER_TYPE = GTRecipeTypes.get("leptonic_manifold_quantiser");

    // // KubeJS Interop, get materials registered.
    // Material lepton_sparse_akreyrium = GTCEuAPI.materialManager.getMaterial("gtceu:lepton_sparse_akreyrium");
    // Material sparse_electron_akreyrium = GTCEuAPI.materialManager.getMaterial("gtceu:sparse_electron_akreyrium");
    // Material sparse_muon_akreyrium = GTCEuAPI.materialManager.getMaterial("gtceu:sparse_muon_akreyrium");
    // Material sparse_tau_akreyrium = GTCEuAPI.materialManager.getMaterial("gtceu:sparse_tau_akreyrium");

    // // Add our recipe but in java
    // LEPTONIC_MANIFOLD_QUANTISER_TYPE.recipeBuilder("akreyrium_quantising")
    //     .inputFluids(lepton_sparse_akreyrium.getFluid(1000))
    //     .chancedFluidOutputLogic(ChanceLogic.XOR)
    //     .chancedOutput(sparse_electron_akreyrium.getFluid(1000), 33_33, 0)
    //     .chancedOutput(sparse_muon_akreyrium.getFluid(1000), 66_66, 0)
    //     .chancedOutput(sparse_tau_akreyrium.getFluid(1000), 100_00, 0)
    //     .duration(1200)
    //     .EUt(2097152)
    //     .save(provider);

    // Requires this mixin which fixes some GT issue..
    // @Mixin(ChanceLogic.class)
    // public class ChanceCapRerollMixin {
    //     // We make a mixin to reroll fields in ChanceLogic on retrieval if the retrieved
    //     // chance is somehow greater than the max
    //     @Inject(method = "getCachedChance", at = @At("HEAD"), remap = false)
    //     private static void onGetCachedChance(Content entry, @Nullable Object2IntMap<?> cache, CallbackInfoReturnable<Integer> cir) {
    //         if (cache != null && cache.containsKey(entry.content) && cache.getInt(entry.content) > entry.maxChance) {
    //             ((Object2IntMap) cache).put(entry.content, GTValues.RNG.nextInt(entry.maxChance));
    //         }
    //     }
    // }
    event.recipes.gtceu.leptonic_convergence_injector('electron_densification')
        .inputFluids('gtceu:sparse_electron_akreyrium 1000')
        .inputFluids("gtceu:twinite 144")
        .outputFluids("gtceu:dense_electron_akreyrium 1000")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.leptonic_convergence_injector('muon_densification')
        .inputFluids('gtceu:sparse_muon_akreyrium 1000')
        .inputFluids("gtceu:weapon_grade_naquadah 16")
        .outputFluids("gtceu:dense_muon_akreyrium 1000")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.leptonic_convergence_injector('tau_densification')
        .inputFluids('gtceu:sparse_tau_akreyrium 1000')
        .inputFluids("gtceu:stellarium 16")
        .outputFluids("gtceu:dense_tau_akreyrium 1000")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('lepton_stable_stabilisation')
        .inputFluids('gtceu:lepton_sparse_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:gray_glass_lens")
        .itemOutputs('1x gtceu:gray_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 10")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('electron_stabilisation')
        .inputFluids('gtceu:dense_electron_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:magenta_glass_lens")
        .itemOutputs('1x gtceu:magenta_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('muon_stabilisation')
        .inputFluids('gtceu:dense_muon_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:lime_glass_lens")
        .itemOutputs('1x gtceu:lime_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(3600)
        .EUt(524288);

    event.recipes.gtceu.folding_akreyrium_stabiliser('tau_stabilisation')
        .inputFluids('gtceu:dense_tau_akreyrium 1000')
        .itemInputs('1x kubejs:crystallised_akreyrium', "1x gtceu:light_blue_glass_lens")
        .itemOutputs('1x gtceu:light_blue_glass_lens')
        .outputFluids("gtceu:utopian_akreyrium 500")
        .duration(3600)
        .EUt(524288);
});