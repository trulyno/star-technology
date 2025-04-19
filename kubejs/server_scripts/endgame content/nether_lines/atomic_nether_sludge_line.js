ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.manifold_centrifuge(id('atomic_nether_sludge_decomp'))
        .itemInputs('5x gtceu:atomic_nether_sludge_dust')
        .inputFluids('gtceu:hexafluorobromic_acid 2500')
        .outputFluids('gtceu:caesium_oganesson_hexanitrate_tetrafluorouranate 2500')
        .itemOutputs(
            '2x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_dust',
            '1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate_dust',
            '2x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate_dust')
        .duration(480)
        .EUt(GTValues.VA[GTValues.UEV]);

    //Og Lines
    event.recipes.gtceu.electrolyzer(id('caesium_oganesson_hexanitrate_tetrafluorouranate_decomp'))
        .inputFluids('gtceu:caesium_oganesson_hexanitrate_tetrafluorouranate 1000')
        .outputFluids('gtceu:uranium_tetrafluoride 1000', 'gtceu:caesium_oganesson_hexanitrate 1000')
        .duration(238)
        .EUt(GTValues.VHA[GTValues.UV]);
    
    event.recipes.gtceu.large_chemical_reactor(id('uranium_tetrafluoride_to_uranium_dioxide'))
        .inputFluids('gtceu:uranium_tetrafluoride 1000', 'minecraft:water 2000')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .itemOutputs('1x gtceu:uraninite_dust')
        .duration(850)
        .EUt(GTValues.V[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor(id('caesium_oganesson_hexanitrate_breakage'))
        .inputFluids('gtceu:caesium_oganesson_hexanitrate 1000', 'minecraft:water 3000')
        .outputFluids('gtceu:caesium_oganesson_trioxide 1000', 'gtceu:nitric_acid 6000')
        .duration(640)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('caesium_oganesson_separation'))
        .inputFluids('gtceu:caesium_oganesson_trioxide 1000', 'gtceu:nitric_acid 6000')
        .outputFluids('minecraft:water 3000', 'gtceu:caesium_nitrate 2000', 'gtceu:oganesson_tetranitrate 1000')
        .duration(320)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor(id('oganesson_decomp'))
        .inputFluids('gtceu:oganesson_tetranitrate 1000', 'gtceu:sulfuric_acid 2000')
        .outputFluids('gtceu:nitric_acid 4000', 'gtceu:oganesson 1000')
        .itemOutputs('10x gtceu:sulfate_dust')
        .duration(160)
        .EUt(GTValues.V[GTValues.UHV]);

    //Fl Lines
    event.recipes.gtceu.centrifuge(id('flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_decomp'))
        .itemInputs('7x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_enriched_rare_earth_dust')
        .itemOutputs('6x gtceu:rare_earth_dust', '1x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_dust')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(120)
        .EUt(GTValues.V[GTValues.ZPM]);

    event.recipes.gtceu.nuclear_fission(id('flerovium_hexaoxide_octafluorosulfatoplutonate_decay'))
        .itemInputs('1x gtceu:flerovium_hexaoxide_octafluorosulfatoplutonate_dust')
        .inputFluids('gtceu:distilled_water 25000')
        .itemOutputs('1x gtceu:flerovium_hexadecafluoride_di_sulfur_trioxide_dust')
        .outputFluids('gtceu:enriched_uranium_hexafluoride 2000')
        .duration(3)
        .EUt(GTValues.VA[GTValues.ZPM]*-2)

    event.recipes.gtceu.large_chemical_reactor(id('flerovium_hexadecafluoride_di_sulfur_trioxide_silvering'))
        .itemInputs('1x gtceu:flerovium_hexadecafluoride_di_sulfur_trioxide_dust', '2x gtceu:silver_oxide_dust')
        .itemOutputs('2x gtceu:silver_sulfate_dust', '1x gtceu:flerovium_hexadecafluoride_dust')
        .duration(280)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('flerovium_hexadecafluoride_mass_defluorization'))
        .itemInputs('1x gtceu:flerovium_hexadecafluoride_dust')
        .inputFluids('gtceu:hydrogen 12000')
        .outputFluids('gtceu:hydrofluoric_acid 12000')
        .itemOutputs('1x gtceu:flerovium_tetrafluoride_dust')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.electric_blast_furnace(id('flerovium_tetrafluoride_heat_separation'))
        .itemInputs('1x gtceu:flerovium_tetrafluoride_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .itemOutputs('1x gtceu:hot_flerovium_ingot')
        .duration(1100)
        .blastFurnaceTemp(12200)
        .EUt(GTValues.V[GTValues.UHV]);

    //Sg Po Lines
    event.recipes.gtceu.electrolyzer(id('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate_decomp'))
        .itemInputs('2x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_linked_dipolonium_diplatinum_tris_pyrophosphate_dust')
        .itemOutputs('1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_dust', '1x gtceu:dipolonium_diplatinum_tris_pyrophosphate_dust')
        .duration(960)
        .EUt(GTValues.VA[GTValues.UV]);

    //Sg Lines
    event.recipes.gtceu.chemical_bath(id('seaborgium_cerium_tricarbon_tetrakis_orthosilicate_acid_dipping'))
        .itemInputs('1x gtceu:seaborgium_cerium_tricarbon_tetrakis_orthosilicate_dust')
        .inputFluids('gtceu:sulfuric_acid 8000')
        .outputFluids('gtceu:silicic_acid 4000')
        .itemOutputs('1x gtceu:seaborgium_cerium_tricarbon_octasulfate_dust')
        .duration(480)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.centrifuge(id('silicic_acid_decomp'))
        .inputFluids('gtceu:silicic_acid 1000')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:silicon_dioxide_dust')
        .duration(114)
        .EUt(GTValues.V[GTValues.MV]);

    event.recipes.gtceu.chemical_plant(id('seaborgium_cerium_tricarbon_octasulfate_restructure'))
        .itemInputs('1x gtceu:seaborgium_cerium_tricarbon_octasulfate_dust', '8x gtceu:chromium_trioxide_dust')
        .outputFluids('gtceu:carbon_dioxide 3000')
        .itemOutputs('1x gtceu:cerium_4_sulfate_dust', '5x gtceu:chromium_sulfate_dust', '1x gtceu:seaborgium_trisulfate_dust')
        .duration(500)
        .EUt(GTValues.VH[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor(id('cerium_4_sulfate_decomp'))
        .itemInputs('1x gtceu:cerium_4_sulfate_dust')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:sulfuric_acid 2000')
        .itemOutputs('1x gtceu:cerium_dioxide_dust')
        .duration(251)
        .EUt(GTValues.V[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor(id('seaborgium_trisulfate_hydration'))
        .itemInputs('1x gtceu:seaborgium_trisulfate_dust')
        .inputFluids('minecraft:water 3000')
        .outputFluids('gtceu:sulfuric_acid 3000')
        .itemOutputs('1x gtceu:seaborgium_trioxide_dust')
        .duration(440)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('seaborgium_trioxide_base_reaction'))
        .itemInputs('1x gtceu:seaborgium_trioxide_dust', '6x gtceu:sodium_hydroxide_dust')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:sodium_seaborgate_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor(id('sodium_seaborgate_acid_reaction'))
        .itemInputs('1x gtceu:sodium_seaborgate_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .itemOutputs('1x gtceu:seaborgium_dioxide_dust', '4x gtceu:salt_dust')
        .outputFluids('gtceu:hydroxide 2000')
        .duration(140)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.electric_blast_furnace(id('seaborgium_dioxide_heating'))
        .itemInputs('1x gtceu:seaborgium_dioxide_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('1x gtceu:hot_seaborgium_ingot')
        .outputFluids('gtceu:steam 2000')
        .duration(1200)
        .blastFurnaceTemp(12999)
        .EUt(GTValues.VHA[GTValues.UEV]);

    //Po Lines
    event.recipes.gtceu.chemical_bath(id('dipolonium_diplatinum_tris_pyrophosphate_bathing'))
        .itemInputs('1x gtceu:dipolonium_diplatinum_tris_pyrophosphate_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000')
        .itemOutputs('2x gtceu:platinum_raw_dust', '2x gtceu:polonium_pyrophosphate_dust')
        .outputFluids('gtceu:pyrophosphoric_acid 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('polonium_pyrophosphate_chlorination'))
        .itemInputs('1x gtceu:polonium_pyrophosphate_dust')
        .inputFluids('gtceu:hydrochloric_acid 4000')
        .itemOutputs('1x gtceu:polonium_tetrachloride_dust')
        .outputFluids('gtceu:pyrophosphoric_acid 1000')
        .duration(480)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('polonium_tetrachloride_base_reaction'))
        .itemInputs('1x gtceu:polonium_tetrachloride_dust', '12x gtceu:sodium_hydroxide_dust')
        .itemOutputs('8x gtceu:salt_dust', '1x gtceu:polonium_hydroxide_dust')
        .duration(2400)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.large_chemical_reactor(id('polonium_hydroxide_carbonation'))
        .itemInputs('1x gtceu:polonium_hydroxide_dust')
        .inputFluids('gtceu:carbon_monoxide 1000')
        .outputFluids('minecraft:water 2000')
        .itemOutputs('1x gtceu:polonium_carbonate_dust')
        .duration(260)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.electric_blast_furnace(id('polonium_carbonate_heating'))
        .itemInputs('1x gtceu:polonium_carbonate_dust', '2x gtceu:calcium_dust')
        .itemOutputs('6x gtceu:calcium_carbonate_dust', '1x gtceu:hot_polonium_ingot')
        .duration(1400)
        .blastFurnaceTemp(13499)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.large_chemical_reactor(id('pyrophosphoric_acid_hydrating'))
        .inputFluids('gtceu:pyrophosphoric_acid 1000', 'minecraft:water 1000')
        .outputFluids('gtceu:orthophosphoric_acid 2000')
        .duration(240)
        .EUt(GTValues.V[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor(id('orthophosphoric_acid_neutralizing'))
        .inputFluids('gtceu:orthophosphoric_acid 1000')
        .itemInputs('3x gtceu:sodium_hydroxide_dust')
        .outputFluids('minecraft:water 3000')
        .itemOutputs('1x gtceu:sodium_phosphate_dust')
        .duration(200)
        .EUt(GTValues.VH[GTValues.IV]);

    //At and Hf lines
    event.recipes.gtceu.electrolyzer(id('hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate_decomp'))
        .itemInputs('2x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_bonded_iron_2_barium_diastatide_trisulfate_dust')
        .itemOutputs('1x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_dust', '1x gtceu:iron_2_barium_diastatide_trisulfate_dust')
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM]);

    //At lines
    event.recipes.gtceu.large_chemical_reactor(id('iron_2_barium_diastatide_trisulfate_iron_stripping'))
        .itemInputs('1x gtceu:iron_2_barium_diastatide_trisulfate_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .outputFluids('gtceu:iron_iii_chloride 2000', 'gtceu:sulfuric_acid 3000')
        .itemOutputs('1x gtceu:barium_diastatide_dust')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.chemical_bath(id('barium_diastatide_hydration'))
        .itemInputs('1x gtceu:barium_diastatide_dust')
        .inputFluids('minecraft:water 2000')
        .itemOutputs('1x gtceu:barium_hydroxide_dust')
        .outputFluids('gtceu:hydroastatic_acid 2000')
        .duration(600)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('hydroastatic_acid_neutralizing'))
        .inputFluids('gtceu:hydroastatic_acid 1000')
        .itemInputs('3x gtceu:sodium_hydroxide_dust')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('gtceu:sodium_astatide_dust')
        .duration(1600)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.large_chemical_reactor(id('sodium_astatide_nitration'))
        .itemInputs('1x gtceu:sodium_astatide_dust')
        .inputFluids('gtceu:nitrogen_dioxide 1000')
        .itemOutputs('1x gtceu:astatine_dust', '4x gtceu:sodium_nitrite_dust')
        .duration(180)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.large_chemical_reactor(id('barium_hydroxide_carbonization'))
        .itemInputs('1x gtceu:barium_hydroxide_dust')
        .inputFluids('gtceu:carbon_dioxide 1000')
        .outputFluids('minecraft:water 1000')
        .itemOutputs('5x gtceu:barium_carbonate_dust')
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV]);


    //Hf Lines
    event.recipes.gtceu.large_chemical_reactor(id('hafnium_thorium_iron_magnesium_disilicate_monosulfate_base_reaction'))
        .itemInputs('1x gtceu:hafnium_thorium_iron_magnesium_disilicate_monosulfate_dust', '6x gtceu:potassium_hydroxide_dust')
        .itemOutputs('7x gtceu:potassium_sulfate_dust', '2x gtceu:magnesium_hydroxide_dust', '1x gtceu:hafnium_thorium_iron_2_hydroxide_potassium_disilicate_dust')
        .duration(640)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.extractor(id('magnesium_hydroxide_seperation'))
        .itemInputs('1x gtceu:magnesium_hydroxide_dust')
        .itemOutputs('1x gtceu:magnesia_dust')
        .outputFluids('minecraft:water 1000')
        .duration(320)
        .EUt(GTValues.V[GTValues.MV]);

    event.recipes.gtceu.chemical_plant(id('hafnium_thorium_iron_2_hydroxide_potassium_disilicate_acid_dipping'))
        .itemInputs('1x gtceu:hafnium_thorium_iron_2_hydroxide_potassium_disilicate_dust')
        .inputFluids('gtceu:hydrochloric_acid 8000')
        .itemOutputs('4x gtceu:potassium_hydroxide_dust', '2x gtceu:silicon_dioxide_dust', '1x gtceu:iron_2_hydroxide_dust', '1x gtceu:hafnium_thorium_octachloride_dust')
        .outputFluids('gtceu:hydrogen 4000')
        .duration(840)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.large_chemical_reactor(id('iron_2_hydroxide_neutralization'))
        .itemInputs('1x gtceu:iron_2_hydroxide_dust')
        .inputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('minecraft:water 2000', 'gtceu:iron_ii_chloride 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor(id('hafnium_thorium_octachloride_hydration'))
        .itemInputs('1x gtceu:hafnium_thorium_octachloride_dust')
        .inputFluids('minecraft:water 4000')
        .outputFluids('gtceu:hydrochloric_acid 8000')
        .itemOutputs('1x gtceu:thorium_dioxide_dust', '1x gtceu:hafnium_dioxide_dust')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.electric_blast_furnace(id('thorium_dioxide'))
        .itemInputs('1x gtceu:thorium_dioxide_dust', '2x gtceu:carbon_dust')
        .outputFluids('gtceu:carbon_monoxide 2000')
        .itemOutputs('1x gtceu:thorium_dust')
        .duration(800)
        .blastFurnaceTemp(4950)
        .EUt(GTValues.VHA[GTValues.EV]);

    event.recipes.gtceu.electric_blast_furnace(id('hafnium_dioxide_heat_treating'))
        .itemInputs('1x gtceu:hafnium_dioxide_dust', '2x gtceu:sodium_bicarbonate_dust')
        .outputFluids('gtceu:carbon_dioxide 2000', 'gtceu:steam 1000')
        .itemOutputs('1x gtceu:sodium_hafnate_dust')
        .duration(8600)
        .EUt(GTValues.VH[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor(id('hafnium_chlorination'))
        .itemInputs('1x gtceu:sodium_hafnate_dust')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .outputFluids('gtceu:brackish_water 4000')
        .itemOutputs('1x gtceu:hafnium_hexachloride_dust')
        .duration(720)
        .EUt(GTValues.V[GTValues.ZPM]);

    event.recipes.gtceu.electric_blast_furnace(id('hafnium_hexachloride_to_ingot'))
        .itemInputs('1x gtceu:hafnium_hexachloride_dust', '3x gtceu:magnesium_dust')
        .itemOutputs('9x gtceu:magnesium_chloride_dust', '1x gtceu:hot_hafnium_ingot')
        .duration(720)
        .blastFurnaceTemp(11500)
        .EUt(GTValues.VA[GTValues.UV]);

});