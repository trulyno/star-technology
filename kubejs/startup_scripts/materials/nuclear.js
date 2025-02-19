
GTCEuStartupEvents.registry('gtceu:material', event => {

    const va = global.va;
    const plates = global.flags.plates;
    const rod = global.flags.rod;
    const frame = global.flags.frame;
    const no_decomp = global.flags.no_decomp;
    const metallic = global.iconSets.metallic;
    const SHINY = global.iconSets.SHINY;

    // Nuclear Reactor Materials
    event.create('austenitic_stainless_steel_304')
        .ingot(1)
        .fluid()
        .components('35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon')
        .color(0x800040)
        .blastTemp(3500, 'low', va.ev, 1500)
        .iconSet(metallic)
        .flags(plates, rod, frame);

    event.create('inconel_625')
        .ingot()
        .fluid()
        .components('7x nickel', '2x chromium', '1x steel')
        .color(0xa3a375)
        .blastTemp(3500, 'low', va.ev, 1500)
        .iconSet(SHINY)
        .flags(plates, rod, frame);

    event.create('nuclear_steam')
        .fluid()
        .components('1x steam', '1x mystery')
        .color(0xcccccc)
        .flags(no_decomp);

    event.create('hot_sodium_potassium')
        .fluid()
        .components('1x sodium_potassium', '1x mystery')
        .color(0x82fcc3)
        .flags(no_decomp);

    event.create('hot_pcb_coolant')
        .fluid()
        .components('1x pcb_coolant', '1x mystery')
        .color(0xc9ca81)
        .flags(no_decomp);

});