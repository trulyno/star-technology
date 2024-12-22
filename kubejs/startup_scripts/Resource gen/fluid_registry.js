StartupEvents.registry('fluid', event => {

  //coagulated liquids
  event.create('iron_mixture')
    .thickTexture(0xC42626)
    .bucketColor(0xC42626)
    .displayName('Iron-rich Mixture')
    .noBlock();
    
  event.create('copper_mixture')
    .thickTexture(0xC86524)
    .bucketColor(0xC86524)
    .displayName('Copper-rich Mixture')
    .noBlock();
  
  event.create('quartz_mixture')
    .thickTexture(0xABC5E0)
    .bucketColor(0xABC5E0)
    .displayName('Quartz-rich Mixture')
    .noBlock();

  //rare ore clusters
  event.create('rare_ore_residue')
    .thickTexture(0x556278)
    .bucketColor(0x556278)
    .displayName('Rare Ore Residue')
    .noBlock();
  
  //crystallisation liquids
  event.create('raw_ore_slurry')
    .thickTexture(0x7B8087)
    .bucketColor(0x7B8087)
    .displayName('Raw Ore Slurry')
    .noBlock();

  event.create('molten_ore_mixture')
    .thickTexture(0x575050)
    .bucketColor(0x575050)
    .displayName('Molten Ore Mixture')
    .noBlock();

  function moltenore(name, color){
    event.create(`molten_${name}_ore`)
      .thickTexture(color)
      .bucketColor(color)
      .displayName(`Molten ${name.charAt(0).toUpperCase() + name.slice(1)} Ore`)
      .noBlock();
  };

  moltenore('bauxite', 0x18C940);
  moltenore('pitchblende', 0x13F045);
  moltenore('molybdenite', 0x9DB3A2);
  moltenore('ilmenite', 0x630923);
  moltenore('scheelite', 0xAAB5A8);
  moltenore('tungstate', 0x89AD82);
  moltenore('sheldonite', 0x89CC7C);

});