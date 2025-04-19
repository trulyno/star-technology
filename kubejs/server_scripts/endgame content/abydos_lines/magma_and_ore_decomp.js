ServerEvents.recipes(event => {
    const id = global.id;
    
    //Magma Breakdown
    
    event.recipes.gtceu.molten_destabilizing(id('decomp_abydos_titanite_rich_magma'))
        .inputFluids('gtceu:abydos_titanite_rich_magma 80000')
        .outputFluids('gtceu:titanite 30000')
        .outputFluids('gtceu:molten_ore_mixture 15000')
        .outputFluids('gtceu:calaverite 10000')
        .outputFluids('gtceu:sylvanite 10000')
        .outputFluids('gtceu:tiemannite 10000')
        .outputFluids('gtceu:strontianite 5000')
        .itemOutputs('80x gtceu:deepslate_dust')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.molten_destabilizing(id('decomp_abydos_zapolite_rich_magma'))
        .inputFluids('gtceu:abydos_zapolite_rich_magma 80000')
        .outputFluids('gtceu:zapolite 30000')
        .outputFluids('gtceu:molten_ore_mixture 15000')
        .outputFluids('gtceu:crookesite 15000')
        .outputFluids('gtceu:clausthalite 10000')
        .outputFluids('gtceu:iodargyrite 5000')
        .itemOutputs('80x gtceu:deepslate_dust')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.ZPM]);

        ['zapolite','crookesite','clausthalite','iodargyrite','titanite','calaverite','sylvanite',
        'tiemannite','strontianite'].forEach(type=>{
            event.remove({id: `gtceu:extractor/extract_${type}_dust`});
            event.recipes.gtceu.autoclave(`raw_${type}`)
                .itemInputs('gtceu:deepslate_dust')
                .inputFluids(`gtceu:${type} 1000`)
                .itemOutputs(`gtceu:raw_${type}`)
                .duration(160)
                .EUt(GTValues.VA[GTValues.IV]);
        });

    //Dust to Products
    //Titanite and Zapolite done in their own lines
    
    //Iodides
    event.recipes.gtceu.large_chemical_reactor(id('lautarite_decomp'))
        .itemInputs('9x gtceu:lautarite_dust')
        .inputFluids('gtceu:nitric_acid 2000')
        .itemOutputs('gtceu:calcium_dust')
        .outputFluids('gtceu:hydrogen_iodide 2000','gtceu:nitrogen_dioxide 2000','gtceu:oxygen 5000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor(id('iodargyrite_decomp'))
        .itemInputs('2x gtceu:iodargyrite_dust')
        .inputFluids('gtceu:hydrogen 1000')
        .itemOutputs('gtceu:silver_dust')
        .outputFluids('gtceu:hydrogen_iodide 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV]);

    //Selenides
    const seleniumGalides = [{dust:'clausthalite',dustAmount:'2',selenium:'1',byproduct:'lead',byproductAmount:'1'},{dust:'klockmannite',dustAmount:'2',selenium:'1',byproduct:'copper',byproductAmount:'1'},
        {dust:'berzelianite',dustAmount:'3',selenium:'1',byproduct:'copper',byproductAmount:'2'},{dust:'umangite',dustAmount:'5',selenium:'2',byproduct:'copper',byproductAmount:'3'}]
        seleniumGalides.forEach(type=>{
        event.recipes.gtceu.electric_blast_furnace(`${type.dust}_decomp`)
            .itemInputs(`${type.dustAmount}x gtceu:${type.dust}_dust`)
            .inputFluids('gtceu:carbon_acid 1000')
            .outputFluids('gtceu:steam 1000','gtceu:carbon_dioxide')
            .itemOutputs(`${type.selenium}x gtceu:selenium_dust`, `${type.byproductAmount}x gtceu:${type.byproduct}_dust`)
            .duration(200)
            .blastFurnaceTemp(3249)
            .EUt(GTValues.VHA[GTValues.EV]);
    });
    event.recipes.gtceu.electric_blast_furnace(`tiemannite_decomp`)
        .itemInputs(`2x gtceu:tiemannite_dust`)
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('gtceu:mercury 1000','gtceu:steam 1000','gtceu:carbon_dioxide')
        .itemOutputs(`1x gtceu:selenium_dust`)
        .duration(200)
        .blastFurnaceTemp(3249)
        .EUt(GTValues.VHA[GTValues.EV]);
    event.recipes.gtceu.electric_blast_furnace(`crookesite_decomp`)
        .itemInputs(`12x gtceu:crookesite_dust`)
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('gtceu:steam 1000','gtceu:carbon_dioxide')
        .itemOutputs(`4x gtceu:selenium_dust`,'7x gtceu:copper_dust','1x gtceu:thallium_dust')
        .duration(200)
        .blastFurnaceTemp(3249)
        .EUt(GTValues.VHA[GTValues.EV]);
    event.recipes.gtceu.electric_blast_furnace(`aguilarite_decomp`)
        .itemInputs(`5x gtceu:aguilarite_dust`)
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('gtceu:hydrogen_sulfide 1000','gtceu:carbon_dioxide','gtceu:oxygen 1000')
        .itemOutputs(`1x gtceu:selenium_dust`,'3x gtceu:silver_dust')
        .duration(200)
        .blastFurnaceTemp(3249)
        .EUt(GTValues.VHA[GTValues.EV]);
    event.recipes.gtceu.electric_blast_furnace(`stibiopalladinite_decomp`)
        .itemInputs(`7x gtceu:stibiopalladinite_dust`)
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('gtceu:steam 1000','gtceu:carbon_dioxide')
        .itemOutputs(`2x gtceu:antimony_dust`,'5x gtceu:lead_dust')
        .duration(200)
        .blastFurnaceTemp(3249)
        .EUt(GTValues.VHA[GTValues.EV]);

    //Tellurides
    event.recipes.gtceu.electromagnetic_separator(id('sylvanite_decomp'))
        .itemInputs('3x gtceu:sylvanite_dust')
        .itemOutputs('2x gtceu:tellurium_dust','gtceu:silver_dust')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV]);
    event.recipes.gtceu.electromagnetic_separator(id('calaverite_decomp'))
        .itemInputs('3x gtceu:calaverite_dust')
        .itemOutputs('2x gtceu:tellurium_dust','gtceu:gold_dust')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.EV]);

    //carbon acid fixes
    event.recipes.gtceu.electrolyzer(id('carbon_acid'))
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('minecraft:water 1000','gtceu:carbon_dioxide')
        .duration(60)
        .EUt(60);
    event.recipes.gtceu.large_chemical_reactor(id('carbon_acid'))
        .itemInputs('6x gtceu:potassium_carbonate_dust')
        .inputFluids('gtceu:hydrogen 1000')
        .itemOutputs('gtceu:potassium_dust')
        .outputFluids('gtceu:carbon_acid 500')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.IV]);
});