ItemEvents.modification(event => {
    function durability(target, durability) {
        event.modify(target, item =>{
            item.maxDamage = durability
        })
    }
    // Hammers
    durability('exdeorum:stone_hammer', 256)
    durability('exdeorum:iron_hammer', 512)
    durability('exdeorum:diamond_hammer', 4096)
    durability('exdeorum:wooden_hammer', 128)
    durability('exdeorum:golden_hammer', 64)
    durability('exdeorum:netherite_hammer', 8192)

    // Crooks
    durability('exdeorum:crook', 128)
    durability('exdeorum:bone_crook', 256)
})
