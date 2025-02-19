BlockEvents.modification(event => {
    event.modify(/log/, (block) => (block.requiresTool = true));
    ['oak','birch','acacia','cherry','dark_oak','jungle','mangrove','spruce'].forEach (log => {
      event.modify(`minecraft:${log}_wood`, (block) => (block.requiresTool = true)),
      event.modify(`minecraft:stripped_${log}_wood`, (block) => (block.requiresTool = true))});
    
  });