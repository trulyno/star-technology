ServerEvents.recipes(event => {

    event.recipes.gtceu.manifold_centrifuge('atomic_nether_sludge_decomp')
        .itemInputs('5x gtceu:atomic_nether_sludge_dust')
        .inputFluids('gtceu:hexafluorobromic_acid 2500')
        .outputFluids('gtceu:caesium_oganesson_hexanitrate_tetrafluorouranate 2500')
        .itemOutputs(
            '2x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_dust',
            '1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate_dust',
            '2x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate_dust')

    //Og Lines
    event.recipes.gtceu.electrolyzer('caesium_oganesson_hexanitrate_tetrafluorouranate_decomp')
        .inputFluids('gtceu:caesium_oganesson_hexanitrate_tetrafluorouranate 1000')
        .outputFluids('gtceu:uranium_tetrafluoride 1000', 'gtceu:caesium_oganesson_hexanitrate 1000')
    
    event.recipes.gtceu.large_chemical_reactor('uranium_tetrafluoride_to_uranium_dioxide')
        .inputFluids('gtceu:uranium_tetrafluoride 1000', 'minecraft:water 2000')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .itemOutputs('1x gtceu:uraninite_dust')

    event.recipes.gtceu.large_chemical_reactor('caesium_oganesson_hexanitrate_breakage')
        .inputFluids('gtceu:caesium_oganesson_hexanitrate 1000', 'minecraft:water 3000')
        .outputFluids('gtceu:caesium_oganesson_trioxide 1000', 'gtceu:nitric_acid 6000')

    event.recipes.gtceu.large_chemical_reactor('caesium_oganesson_separation')
        .inputFluids('gtceu:caesium_oganesson_trioxide 1000', 'gtceu:nitric_acid 6000')
        .outputFluids('minecraft:water 3000', 'gtceu:caesium_nitrate 2000', 'gtceu:oganesson_tetranitrate 1000')

    event.recipes.gtceu.large_chemical_reactor('oganesson_decomp')
        .inputFluids('gtceu:oganesson_tetranitrate 1000', 'gtceu:sulfuric_acid 2000')
        .outputFluids('gtceu:nitric_acid 4000', 'gtceu:oganesson 1000')
        .itemOutputs('10x gtceu:sulfate_dust')
    
    //Fl Lines
    event.recipes.gtceu.centrifuge('flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_decomp')
        .itemInputs('7x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_dust')
        .itemOutputs('6x gtceu:rare_earth_dust', '1x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_dust')
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.nuclear_fission('flerovium_hexaoxide_octafluorosulfatoplutonate_decay')
        .itemInputs('1x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_dust')
        .inputFluids('gtceu:distilled_water 25000')
        .itemOutputs('1x gtceu:flerovium_hexadecafluoride_di_sulfur_trioxide_dust')
        .outputFluids('gtceu:enriched_uranium_hexafluoride 2000')
        .EUt(GTValues.V[GTValues.ZPM]*-2)

    event.recipes.gtceu.chemical_reactor('silver_oxide')
        .itemInputs('2x gtceu:silver_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('3x gtceu:silver_oxide_dust')
    event.recipes.gtceu.large_chemical_reactor('silver_oxide')
        .itemInputs('2x gtceu:silver_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('3x gtceu:silver_oxide_dust')

    event.recipes.gtceu.large_chemical_reactor('flerovium_hexadecafluoride_di_sulfur_trioxide_silvering')
        .itemInputs('1x gtceu:flerovium_hexadecafluoride_di_sulfur_trioxide_dust', '2x gtceu:silver_oxide_dust')
        .itemOutputs('2x gtceu:silver_sulfate_dust', '1x gtceu:flerovium_hexadecafluoride_dust')

    event.recipes.gtceu.large_chemical_reactor('flerovium_hexadecafluoride_mass_defluorization')
        .itemInputs('1x gtceu:flerovium_hexadecafluoride_dust')
        .inputFluids('gtceu:hydrogen 12000')
        .outputFluids('gtceu:hydrofluoric_acid 12000')
        .itemOutputs('1x gtceu:flerovium_tetrafluoride_dust')

    event.recipes.gtceu.electric_blast_furnace('flerovium_tetrafluoride_heat_separation')
        .itemInputs('1x gtceu:flerovium_tetrafluoride_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .itemOutputs('1x gtceu:hot_flerovium_ingot')

    //Sg Po Lines
    event.recipes.gtceu.electrolyzer('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate_decomp')
        .itemInputs('2x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate_dust')
        .itemOutputs('1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_dust', '1x gtceu:dipolonium_diplatinum_tris_pyrophosphate_dust')

    //Sg Lines
    event.recipes.gtceu.chemical_bath('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_acid_dipping')
        .itemInputs('1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_dust')
        .inputFluids('gtceu:sulfuric_acid 8000')
        .outputFluids('gtceu:silicic_acid 4000')
        .itemOutputs('1x gtceu:seaborgium_cerium_tricarbon_octasulfate_dust')

    event.recipes.gtceu.centrifuge('silicic_acid_decomp')
        .inputFluids('gtceu:silicic_acid 1000')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:silicon_dioxide_dust')

    event.recipes.gtceu.chemical_plant('seaborgium_cerium_tricarbon_octasulfate_restructure')
        .itemInputs('1x gtceu:seaborgium_cerium_tricarbon_octasulfate_dust', '2x gtceu:chromium_trioxide_dust')
        .outputFluids('gtceu:carbon_dioxide 3000')
        .itemOutputs('1x gtceu:cerium_4_sulfate_dust', '1x gtceu:chromium_sulfate_dust', '1x gtceu:seaborgium_trisulfate_dust')

    event.recipes.gtceu.large_chemical_reactor('cerium_4_sulfate_decomp')
        .itemInputs('1x gtceu:cerium_4_sulfate_dust')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:sulfuric_acid 2000')
        .itemOutputs('1x gtceu:cerium_dioxide_dust')

    event.recipes.gtceu.large_chemical_reactor('seaborgium_trisulfate_hydration')
        .itemInputs('1x gtceu:seaborgium_trisulfate_dust')
        .inputFluids('minecraft:water 3000')
        .outputFluids('gtceu:sulfuric_acid 3000')
        .itemOutputs('1x gtceu:seaborgium_trioxide_dust')

    event.recipes.gtceu.large_chemical_reactor('seaborgium_trioxide_base_reaction')
        .itemInputs('1x gtceu:seaborgium_trioxide_dust', '2x gtceu:sodium_hydroxide_dust')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:sodium_seaborgate_dust')

    event.recipes.gtceu.large_chemical_reactor('sodium_seaborgate_acid_reaction')
        .itemInputs('1x gtceu:sodium_seaborgate_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:seaborgium_dioxide_dust', '2x gtceu:salt_dust')
        .outputFluids('gtceu:hydroxide 2000')

    event.recipes.gtceu.electric_blast_furnace('seaborgium_dioxide_heating')
        .itemInputs('1x gtceu:seaborgium_dioxide_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('1x gtceu:hot_seaborgium_ingot')
        .outputFluids('gtceu:steam 2000')

    //Po Lines
    event.recipes.gtceu.chemical_bath('dipolonium_diplatinum_tris_pyrophosphate_bathing')
        .itemInputs('1x gtceu:dipolonium_diplatinum_tris_pyrophosphate_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000')
        .itemOutputs('2x gtceu:platinum_raw_dust', '2x gtceu:polonium_pyrophosphate_dust')
        .outputFluids('gtceu:pyrophosphoric_acid 1000')

    event.recipes.gtceu.large_chemical_reactor('polonium_pyrophosphate_chlorination')
        .itemInputs('1x gtceu:polonium_pyrophosphate_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000')
        .itemOutputs('1x gtceu:polonium_tetrachloride_dust')
        .outputFluids('gtceu:pyrophosphoric_acid 1000')

    event.recipes.gtceu.large_chemical_reactor('polonium_tetrachloride_base_reaction')
        .itemInputs('1x gtceu:polonium_tetrachloride_dust', '4x gtceu:sodium_hydroxide_dust')
        .itemOutputs('4x gtceu:salt_dust', '1x gtceu:polonium_hydroxide_dust')

    event.recipes.gtceu.large_chemical_reactor('polonium_hydroxide_carbonation')
        .itemInputs('1x gtceu:polonium_hydroxide_dust')
        .inputFluids('gtceu:carbon_monoxide 1000')
        .outputFluids('minecraft:water 2000')
        .itemOutputs('1x gtceu:polonium_carbonate_dust')

    event.recipes.gtceu.electric_blast_furnace('polonium_carbonate_heating')
        .itemInputs('1x gtceu:polonium_carbonate_dust', '2x gtceu:calcium_dust')
        .itemOutputs('6x gtceu:calcium_carbonate_dust', '1x gtceu:hot_polonium_ingot')

    event.recipes.gtceu.large_chemical_reactor('pyrophosphoric_acid_hydrating')
        .inputFluids('gtceu:pyrophosphoric_acid 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:orthophosphoric_acid 2000')

    event.recipes.gtceu.large_chemical_reactor('orthophosphoric_acid_neutralizing')
        .inputFluids('gtceu:orthophosphoric_acid 1000')
        .itemInputs('3x gtceu:sodium_hydroxide_dust')
        .outputFluids('minecraft:water 3000')
        .itemOutputs('1x gtceu:sodium_phosphate_dust')

    //At and Hf lines
    event.recipes.gtceu.electrolyzer('hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate_decomp')
        .itemInputs('2x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate_dust')
        .itemOutputs('1x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_dust', '1x gtceu:iron_2_barium_diastatide_trisulfate_dust')

    //At lines
    event.recipes.gtceu.large_chemical_reactor('iron_2_barium_diastatide_trisulfate_iron_stripping')
        .itemInputs('1x gtceu:iron_2_barium_diastatide_trisulfate_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .outputFluids('gtceu:iron_iii_chloride 2000', 'gtceu:sulfuric_acid 3000')
        .itemOutputs('1x gtceu:barium_diastatide_dust')

    event.recipes.gtceu.chemical_bath('barium_diastatide_hydration')
        .itemInputs('1x gtceu:barium_diastatide_dust')
        .inputFluids('minecraft:water 2000')
        .itemOutputs('1x gtceu:barium_hydroxide_dust')
        .outputFluids('gtceu:hydroastatic_acid 2000')

    event.recipes.gtceu.large_chemical_reactor('hydroastatic_acid_neutralizing')
        .inputFluids('gtceu:hydroastatic_acid 1000')
        .itemInputs('1x gtceu:sodium_hydroxide_dust')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('gtceu:sodium_astatide_dust')

    event.recipes.gtceu.large_chemical_reactor('sodium_astatide_nitration')
        .itemInputs('1x gtceu:sodium_astatide_dust')
        .inputFluids('gtceu:nitrogen_dioxide 1000')
        .itemOutputs('1x gtceu:astatine_dust', '4x gtceu:sodium_nitrite_dust')

    event.recipes.gtceu.large_chemical_reactor('barium_hydroxide_carbonization')
        .itemInputs('1x gtceu:barium_hydroxide_dust')
        .inputFluids('gtceu:carbon_dioxide 1000')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('5x gtceu:barium_carbonate_dust')

    //Hf Lines
    event.recipes.gtceu.large_chemical_reactor('hafnium_thorium_iron_magnesium_disilicate_monosulfate_base_reaction')
        .itemInputs('1x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_dust', '6x gtceu:potassium_hydroxide_dust')
        .itemOutputs('7x gtceu:potassium_sulfate_dust', '2x gtceu:magnesium_hydroxide_dust', '1x gtceu:hafnium_thorium_iron_2_hydroxide_potassium_disilicate_dust')

    event.recipes.gtceu.extractor('magnesium_hydroxide_seperation')
        .itemInputs('1x gtceu:magnesium_hydroxide_dust')
        .itemOutputs('1x gtceu:magnesia_dust')
        .outputFluids('minecraft:water 1000')

    event.recipes.gtceu.chemical_plant('hafnium_thorium_iron_2_hydroxide_potassium_disilicate_acid_dipping')
        .itemInputs('1x gtceu:hafnium_thorium_iron_2_hydroxide_potassium_disilicate_dust')
        .inputFluids('gtceu:hydrochloric_acid 8000')
        .itemOutputs('4x gtceu:potassium_hydroxide_dust', '2x gtceu:silicon_dioxide_dust', '1x gtceu:iron_2_hydroxide_dust', '1x gtceu:hafnium_thorium_octachloride_dust')
        .outputFluids('gtceu:hydrogen 4000')

    event.recipes.gtceu.large_chemical_reactor('iron_2_hydroxide_neutralization')
        .itemInputs('1x gtceu:iron_2_hydroxide_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('minecraft:water 2000', 'gtceu:iron_ii_chloride 1000')

    event.recipes.gtceu.large_chemical_reactor('hafnium_thorium_octachloride_hydration')
        .itemInputs('1x gtceu:hafnium_thorium_octachloride_dust')
        .inputFluids('minecraft:water 4000')
        .outputFluids('gtceu:hydrochloric_acid 8000')
        .itemOutputs('1x gtceu:thorium_dioxide_dust', '1x gtceu:hafnium_dioxide_dust')

    event.recipes.gtceu.electric_blast_furnace('thorium_dioxide')
        .itemInputs('1x gtceu:thorium_dioxide_dust', '2x gtceu:carbon_dust')
        .outputFluids('gtceu:carbon_monoxide 2000')
        .itemOutputs('1x gtceu:thorium_dust')

    event.recipes.gtceu.electric_blast_furnace('hafnium_dioxide_heat_treating')
        .itemInputs('1x gtceu:hafnium_dioxide_dust', '2x gtceu:sodium_bicarbonate_dust')
        .outputFluids('gtceu:carbon_dioxide 2000', 'gtceu:steam 1000')
        .itemOutputs('1x gtceu:sodium_hafnate_dust')

    event.recipes.gtceu.large_chemical_reactor('hafnium_chlorination')
        .itemInputs('1x gtceu:sodium_hafnate_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .outputFluids('gtceu:brackish_water 2000')
        .itemOutputs('1x gtceu:hafnium_hexachloride_dust')

    event.recipes.gtceu.electric_blast_furnace('hafnium_hexachloride_to_ingot')
        .itemInputs('1x gtceu:hafnium_hexachloride_dust', '3x gtceu:magnesium_dust')
        .itemOutputs('9x gtceu:magnesium_chloride_dust', '1x gtceu:hot_hafnium_ingot')

});