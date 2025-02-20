ServerEvents.recipes(event => {

    const toRemoveOutputHM = [
        'exnihilosequentia:silkworm','#exnihilosequentia:crook','#exnihilosequentia:hammer'
    ];

    const toRemoveIdHM = [
        'gtceu:shaped/mortar_flint',/^gtceu:shapeless.*_planks/,/^exnihilosequentia:crushing.*/,/^gtceu:shaped.plate/ //[^(?!^rubber$)] <- rubber sheet recipe is kjs and other rubbers is solidifier and bender only, wood is compressor for treated and crafting for regular
    ];

    const toRemoveTypeHM = [
        'minecraft:enchantment','exnihilosequentia:sifting'
    ];

    const toRemoveTypeInputHM = [
        ['exnihilosequentia:harvest','#minecraft:leaves'],['exnihilosequentia:harvest','exnihilosequentia:infested_leaves'], //removes silkworm obtainability
        
       
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

    event.remove({ input: /^exnihilosequentia:.*_pebble/})
    
})

