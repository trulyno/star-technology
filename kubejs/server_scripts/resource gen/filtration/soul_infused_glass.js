ServerEvents.recipes(event => { 
    //tempered_glass
    event.custom({
        "type": "exnihilosequentia:precipitate",
        "fluid": ('minecraft:lava 1000'),
        "input": {
            "item": "minecraft:glass"},
        "result": 'gtceu:tempered_glass'
    })
    //liquid soul infused
    event.custom({
        "type": "exnihilosequentia:transition",
        "catalyst": {
          "item": "gtceu:soul_infused_block"},
        "fluidInTank": ('minecraft:lava 1000'),
        "result": ("gtceu:soul_infused 1000")
    })
    //soul infused glass
    event.custom({
        "type": "exnihilosequentia:precipitate",
        "fluid": ('gtceu:soul_infused 1000'),
        "input": {
            "item": "gtceu:tempered_glass"},
        "result": 'thermal_extra:soul_infused_glass'
    })
})
