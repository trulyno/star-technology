ServerEvents.recipes(event => {

    const toRemoveOutputHM = [
        'exnihilosequentia:silkworm'
    ];

    const toRemoveIdHM = [
        'gtceu:shaped/mortar_flint',/^gtceu:shapeless.*_planks/
    ];

    const toRemoveTypeHM = [
        'minecraft:enchantment'
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

