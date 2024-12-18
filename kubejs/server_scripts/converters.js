
ServerEvents.recipes(event => {

    event.remove({ output: /gtceu:.*_energy_converter/ });

    // LV soul infused
    event.shaped(Item.of('gtceu:lv_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:soul_infused_single_wire',
        C: '#gtceu:circuits/lv',
        S: 'gtceu:lv_machine_hull'
    });

    event.shaped(Item.of('gtceu:lv_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:soul_infused_quadruple_wire',
        C: '#gtceu:circuits/lv',
        S: 'gtceu:lv_machine_hull'
    });

    event.shaped(Item.of('gtceu:lv_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:soul_infused_octal_wire',
        C: '#gtceu:circuits/lv',
        S: 'gtceu:lv_machine_hull'
    });

    event.shaped(Item.of('gtceu:lv_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:soul_infused_hex_wire',
        C: '#gtceu:circuits/lv',
        S: 'gtceu:lv_machine_hull'
    });

    // MV signalum
    event.shaped(Item.of('gtceu:mv_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:signalum_single_wire',
        C: '#gtceu:circuits/mv',
        S: 'gtceu:mv_machine_hull'
    });

    event.shaped(Item.of('gtceu:mv_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:signalum_quadruple_wire',
        C: '#gtceu:circuits/mv',
        S: 'gtceu:mv_machine_hull'
    });

    event.shaped(Item.of('gtceu:mv_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:signalum_octal_wire',
        C: '#gtceu:circuits/mv',
        S: 'gtceu:mv_machine_hull'
    });

    event.shaped(Item.of('gtceu:mv_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:signalum_hex_wire',
        C: '#gtceu:circuits/mv',
        S: 'gtceu:mv_machine_hull'
    });

    // HV lumium
    event.shaped(Item.of('gtceu:hv_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:lumium_single_wire',
        C: '#gtceu:circuits/hv',
        S: 'gtceu:hv_machine_hull'
    });

    event.shaped(Item.of('gtceu:hv_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:lumium_quadruple_wire',
        C: '#gtceu:circuits/hv',
        S: 'gtceu:hv_machine_hull'
    });

    event.shaped(Item.of('gtceu:hv_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:lumium_octal_wire',
        C: '#gtceu:circuits/hv',
        S: 'gtceu:hv_machine_hull'
    });

    event.shaped(Item.of('gtceu:hv_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:lumium_hex_wire',
        C: '#gtceu:circuits/hv',
        S: 'gtceu:hv_machine_hull'
    });

    // EV enderium
    event.shaped(Item.of('gtceu:ev_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:enderium_single_wire',
        C: '#gtceu:circuits/ev',
        S: 'gtceu:ev_machine_hull'
    });

    event.shaped(Item.of('gtceu:ev_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:enderium_quadruple_wire',
        C: '#gtceu:circuits/ev',
        S: 'gtceu:ev_machine_hull'
    });

    event.shaped(Item.of('gtceu:ev_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:enderium_octal_wire',
        C: '#gtceu:circuits/ev',
        S: 'gtceu:ev_machine_hull'
    });

    event.shaped(Item.of('gtceu:ev_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:enderium_hex_wire',
        C: '#gtceu:circuits/ev',
        S: 'gtceu:ev_machine_hull'
    });

    //IV shellite
    event.shaped(Item.of('gtceu:iv_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:shellite_single_wire',
        C: '#gtceu:circuits/iv',
        S: 'gtceu:iv_machine_hull'
    });

    event.shaped(Item.of('gtceu:iv_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:shellite_quadruple_wire',
        C: '#gtceu:circuits/iv',
        S: 'gtceu:iv_machine_hull'
    });

    event.shaped(Item.of('gtceu:iv_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:shellite_octal_wire',
        C: '#gtceu:circuits/iv',
        S: 'gtceu:iv_machine_hull'
    });

    event.shaped(Item.of('gtceu:iv_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:shellite_hex_wire',
        C: '#gtceu:circuits/iv',
        S: 'gtceu:iv_machine_hull'
    });

    //LuV twinite
    event.shaped(Item.of('gtceu:luv_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:twinite_single_wire',
        C: '#gtceu:circuits/luv',
        S: 'gtceu:luv_machine_hull'
    });

    event.shaped(Item.of('gtceu:luv_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:twinite_quadruple_wire',
        C: '#gtceu:circuits/luv',
        S: 'gtceu:luv_machine_hull'
    });

    event.shaped(Item.of('gtceu:luv_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:twinite_octal_wire',
        C: '#gtceu:circuits/luv',
        S: 'gtceu:luv_machine_hull'
    });

    event.shaped(Item.of('gtceu:luv_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:twinite_hex_wire',
        C: '#gtceu:circuits/luv',
        S: 'gtceu:luv_machine_hull'
    });

    //ZPM dragonsteel
    event.shaped(Item.of('gtceu:zpm_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:dragonsteel_single_wire',
        C: '#gtceu:circuits/zpm',
        S: 'gtceu:zpm_machine_hull'
    });

    event.shaped(Item.of('gtceu:zpm_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:dragonsteel_quadruple_wire',
        C: '#gtceu:circuits/zpm',
        S: 'gtceu:zpm_machine_hull'
    });

    event.shaped(Item.of('gtceu:zpm_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:dragonsteel_octal_wire',
        C: '#gtceu:circuits/zpm',
        S: 'gtceu:zpm_machine_hull'
    });

    event.shaped(Item.of('gtceu:zpm_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:dragonsteel_hex_wire',
        C: '#gtceu:circuits/zpm',
        S: 'gtceu:zpm_machine_hull'
    });

     //UV prismalium
     event.shaped(Item.of('gtceu:uv_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:prismalium_single_wire',
        C: '#gtceu:circuits/uv',
        S: 'gtceu:uv_machine_hull'
    });

    event.shaped(Item.of('gtceu:uv_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:prismalium_quadruple_wire',
        C: '#gtceu:circuits/uv',
        S: 'gtceu:uv_machine_hull'
    });

    event.shaped(Item.of('gtceu:uv_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:prismalium_octal_wire',
        C: '#gtceu:circuits/uv',
        S: 'gtceu:uv_machine_hull'
    });

    event.shaped(Item.of('gtceu:uv_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:prismalium_hex_wire',
        C: '#gtceu:circuits/uv',
        S: 'gtceu:uv_machine_hull'
    });

    //UHV stellarium
    event.shaped(Item.of('gtceu:uhv_1a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:stellarium_single_wire',
        C: '#gtceu:circuits/uhv',
        S: 'gtceu:uhv_machine_hull'
    });

    event.shaped(Item.of('gtceu:uhv_4a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:stellarium_quadruple_wire',
        C: '#gtceu:circuits/uhv',
        S: 'gtceu:uhv_machine_hull'
    });

    event.shaped(Item.of('gtceu:uhv_8a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:stellarium_octal_wire',
        C: '#gtceu:circuits/uhv',
        S: 'gtceu:uhv_machine_hull'
    });

    event.shaped(Item.of('gtceu:uhv_16a_energy_converter'), [
        '   ',
        'WCW',
        'WSW'
    ], {
        W: 'gtceu:stellarium_hex_wire',
        C: '#gtceu:circuits/uhv',
        S: 'gtceu:uhv_machine_hull'
    });
});