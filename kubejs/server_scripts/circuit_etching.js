ServerEvents.recipes(event => {
    const id = global.id;
    
    // etching fluid
    event.recipes.gtceu.chemical_reactor(id('copper_chloride'))
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:chlorine 1000')
        .itemOutputs('2x gtceu:copper_chloride_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor(id('copper_chloride'))
        .itemInputs('1x gtceu:copper_dust')
        .inputFluids('gtceu:chlorine 1000')
        .itemOutputs('2x gtceu:copper_chloride_dust')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.HV]);

    event.recipes.gtceu.mixer(id('cupric_chloride_solution'))
        .itemInputs('1x gtceu:copper_chloride_dust')
        .inputFluids('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:cupric_chloride_solution 1000')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV]);

    // non-cleanroom etching with CuCl
    [
        {board: 'phenolic', foil: 'silver', foil_count: 4, amount: 50, duration: 300, energy: 30},
        {board: 'plastic', foil: 'copper', foil_count: 6, amount: 125, duration: 600, energy: 30},
        {board: 'epoxy', foil: 'electrum', foil_count: 8, amount: 250, duration: 900, energy: 30}
    ].forEach(type=>{
        event.recipes.gtceu.chemical_reactor(id(`${type.board}_circuit_board_copper`))
            .itemInputs(`gtceu:${type.board}_circuit_board`, `${type.foil_count}x gtceu:${type.foil}_foil`)
            .inputFluids(`gtceu:cupric_chloride_solution ${type.amount}`)
            .itemOutputs(`gtceu:${type.board}_printed_circuit_board`)
            .duration(type.duration)
            .EUt(type.energy);

        event.recipes.gtceu.large_chemical_reactor(id(`${type.board}_circuit_board_copper`))
            .itemInputs(`gtceu:${type.board}_circuit_board`, `4x gtceu:${type.foil}_foil`)
            .inputFluids(`gtceu:cupric_chloride_solution ${type.amount}`)
            .itemOutputs(`gtceu:${type.board}_printed_circuit_board`)
            .duration(type.duration)
            .EUt(type.energy);
        });
 
 
    // cleanroom etching with CuCl
    [
        {board: 'fiber_reinforced', foil: 'annealed_copper', foil_count: 12, amount: 500, duration: 1200, energy: 30},
        {board: 'multilayer_fiber_reinforced', foil: 'platinum', foil_count: 8, amount: 1000, duration: 1500, energy: 120},
        {board: 'wetware', foil: 'niobium_titanium', foil_count: 32, amount: 2500, duration: 1800, energy: 480}
    ].forEach(type=>{
        event.recipes.gtceu.chemical_reactor(id(`${type.board}_circuit_board_copper`))
            .itemInputs(`gtceu:${type.board}_circuit_board`, `${type.foil_count}x gtceu:${type.foil}_foil`)
            .inputFluids(`gtceu:cupric_chloride_solution ${type.amount}`)
            .itemOutputs(`gtceu:${type.board}_printed_circuit_board`)
            .cleanroom(CleanroomType.CLEANROOM)
            .duration(type.duration)
            .EUt(type.energy);
 
 
        event.recipes.gtceu.large_chemical_reactor(id(`${type.board}_circuit_board_copper`))
            .itemInputs(`gtceu:${type.board}_circuit_board`, `${type.foil_count}x gtceu:${type.foil}_foil`)
            .inputFluids(`gtceu:cupric_chloride_solution ${type.amount}`)
            .itemOutputs(`gtceu:${type.board}_printed_circuit_board`)
            .cleanroom(CleanroomType.CLEANROOM)
            .duration(type.duration)
            .EUt(type.energy);
        });
 
 
    // cleanroom etching with new boards
    [
        {board: 'draconic_wetware', foil: 'trinium', foil_count: 48, amount: 5000, duration: 2100, energy: GTValues.VA[GTValues.EV]}
    ].forEach(type=> {
        [
          {id: 'copper', name: 'cupric_chloride_solution', multiplier: 1},
          {id: 'iron', name: 'iron_iii_chloride', multiplier: 2},
          {id: 'sodium', name: 'sodium_persulfate', multiplier: 4}
        ].forEach(fluid => {
            event.recipes.gtceu.chemical_reactor(id(`${type.board}_circuit_board_${fluid.id}`))
                .itemInputs(`kubejs:${type.board}_circuit_board`, `${type.foil_count}x gtceu:${type.foil}_foil`)
                .inputFluids(`gtceu:${fluid.name} ${type.amount*fluid.multiplier}`)
                .itemOutputs(`kubejs:${type.board}_printed_circuit_board`)
                .cleanroom(CleanroomType.CLEANROOM)
                .duration(type.duration)
                .EUt(type.energy);
 
 
            event.recipes.gtceu.large_chemical_reactor(id(`${type.board}_circuit_board_${fluid.id}`))
                .itemInputs(`kubejs:${type.board}_circuit_board`, `${type.foil_count}x gtceu:${type.foil}_foil`)
                .inputFluids(`gtceu:${fluid.name} ${type.amount*fluid.multiplier}`)
                .itemOutputs(`kubejs:${type.board}_printed_circuit_board`)
                .cleanroom(CleanroomType.CLEANROOM)
                .duration(type.duration)
                .EUt(type.energy);
 
 
        });
    });
 
 
});