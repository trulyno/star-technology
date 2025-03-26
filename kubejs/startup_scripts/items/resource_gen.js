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

    event.create('defiled_injection_catalyst')
        .displayName('§4Defiled Injection Catalyst')
        .texture('kubejs:item/akreyrium/defiled_injection_catalyst');

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
        
});