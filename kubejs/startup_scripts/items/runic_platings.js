
StartupEvents.registry('item', event => {

    event.create('runic_engraved_plating')
        .displayName('Runic-Engraved Plating')
        .texture('kubejs:item/gate_items/rune_engraved_plating')
        .rarity('epic')
        .tooltip('Mikerooni + Runes = Mikerunies');

    event.create('runic_pathway_engraved_plating')
        .displayName('Runic Pathway-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_pathway_engraved_plating')
        .rarity('rare');

    event.create('runic_stabilization_plating')
        .displayName('Runic Stabilization Plating')
        .texture('kubejs:item/gate_items/runic_stable_plating')
        .rarity('rare');

    event.create('runic_energized_plating')
        .displayName('Runic-Energized Plating')
        .texture('kubejs:item/gate_items/runic_energized_plating')
        .rarity('rare');

    event.create('runic_transportation_engraved_plating')
        .displayName('Runic Transportation-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_transport_plating')
        .rarity('epic');

    event.create('runic_wave_generator')
        .displayName('Drack-ion Runic Wave Generator')
        .texture('kubejs:item/gate_items/drack-ion_runic_wave_generator')
        .rarity('epic');

    event.create('runic_energized_transportation_plating')
        .displayName('Runic Energized Transportation-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_transport_energized_plating')
        .rarity('uncommon');

    event.create('runic_energized_pathway_plating')
        .displayName('Runic Energized Pathway-Engraved Plating')
        .texture('kubejs:item/gate_items/runic_pathway_energized_plating')
        .rarity('uncommon');

});