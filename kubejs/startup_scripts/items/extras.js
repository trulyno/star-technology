
StartupEvents.registry('item', event => {

    event.create('naquadic_netherite_fibers')
        .texture('kubejs:item/naquadic_netherite_fibers')
        .rarity('rare')
        .tooltip('The strongest armor material');

    event.create('coin')
        .displayName('StarT Coin')
        .rarity('EPIC')
        .tooltip('§7Spend these coins in the store chapter of the questbook')
        .texture('kubejs:item/coin');

    event.create('multiblock_upgrade_kit')
        .displayName('Multiblock Upgrade Kit')
        .texture('kubejs:item/kits/upgrade_kit');

    event.create('crystallised_akreyrium')
        .displayName('Crystallised Akreyrium')
        .texture('kubejs:item/crystallised_akreyrium');

    event.create('netherite_reinforced_mesh')
        .displayName('Netherite Reinforced Mesh')
        .texture('kubejs:item/netherite_reinforced_mesh');

    // Mycelium Leather
    event.create('compressed_mycelium');
    event.create('smoked_mycelium');
    event.create('mycelium_growth');

});