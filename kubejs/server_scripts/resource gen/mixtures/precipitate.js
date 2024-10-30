ServerEvents.recipes(event => {
    
    event.custom({
        "type": "exnihilosequentia:precipitate",
        "fluid": ('kubejs:iron_mixture 1000'),
        "input": {
            "item": "exnihilosequentia:dust"},
        "result": 'kubejs:coagulated_iron_mixture'
    })

    event.custom({
        "type": "exnihilosequentia:precipitate",
        "fluid": ('kubejs:copper_mixture 1000'),
        "input": {
            "item": "exnihilosequentia:dust"},
        "result": 'kubejs:coagulated_copper_mixture'
    })

    event.custom({
        "type": "exnihilosequentia:precipitate",
        "fluid": ('kubejs:quartz_mixture 1000'),
        "input": {
            "item": "exnihilosequentia:dust"},
        "result": 'kubejs:coagulated_quartz_mixture'
    })

    event.custom({
        "type": "exnihilosequentia:precipitate",
        "fluid": ('minecraft:lava 1000'),
        "input": {
            "item": "exnihilosequentia:dust"},
        "result": 'kubejs:coagulated_lava'
    })

})