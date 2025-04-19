ServerEvents.recipes(event => {
    const id = global.id;

    const gas =['_gas','']
    const material = ['mythrolic_alloy','magmada_alloy','starium_alloy','seaborgium_palladium_enriched_estalt_flerovium_alloy']
    
    material.forEach(m=>{
        // gas.forEach(g=>{
        // event.remove({id: `gtceu:alloy_blast_smelter/${m}${g}`});
        // });
    //Better Vacuum Freezer
        event.remove({id: `gtceu:vacuum_freezer/${m}`})
        event.remove({id: `gtceu:vacuum_freezer/cool_hot_${m}_ingot`})
        event.recipes.gtceu.vacuum_freezer(`${m}_from_molten`)
            .inputFluids(`gtceu:molten_${m} 144`)
            .inputFluids('gtceu:superstate_helium_3 500')
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs(`gtceu:${m}_ingot`)
            .outputFluids('gtceu:helium_3 250')
            .duration(900)
            .EUt(GTValues.V[GTValues.UV]);
    
        event.recipes.gtceu.vacuum_freezer(`${m}_from_hot_ingot`)
            .itemInputs(`gtceu:hot_${m}_ingot`)
            .inputFluids('gtceu:superstate_helium_3 500')
            .itemOutputs(`gtceu:${m}_ingot`)
            .outputFluids('gtceu:helium_3 250')
            .duration(1200)
            .EUt(GTValues.V[GTValues.UV]);

    //Super Cooler
    event.recipes.gtceu.super_cooler(`${m}`)
        .inputFluids(`gtceu:${m}_plasma 144`)
        .inputFluids('gtceu:bec_og 250')
        .outputFluids(`gtceu:molten_${m} 144`)
        .outputFluids('gtceu:oganesson 200')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UEV]);

    });

    //Hellforge
    event.recipes.gtceu.hellforge(id('mythrolic_alloy'))
        .inputFluids('gtceu:mythril 720')
        .inputFluids('gtceu:osmium 288')
        .inputFluids('gtceu:tantalum 288')
        .inputFluids('gtceu:iridium 144')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('gtceu:argon_plasma 1440')
        .inputFluids('gtceu:utopian_akreyrium 10000')
        .outputFluids('gtceu:mythrolic_alloy_plasma 1440')
        .duration(7200)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.hellforge(id('magmada_alloy'))
        .inputFluids('gtceu:adamantine 576')
        .inputFluids('gtceu:neutronium 144')
        .inputFluids('gtceu:tungsten 432')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('gtceu:magmatic_plasma 1152')
        .inputFluids('gtceu:utopian_akreyrium 8000')   
        .outputFluids('gtceu:magmada_alloy_plasma 1152')
        .duration(6400)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.hellforge(id('starium_alloy'))
        .inputFluids('gtceu:nether_star_concentrate 576')
        .inputFluids('gtceu:estalt 288')
        .inputFluids('gtceu:pure_netherite 288')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('gtceu:oxygen_plasma 1152')
        .inputFluids('gtceu:utopian_akreyrium 8000')
        .outputFluids('gtceu:starium_alloy_plasma 1152')
        .duration(5120)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.hellforge(id('seaborgium_palladium_enriched_estalt_flerovium_alloy'))
        .inputFluids('gtceu:seaborgium 576')
        .inputFluids('gtceu:palladium 1152')
        .inputFluids('gtceu:enriched_estalt 432')
        .inputFluids('gtceu:flerovium 288')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('gtceu:nickel_plasma 2448')
        .inputFluids('gtceu:utopian_akreyrium 17000')
        .outputFluids('gtceu:seaborgium_palladium_enriched_estalt_flerovium_alloy_plasma 2448')
        .duration(8500)
        .EUt(GTValues.VHA[GTValues.UIV]);

    });