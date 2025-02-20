
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('estaltine_sulfate')
        .dust()
        .components('1x estalt', '2x sulfur', '8x oxygen')
        .color(0xcc6699)
        .flags(no_decomp);

    event.create('estaltine_fluoride')
        .dust()
        .components('1x estalt', '4x fluorine')
        .color(0xffcc66)
        .flags(no_decomp);

    event.create('estaltine_hydroxide')
        .dust()
        .components('1x estalt', '4x oxygen', '4x hydrogen')
        .color(0xff3300)
        .flags(no_decomp);

    event.create('estaltine_oxide')
        .dust()
        .components('1x estalt', '2x oxygen')
        .color(0x990000)
        .flags(no_decomp);

});