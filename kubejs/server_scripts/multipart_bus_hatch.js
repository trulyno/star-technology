// Readds Multipart bus/hatch recipes removed in 1.20.1 GT 
// for ULV and LV tiers with parity to the GTceuM assembler recipes.
ServerEvents.recipes(event => {
    // ULV
    // Busses
    event.shaped(Item.of('gtceu:ulv_input_bus'), [
        ' C ',
        ' M ',
        '   '], {
        C: '#forge:chests/wooden',
        M: 'gtceu:ulv_machine_hull'
    });
    event.shaped(Item.of('gtceu:ulv_output_bus'), [
        '   ',
        ' M ',
        ' C '], {
        C: '#forge:chests/wooden',
        M: 'gtceu:ulv_machine_hull'
    });
    // Hatches
    event.shaped(Item.of('gtceu:ulv_input_hatch'), [
        ' G ',
        ' M ',
        '   '], {
        G: '#forge:glass',
        M: 'gtceu:ulv_machine_hull'
    });
    event.shaped(Item.of('gtceu:ulv_output_hatch'), [
        '   ',
        ' M ',
        ' G '], {
        G: '#forge:glass',
        M: 'gtceu:ulv_machine_hull'
    });

    // LV
    // Busses
    event.shaped(Item.of('gtceu:lv_input_bus'), [
        ' C ',
        ' M ',
        '   '], {
        C: 'gtceu:wood_crate',
        M: 'gtceu:lv_machine_hull'
    });
    event.shaped(Item.of('gtceu:lv_output_bus'), [
        '   ',
        ' M ',
        ' C '], {
        C: 'gtceu:wood_crate',
        M: 'gtceu:lv_machine_hull'
    });
    // Hatches
    event.shaped(Item.of('gtceu:lv_input_hatch'), [
        ' G ',
        ' M ',
        '   '], {
        G: 'gtceu:wood_drum',
        M: 'gtceu:lv_machine_hull'
    });
    event.shaped(Item.of('gtceu:lv_output_hatch'), [
        '   ',
        ' M ',
        ' G '], {
        G: 'gtceu:wood_drum',
        M: 'gtceu:lv_machine_hull'
    });

});