
ServerEvents.recipes(event => {

   // removals
    // const toRemoveRecipeType = ['rock_crusher', 'irradiator', 'extractor', 'electrolyzer', 
    //     'pressurizer', 'alloy_smelter', 'melter', 'analyzer', 'ingot_former', 'pump', 
    //     'leacher', 'crystallizer', 'assembler', 'steam_turbine', 'supercooler', 
    //     'centrifuge', 'chemical_reactor', 'fluid_infuser', 'isotope_separator', 
    //     'fluid_enricher', 'gas_scrubber', 'manufactory', 'fusion_core', 'fusion_coolant'];

    // const toRemoveItem = [];

    // toRemoveRecipeType.forEach(element => {
    //     event.remove({type: `nuclearcraft:${element}`});
    // });

    // toRemoveItem.forEach(element => {
    //     event.remove({output: element});
    // });

    // event.remove({mod: 'nuclearcraft', type: 'minecraft:shaped'});
    // event.remove({mod: 'nuclearcraft', type: 'minecraft:shapeless'});

    event.remove({not: {id: /nuclearcraft:fusion_core.*/}, mod: 'nuclearcraft'});
    event.remove({output: /nuclearcraft:fuel_.*/});
    event.remove({output: 'nuclearcraft:fusion_core'});

    // isotopes
    const Th232 = 'nuclearcraft:thorium_232';

    const U233 = 'nuclearcraft:uranium_233';
    const U235 = 'nuclearcraft:uranium_235';
    const U238 = 'nuclearcraft:uranium_238';

    const GTU235 = 'gtceu:uranium_235_dust';
    const GTU238 = 'gtceu:uranium_dust';

    const Np236 = 'nuclearcraft:neptunium_236';
    const Np237 = 'nuclearcraft:neptunium_237';

    const Pu238 = 'nuclearcraft:plutonium_238';
    const Pu239 = 'nuclearcraft:plutonium_239';
    const Pu241 = 'nuclearcraft:plutonium_241';
    const Pu242 = 'nuclearcraft:plutonium_242';

    const Am241 = 'nuclearcraft:americium_241';
    const Am242 = 'nuclearcraft:americium_242';
    const Am243 = 'nuclearcraft:americium_243';

    const Cm243 = 'nuclearcraft:curium_243';
    const Cm245 = 'nuclearcraft:curium_245';
    const Cm246 = 'nuclearcraft:curium_246';
    const Cm247 = 'nuclearcraft:curium_247';

    const Bk247 = 'nuclearcraft:berkelium_247';
    const Bk248 = 'nuclearcraft:berkelium_248';

    const Cf249 = 'nuclearcraft:californium_249';
    const Cf250 = 'nuclearcraft:californium_250';
    const Cf251 = 'nuclearcraft:californium_251';
    const Cf252 = 'nuclearcraft:californium_252';

    const Ru106 = 'nuclearcraft:ruthenium_106_dust';
    const Eu155 = 'nuclearcraft:europium_155_dust';
    const Pm147 = 'nuclearcraft:promethium_147_dust';
    const Cs137 = 'nuclearcraft:caesium_137_dust';
    const St90 = 'nuclearcraft:strontium_90_dust';
    const Md = 'gtceu:molybdenum_dust'

    event.recipes.gtceu.forming_press('tbu')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`9x ${Th232}`)
        .itemOutputs('nuclearcraft:fuel_thorium_tbu')
        .duration(400)
        .EUt(250);

    event.recipes.gtceu.forming_press('leu233')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${U233}`, `8x ${U238}`)
        .itemOutputs('nuclearcraft:fuel_uranium_leu_233')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('heu233')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${U233}`, `6x ${U238}`)
        .itemOutputs('nuclearcraft:fuel_uranium_heu_233')
        .duration(400)
        .EUt(250)
        .circuit(1);
    
    event.recipes.gtceu.forming_press('leu235')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${U235}`, `8x ${U238}`)
        .itemOutputs('nuclearcraft:fuel_uranium_leu_235')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('leu235gt')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${GTU235}`, `8x ${GTU238}`)
        .itemOutputs('nuclearcraft:fuel_uranium_leu_235')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('heu235')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${U235}`, `6x ${U238}`)
        .itemOutputs('nuclearcraft:fuel_uranium_heu_235')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('heu235gt')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${GTU235}`, `6x ${GTU238}`)
        .itemOutputs('nuclearcraft:fuel_uranium_heu_235')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('len236')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Np236}`, `8x ${Np237}`)
        .itemOutputs('nuclearcraft:fuel_neptunium_len_236')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hen236')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Np236}`, `6x ${Np237}`)
        .itemOutputs('nuclearcraft:fuel_neptunium_hen_236')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lecm243')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Cm243}`, `8x ${Cm246}`)
        .itemOutputs('nuclearcraft:fuel_curium_lecm_243')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hecm243')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Cm243}`, `6x ${Cm246}`)
        .itemOutputs('nuclearcraft:fuel_curium_hecm_243')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lecm245')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Cm245}`, `8x ${Cm246}`)
        .itemOutputs('nuclearcraft:fuel_curium_lecm_245')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hecm245')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Cm245}`, `6x ${Cm246}`)
        .itemOutputs('nuclearcraft:fuel_curium_hecm_245')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lecm247')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Cm247}`, `8x ${Cm246}`)
        .itemOutputs('nuclearcraft:fuel_curium_lecm_247')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hecm247')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Cm247}`, `6x ${Cm246}`)
        .itemOutputs('nuclearcraft:fuel_curium_hecm_247')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('leb248')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Bk248}`, `8x ${Bk248}`)
        .itemOutputs('nuclearcraft:fuel_berkelium_leb_248')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('heb248')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Bk248}`, `6x ${Bk247}`)
        .itemOutputs('nuclearcraft:fuel_berkelium_heb_248')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lecf249')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Cf249}`, `8x ${Cf252}`)
        .itemOutputs('nuclearcraft:fuel_californium_lecf_249')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hecf249')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Cf249}`, `6x ${Cf252}`)
        .itemOutputs('nuclearcraft:fuel_californium_hecf_249')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lecf251')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Cf251}`, `8x ${Cf252}`)
        .itemOutputs('nuclearcraft:fuel_californium_lecf_251')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hecf251')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Cf251}`, `6x ${Cf252}`)
        .itemOutputs('nuclearcraft:fuel_californium_hecf_251')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lea242')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Am242}`, `8x ${Am243}`)
        .itemOutputs('nuclearcraft:fuel_americium_lea_242')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hea242')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Am242}`, `6x ${Am243}`)
        .itemOutputs('nuclearcraft:fuel_americium_hea_242')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lep239')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Pu239}`, `8x ${Pu242}`)
        .itemOutputs('nuclearcraft:fuel_plutonium_lep_239')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hep239')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Pu239}`, `6x ${Pu242}`)
        .itemOutputs('nuclearcraft:fuel_plutonium_hep_239')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.forming_press('lep241')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`1x ${Pu241}`, `8x ${Pu242}`)
        .itemOutputs('nuclearcraft:fuel_plutonium_lep_241')
        .duration(400)
        .EUt(250)
        .circuit(0);

    event.recipes.gtceu.forming_press('hep241')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemInputs(`3x ${Pu241}`, `6x ${Pu242}`)
        .itemOutputs('nuclearcraft:fuel_plutonium_hep_241')
        .duration(400)
        .EUt(250)
        .circuit(1);

    event.recipes.gtceu.centrifuge('tbu_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_thorium_tbu')  
        .itemOutputs(U233, `5x ${U238}`, Np236, Np237, St90, Cs137)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hen236_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_hen_236')  
        .itemOutputs(`4x ${U233}`, Np237, Pu241, Pu242, Md, Cs137)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('len236_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_len_236')  
        .itemOutputs(`5x ${Pu242}`, Np237, Pu241, Pu242, Md, Cs137)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lecm243_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_243')  
        .itemOutputs(`4x ${Cm246}`, Cm247, `2x ${Bk247}`, Bk248, Md, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hecm243_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_243')  
        .itemOutputs(`3x ${Cm245}`, Cm245, `2x ${Bk247}`, Bk248, Md, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lecm245_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_245')  
        .itemOutputs(`4x ${Cm246}`, Cm247, `2x ${Bk247}`, Cf249, Md, Eu155)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hecm245_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_245')  
        .itemOutputs(`3x ${Cm246}`, Cm247, `2x ${Bk247}`, Cf249, Md, Eu155)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lecm247_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_247')  
        .itemOutputs(`5x ${Cm246}`, Bk247, Bk248, Cf249, Md, Eu155)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hecm247_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_247')  
        .itemOutputs(Cf251, Cf249, `4x ${Bk247}`, Bk248, Md, Eu155)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('leb248_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_leb_248')  
        .itemOutputs(`5x ${Bk247}`, Bk248, Cf249, Cf251, Ru106, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('heb248_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_heb_248')  
        .itemOutputs(Bk247, Bk248, `2x ${Cf251}`, `3x ${Cf252}`, Ru106, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('leu233_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_233')  
        .itemOutputs(U235, `2x ${U238}`, `3x ${Pu242}`, Am243, St90, Cs137)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('heu233_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_233')  
        .itemOutputs(`5x ${U238}`, Pu241, Pu242, Am243, St90, Cs137)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('leu235_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_235')  
        .itemOutputs(`4x ${U238}`, Pu239, Pu242, Am243, St90, Cs137)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('heu235_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_235')  
        .itemOutputs(`2x ${U238}`, Pu239, `3x ${Pu242}`, Am243, St90, Cs137)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lep239_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_239')  
        .itemOutputs(`4x ${U238}`, Am243, Cm246, Pu242, Pm147, St90)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hep239_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_239')  
        .itemOutputs(`4x ${Am243}`, Cm243, Pu241, Pu242, Pm147, St90)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lep241_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_241')  
        .itemOutputs(`5x ${Pu242}`, Am243, Cm246, Bk247, Pm147, St90)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hep241_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_241')  
        .itemOutputs(`3x ${Am243}`, Am241, `2x ${Cm246}`, Pu242, Pm147, St90)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lea242_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_americium_lea_242')  
        .itemOutputs(`3x ${Am243}`, Cm243, `3x ${Cm246}`, Bk248, Md, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hea242_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_americium_hea_242')  
        .itemOutputs(`3x ${Am243}`, Cm243, `2x ${Cm246}`, Bk247, Md, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lecf249_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_249')  
        .itemOutputs(`8x ${Cf252}`, Ru106, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hecf249_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_249')  
        .itemOutputs(`6x ${Cf252}`, `2x ${Cf250}`, Ru106, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('lecf251_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_251')  
        .itemOutputs(`8x ${Cf252}`, Ru106, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('hecf251_reprocessing')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_251')  
        .itemOutputs(`7x ${Cf252}`, Ru106, Pm147)
        .duration(240)
        .EUt(120);

    event.recipes.gtceu.centrifuge('thorium_isotope_separation')
        .itemInputs('4x gtceu:thorium_dust')
        .itemOutputs(Th232)
        .duration(240)
        .EUt(2000)
        .circuit(1);

    event.recipes.gtceu.centrifuge('uranium_235_isotope_separation')
        .itemInputs('4x gtceu:uranium_235_dust')
        .itemOutputs(U235)
        .duration(240)
        .EUt(2000)
        .circuit(1);

    event.recipes.gtceu.centrifuge('uranium_isotope_separation')
        .itemInputs('4x gtceu:uranium_dust')
        .itemOutputs(U238)
        .duration(240)
        .EUt(2000)
        .circuit(1);

    event.recipes.gtceu.centrifuge('thorium_isotope_conversion')
        .itemInputs(Th232)
        .itemOutputs('4x gtceu:thorium_dust')
        .duration(240)
        .EUt(2000)
        .circuit(2);

    event.recipes.gtceu.centrifuge('uranium_235_isotope_conversion')
        .itemInputs(U235)
        .itemOutputs('4x gtceu:uranium_235_dust')
        .duration(240)
        .EUt(2000)
        .circuit(2);

    event.recipes.gtceu.centrifuge('uranium_isotope_conversion')
        .itemInputs(U238)
        .itemOutputs('4x gtceu:uranium_dust')
        .duration(240)
        .EUt(2000)
        .circuit(2);
    
    event.recipes.gtceu.extractor(U238)
        .itemInputs(U238)
        .itemOutputs('nuclearcraft:radium_dust')
        .duration(240)
        .EUt(30);

    event.recipes.gtceu.extractor(GTU238)
        .itemInputs(U238)
        .itemOutputs('nuclearcraft:radium_dust')
        .duration(240)
        .EUt(30);

    event.recipes.gtceu.extractor(U233)
        .itemInputs(U233)
        .itemOutputs('gtceu:bismuth_dust')
        .duration(240)
        .EUt(30);

    // event.recipes.gtceu.extractor(U235)
    //     .itemInputs(U235)
    //     .itemOutputs('gtceu:lead_dust')
    //     .duration(240)
    //     .EUt(30);

    event.recipes.gtceu.extractor(U235)
        .itemInputs(GTU235)
        .itemOutputs('gtceu:lead_dust')
        .duration(240)
        .EUt(30);

    event.recipes.gtceu.extractor(Np236)
        .itemInputs(Np236)
        .itemOutputs('gtceu:thorium_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Np237)
        .itemInputs(Np237)
        .itemOutputs(U233)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Pu239)
        .itemInputs(Pu239)
        .itemOutputs(U233)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Pu241)
        .itemInputs(Pu241)
        .itemOutputs(Np237)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Pu242)
        .itemInputs(Pu242)
        .itemOutputs(U238)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Pu238)
        .itemInputs(Pu238)
        .itemOutputs('gtceu:lead_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Am241)
        .itemInputs(Am241)
        .itemOutputs(Np237)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Am243)
        .itemInputs(Am243)
        .itemOutputs(Pu238)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cm243)
        .itemInputs(Cm243)
        .itemOutputs(Pu239)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cm245)
        .itemInputs(Cm245)
        .itemOutputs(Pu241)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cm246)
        .itemInputs(Cm246)
        .itemOutputs(Pu242)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cm247)
        .itemInputs(Cm247)
        .itemOutputs(Am243)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Bk247)
        .itemInputs(Bk247)
        .itemOutputs(Am243)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Bk248)
        .itemInputs(Bk248)
        .itemOutputs('gtceu:thorium_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cf249)
        .itemInputs(Cf249)
        .itemOutputs(Cm246)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cf250)
        .itemInputs(Cf250)
        .itemOutputs(Cm245)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cf251)
        .itemInputs(Cf251)
        .itemOutputs('gtceu:thorium_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cf252)
        .itemInputs(Cf252)
        .itemOutputs(Cm247)
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(St90)
        .itemInputs(St90)
        .itemOutputs('gtceu:zirconium_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Cs137)
        .itemInputs(Cs137)
        .itemOutputs('gtceu:barium_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Pm147)
        .itemInputs(Pm147)
        .itemOutputs('gtceu:neodymium_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Eu155)
        .itemInputs(Eu155)
        .itemOutputs('nuclearcraft:gadolinium_dust')
        .duration(240)
        .EUt(30);
    
    event.recipes.gtceu.extractor(Ru106)
        .itemInputs(Ru106)
        .itemOutputs('gtceu:palladium_dust')
        .duration(240)
        .EUt(30);

    // event.recipes.gtceu.alloy_smelter('ferroboron')
    //     .itemInputs('gtceu:steel_ingot', 'gtceu:boron_dust')
    //     .itemOutputs('2x nuclearcraft:ferroboron_ingot')
    //     .duration(400)
    //     .EUt(240);

    // event.recipes.gtceu.alloy_smelter('tough_alloy')
    //     .itemInputs('nuclearcraft:ferroboron_ingot', 'gtceu:lithium_dust')
    //     .itemOutputs('2x nuclearcraft:tough_alloy_ingot')
    //     .duration(400)
    //     .EUt(240);

    // event.recipes.gtceu.bender('tough_alloy_plate')
    //     .itemInputs('nuclearcraft:tough_alloy_ingot')
    //     .itemOutputs('nuclearcraft:tough_alloy_plate')
    //     .duration(480)
    //     .EUt(128)
    //     .circuit(1);

    // event.recipes.gtceu.alloy_smelter('hard_carbon')
    //     .itemInputs('gtceu:graphite_dust', 'gtceu:diamond_dust')
    //     .itemOutputs('2x nuclearcraft:hard_carbon_ingot')
    //     .duration(400)
    //     .EUt(240);

    // event.recipes.gtceu.alloy_smelter('extreme')
    //     .itemInputs('nuclearcraft:tough_alloy_ingot', 'nuclearcraft:hard_carbon_ingot')
    //     .itemOutputs('2x nuclearcraft:extreme_ingot')
    //     .duration(400)
    //     .EUt(240);

    // event.recipes.gtceu.mixer('boron_arsenide')
    //     .itemInputs('6x gtceu:boron_dust', 'gtceu:arsenic_dust')
    //     .itemOutputs('7x nuclearcraft:boron_arsenide_dust')
    //     .duration(620)
    //     .EUt(120);

    // event.recipes.gtceu.alloy_smelter('thermoconducting')
    //     .itemInputs('nuclearcraft:extreme_ingot', 'nuclearcraft:boron_arsenide_dust')
    //     .itemOutputs('2x nuclearcraft:thermoconducting_ingot')
    //     .duration(400)
    //     .EUt(240);

    // event.recipes.gtceu.bender('thermoconducting_plate')
    //     .itemInputs('nuclearcraft:thermoconducting_ingot')
    //     .itemOutputs('nuclearcraft:thermoconducting_plate')
    //     .duration(480)
    //     .EUt(128)
    //     .circuit(1);

    // event.recipes.gtceu.assembler('plate_basic')
    //     .itemInputs('gtceu:black_steel_plate', '2x gtceu:graphite_dust', '16x gtceu:fine_annealed_copper_wire', '4x gtceu:aluminium_screw')
    //     .itemOutputs('nuclearcraft:plate_basic')
    //     .duration(120)
    //     .EUt(240);

    // event.recipes.gtceu.assembler('advanced_plating')
    //     .itemInputs('nuclearcraft:plate_basic', '2x nuclearcraft:tough_alloy_ingot', '32x gtceu:fine_red_alloy_wire', '4x gtceu:blue_alloy_screw')
    //     .itemOutputs('nuclearcraft:plate_advanced')
    //     .duration(280)
    //     .EUt(240);

    // event.recipes.gtceu.assembler('fission_casing')
    //     .itemInputs('4x gtceu:lead_plate', '4x nuclearcraft:plate_advanced', 'nuclearcraft:tough_alloy_ingot')
    //     .itemOutputs('4x nuclearcraft:fission_reactor_casing')
    //     .duration(420)
    //     .EUt(1500);

    // event.recipes.gtceu.alloy_smelter('fission_reactor_glass')
    //     .itemInputs('nuclearcraft:fission_reactor_casing', 'thermal:obsidian_glass')
    //     .itemOutputs('2x nuclearcraft:fission_reactor_glass')
    //     .duration(320)
    //     .EUt(120);

    // event.recipes.gtceu.assembler('fission_reactor_controller')
    //     .itemInputs('4x nuclearcraft:fission_reactor_casing', '2x nuclearcraft:plate_advanced', '2x #gtceu:circuits/ev')
    //     .itemOutputs('nuclearcraft:fission_reactor_controller')
    //     .duration(1200)
    //     .EUt(1800);

    // event.recipes.gtceu.assembler('fission_reactor_port')
    //     .itemInputs('nuclearcraft:fission_reactor_casing', '2x nuclearcraft:plate_advanced', '4x nuclearcraft:tough_alloy_plate', '2x gtceu:hv_robot_arm')
    //     .itemOutputs('nuclearcraft:fission_reactor_port')
    //     .duration(1200)
    //     .EUt(1800);

    // event.recipes.gtceu.assembler('fission_fuel_cell')
    //     .itemInputs('4x gtceu:lead_ingot', '4x thermal:obsidian_glass')
    //     .itemOutputs('nuclearcraft:fission_reactor_solid_fuel_cell')
    //     .duration(530)
    //     .EUt(230);

    // event.recipes.gtceu.assembler('heat_sink')
    //     .itemInputs('4x nuclearcraft:tough_alloy_plate', '2x nuclearcraft:thermoconducting_plate', '2x minecraft:iron_bars', 'gtceu:stainless_steel_fluid_cell')
    //     .itemOutputs('nuclearcraft:empty_heat_sink')
    //     .duration(410)
    //     .EUt(240);

    // event.recipes.gtceu.canner('glowstone_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x minecraft:glowstone_dust')
    //     .itemOutputs('nuclearcraft:glowstone_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('obsidian_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:obsidian_dust')
    //     .itemOutputs('nuclearcraft:obsidian_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('iron_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:iron_dust')
    //     .itemOutputs('nuclearcraft:iron_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('lead_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:lead_dust')
    //     .itemOutputs('nuclearcraft:lead_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('boron_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:boron_dust')
    //     .itemOutputs('nuclearcraft:boron_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('manganese_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:manganese_dust')
    //     .itemOutputs('nuclearcraft:manganese_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('enderium_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:enderium_dust')
    //     .itemOutputs('nuclearcraft:enderium_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('prismarine_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x minecraft:prismarine_shard')
    //     .itemOutputs('nuclearcraft:prismarine_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    //  event.recipes.gtceu.canner('silver_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:silver_dust')
    //     .itemOutputs('nuclearcraft:silver_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('slime_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x minecraft:slime_ball')
    //     .itemOutputs('nuclearcraft:slime_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('arsenic_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:arsenic_dust')
    //     .itemOutputs('nuclearcraft:arsenic_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('diamond_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:diamond_dust')
    //     .itemOutputs('nuclearcraft:diamond_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('lapis_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:lapis_dust')
    //     .itemOutputs('nuclearcraft:lapis_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('lithium_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:lithium_dust')
    //     .itemOutputs('nuclearcraft:lithium_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('gold_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:gold_dust')
    //     .itemOutputs('nuclearcraft:gold_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('redstone_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x minecraft:redstone')
    //     .itemOutputs('nuclearcraft:redstone_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('copper_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:copper_dust')
    //     .itemOutputs('nuclearcraft:copper_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('tin_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:tin_dust')
    //     .itemOutputs('nuclearcraft:tin_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('emerald_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:emerald_dust')
    //     .itemOutputs('nuclearcraft:emerald_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('aluminium_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:aluminium_dust')
    //     .itemOutputs('nuclearcraft:aluminum_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('quartz_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:nether_quartz_dust')
    //     .itemOutputs('nuclearcraft:quartz_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('helium_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink')
    //     .inputFluids('gtceu:liquid_helium 1000')
    //     .itemOutputs('nuclearcraft:liquid_helium_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('nitrogen_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink')
    //     .inputFluids('gtceu:nitrogen 1000')
    //     .itemOutputs('nuclearcraft:liquid_nitrogen_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    event.recipes.gtceu.chemical_reactor('slurry_ice')
        .itemInputs('thermal:blizz_powder')
        .inputFluids('gtceu:ice 500', 'gtceu:ethanol 250')
        .outputFluids('nuclearcraft:slurry_ice 1000')
        .duration(450)
        .EUt(250);

    event.recipes.gtceu.large_chemical_reactor('slurry_ice')
        .itemInputs('thermal:blizz_powder')
        .inputFluids('gtceu:ice 500', 'gtceu:ethanol 250')
        .outputFluids('nuclearcraft:slurry_ice 1000')
        .duration(450)
        .EUt(250);

    event.recipes.gtceu.vacuum_freezer('cryotheum')
        .inputFluids('nuclearcraft:slurry_ice 1000')
        .outputFluids('nuclearcraft:cryotheum 1000')
        .duration(240)
        .EUt(250);

    // event.recipes.gtceu.canner('cryotheum_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink')
    //     .inputFluids('nuclearcraft:cryotheum 1000')
    //     .itemOutputs('nuclearcraft:cryotheum_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('water_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink')
    //     .inputFluids('minecraft:water 1000')
    //     .itemOutputs('nuclearcraft:water_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.canner('magnesium_heat_sink')
    //     .itemInputs('nuclearcraft:empty_heat_sink', '4x gtceu:magnesium_dust')
    //     .itemOutputs('nuclearcraft:magnesium_heat_sink')
    //     .duration(320)
    //     .EUt(250);

    // event.recipes.gtceu.assembler('qnp')
    //     .itemInputs('gtceu:long_tungsten_steel_rod', 'gtceu:tungsten_steel_drill_head', '2x gtceu:electrum_foil', 'gtceu:iv_power_unit')
    //     .itemOutputs('nuclearcraft:qnp')
    //     .duration(500)
    //     .EUt(3000);

    function fission(fuel) {
        event.custom({
            "type": "nuclearcraft:fission_reactor_controller",
            "input": [
                {
                    "item": `nuclearcraft:fuel_${fuel}`
                }
            ],
            "output": [
                {
                    "item": `nuclearcraft:depleted_fuel_${fuel}`
                }
            ],
            "powerModifier": 1.0,
            "radiation": 1.0,
            "timeModifier": 1.0
        });
    }
    fission('americium_hea_242');
    fission('americium_lea_242');
    fission('berkelium_heb_248');
    fission('berkelium_leb_248');
    fission('californium_hecf_249');
    fission('californium_lecf_249');
    fission('californium_hecf_251');
    fission('californium_lecf_251');
    fission('curium_hecm_243');
    fission('curium_lecm_243');
    fission('curium_hecm_245');
    fission('curium_lecm_245');
    fission('curium_hecm_247');
    fission('curium_lecm_247');
    fission('neptunium_hen_236');
    fission('neptunium_len_236');
    fission('plutonium_hep_239');
    fission('plutonium_lep_239');
    fission('plutonium_hep_241');
    fission('plutonium_lep_241');
    fission('thorium_tbu');
    fission('uranium_heu_233');
    fission('uranium_leu_233');
    fission('uranium_heu_235');
    fission('uranium_leu_235');
});