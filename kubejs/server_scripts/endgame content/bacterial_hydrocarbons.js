ServerEvents.recipes(event => {

    //Controllers
    event.recipes.gtceu.assembly_line('bacterial_chemical_builder')
        .itemInputs('gtceu:uhv_machine_hull', '4x gtceu:uhv_electric_motor', 'gtceu:weapon_grade_naquadah_rotor', '2x gtceu:duranium_large_fluid_pipe', '4x #gtceu:circuits/uhv')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 576', 'gtceu:polyether_ether_ketone 2016')
        .itemOutputs('gtceu:bacterial_chemical_builder')
        .duration(950)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:enriched_bacterial_sludge_bucket"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line('bacterial_breeding_vat')
        .itemInputs('gtceu:large_brewer', '4x gtceu:uhv_electric_motor', '3x gtceu:weapon_grade_naquadah_rotor','gtceu:neutronium_huge_fluid_pipe' ,'4x #gtceu:circuits/uhv')
        .inputFluids('gtceu:soldering_alloy 1872', 'gtceu:naquadria 576', 'gtceu:polyether_ether_ketone 2016')
        .itemOutputs('gtceu:bacterial_breeding_vat')
        .duration(950)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of("gtceu:bacteria_bucket"))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(128)
            )
        .EUt(GTValues.VA[GTValues.UHV]);

//@stellaurora the following is your "psuedo code"

    //Bacterial Breeding (bacterial_breeding_vat)

        //Input: Bacteria B with Affix A, Production p, Consumption c, and Mutability m + Misc Fluids
        //Output: 32x Bacteria B with Affix A, Prodction p*, Consumption c*, and Mutability m*

            //B and A are ignored and output the same as input
            //p*,c*,and m* are the adjusted outputs based on the m input value
            //m** is defiend as the weight per each variance given as follows: m=1 [0,0,100,0,0], m=2 [2,8,80,8,2], m=3 [5,15,60,15,5], m=4 [12,18,40,18,12], m=5 [20,20,20,20,20]
            //p* is defined as an outcome of a weighted array [{max(1,p-2), weight: m**},{max(1,p-1), weight: m**},{p, weight: m**},{min(5,p+1), weight: m**},{min(5,p+2), weight: m**}]
            //c* is defined as an outcome of a weighted array [{max(1,c-2), weight: m**},{max(1,c-1), weight: m**},{c, weight: m**},{min(5,c+1), weight: m**},{min(5,c+2), weight: m**}]
            //m* is defined as an outcome of a weighted array [{max(1,m-2), weight: m**},{max(1,m-1), weight: m**},{m, weight: m**},{min(5,m+1), weight: m**},{min(5,m+2), weight: m**}]

    //Bacterial Harvesting (bacterial_chemical_plant)

        //Input: Bacteria B with Affix A, Production p, Consumption c, and Mutability m + (_*(2^c)) Misc Fluids
        //Output: 800*p of Hydrocarbon B, and 200*p of Hydrocarbon A

            //m is ignored as it has no relivance in this multiblock
            
    //Bacteria Mutating (bacterial_runic_mutator)

        //Input: Bacteria B with Affix A, Production p, Consumption c, and Mutability m + runic engraved
        //Input: Bacteria B* with Affix A, Production p#, Consumption c#, and Mutability m# + runic engraved

        //Input: Bacteria B with Affix A, Production p, Consumption c, and Mutability m + runic pathway engraved
        //Input: Bacteria B with Affix A*, Production p#, Consumption c#, and Mutability m# + runic pathway engraved

            //p#,c#,m# are all just to denote a completely random value for each p,c,m with ranges of [1,2,3,4,5]
            //A* and B* are to denote a random NEW A or B value depending on which is specified

            //recipe durations are a product of __ / m

//   Old mess
//   //Bacterial Production

//     const mte = 'methane', eta = 'ethane', ppa = 'propane', bta = 'butane', oca = 'octane', ete = 'ethylene', ppe = 'propene'
//     ,bte = 'butene', btd = 'butadiene', bze = 'benzene', tle = 'toluene', mto = 'methanol', act = 'acetone',
//     aca = 'acetic_acid', mta = 'methyl_acetate', eto = 'ethanol', cre = 'creosote', phn = 'phenol', dmb = 'dimethylbenzene',
//     ebe = 'ethylbenzene', npe = 'naphthalene'
//     const prodscale = ['1', '2', '3', '4', '5']
//     const consscale = ['1', '2', '3', '4', '5']
//     const mutascaler = ['1', '2', '3', '4', '5']
    
//                 //Mutability {}	maxVal(1,n-2),maxVal(1,n-1),n,min(5,n+1),min(5,n+2)
//                 // Perfectly Stability (1)	.00, .00, 1.00, .00, .00
//                 // Imperfect Stability (2)	.02, .08, .80, .08, .02
//                 // Standard (3)	.05, .15, .60, .15, .05
//                 // Imperfect Mutability (4)	.12, .18, .40, .18, .12
//                 // Perfect Mutability (5)	.20, .20, .20, .20, .20

