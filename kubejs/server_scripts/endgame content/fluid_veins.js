// In server events
GTCEuServerEvents.fluidVeins(event => {
  event.add('start:abydos_titanite_rich_magma_deposit', vein => {
    vein.dimensions('sgjourney:abydos')
    vein.fluid(() => Fluid.of('gtceu:abydos_titanite_rich_magma').fluid)
    vein.weight(600)
    vein.minimumYield(120)
    vein.maximumYield(720)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  })

  event.add('start:abydos_zapolite_rich_magma_deposit', vein => {
    vein.dimensions('sgjourney:abydos')
    vein.fluid(() => Fluid.of('gtceu:abydos_zapolite_rich_magma').fluid)
    vein.weight(500)
    vein.minimumYield(120)
    vein.maximumYield(720)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  })

  event.add('start:nether_mythrilium_rich_magma_deposit', vein => {
    vein.dimensions('minecraft:the_nether')
    vein.fluid(() => Fluid.of('gtceu:nether_mythrilium_rich_magma').fluid)
    vein.weight(500)
    vein.minimumYield(120)
    vein.maximumYield(720)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  })

  event.add('start:nether_adamantite_rich_magma_deposit', vein => {
    vein.dimensions('minecraft:the_nether')
    vein.fluid(() => Fluid.of('gtceu:nether_adamantite_rich_magma').fluid)
    vein.weight(500)
    vein.minimumYield(120)
    vein.maximumYield(720)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  })

  event.add('start:nether_estaltine_rich_magma_deposit', vein => {
    vein.dimensions('minecraft:the_nether')
    vein.fluid(() => Fluid.of('gtceu:nether_estaltine_rich_magma').fluid)
    vein.weight(500)
    vein.minimumYield(120)
    vein.maximumYield(720)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  })
  // event.modify(GTCEu.id('light_oil_deposit'), vein => {
  //     vein.biomes(0, 'sgjourney:abydos_desert')
  //     vein.biomes(0, 'sgjourney:abydos_spires')
  // });
  // event.modify(GTCEu.id('raw_oil_deposit'), vein => {
  //     vein.biomes(0, 'sgjourney:abydos_desert')
  //     vein.biomes(0, 'sgjourney:abydos_spires')
  // });
  // event.modify(GTCEu.id('oil_deposit'), vein => {
  //     vein.biomes(0, 'sgjourney:abydos_desert')
  //     vein.biomes(0, 'sgjourney:abydos_spires')
  // });
  // event.modify(GTCEu.id('natural_gas_deposit'), vein => {
  //     vein.biomes(0, 'sgjourney:abydos_desert')
  //     vein.biomes(0, 'sgjourney:abydos_spires')
  // });
})
