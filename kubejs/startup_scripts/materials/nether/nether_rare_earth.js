
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('nether_rare_earth')
        .dust()
        .components('1x mystery')
        .color(0x800000)
        .flags(no_decomp);

    event.create('polonium_dioxide')
        .dust()
        .components('1x polonium', '2x oxygen')
        .color(0xcccccc);

    event.create('astatine_oxide')
        .dust()
        .components('1x astatine', '3x oxygen')
        .color(0xcccc00);

    event.create('lanthanum_triastatate')
        .dust()
        .components('1x lanthanum', '3x astatine_oxide')
        .color(0xcccccc);

    event.create('hafnium_diboride')
        .dust()
        .components('1x hafnium', '2x boron')
        .color(0x0066cc);

    event.create('seaborgium_oxychloride')
        .dust()
        .components('1x seaborgium', '2x oxygen', '2x chlorine')
        .color(0x669900);

    event.create('flerovium_oxide')
        .dust()
        .components('2x flerovium', '4x oxygen')
        .color(0x669999);

    event.create('oganesson_diiodide')
        .fluid()
        .components('1x oganesson', '2x iodine')
        .color(0xffcccc);

});