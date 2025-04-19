ServerEvents.recipes(event => {
    const id = global.id;

    event.remove('gtceu:electrolyzer/decomposition_electrolyzing_sodium_bicarbonate');
    
    event.recipes.gtceu.large_chemical_reactor(id('benzotrichloride_process'))
        .inputFluids('gtceu:toluene 1000','gtceu:chlorine 3000')
        .outputFluids('gtceu:benzotrichloride 1000','gtceu:hydrogen 3000')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
    event.recipes.gtceu.large_chemical_reactor(id('benzoyl_chloride_process'))
        .inputFluids('gtceu:benzotrichloride 1000','minecraft:water 1000')
        .outputFluids('gtceu:benzoyl_chloride 1000','gtceu:hydrochloric_acid 2000')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor(id('4_fluorobenzoyl_chloride_process'))
        .inputFluids('gtceu:benzoyl_chloride 1000','gtceu:fluorine 1000')
        .outputFluids('gtceu:4_fluorobenzoyl_chloride 1000','gtceu:hydrogen 1000')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor(id('fluorobenzene_process'))
        .inputFluids('gtceu:benzene 1000','gtceu:fluorine 2000')
        .outputFluids('gtceu:fluorobenzene 1000','gtceu:hydrofluoric_acid 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV]);
    
    event.recipes.gtceu.large_chemical_reactor(id('44_difluorobenzophenone_process'))
        .inputFluids('gtceu:fluorobenzene 1000','gtceu:4_fluorobenzoyl_chloride 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .itemOutputs('gtceu:44_difluorobenzophenone_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor(id('hydroquinone_process'))
        .inputFluids('gtceu:benzene 1000','gtceu:propene 1000','gtceu:oxygen 3000')
        .outputFluids('gtceu:acetone 1000')
        .itemOutputs('gtceu:hydroquinone_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.large_chemical_reactor(id('disodium_salt_of_hydroquinone_process'))
        .itemInputs('gtceu:soda_ash_dust','gtceu:hydroquinone_dust')
        .outputFluids('gtceu:carbon_acid 1000')
        .itemOutputs('gtceu:disodium_salt_of_hydroquinone_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.large_chemical_reactor(id('carbon_acid_to_sodium_bicarbonate_dust'))
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:carbon_acid 1000')
        .outputFluids('gtceu:hydrogen 1000')
        .itemOutputs('gtceu:sodium_bicarbonate_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.electrolyzer(id('sodium_bicarbonate_to_soda_ash_dust'))
        .itemInputs('2x gtceu:sodium_bicarbonate_dust')
        .outputFluids('minecraft:water 1000','gtceu:carbon_dioxide 1000')
        .itemOutputs('gtceu:soda_ash_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor(id('peek_process'))
        .itemInputs('gtceu:44_difluorobenzophenone_dust','gtceu:disodium_salt_of_hydroquinone_dust')
        .outputFluids('gtceu:polyether_ether_ketone 1008')
        .itemOutputs('2x gtceu:sodium_fluoride_dust')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV]);

    //effortless chemical plant recipe
    
    event.recipes.gtceu.chemical_plant(id('effortless_peek_process'))
        .inputFluids('gtceu:benzene 3000','gtceu:methanol 1000','gtceu:propene 1000','gtceu:oxygen 8000')
        .itemInputs('gtceu:soda_ash_dust')
        .outputFluids('gtceu:polyether_ether_ketone 1008','gtceu:acetone 1000','gtceu:carbon_acid 1000','minecraft:water 4000')
        .itemOutputs('gtceu:sodium_oxide_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV]);

    // PEEK usages 
    event.recipes.gtceu.chemical_reactor(id('plastic_boards_peek'))
        .itemInputs('gtceu:polyether_ether_ketone_plate', '4x gtceu:copper_foil')
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs('16x gtceu:plastic_circuit_board')
        .duration(500)
        .EUt(10);

    event.recipes.gtceu.large_chemical_reactor(id('plastic_boards_peek'))
        .itemInputs('gtceu:polyether_ether_ketone_plate', '4x gtceu:copper_foil')
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs('16x gtceu:plastic_circuit_board')
        .duration(500)
        .EUt(10);

});
