
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('nether_mythrilium_rich_magma')
        .fluid()
        .components('5x mythrilium')
        .color(0x333300);

    event.create('nether_adamantite_rich_magma')
        .fluid()
        .components('5x adamantite')
        .color(0x660000);

    event.create('nether_estaltine_rich_magma')
        .fluid()
        .components('5x estaltine')
        .color(0x009999);

});