const CommonProperties = Java.loadClass('dev.latvian.mods.kubejs.CommonProperties')
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

JEIEvents.hideItems(event => {
    event.hide('gtceu:flint_hoe');
    event.hide('gtceu:flint_shovel');
    event.hide('gtceu:flint_axe');
    event.hide('gtceu:flint_block');
    event.hide('gtceu:flint_pickaxe');
    event.hide('gtceu:flint_knife');
    event.hide('gtceu:flint_mortar');
    event.hide('gtceu:flint_sword');
    event.hide('farmersdelight:iron_knife');
    event.hide('farmersdelight:netherite_knife');
    event.hide('farmersdelight:golden_knife');
    event.hide('farmersdelight:diamond_knife');
    event.hide('farmersdelight:flint_knife');
});

// JEIEvents.hideFluids(event => {
       
// });

// }
// else {

// JEIEvents.hideItems(event => {
//     event.hide('gtceu:kiln');
//     event.hide('gtceu:rugged_alloyer');
// });

};