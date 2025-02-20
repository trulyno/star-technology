
GTCEuStartupEvents.registry('gtceu:material', event => {

    const plates = global.flags.plates;
    const rod = global.flags.rod;
    const no_decomp = global.flags.no_decomp;
    const dull = global.iconSets.dull;

    // Mystical Agriculture Alloys
    event.create('inferium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(dull)
        .color(0x66ff33)
        .flags(plates, rod, no_decomp);

    event.create('prudentium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(dull)
        .color(0x336600)
        .flags(plates, rod, no_decomp);

    event.create('tertium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(dull)
        .color(0xff6600)
        .flags(plates, rod, no_decomp);

    event.create('imperium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(dull)
        .color(0x0099ff)
        .flags(plates, rod, no_decomp);

    event.create('supremium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(dull)
        .color(0xff0000)
        .flags(plates, rod, no_decomp);

    event.create('awakened_supremium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(dull)
        .color(0xff3300)
        .flags(plates, rod, no_decomp);

    event.create('insanium_steel')
        .ingot()
        .components('1x steel', '1x mystery')
        .iconSet(dull)
        .color(0x9900cc)
        .flags(plates, rod, no_decomp);

});