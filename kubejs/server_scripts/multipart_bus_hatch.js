if (global.packmode !== 'hard'){
    (() => {   

// Readds Multipart bus/hatch recipes removed in 1.20.1 GT 
// for ULV and LV tiers with parity to the GTceuM assembler recipes.
ServerEvents.recipes(event => {
    const id = global.id;
   [
        {tier: 'ulv', item: '#forge:chests/wooden', fluid: '#forge:glass'},
        {tier: 'lv', item: 'gtceu:wood_crate', fluid: 'gtceu:wood_drum'}
    ].forEach(tier=>{
        [
            {type: 'input', shape: [' C ',' M ','   ']},
            {type: 'output', shape: ['   ',' M ',' C ']}
        ].forEach(type=> {
            // Busses
            event.shaped(Item.of(`gtceu:${tier.tier}_${type.type}_bus`),
            type.shape, 
            {
                C: tier.item,
                M: `gtceu:${tier.tier}_machine_hull`
            }).id(`start:shaped/${tier.tier}_${type.type}_bus`);
            // Hatches
            event.shaped(Item.of(`gtceu:${tier.tier}_${type.type}_hatch`),
            type.shape,
            {
                C: tier.fluid,
                M: `gtceu:${tier.tier}_machine_hull`
            }).id(`start:shaped/${tier.tier}_${type.type}_hatch`);
        });
    });

});
})()
}