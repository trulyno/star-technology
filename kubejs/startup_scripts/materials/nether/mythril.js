
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    event.create('trichloromythrilium')
        .dust()
        .components('1x mythril', '3x chlorine')
        .color(0x333300)
        .flags(no_decomp);

    event.create('mythrilium_oxide')
        .dust()
        .components('1x mythril', '1x oxygen')
        .color(0x003300)
        .flags(no_decomp);
        
});
