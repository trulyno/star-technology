
StartupEvents.registry('item', event => {

    event.create('crude_stargate_rod')
        .texture('kubejs:item/gate_items/crude_stargate_rod')
        .rarity('rare')
        .tooltip('It doesn\'t seem ready for use quite yet...');

    event.create('stargate_rod')
        .texture('kubejs:item/gate_items/stargate_rod')
        .rarity('epic')
        .tooltip('The muscles of a stargate, if you will...');

    event.create('untreated_infernal_stargate_rod')
        .texture('kubejs:item/gate_items/untreated_infernal_stargate_rod')
        .displayName('§bUntreated §4Infernal§b Stargate Rod')
        .tooltip('Hot, but not hot enough...');

    event.create('infernal_stargate_rod')
        .texture('kubejs:item/gate_items/infernal_stargate_rod')
        .displayName('§4Infernal§d Stargate Rod')
        .tooltip('Burning Energy holds §nIMMENSE§r power...');

    event.create('untreated_abyssal_stargate_rod')
        .texture('kubejs:item/gate_items/untreated_abyssal_stargate_rod')
        .displayName('§bUntreated §5Abyssal§b Stargate Rod')
        .tooltip('Empty, but not empty enough...');

    event.create('abyssal_stargate_rod')
        .texture('kubejs:item/gate_items/abyssal_stargate_rod')
        .displayName('§5Abyssal§d Stargate Rod')
        .tooltip('Concentrated Entropy allows §nPHENOMAL§r actions...');

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
    
    event.create('empty_coordinate_core')
        .displayName('Empty Coordinate Core')
        .texture('kubejs:item/gate_items/empty_coordinate_core');

    event.create('draconic_coordinate_core')
        .displayName('§dDraconic Coordinate Core')
        .tooltip('The §o§6Ultimate§r Eye of Ender')
        .texture('kubejs:item/gate_items/draconic_core');

    event.create('inferno_fragment')
        .displayName('§4§m§oInferno§r Fragment')
        .texture('kubejs:item/gate_items/inferno_fragment');

    event.create('abyss_fragment')
        .displayName('§5§m§oAbyss§r Fragment')
        .texture('kubejs:item/gate_items/abyss_fragment');

    event.create('hell_core')
        .displayName('§4Hell Core')
        .texture('kubejs:item/gate_items/hell_core');

    event.create('void_core')
        .displayName('§5Void Core')
        .texture('kubejs:item/gate_items/void_core');
        
    const runicPieces = [
        { id: '1', numeral: 'I' },
        { id: '2', numeral: 'II' },
        { id: '3', numeral: 'III' },
        { id: '4', numeral: 'IV' },
        { id: '5', numeral: 'V' },
        { id: '6', numeral: 'VI' },
        { id: 'complete', numeral: 'Unified' }
    ];

    runicPieces.forEach(piece => {
        event.create(`runic_tablet_${piece.id}`)
            .displayName(`Runic Tablet ${piece.id === 'complete' ? piece.numeral : `Fragment ${piece.numeral}`}`)
            .rarity('uncommon')
            .texture(`kubejs:item/gate_items/rune_tablet_${piece.id}`);
    });

});