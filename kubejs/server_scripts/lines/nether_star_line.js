ServerEvents.recipes(event => {
    const id = global.id;

    [
        {powder: 'blizz', item: 'cobalt_dust', fluid: 'fluorine', multiplier: 16, element: 'ice'},
        {powder: 'blitz', item: 'platinum_dust', fluid: 'deuterium', multiplier: 4, element: 'lightning'},
        {powder: 'basalz', item: 'small_rhodium_dust', fluid: 'helium', multiplier: 1, element: 'earth'}
    ].forEach(type=>{
        event.recipes.gtceu.chemical_reactor(id(`${type.powder}_dust`))
            .itemInputs(`gtceu:${type.item}`)
            .inputFluids(`gtceu:${type.fluid} 1000`)
            .itemOutputs(`${type.multiplier}x thermal:${type.powder}_powder`)
            .duration(200)
            .EUt(480*type.multiplier);

        event.recipes.gtceu.large_chemical_reactor(id(`${type.powder}_dust`))
            .itemInputs(`gtceu:${type.item}`)
            .inputFluids(`gtceu:${type.fluid} 1000`)
            .itemOutputs(`${type.multiplier}x thermal:${type.powder}_powder`)
            .duration(200)
            .EUt(480*type.multiplier);

        event.recipes.gtceu.macerator(id(`${type.powder}_powder`))
            .itemInputs(`thermal:${type.powder}_rod`)
            .itemOutputs(`4x thermal:${type.powder}_powder`)
            .duration(88)
            .EUt(2);

        event.recipes.gtceu.mixer(id(`${type.element}_charge`))
            .itemInputs('#forge:dusts/coal', 'minecraft:gunpowder', `thermal:${type.powder}_powder`)
            .itemOutputs(`3x thermal:${type.element}_charge`)
            .duration(100)
            .EUt(30);

        event.remove({id: `thermal:${type.powder}_powder`});
    });
        event.remove({id: 'minecraft:blaze_powder'});
        event.remove({id: 'gtceu:shapeless/blaze_rod_to_powder'});
        event.remove({id: 'gtceu:extractor/extract_blaze_powder'});
        event.remove({id: 'create:crushing/blaze_rod'});

    //new stuff
    [
        {element: 'fire', mod: 'minecraft', powder: 'blaze'},
        {element: 'ice', mod: 'thermal', powder: 'blizz'},
        {element: 'lightning', mod: 'thermal', powder: 'blitz'},
        {element: 'earth', mod: 'thermal', powder: 'basalz'}
      ].forEach(shard => {
        event.recipes.gtceu.extractor(id(`liquid_${shard.powder}`))
          .itemInputs(`${shard.mod}:${shard.powder}_powder`)
          .outputFluids(`gtceu:${shard.powder} 144`)
          .duration(22)
          .EUt(30);

        event.recipes.gtceu.autoclave(id(`${shard.element}_infused_shard_shard`))
          .itemInputs('kubejs:energized_nether_star_shard')
          .inputFluids(`gtceu:${shard.powder} 720`)
          .chancedOutput(`kubejs:${shard.element}_infused_shard`, 8000, 500)
          .duration(480)
          .EUt(2048);
      
        event.recipes.gtceu.autoclave(id(`${shard.element}_infused_shard_charge`))
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
    }).id('start:shaped/star_casting_mold');

    event.recipes.gtceu.forming_press(id('impure_nether_star'))
        .itemInputs('kubejs:fire_infused_shard', 'kubejs:ice_infused_shard', 'kubejs:lightning_infused_shard', 'kubejs:earth_infused_shard')
        .notConsumable('kubejs:star_casting_mold')
        .itemOutputs('kubejs:impure_nether_star')
        .duration(300)
        .EUt(8192);

    const implosion = [{name: 'tnt', explosive: '4x minecraft:tnt'},{name: 'dynamite', explosive: '2x gtceu:dynamite'},
        {name: 'itnt', explosive: 'gtceu:industrial_tnt'},{name: 'powderbarrel', explosive: '8x gtceu:powderbarrel'}]

    implosion.forEach(shard=>{
        event.recipes.gtceu.implosion_compressor(id(`nether_star_${shard.name}`))
            .itemInputs('kubejs:impure_nether_star', shard.explosive)
            .itemOutputs('minecraft:nether_star')
            .chancedOutput('gtceu:dark_ash_dust', 2500, 0)
            .duration(20)
            .EUt(30);
    });
    
    event.recipes.gtceu.forge_hammer(id('nether_star_shard'))
        .itemInputs('minecraft:nether_star')
        .itemOutputs('5x mysticalagradditions:nether_star_shard')
        .duration(300)
        .EUt(512);

    event.recipes.gtceu.polarizer(id('energized_nether_star_shard'))
        .itemInputs('mysticalagradditions:nether_star_shard')
        .itemOutputs('kubejs:energized_nether_star_shard')
        .duration(400)
        .EUt(2048);

});
