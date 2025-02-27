ServerEvents.recipes(event => {

    const toRemoveOutputHM = [
        'exnihilosequentia:silkworm','#exnihilosequentia:crook','#exnihilosequentia:hammer'
    ];

    const toRemoveIdHM = [
        /^gtceu:.*flisnt.*/,/^gtceu:shapeless.*_planks/,/^exnihilosequentia:crushing.*/,/^gtceu:shaped.plate/,
    //[^(?!^rubber$)] <- rubber sheet recipe is kjs and other rubbers is solidifier and bender only, wood is compressor for treated and crafting for regular
        /^gtceu:shaped.ring.*[^(?!^rubber$)]/,/^gtceu:shaped.stick.*[^(?!^.*_rubber_.*$)]/, 
    // poly rubbers and other rubbers are being wierd but you have solidifier by the time you get to pvc/ptfe so :3
        /^gtceu:shaped.*wire_.*[^(?!^cutter$)]/, /^gtceu:shapeless.fine.*/, /^gtceu:shaped.screw_.*/, /^gtceu:shaped.*gear.*/, /^gtceu:shaped.bolt.*/, /^gtceu:shaped.rotor.*/, /^gtceu:shaped.spring.*/, /^gtceu:shaped.*pipe.*/, /^gtceu:shaped.foil.*/, /^gtceu:shapeless.*cable.*/, /^gtceu:shaped.buzzsaw.*/, /^gtceu:shaped.round.*/,
    //plates -> single and double, stick -> long and short rod, gear -> both small and normal, pipe -> exclusion of quad and non dont work, all pipes + constricting, cable-> just a sweep on all cable crafting table recipie
        'create:crafting/kinetics/shaft', /^create:crafting.*cogwheel.*/, 'create:crafting/kinetics/belt_connector',/^farmersdelight:.*knife/, 'minecraft:crafting_table'
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

