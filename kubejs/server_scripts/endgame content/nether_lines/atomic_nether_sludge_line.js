ServerEvents.recipes(event => {

    event.recipes.gtceu.manifold_centrifuge('atomic_nether_sludge_decomp')
        .itemInputs('5x gtceu:atomic_nether_sludge_dust')
        .inputFluids('gtceu:hexafluorobromic_acid 2500')
        .outputFluids('gtceu:caesium_oganesson_hexanitrate_tetrafluorouranate 2500')
        .itemOutputs(
            '2x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_dust',
            '1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate_dust',
            '2x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate_dust')

    
});