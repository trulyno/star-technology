ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_reactor('tiny_toulene_process')
        .itemInputs('gtceu:tiny_zeolite_dust') //maybe NC?
        .inputFluids('gtceu:benzene 1000','gtceu:methanol 1000')
        .outputFluids('gtceu:toulene 1000','minecraft:water 1000')
        .duration(110)
        .EUt(4096);

    event.recipes.gtceu.chemical_reactor('toulene_process')
        .itemInputs('gtceu:zeolite_dust') //maybe NC?
        .inputFluids('gtceu:benzene 9000','gtceu:methanol 9000')
        .outputFluids('gtceu:toulene 9000','minecraft:water 9000')
        .duration(200)
        .EUt(16000);
    
    event.recipes.gtceu.chemical_plant('benzotrichloride_process') //needs light in reaction, so why not chemical plant?
        .inputFluids('gtceu:toulene 1000','gtceu:chlorine 3000')
        .outputFluids('gtceu:benzotrichloride 1000','gtceu:hydrogen 3000')
        .duration(50)
        .EUt(115000);
    
    event.recipes.gtceu.chemical_reactor('benzoyl_chloride_process')
        .inputFluids('gtceu:benzotrichloride 1000','minecraft:water 1000')
        .outputFluids('gtceu:benzoyl_chloride 1000','gtceu:hydrochloric_acid 2000')
        .duration(150)
        .EUt(29500);

    event.recipes.gtceu.chemical_reactor('4_fluorobenzoyl_chloride_process')
        .inputFluids('gtceu:benzoyl_chloride 1000','gtceu:fluorine 1000')
        .outputFluids('gtceu:4_fluorobenzoyl_chloride 1000','gtceu:hydrogen 1000')
        .duration(250)
        .EUt(32768);

    event.recipes.gtceu.chemical_reactor('fluorobenzene_process')
        .inputFluids('gtceu:benzene 1000','gtceu:fluorine 1000')
        .outputFluids('gtceu:fluorobenzene 1000','gtceu:hydrogen 1000')
        .duration(100)
        .EUt(31500);
    
    event.recipes.gtceu.chemical_reactor('44_difluorobenzophenone_process')
        .inputFluids('gtceu:fluorobenzene 1000','gtceu:4_fluorobenzoyl_chloride 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .itemOutputs('gtceu:44_difluorobenzophenone_dust 1000')
        .duration(120)
        .EUt(31500);

        //WIP




    event.recipes.gtceu.chemical_plant('PEEK_process')
        .itemInputs('gtceu:44_difluorobenzophenone_dust','gtceu:disodium_salt_of_hydroquinone_dust')
        .outputFluids('gtceu:polyether_ether_ketone 1000')
        .itemOutputs('gtceu:sodium_fluoride_dust 1000')
        .duration(250)
        .EUt(130000);

    //effortless chemical plant recipe (UIV or UXV)
    
    //event.recipes.gtceu.chemical_plant('effortless_PEEK_process')
    //    .inputFluids('gtceu:44_difluorobenzophenone 1000','gtceu:disodium_salt_of_hydroquinone 1000')
    //    .outputFluids('gtceu:polyether_ether_ketone 1000')
    //    .itemOutputs('gtceu:sodium_fluoride 1000')
    //   .duration(250)
    //    .EUt(134000000);

});