ServerEvents.recipes(event => {
    
  //barrel mixing
  event.custom({
      "type": "exnihilosequentia:transition",
      "catalyst": {
        "item": "gtceu:granite_dust"
      },
      "fluidInTank": ('minecraft:lava 1000')
      ,
      "result": ("kubejs:iron_mixture 1000")
  })

  event.custom({
      "type": "exnihilosequentia:transition",
      "catalyst": {
        "item": "gtceu:andesite_dust"
      },
      "fluidInTank": ('minecraft:lava 1000')
      ,
      "result": ("kubejs:copper_mixture 1000")
  })

  event.custom({
      "type": "exnihilosequentia:transition",
      "catalyst": {
        "item": "gtceu:diorite_dust"
      },
      "fluidInTank": ('minecraft:lava 1000')
      ,
      "result": ("kubejs:quartz_mixture 1000")
  })

})