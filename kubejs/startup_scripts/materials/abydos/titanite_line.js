
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('titanite_slurry')
        .fluid()
        .components('1x titanite', '1x mystery')
        .color(0x862d2d)
        .flags(no_decomp);

    event.create('titanite_slurry_residue')
        .fluid()
        .components('1x rutile', '1x mystery')
        .color(0xbf4040)
        .flags(no_decomp);

    event.create('hydroxo_dioxo_titanite_mixture')
        .fluid()
        .components('1x sodium', '1x rutile', '2x oxygen', '2x hydrogen', '1x mystery')
        .color(0xd27979)
        .flags(no_decomp);

    event.create('titanite_residue')
        .fluid()
        .components('1x rutile', '1x mystery')
        .color(0xe6004c)
        .flags(no_decomp);

    event.create('titanium_tetrachloride_mixture')
        .fluid()
        .components('1x titanium_tetrachloride', '1x mystery')
        .color(0xff1a66)
        .flags(no_decomp);

    event.create('zirconium_tetrachloride')
        .dust()
        .components('1x zirconium', '4x chlorine')
        .color(0xffad33)
        .flags(no_decomp);

});