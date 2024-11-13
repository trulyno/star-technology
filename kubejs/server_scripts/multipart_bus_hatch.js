// Readds Multipart bus/hatch recipes removed in 1.20.1 GT 
// for LV, ULV and MV tiers with parity to the 1.19.2 BETA 10 hotfix 4 recipes.
ServerEvents.recipes(event => {
    ['ulv', 'lv', 'mv'].forEach(tier => {
        // Busses
        event.shaped(Item.of(`gtceu:${tier}_input_bus`), [
            ' C ',
            ' M ',
            '   '
        ], {
            C: '#forge:chests/wooden',
            M: `gtceu:${tier}_machine_hull`
        });
        event.shaped(Item.of(`gtceu:${tier}_output_bus`), [
            '   ',
            ' M ',
            ' C '
        ], {
            C: '#forge:chests/wooden',
            M: `gtceu:${tier}_machine_hull`
        });
        // Hatches
        event.shaped(Item.of(`gtceu:${tier}_input_hatch`), [
            ' G ',
            ' M ',
            '   '
        ], {
            G: '#forge:glass',
            M: `gtceu:${tier}_machine_hull`
        });
        event.shaped(Item.of(`gtceu:${tier}_output_hatch`), [
            '   ',
            ' M ',
            ' G '
        ], {
            G: '#forge:glass',
            M: `gtceu:${tier}_machine_hull`
        });
    });
})