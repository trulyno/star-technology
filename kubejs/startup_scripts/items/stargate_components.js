
StartupEvents.registry('item', event => {

    event.create('crude_stargate_rod')
        .texture('kubejs:item/gate_items/crude_stargate_rod')
        .rarity('rare')
        .tooltip("It doesn't seem ready for use quite yet...");

    event.create('stargate_rod')
        .texture('kubejs:item/gate_items/stargate_rod')
        .rarity('epic')
        .tooltip('The muscles of a stargate, if you will...');

    event.create('computational_super_matrix')
        .displayName('Computation Supermatrix')
        .texture('kubejs:item/gate_items/computation-super-matrix')
        .rarity('rare');

    event.create('classic_stargate_computer_core')
        .displayName('Classic Encoded Computational Unit')
        .rarity('uncommon')
        .texture('kubejs:item/gate_items/classic_computational_core');

    event.create('classic_chevron_disk')
        .displayName('Classic Stargate Chevron Disk')
        .rarity('rare')
        .texture('kubejs:item/gate_items/classic_chevron_disk');

    event.create('ancient_stargate_computer_core')
        .displayName('Ancient Encoded Computational Unit')
        .rarity('uncommon')
        .texture('kubejs:item/gate_items/ancient_stargate_computer_core');

    event.create('ancient_chevron_disk')
        .displayName('Ancient Stargate Chevron Disk')
        .rarity('rare')
        .texture('kubejs:item/gate_items/ancient_chevron_disk');

    event.create('classic_chevron_assembly')
        .displayName('Classic Stargate Chevron Assembly')
        .rarity('rare')
        .texture('kubejs:item/gate_items/classic_chevron_assembly');
    
    event.create('draconic_coordinate_core')
        .displayName('Draconic Coordinate Core')
        .rarity('epic')
        .tooltip('The Ultimate Eye of Ender')
        .texture('kubejs:item/gate_items/draconic_core');

    event.create('hell_core')
        .displayName('Hell Core')
        .rarity('rare')
        .texture('kubejs:item/gate_items/hell_core');

    event.create('void_core')
        .displayName('Void Core')
        .rarity('rare')
        .texture('kubejs:item/gate_items/void_core');

    const runic_tablet = ['1','2','3','4','5','6','complete']
    let fragment;
    runic_tablet.forEach(piece =>{
        if(piece == 'complete') {fragment = 'Unified'}
            else{fragment = `Fragment ${piece}`};
            event.create(`runic_tablet_${piece}`)
                .displayName(`Runic Tablet ${fragment}`)
                .rarity('uncommon')
                .texture(`kubejs:item/gate_items/rune_tablet_${piece}`)

    });

});