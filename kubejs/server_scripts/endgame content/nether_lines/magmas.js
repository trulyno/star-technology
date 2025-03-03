
ServerEvents.recipes(event => {

    //Plasma
    event.recipes.gtceu.fusion_reactor('magmatic_plasma')
        .inputFluids('gtceu:highly_unstable_nether_magma 2560', 'gtceu:iron_plasma 128')
        .outputFluids('gtceu:magmatic_plasma 64')
        .duration(160)
        .EUt(66666)
        .fusionStartEU(640000000);
        
    event.recipes.gtceu.plasma_generator('magmatic_plasma')
        .inputFluids('gtceu:magmatic_plasma 1')
        .outputFluids('gtceu:highly_unstable_nether_magma 1')
        .duration(333)
        .EUt(-2048);

});