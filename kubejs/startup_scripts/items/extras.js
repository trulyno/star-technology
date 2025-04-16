
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
        .texture('kubejs:item/kits/upgrade_kit')
        .tooltip('§7Used to upgrade some HV machines into multiblocks capable of §6Perfect Overclock');

});