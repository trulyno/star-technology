ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.heat_chamber(id('nether_star_concentrate'))
        .itemInputs('5x gtceu:nether_star_dust')
        .inputFluids('gtceu:blitz 720','gtceu:blizz 720','gtceu:basalz 720','gtceu:blaze 720')
        .outputFluids('gtceu:nether_star_concentrate 432')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UEV]);

    //Sculk Variant
    event.recipes.gtceu.polarizer(id('ionized_sculk_dust'))
        .itemInputs('gtceu:sculk_dust')
        .itemOutputs('gtceu:ionized_sculk_dust')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('sodium_over_sculk_to_echo'))
        .itemInputs('2x gtceu:sodium_over_sculk_dust','3x gtceu:silicon_dioxide_dust')
        .itemOutputs('2x gtceu:sodium_dust','5x gtceu:echo_shard_dust')
        .duration(80)
        .EUt(GTValues.VHA[GTValues.UIV]);

    //Plasmas/Fusion
    event.recipes.gtceu.fusion_reactor(id('magmatic_plasma'))
        .inputFluids('gtceu:highly_unstable_nether_magma 2560', 'gtceu:iron_plasma 128')
        .outputFluids('gtceu:magmatic_plasma 64')
        .duration(132)
        .EUt(66666)
        .fusionStartEU(720000000);
        
    event.recipes.gtceu.plasma_generator(id('magmatic_plasma'))
        .inputFluids('gtceu:magmatic_plasma 1')
        .outputFluids('gtceu:highly_unstable_nether_magma 1')
        .duration(333)
        .EUt(-2048);

    event.recipes.gtceu.plasma_generator(id('argon_plasma'))
        .inputFluids('gtceu:argon_plasma 1')
        .outputFluids('gtceu:argon 1')
        .duration(80)
        .EUt(-2048);

    event.recipes.gtceu.fusion_reactor(id('aurourium'))
        .inputFluids('gtceu:nether_star_concentrate 64', 'gtceu:seaborgium 64')
        .outputFluids('gtceu:aurourium 32')
        .duration(80)
        .EUt(783552)
        .fusionStartEU(888888888);
    
    //Ancient Netherite
    event.recipes.gtceu.assembler(id('ancient_netherite_reinforced_mesh'))
        .itemInputs('1x kubejs:netherite_reinforced_mesh', '4x gtceu:ancient_netherite_rod', '1x gtceu:ancient_netherite_ingot')
        .inputFluids('gtceu:niobium_nitride 576')
        .itemOutputs('1x kubejs:ancient_netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.remove({id: /^blast_ancient_netherite.*/});
    event.recipes.gtceu.electric_blast_furnace(id('hot_ancient_netherite_ingot'))
        .itemInputs('4x minecraft:gold_ingot','4x gtceu:ancient_debris_dust')
        .inputFluids('gtceu:argon 2000')
        .itemOutputs('1x gtceu:hot_ancient_netherite_ingot')
        .blastFurnaceTemp(13300)
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.UHV]*2/3);

    event.recipes.gtceu.macerator(id('ancient_debris_dust'))
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs('4x gtceu:ancient_debris_dust')
        .duration(124)
        .EUt(380644);

    //Quantum Cooling
    event.recipes.gtceu.super_cooler(id('bec_og'))
        .inputFluids('gtceu:oganesson 500')
        .inputFluids('gtceu:superstate_helium_3 7500')
        .outputFluids('gtceu:bec_og 500')
        .outputFluids('gtceu:helium_3 5000')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.super_cooler(id('superstate_helium_3'))
        .inputFluids('gtceu:helium_3 5000')
        .inputFluids('gtceu:liquid_helium 5000')
        .outputFluids('gtceu:superstate_helium_3 5000')
        .outputFluids('gtceu:helium 2500')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV]);

});