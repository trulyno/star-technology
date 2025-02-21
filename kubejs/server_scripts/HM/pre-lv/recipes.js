ServerEvents.recipes(event => {

//Pre-Cobble Gen

    event.remove({ id: 'gtceu:shaped/axe_flint'});
    event.shaped(Item.of('gtceu:flint_axe'), [
        'FT',
        'ST'
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });
   
    //Kiln
    [{fuel: 'coals', burnMultiplier: .5}, {fuel: 'logs', burnMultiplier: 1.2}].forEach( coal => {
        event.recipes.gtceu.kiln(`brick_${coal.fuel}`)
            .itemInputs('4x gtceu:compressed_clay', `#minecraft:${coal.fuel}`)
            .itemOutputs('4x minecraft:brick')
            .duration(800*coal.burnMultiplier);
        event.recipes.gtceu.kiln(`coke_oven_brick_${coal.fuel}`)
            .itemInputs('4x gtceu:compressed_coke_clay', `2x #minecraft:${coal.fuel}`)
            .itemOutputs('4x gtceu:coke_oven_brick')
            .duration(1000*coal.burnMultiplier);
        event.recipes.gtceu.kiln(`firebrick_${coal.fuel}`)
            .itemInputs('4x gtceu:compressed_fireclay', `2x #minecraft:${coal.fuel}`)
            .itemOutputs('4x gtceu:firebrick')
            .duration(1200*coal.burnMultiplier);
        event.recipes.gtceu.kiln(`glass_${coal.fuel}`)
            .itemInputs('gtceu:glass_dust', `#minecraft:${coal.fuel}`)
            .itemOutputs('minecraft:glass')
            .duration(1600*coal.burnMultiplier);

    //Rugged Alloyer and Chunk Processing
    [{ore: 'hematite', metal: 'minecraft:iron'},{ore: 'pyrite', metal: 'minecraft:iron'},{ore: 'magnetite', metal: 'minecraft:iron'},
        {ore: 'cassiterite', metal: 'gtceu:tin'},{ore: 'sphalerite', metal: 'gtceu:zinc'},{ore: 'galena', metal: 'gtceu:lead'},
        {ore: 'raw_electrum', metal: 'gtceu:raw_electrum'}].forEach(chunks => {
        event.recipes.gtceu.rugged_alloyer(`${chunks.ore}_chunks_${coal.fuel}`)
            .itemInputs(`3x kubejs:${chunks.ore}_crushed_ore_chunk`, `#minecraft:${coal.fuel}`)
            .itemOutputs(`${chunks.metal}_ingot`, 'gtceu:ash_dust')
            .duration(400*coal.burnMultiplier);
        event.smelting(`2x ${chunks.metal}_nugget`, `kubejs:${chunks.ore}_crushed_ore_chunk`);
        });
        event.recipes.gtceu.rugged_alloyer(`chalcopyrite_chunks_${coal.fuel}`)
            .itemInputs(`3x kubejs:chalcopyrite_crushed_ore_chunk`, `#minecraft:${coal.fuel}`)
            .itemOutputs(`minecraft:copper_ingot`, 'gtceu:ash_dust')
            .duration(400*coal.burnMultiplier);
        event.smelting(`2x gtceu:copper_nugget`, `kubejs:chalcopyrite_crushed_ore_chunk`);
        event.recipes.gtceu.rugged_alloyer(`andesite_alloy_${coal.fuel}`)
            .itemInputs('4x exnihilosequentia:andesite_pebble', '4x gtceu:zinc_nugget', `2x #minecraft:${coal.fuel}`)
            .itemOutputs('2x create:andesite_alloy', 'gtceu:ash_dust')
            .duration(600*coal.burnMultiplier);
    });

    event.shaped(Item.of('gtceu:rugged_alloyer'),[
        'RER',
        'AFA',
        'CCC'
    ], {
        A: 'minecraft:iron_ingot',
        C: 'kubejs:reinforced_stone_bricks',
        F: 'minecraft:furnace',
        E: 'gtceu:raw_electrum_ingot',
        R: 'minecraft:redstone'
    });

    event.shaped(Item.of('minecraft:bowl', 2 ),
    [
        'A',
        'B'
    ], {
        A: '#forge:tools/knives',
        B: '#minecraft:planks'
    });
   
    event.remove({ id: 'minecraft:bowl'});
    event.shapeless(Item.of('kubejs:plant_fibers'),[
        '#forge:tools/knives',
        'farmersdelight:straw'
    ]);
    event.shapeless(Item.of('kubejs:plant_fibers'),[
        '#forge:tools/knives',
        'farmersdelight:tree_bark'
    ]);

    event.remove({ id: 'exnihilosequentia:ens_string_mesh'});
    event.shaped(Item.of('exnihilosequentia:string_mesh'),[
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: '#forge:string',
        C: 'farmersdelight:canvas'
    });

    event.remove({ id: 'minecraft:kjs/gtceu_wood_plate'});
    event.shaped(Item.of('minecraft:crafting_table'),[
        'SCS',
        'PFP',
        'PRP'
    ], {
        S: 'gtceu:iron_screw',
        C: 'farmersdelight:canvas',
        P: 'gtceu:wood_plate',
        F: 'gtceu:wood_frame',
        R: 'gtceu:sticky_resin'
    });

    event.remove({ id: 'minecraft:stone_bricks'});
    [{ output: 'minecraft:bricks'},{ output: 'gtceu:firebricks'},{ output: 'gtceu:coke_oven_bricks'}, { output: 'minecraft:stonecutter'}].forEach(r=>{
        event.remove({output: `${r.output}`});
    });

    [{type: '', mod: 'minecraft'},{type: 'coke_oven_', mod: 'gtceu'},{type: 'fire', mod: 'gtceu'}].forEach(brick=>{
        event.shaped(Item.of(`${brick.mod}:${brick.type}bricks`, 2),[
            'BBB',
            'BCB',
            'BBB'
        ], {
            B: `${brick.mod}:${brick.type}brick`,
            C: 'gtceu:concrete_bucket' //Need to add wooden bucket variant
        });
    });
        event.shaped(Item.of('kubejs:reinforced_stone_bricks',2), [
            'NBN',
            'NCN',
            'NBN'
        ], {
            N: 'minecraft:iron_nugget',
            B: 'minecraft:stone_bricks',
            C: 'gtceu:concrete_bucket' //Need to add wooden bucket variant
        });
        event.shaped(Item.of('minecraft:stonecutter'), [
            'NNN',
            'SFS'
        ], {
            N: 'minecraft:iron_nugget',
            S: 'minecraft:stone',
            F: 'gtceu:wood_frame'
        });

    event.remove({id: /^gtceu:mixer\/concrete.*/})
    event.recipes.gtceu.primitive_mixer('concrete')
        .itemInputs('3x gtceu:stone_dust','gtceu:calcite_dust','2x gtceu:gypsum_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:concrete 1000')
        .duration(240);
    event.recipes.gtceu.mixer('concrete')
        .itemInputs('3x gtceu:stone_dust','gtceu:calcite_dust','2x gtceu:gypsum_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:concrete 1000')
        .duration(50)
        .EUt(6);

//Post Cobble-Gen, Pre-Circuit

})