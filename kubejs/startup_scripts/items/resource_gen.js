StartupEvents.registry('item', event => {

    // Mycelium Leather
    event.create('compressed_mycelium');
    event.create('smoked_mycelium');
    event.create('mycelium_growth');

    //Akreyrium
    event.create('crystallised_akreyrium')
        .displayName('Crystallised Akreyrium')
        .texture('kubejs:item/crystallised_akreyrium');

    event.create('netherite_reinforced_mesh')
        .displayName('Netherite Reinforced Mesh')
        .texture('kubejs:item/netherite_reinforced_mesh');

    //Nether Stars
    ['Fire', 'Ice', 'Earth', 'Lightning'].forEach(type => {
        event.create(`${type.toLowerCase()}_infused_shard`)
            .displayName(`${type.replace(/_/, ' ')} Infused Shard`)
            .texture(`kubejs:item/lines/netherstar/${type.toLowerCase()}_infused_shard`);
        });

    event.create('star_casting_mold')
        .displayName('Casting Mold (Star)')
        .texture('kubejs:item/lines/netherstar/star_casting_mold');
    
    event.create('impure_nether_star')
        .displayName('Impure Nether Star')
        .texture('kubejs:item/lines/netherstar/impure_nether_star');
        
    event.create('energized_nether_star_shard')
        .displayName('Energized Nether Star Shard')
        .texture('kubejs:item/lines/netherstar/energized_nether_star_shard');
    
    //Mystical Magmas
    event.create('ancient_netherite_reinforced_mesh')
        .displayName('Ancient-Netherite Reinforced Mesh')
        .texture('kubejs:item/ancient_netherite_reinforced_mesh');
});