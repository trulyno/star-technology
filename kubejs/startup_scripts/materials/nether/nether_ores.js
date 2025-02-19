
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('mythrilium')
        .dust()
        .ore(4, 2)
        .components('1x mythril', '1x silicon', '6x fluorine')
        .color(0x660033)
        .flags(no_decomp);

    event.create('adamantite')
        .dust()
        .ore(4, 2)
        .components('1x adamantine', '3x fluorine', '1x antimony')
        .color(0x3333cc)
        .flags(no_decomp);

    event.create('estaltine')
        .dust()
        .ore(4, 2)
        .components('4x estalt', '1x sulfur')
        .color(0x800000)
        .flags(no_decomp);

    event.create('rheniite')
        .dust()
        .ore(4, 2)
        .components('1x rhenium', '2x sulfur')
        .color(0x4e6344)
        .flags(no_decomp);

});