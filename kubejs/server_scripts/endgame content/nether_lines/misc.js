
ServerEvents.recipes(event => {

    //Magmatic Plasma
    event.recipes.gtceu.fusion_reactor('magmatic_plasma')
        .inputFluids('gtceu:highly_unstable_nether_magma 2560', 'gtceu:iron_plasma 128')
        .outputFluids('gtceu:magmatic_plasma 64')
        .duration(160)
        .EUt(66666)
        .fusionStartEU(640000000); //720M EU when core mode fix
        
    event.recipes.gtceu.plasma_generator('magmatic_plasma')
        .inputFluids('gtceu:magmatic_plasma 1')
        .outputFluids('gtceu:highly_unstable_nether_magma 1')
        .duration(333)
        .EUt(-2048);

    //Argon Plasma Add
    event.recipes.gtceu.plasma_generator('argon_plasma')
        .inputFluids('gtceu:argon_plasma 1')
        .outputFluids('gtceu:argon 1')
        .duration(80)
        .EUt(-2048);
    
    //Ancient Netherite
    event.recipes.gtceu.assembler('ancient_netherite_reinforced_mesh')
        .itemInputs('1x kubejs:netherite_reinforced_mesh', '4x gtceu:ancient_netherite_rod', '1x gtceu:ancient_netherite_ingot')
        .inputFluids('gtceu:niobium_nitride 576')
        .itemOutputs('1x kubejs:ancient_netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.remove({id: /^blast_ancient_netherite.*/});
    event.recipes.gtceu.electric_blast_furnace('hot_ancient_netherite_ingot')
        .itemInputs('4x minecraft:gold_ingot','4x gtceu:ancient_debris_dust')
        .inputFluids('gtceu:argon 2000')
        .itemOutputs('1x gtceu:hot_ancient_netherite_ingot')
        .blastFurnaceTemp(13300)
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.UHV]*2/3);

    event.recipes.gtceu.macerator('ancient_debris_dust')
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs('4x gtceu:ancient_debris_dust')
        .duration(124)
        .EUt(380644);

});