ServerEvents.tags('item', event => {

    // Defined in startup_events/util.js
    event.removeAllTagsFrom(global.unifiedRegex)
})


ServerEvents.recipes(event => {

    // Dealing with Hammerlib Jank
    event.replaceInput({input: '#forge:gears/iron'},
        '#forge:gears/iron',
        'gtceu:iron_gear'
    )
    event.replaceInput({input: '#forge:gears/diamond'},
        '#forge:gears/diamond',
        'gtceu:diamond_gear'
    )
    
    event.remove({input: global.hammerlib})
    event.remove({output: global.hammerlib})
})
