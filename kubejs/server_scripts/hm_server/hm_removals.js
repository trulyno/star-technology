ServerEvents.recipes(event => {

    const toRemoveOutputHM = [
        'exnihilosequentia:silkworm'
    ];

    const toRemoveIdHM = [
        
    ];

    const toRemoveTypeHM = [
        
    ];

    const toRemoveTypeInputHM = [
        ['exnihilosequentia:harvest','#minecraft:leaves'],['exnihilosequentia:harvest','exnihilosequentia:infested_leaves'],
        //removes silkworm obtainability
    ];

    toRemoveOutputHM.forEach(element => {
        event.remove({ output: element});
    });

    toRemoveIdHM.forEach(element => {
        event.remove({ id: element});
    });

    toRemoveTypeHM.forEach(element => {
        event.remove({ type: element});
    });

    toRemoveTypeInputHM.forEach(element => {
        event.remove({ type: element[0], input: element[1]});
    });

    
    
})