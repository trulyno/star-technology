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
  });

  event.add('start:abydos_zapolite_rich_magma_deposit', vein => {
    vein.dimensions('sgjourney:abydos')
    vein.fluid(() => Fluid.of('gtceu:abydos_zapolite_rich_magma').fluid)
    vein.weight(500)
    vein.minimumYield(120)
    vein.maximumYield(720)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  });

  event.add('start:highly_unstable_nether_magma_deposit', vein => {
    vein.dimensions('minecraft:the_nether')
    vein.fluid(() => Fluid.of('gtceu:highly_unstable_nether_magma').fluid)
    vein.weight(100)
    vein.minimumYield(180)
    vein.maximumYield(640)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  });

  event.add('start:debris_rich_nether_magma_deposit', vein => {
    vein.dimensions('minecraft:the_nether')
    vein.fluid(() => Fluid.of('gtceu:debris_rich_nether_magma').fluid)
    vein.weight(300)
    vein.minimumYield(120)
    vein.maximumYield(720)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  });

  event.add('start:lava_dense', vein => {
    vein.dimensions('minecraft:the_nether')
    vein.fluid(() => Fluid.of('minecraft:lava').fluid)
    vein.weight(600)
    vein.minimumYield(1000)
    vein.maximumYield(2000)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  });

  event.add('start:gritty_akreyrium', vein => {
    vein.dimensions('sgjourney:abydos')
    vein.fluid(() => Fluid.of('gtceu:gritty_akreyrium').fluid)
    vein.weight(300)
    vein.minimumYield(240)
    vein.maximumYield(960)
    vein.depletionAmount(2)
    vein.depletionChance(1)
    vein.depletedYield(50)
  });
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
