
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('isovol_solution')
        .fluid()
        .color(0x6600cc);

    event.create('calamatium_fluoride')
        .dust()
        .components('1x calamatium', '2x fluorine')
        .color(0xcc0066)
        .flags(no_decomp);

    event.create('isovol_fluoride')
        .dust()
        .components('1x isovol', '2x fluorine')
        .color(0x9900ff)
        .flags(no_decomp); 

});