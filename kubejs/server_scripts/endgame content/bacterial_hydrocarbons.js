ServerEvents.recipes(event => {

    //Controller
    event.recipes.gtceu.assembly_line('bacterial_chemical_builder')
        .itemInputs('gtceu:uhv_machine_hull', '4x gtceu:uhv_electric_motor', 'gtceu:weapon_grade_naquadah_rotor', '2x gtceu:duranium_large_fluid_pipe', '4x #gtceu:circuits/uhv')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 576', 'gtceu:polyether_ether_ketone 2016')
        .itemOutputs('gtceu:bacterial_chemical_builder')
        .duration(950)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:bacteria_bucket"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VA[GTValues.UV]);

    //Bacterial Production

    const mte = 'methane', eta = 'ethane', ppa = 'propane', bta = 'butane', oca = 'octane', ete = 'ethylene', ppe = 'propene'
    ,bte = 'butene', btd = 'butadiene', bze = 'benzene', tle = 'toluene', mto = 'methanol', act = 'acetone',
    aca = 'acetic_acid', mta = 'methyl_acetate', eto = 'ethanol', cre = 'creosote', phn = 'phenol', dmb = 'dimethylbenzene',
    ebe = 'ethylbenzene', npe = 'naphthalene'
    const prodscale = ['1', '2', '3', '4', '5']
    const consscale = ['1', '2', '3', '4', '5']

    prodscale.forEach(prodscale =>{
    consscale.forEach(consscale => {
        bacterial_hydrocarbon(mte,bte,eta,ppa,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(eta,mte,ete,ppa,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(ppa,mte,bta,eta,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(bta,oca,eta,mte,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(oca,mte,ppa,bta,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(ete,btd,tle,bze,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(ppe,ete,ppa,eta,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(bte,bze,btd,ete,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(btd,ppe,mte,ete,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(bze,phn,dmb,cre,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(tle,btd,bte,mte,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(mto,aca,eto,mte,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(act,mto,mta,aca,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(aca,eto,mto,act,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(mta,tle,mto,act,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(eto,mta,mto,act,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(cre,tle,phn,dmb,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(phn,bze,cre,tle,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(dmb,phn,tle,cre,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(ebe,eta,ete,bze,`${prodscale}`,`${consscale}`)
        bacterial_hydrocarbon(npe,ebe,cre,phn,`${prodscale}`,`${consscale}`)
    })});
       
    function bacterial_hydrocarbon(main, at1, at2, at3, prod, cons){
    event.recipes.gtceu.bacterial_chemical_builder(`${main}_${prod}_${cons}`)
        .itemInputs(`kubejs:${main}_bacteria_group_type_${prod}_${cons}`)
        .itemInputs(`${2**cons}x minecraft:sugar`)
        .inputFluids(`gtceu:distilled_water 1000`, `gtceu:enriched_bacterial_sludge ${25*(2**cons)}`)
        .outputFluids(`gtceu:${main} ${prod*400}`, `gtceu:${at1} ${prod*80}`, `gtceu:${at2} ${prod*40}`, `gtceu:${at3} ${prod*20}`)
        .duration(300)
        .EUt(GTValues.VA[GTValues.ZPM]);
        }
});
