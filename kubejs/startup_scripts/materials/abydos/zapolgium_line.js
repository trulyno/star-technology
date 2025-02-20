
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('zapolgium_aluminium_oxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '2x aluminium', '4x oxygen')
        .color(0x6666ff)
        .flags(no_decomp);

    event.create('zapolgium_diiodide_dioxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '2x oxygen')
        .color(0x660066)
        .flags(no_decomp);

    event.create('zapolgium_diiodide_oxide')
        .dust()
        .components('1x zapolgium', '2x iodine', '1x oxygen')
        .color(0xff66ff)
        .flags(no_decomp);

    event.create('zapolgium_oxide')
        .dust()
        .components('1x zapolgium', '1x oxygen')
        .color(0xff9933)
        .flags(no_decomp);

    event.create('zapolgium_chloride')
        .dust()
        .components('1x zapolgium', '2x chlorine')
        .color(0x99ff33)
        .flags(no_decomp);

    event.create('zapolgium_hydroxide')
        .dust()
        .components('1x zapolgium', '2x oxygen', '2x hydrogen')
        .color(0x00ff99)
        .flags(no_decomp);

});