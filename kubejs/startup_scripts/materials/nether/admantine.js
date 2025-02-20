
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('adamantite_hydroxide')
        .dust()
        .components('1x adamantine', '3x oxygen', '3x hydrogen')
        .color(0xcc0099)
        .flags(no_decomp);

    event.create('adamantite_oxide')
        .dust()
        .components('2x adamantine', '3x oxygen')
        .color(0xcc6699)
        .flags(no_decomp);

});