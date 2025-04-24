StartupEvents.registry('item', event => {

    // Mycelium Leather
    event.create('compressed_mycelium');
    event.create('smoked_mycelium');
    event.create('mycelium_growth');

    //Akreyrium
    event.create('crystalline_akreyrium')
        .displayName('Crystalline Akreyrium')
        .texture('kubejs:item/akreyrium/crystalline_akreyrium');
    
    event.create('amorphous_akreyrium')
        .displayName('Amorphous Akreyrium')
        .texture('kubejs:item/akreyrium/amorphous_akreyrium');
    
    event.create('blank_injection_catalyst')
        .displayName('Blank Injection Catalyst')
        .texture('kubejs:item/akreyrium/blank_injection_catalyst');

    event.create('electron_injection_catalyst')
        .displayName('§dElectron§r Injection Catalyst')
        .texture('kubejs:item/akreyrium/electron_injection_catalyst');

    event.create('tau_injection_catalyst')
        .displayName('§bTau§r Injection Catalyst')
        .texture('kubejs:item/akreyrium/tau_injection_catalyst');

    event.create('aspect_of_weight')
        .displayName('§bAspect of Weight')
        .texture('kubejs:item/akreyrium/aspect_of_weight');

    event.create('muon_injection_catalyst')
        .displayName('§aMuon§r Injection Catalyst')
        .texture('kubejs:item/akreyrium/muon_injection_catalyst');

    event.create('damaged_injection_catalyst')
        .displayName('§4Damaged Injection Catalyst')
        .texture('kubejs:item/akreyrium/damaged_injection_catalyst');

    event.create('netherite_reinforced_mesh')
        .displayName('Netherite Reinforced Mesh')
        .texture('kubejs:item/netherite_reinforced_mesh');

    //Nether Stars
    [{type: 'Fire', color: 'c'}, {type: 'Ice', color: 'b'}, {type: 'Earth', color: '8'}, {type: 'Lightning', color: 'e'}].forEach(shard => {
        const { type, color } = shard;
        event.create(`${type.toLowerCase()}_infused_shard`)
            .displayName(`§${color}${type.replace(/_/, ' ')}§r Infused Shard`)
            .texture(`kubejs:item/lines/netherstar/${type.toLowerCase()}_infused_shard`)
            .glow(true);
        });

    event.create('star_casting_mold')
        .displayName('Casting Mold (Star)')
        .texture('kubejs:item/lines/netherstar/star_casting_mold');
    
    event.create('impure_nether_star')
        .displayName('Impure Nether Star')
        .texture('kubejs:item/lines/netherstar/impure_nether_star');
        
    event.create('energized_nether_star_shard')
        .displayName('Energized Nether Star Shard')
        .texture('kubejs:item/lines/netherstar/energized_nether_star_shard')
        .glow(true);
    
    //Mystical Magmas
    event.create('ancient_netherite_reinforced_mesh')
        .displayName('Ancient-Netherite Reinforced Mesh')
        .texture('kubejs:item/ancient_netherite_reinforced_mesh');
});