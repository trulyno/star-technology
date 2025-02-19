
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('sodium_borohydride')
        .dust()
        .components('1x sodium','1x boron','4x hydrogen')
        .color(0xE3DEC8);

    event.create('nitrate')
        .gas()
        .components('1x nitrogen', '3x oxygen')
        .color(0xDBC365);

    event.create('bismuth_3_nitrate')
        .dust()
        .components('1x bismuth', '3x nitrate')
        .color(0xDEDBCD);

    event.create('sodium_nitrate')
        .dust()
        .components('1x sodium','1x nitrogen','3x oxygen')
        .color(0xE6E5E5);

    event.create('diborane')
        .gas()
        .components('2x boron','6x hydrogen')
        .color(0xFDFFE1);

    event.create('silicon_carbide')
        .dust()
        .components('1x silicon', '1x carbon')
        .color(0xB79F8D);
        
    event.create('bismuth_tritelluride')
        .dust()
        .components('2x bismuth', '3x tellurium')
        .color(0xDEB18E);

    event.create('silicon_carbide_over_bismuth_tritelluride')
        .dust()
        .components('1x silicon_carbide', '1x bismuth_tritelluride')
        .color(0x86C455);

});