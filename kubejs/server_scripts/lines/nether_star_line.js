
ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_reactor('blizz_dust')
        .itemInputs('gtceu:cobalt_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('thermal:blizz_powder')
        .duration(200)
        .EUt(7680);

    event.recipes.gtceu.large_chemical_reactor('blizz_dust')
        .itemInputs('gtceu:cobalt_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('thermal:blizz_powder')
        .duration(200)
        .EUt(7680);

    event.recipes.gtceu.chemical_reactor('blitz_dust')
        .itemInputs('gtceu:platinum_dust')
        .inputFluids('gtceu:deuterium 1000')
        .itemOutputs('thermal:blitz_powder')
        .duration(200)
        .EUt(1920);

     event.recipes.gtceu.large_chemical_reactor('blitz_dust')
        .itemInputs('gtceu:platinum_dust')
        .inputFluids('gtceu:deuterium 1000')
        .itemOutputs('thermal:blitz_powder')
        .duration(200)
        .EUt(1920);

    event.recipes.gtceu.chemical_reactor('basalz_dust')
        .itemInputs('gtceu:rhodium_dust')
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('thermal:basalz_powder')
        .duration(200)
        .EUt(480);

     event.recipes.gtceu.large_chemical_reactor('basalz_dust')
        .itemInputs('gtceu:rhodium_dust')
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('thermal:basalz_powder')
        .duration(200)
        .EUt(480);

    event.recipes.gtceu.macerator('basalz_powder')
        .itemInputs('thermal:basalz_rod')
        .itemOutputs('4x thermal:basalz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.macerator('blizz_powder')
        .itemInputs('thermal:blizz_rod')
        .itemOutputs('4x thermal:blizz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.macerator('blitz_powder')
        .itemInputs('thermal:blitz_rod')
        .itemOutputs('4x thermal:blitz_powder')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.mixer('earth_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:basalz_powder')
        .itemOutputs('3x thermal:earth_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('ice_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:blizz_powder')
        .itemOutputs('3x thermal:ice_charge')
        .duration(100)
        .EUt(30);

    event.recipes.gtceu.mixer('lightning_charge')
        .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', 'thermal:blitz_powder')
        .itemOutputs('3x thermal:lightning_charge')
        .duration(100)
        .EUt(30);

    //new stuff
    [
        {element: 'fire', mod: 'minecraft', powder: 'blaze'},
        {element: 'ice', mod: 'thermal', powder: 'blizz'},
        {element: 'lightning', mod: 'thermal', powder: 'blitz'},
        {element: 'earth', mod: 'thermal', powder: 'basalz'}
      ].forEach(shard => {
        event.recipes.gtceu.extractor(`liquid_${shard.powder}`)
          .itemInputs(`${shard.mod}:${shard.powder}_powder`)
          .outputFluids(`gtceu:${shard.powder} 144`)
          .duration(22)
          .EUt(30);

        event.recipes.gtceu.autoclave(`${shard.element}_infused_shard_shard`)
          .itemInputs('kubejs:energized_nether_star_shard')
          .inputFluids(`gtceu:${shard.powder} 720`)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 8000, 500)
          .duration(480)
          .EUt(2048);
      
        event.recipes.gtceu.autoclave(`${shard.element}_infused_shard_charge`)
          .itemInputs(`4x ${shard.mod}:${shard.element}_charge`)
          .inputFluids(`gtceu:${shard.powder} 720`)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 5000, -1000)
          .duration(480)
          .EUt(2048);
      
      });

    event.shaped('kubejs:star_casting_mold', [
        ' F ',
        ' M ',
        '   '
    ], {
        M: 'gtceu:ball_casting_mold',
        F: '#forge:tools/files'
    });

    event.recipes.gtceu.forming_press('impure_nether_star')
        .itemInputs('kubejs:fire_infused_shard', 'kubejs:ice_infused_shard', 'kubejs:lightning_infused_shard', 'kubejs:earth_infused_shard')
        .notConsumable('kubejs:star_casting_mold')
        .itemOutputs('kubejs:impure_nether_star')
        .duration(300)
        .EUt(8192);

    function implosion(name, explosive) {
        event.recipes.gtceu.implosion_compressor(`nether_star_${name}`)
            .itemInputs('kubejs:impure_nether_star', explosive)
            .itemOutputs('minecraft:nether_star')
            .chancedOutput('gtceu:dark_ash_dust', 2500, 0)
            .duration(20)
            .EUt(30);
    };

    implosion('tnt', '4x minecraft:tnt');
    implosion('dynamite', '2x gtceu:dynamite');
    implosion('itnt', 'gtceu:industrial_tnt');
    implosion('powderbarrel', '8x gtceu:powderbarrel');

    event.recipes.gtceu.forge_hammer('nether_star_shard')
        .itemInputs('minecraft:nether_star')
        .itemOutputs('5x mysticalagradditions:nether_star_shard')
        .duration(300)
        .EUt(512);

    event.recipes.gtceu.polarizer('energized_nether_star_shard')
        .itemInputs('mysticalagradditions:nether_star_shard')
        .itemOutputs('kubejs:energized_nether_star_shard')
        .duration(400)
        .EUt(2048);

});
