
GTCEuStartupEvents.registry('gtceu:material', event => {

    const plates = global.flags.plates;
    const frame = global.flags.frame;
    const rod = global.flags.rod;
    const va = global.va;
    const dull = global.iconSets.dull;
    const metallic = global.iconSets.metallic;

    event.create('birmabright')
        .ingot()
        .components('7x aluminium', '2x magnesium', '1x manganese')
        .color(0xbfbfbf)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('duralumin')
        .ingot()
        .components('4x aluminium', '3x copper', '1x magnesium', '1x manganese')
        .color(0x66ccff)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('hydronalium')
        .ingot()
        .components('6x aluminium', '3x magnesium', '1x manganese')
        .color(0x660000)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('beryllium_aluminium_alloy')
        .ingot()
        .components('7x beryllium', '1x aluminium')
        .color(0x006699)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('elgiloy')
        .ingot()
        .components('4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese')
        .color(0xff00ff)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('beryllium_bronze')
        .ingot()
        .components('10x copper', '1x beryllium')
        .color(0x003300)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('silicon_bronze')
        .ingot()
        .components('32x copper', '2x silicon', '1x manganese')
        .color(0x1a1a1a)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('kovar')
        .ingot()
        .components('18x iron', '11x nickel', '6x cobalt')
        .color(0x000080)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('zamak')
        .ingot()
        .components('1x zinc', '4x aluminium', '3x copper')
        .color(0x8c8c8c)
        .flags(plates, frame, rod)
        .iconSet(dull)
        .blastTemp(2200, 'low', va.mv, 2000);

    event.create('tumbaga')
        .ingot()
        .components('20x copper', '6x gold', '1x silver')
        .color(0xffdb4d)
        .flags(plates, frame, rod)
        .iconSet(metallic)
        .blastTemp(2200, 'low', va.mv, 2000);

});