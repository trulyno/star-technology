ServerEvents.recipes(event => {
    
  event.shaped('gtceu:rock_filtrator',[
      'ABA',
      'BCB',
      'ABA'
    ],{
      A: '#gtceu:circuits/lv',
      B: 'gtceu:lv_electric_motor',
      C: 'gtceu:steel_machine_casing'
  });

  event.shaped('gtceu:rock_filtrator',[
      'ABA',
      'BCB',
      'ABA'
    ],{
      A: '#gtceu:circuits/luv',
      B: 'gtceu:luv_electric_motor',
      C: 'gtceu:robust_machine_casing'
  });
    
  event.recipes.gtceu.rock_filtrator('geode_harvesting')
    .itemInputs('64x minecraft:gravel')
    .chancedOutput('kubejs:diamond_geode', 3500, 500)
    .chancedOutput('kubejs:emerald_geode', 3500, 500)
    .chancedOutput('kubejs:ruby_geode', 4500, 750)
    .chancedOutput('kubejs:green_sapphire_geode', 4500, 750)
    .chancedOutput('kubejs:sapphire_geode', 4500, 750)
    .chancedOutput('kubejs:quartzite_geode', 3500, 500)
    .chancedOutput('kubejs:certus_quartz_geode', 5000, 1500)
    .chancedOutput('kubejs:blue_topaz_geode', 3500, 500)
    .chancedOutput('kubejs:topaz_geode', 3500, 500)
    .chancedOutput('kubejs:amethyst_geode', 6000, 2000)
    .duration(300)
    .inputStress(256)
    .EUt(28);

  event.recipes.gtceu.rock_sifter('geode_harvesting')
    .itemInputs('64x minecraft:gravel')
    .chancedOutput('kubejs:diamond_geode', 3500, 500)
    .chancedOutput('kubejs:emerald_geode', 3500, 500)
    .chancedOutput('kubejs:ruby_geode', 4500, 750)
    .chancedOutput('kubejs:green_sapphire_geode', 4500, 750)
    .chancedOutput('kubejs:sapphire_geode', 4500, 750)
    .chancedOutput('kubejs:quartzite_geode', 3500, 500)
    .chancedOutput('kubejs:certus_quartz_geode', 5000, 1500)
    .chancedOutput('kubejs:blue_topaz_geode', 3500, 500)
    .chancedOutput('kubejs:topaz_geode', 3500, 500)
    .chancedOutput('kubejs:amethyst_geode', 6000, 2000)
    .duration(300)
    .inputStress(256)
    .EUt(28);

})