//     prodscale.forEach(prodscale =>{
//     consscale.forEach(consscale => {
//         bacterial_hydrocarbon(mte,bte,eta,ppa,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(eta,mte,ete,ppa,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(ppa,mte,bta,eta,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(bta,oca,eta,mte,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(oca,mte,ppa,bta,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(ete,btd,tle,bze,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(ppe,ete,ppa,eta,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(bte,bze,btd,ete,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(btd,ppe,mte,ete,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(bze,phn,dmb,cre,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(tle,btd,bte,mte,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(mto,aca,eto,mte,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(act,mto,mta,aca,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(aca,eto,mto,act,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(mta,tle,mto,act,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(eto,mta,mto,act,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(cre,tle,phn,dmb,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(phn,bze,cre,tle,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(dmb,phn,tle,cre,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(ebe,eta,ete,bze,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//         bacterial_hydrocarbon(npe,ebe,cre,phn,`${prodscale}`,`${consscale}`,`${mutascaler}`)
//     })});
       
//     function bacterial_hydrocarbon(main, at1, at2, at3, prod, cons, muta){
//     event.recipes.gtceu.bacterial_chemical_builder(`${main}_${prod}_${cons}`)
//         .itemInputs(`kubejs:${main}_bacteria_group_type_${prod}_${cons}`)
//         .itemInputs(`${2**cons}x minecraft:sugar`)
//         .inputFluids(`gtceu:distilled_water 1000`, `gtceu:enriched_bacterial_sludge ${25*(2**cons)}`)
//         .outputFluids(`gtceu:${main} ${prod*400}`, `gtceu:${at1} ${prod*80}`, `gtceu:${at2} ${prod*40}`, `gtceu:${at3} ${prod*20}`)
//         .duration(300)
//         .EUt(GTValues.VA[GTValues.ZPM]);

//     //Bacterial Breeding (need to acct for mutability, will do with nbt data import)
    
//     // const pm1 = [{name:maxVal(1,`${prod-2}`), weight: 0},{name:maxVal(1,`${prod-1}`), weight: 0},{name:`${prod}`, weight: 1},{name:minVal(5,`${prod+1}`), weight: 0},{name:minVal(5,`${prod+2}`), weight: 0}]
//     // const pm2 = [{name:maxVal(1,`${prod-2}`), weight: .02},{name:maxVal(1,`${prod-1}`), weight: .08},{name:`${prod}`, weight: .8},{name:minVal(5,`${prod+1}`), weight: .08},{name:minVal(5,`${prod+2}`), weight: .02}]
//     // const pm3 = [{name:maxVal(1,`${prod-2}`), weight: .05},{name:maxVal(1,`${prod-1}`), weight: .15},{name:`${prod}`, weight: .6},{name:minVal(5,`${prod+1}`), weight: .15},{name:minVal(5,`${prod+2}`), weight: .05}]
//     // const pm4 = [{name:maxVal(1,`${prod-2}`), weight: .12},{name:maxVal(1,`${prod-1}`), weight: .18},{name:`${prod}`, weight: .4},{name:minVal(5,`${prod+1}`), weight: .18},{name:minVal(5,`${prod+2}`), weight: .12}]
//     // const pm5 = [{name:maxVal(1,`${prod-2}`), weight: .2},{name:maxVal(1,`${prod-1}`), weight: .2},{name:`${prod}`, weight: .2},{name:minVal(5,`${prod+1}`), weight: .2},{name:minVal(5,`${prod+2}`), weight: .2}]

//     // const cm1 = [{name:maxVal(1,`${cons-2}`), weight: 0},{name:maxVal(1,`${cons-1}`), weight: 0},{name:`${cons}`, weight: 1},{name:minVal(5,`${cons+1}`), weight: 0},{name:minVal(5,`${cons+2}`), weight: 0}]
//     // const cm2 = [{name:maxVal(1,`${cons-2}`), weight: .02},{name:maxVal(1,`${cons-1}`), weight: .08},{name:`${cons}`, weight: .8},{name:minVal(5,`${cons+1}`), weight: .08},{name:minVal(5,`${cons+2}`), weight: .02}]
//     // const cm3 = [{name:maxVal(1,`${cons-2}`), weight: .05},{name:maxVal(1,`${cons-1}`), weight: .15},{name:`${cons}`, weight: .6},{name:minVal(5,`${cons+1}`), weight: .15},{name:minVal(5,`${cons+2}`), weight: .05}]
//     // const cm4 = [{name:maxVal(1,`${cons-2}`), weight: .12},{name:maxVal(1,`${cons-1}`), weight: .18},{name:`${cons}`, weight: .4},{name:minVal(5,`${cons+1}`), weight: .18},{name:minVal(5,`${cons+2}`), weight: .12}]
//     // const cm5 = [{name:maxVal(1,`${cons-2}`), weight: .2},{name:maxVal(1,`${cons-1}`), weight: .2},{name:`${cons}`, weight: .2},{name:minVal(5,`${cons+1}`), weight: .2},{name:minVal(5,`${cons+2}`), weight: .2}]


//     event.recipes.gtceu.bacterial_breeding_vat(`${main}_bacterial_colony_p${prod}_c${cons}`)//_m${muta}`)
//         .itemInputs(`kubejs:${main}_bacteria_group_type_${prod}_${cons}`)
//         .inputFluids('gtceu:bacteria 2000', 'minecraft:water 8000')
//         .itemOutputs(`32x kubejs:${main}_bacteria_group_type_${cm5}_${pm4}`)
//         .duration(1800)
//         .EUt(GTValues.VA[GTValues.UV])
//     }
});