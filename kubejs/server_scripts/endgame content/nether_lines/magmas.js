
ServerEvents.recipes(event => {

    //Mystical Magma
    event.recipes.gtceu.cyclonic_crystalline_sieve('mystical_nether_magma')
        .inputFluids('gtceu:highly_unstable_nether_magma 75000')
        .chancedInput('1x kubejs:ancient_netherite_reinforced_mesh', 1000, -150)
        .outputFluids('gtceu:mystical_nether_magma 4000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV]*3/11);

    event.recipes.gtceu.centrifuge('mystical_nether_magma_deconstruction')
        .inputFluids('gtceu:mystical_nether_magma 3000')
        .outputFluids('gtceu:estaltadyne_nether_magma 1000')
        .outputFluids('gtceu:adamantamite_nether_magma 1000')
        .outputFluids('gtceu:mythrillic_nether_magma 1000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.UHV]*3/5);

    event.recipes.gtceu.leptonic_manifold_quantiser('adamantamite_nether_magma_deconstruction')
        .inputFluids('gtceu:adamantamite_nether_magma 10000')
        .outputFluids('gtceu:highly_unstable_nether_magma 3000')
        .outputFluids('gtceu:molten_adamantamite_mixture 6000')
        .outputFluids('gtceu:enriched_adamantamite_mixture 1000')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.leptonic_manifold_quantiser('mythrillic_nether_magma_deconstruction')
        .inputFluids('gtceu:mythrillic_nether_magma 10000')
        .outputFluids('gtceu:highly_unstable_nether_magma 3000')
        .outputFluids('gtceu:molten_mythrillic_mixture 6000')
        .outputFluids('gtceu:enriched_mythrillic_mixture 1000')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.leptonic_manifold_quantiser('estaltadyne_nether_magma_deconstruction')
        .inputFluids('gtceu:estaltadyne_nether_magma 10000')
        .outputFluids('gtceu:highly_unstable_nether_magma 3000')
        .outputFluids('gtceu:molten_estaltadyne_mixture 6000')
        .outputFluids('gtceu:enriched_estaltadyne_mixture 1000')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UHV]);

    [{id:'64x gtceu:',type:'zirconium_dust'},{id:'3x gtceu:',type:'hafnium_dust'}].forEach(dust=>{
    ['mythrillic','adamantamite'].forEach(type=>{
        event.recipes.gtceu.heat_chamber(`enriched_${type}_to_atomic_nether_dust_${dust.type}`)
            .inputFluids(`gtceu:enriched_${type}_mixture 4000`)
            .itemInputs(`${dust.id}${dust.type}`)
            .outputFluids(`gtceu:molten_${type}_mixture`)
            .itemOutputs('4x gtceu:atomic_nether_dust')
            .duration(1600)
            .EUt(GTValues.VHA[GTValues.UHV]); 
    });
    });

    event.recipes.gtceu.heat_chamber(`enriched_estaltadyne_mixture_to_solution`)
        .inputFluids(`gtceu:enriched_estaltadyne_mixture 4000`)
        .itemInputs(`1x gtceu:polonium_dust`)
        .outputFluids(`gtceu:enriched_estaltadyne_solution`)
        .itemOutputs('1x gtceu:lead_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UHV]); 

    //Debris Magma
    event.recipes.gtceu.centrifuge('debris_rich_nether_magma_deconstruction')
        .inputFluids('gtceu:debris_rich_nether_magma 250000')
        .outputFluids('minecraft:lava 200000')
        .outputFluids('gtceu:debris 49000')
        .outputFluids('gtceu:ancient_debris 1000')
        .duration(3600)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.fluid_solidifier('debris_dust_from_liquid')
        .inputFluids('gtceu:debris 144')
        .itemOutputs('1x gtceu:debris_dust')
        .duration(20)
        .EUt(GTValues.VHA[GTValues.IV]);
        
    event.recipes.gtceu.fluid_solidifier('ancient_debris_from_liquid')
        .inputFluids('gtceu:ancient_debris 576')
        .itemOutputs('1x minecraft:ancient_debris')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LuV]);  

});