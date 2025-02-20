
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;
    const rod = global.flags.rod;
    const long_rod = global.flags.long_rod;
    const frame = global.flags.frame;
    const va = global.va;
    const dull = global.iconSets.dull;

    // Echo/Void Line
    event.create('echo_r')
        .element(GTElements.get('echo_r'))
        .fluid()
        .color(0x003333)
        .iconSet(dull);

    event.create('raw_void')
        .components('1x echo_r', '1x neutronium')
        .ingot(1)
        .color(0x006666)
        .flags(no_decomp)
        .iconSet(dull);

    event.create('void')
        .components('1x echo_r', '1x neutronium')
        .ingot(1)
        .blastTemp(10799, 'highest', va.uev, 8000)
        .color(0x001a1a)
        .iconSet(dull)
        .flags(rod, long_rod, frame, no_decomp);

});