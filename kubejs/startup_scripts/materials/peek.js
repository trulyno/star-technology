
GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;
    const foil = global.flags.foil;
    const plates = global.flags.plates;
    const ring = global.flags.ring;

    event.create('disodium_salt_of_hydroquinone')
        .dust()
        .components('6x carbon','4x hydrogen','2x oxygen','2x sodium')
        .color(0xeaeaf9)
        .flags(no_decomp);

    event.create('hydroquinone')
        .dust()
        .components('6x carbon','6x hydrogen','2x oxygen')
        .color(0xf9f9ff);

    event.create('carbon_acid')
        .gas()
        .components('2x hydrogen','1x carbon','3x oxygen')
        .color(0x333333);

    event.create('fluorobenzene')
        .fluid()
        .components('6x carbon','5x hydrogen','1x fluorine')
        .color(0xffffff);

    event.create('4_fluorobenzoyl_chloride')
        .fluid()
        .components('7x carbon','4x hydrogen','1x chlorine','1x fluorine','1x oxygen')
        .color(0xfffff0);
    
    event.create('benzoyl_chloride')
        .fluid()
        .components('7x carbon','5x hydrogen','1x chlorine','1x oxygen')
        .color(0xfffadf);

    event.create('benzotrichloride')
        .fluid()
        .components('7x carbon','5x hydrogen','3x chlorine')
        .color(0xddd8bc);

    event.create('44_difluorobenzophenone') //naming like this: 4_4_di... will make kubejs go error to annoy you :)
        .dust()
        .components('13x carbon','8x hydrogen','1x oxygen','2x fluorine') 
        .color(0xeee1c9)
        .flags(no_decomp);
    
    event.create('polyether_ether_ketone')
        .fluid()
        .polymer()
        .components('19x carbon','12x hydrogen','3x oxygen') 
        .color(0xccbba7)
        .flags(no_decomp)
        .flags(foil, plates, ring)
        .fluidPipeProperties(550, 600, true, true, true, false);

});