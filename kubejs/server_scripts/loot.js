LootJS.modifiers((event) => {
    
    const abydosTemple = [
        {loot: 'minecraft:gold_block', chance: .1},
        {loot: 'minecraft:enchanted_golden_apple', chance: .05},
        {loot: 'start_core:bacteria_dormant', chance: .15},
        {loot: 'kubejs:runic_tablet_1', chance: .05},
        {loot: 'kubejs:runic_tablet_2', chance: .05},
        {loot: 'kubejs:runic_tablet_3', chance: .05},
        {loot: 'kubejs:runic_tablet_4', chance: .05},
        {loot: 'kubejs:runic_tablet_5', chance: .05},
        {loot: 'kubejs:runic_tablet_6', chance: .05}
        ];
    abydosTemple.forEach(templeLoot => {
        event
        .addLootTableModifier('sgjourney:chests/desert_pyramid_loot_room')
        .randomChance(templeLoot.chance)
        .addLoot(templeLoot.loot);
    })
    
});