ServerEvents.recipes(event => {
    const id = global.id;

    if (global.packmode !== 'hard'){
        (() => {   
     event.shaped(Item.of('gtceu:large_farm'), [
        'SPS',
        'PBP',
        'SPS'
    ], {
        S: 'gtceu:treated_wood_rod',
        P: 'gtceu:treated_wood_planks',
        B: 'minecraft:bone_meal'
    }).id('start:shaped/large_farm');
    })()
    }   

    [
        { name: 'minecraft:wheat', seed: 'minecraft:wheat_seeds' },
        { name: 'minecraft:pumpkin', seed: 'minecraft:pumpkin_seeds' },
        { name: 'minecraft:melon', seed: 'minecraft:melon_seeds' },
        { name: 'minecraft:beetroot', seed: 'minecraft:beetroot_seeds' },
        { name: 'minecraft:torchflower', seed: 'minecraft:torchflower_seeds' },
        { name: 'minecraft:pitcher_plant', seed: 'minecraft:pitcher_pod'},
        { name: 'minecraft:nether_wart'},
        { name: 'minecraft:carrot'},
        { name: 'minecraft:potato'},
        { name: 'minecraft:cocoa_beans' },
        { name: 'minecraft:glow_berries' },
        { name: 'minecraft:sweet_berries' },
        { name: 'minecraft:bamboo' },
        { name: 'minecraft:kelp' },
        { name: 'farmersdelight:onion' },
        { name: 'farmersdelight:tomato', seed: 'farmersdelight:tomato_seeds' },
        { name: 'farmersdelight:cabbage', seed: 'farmersdelight:cabbage_seeds' },
        { name: 'farmersdelight:rice_panicle', seed: 'farmersdelight:rice' },
        { name: 'thermal:amaranth', seed: 'thermal:amaranth_seeds' },
        { name: 'thermal:barley', seed: 'thermal:barley_seeds' },
        { name: 'thermal:corn', seed: 'thermal:corn_seeds' },
        { name: 'thermal:flax', seed: 'thermal:flax_seeds' },
        { name: 'thermal:onion', seed: 'thermal:onion_seeds' },
        { name: 'thermal:radish', seed: 'thermal:radish_seeds' },
        { name: 'thermal:rice', seed: 'thermal:rice_seeds' },
        { name: 'thermal:sadiroot', seed: 'thermal:sadiroot_seeds' },
        { name: 'thermal:spinach', seed: 'thermal:spinach_seeds' },
        { name: 'thermal:bell_pepper', seed: 'thermal:bell_pepper_seeds' },
        { name: 'thermal:eggplant', seed: 'thermal:eggplant_seeds' },
        { name: 'thermal:green_bean', seed: 'thermal:green_bean_seeds' },
        { name: 'thermal:peanut', seed: 'thermal:peanut_seeds' },
        { name: 'thermal:strawberry', seed: 'thermal:strawberry_seeds' },
        { name: 'thermal:tomato', seed: 'thermal:tomato_seeds' },
        { name: 'thermal:coffee', seed: 'thermal:coffee_seeds' },
        { name: 'thermal:hops', seed: 'thermal:hops_seeds' },
        { name: 'thermal:tea', seed: 'thermal:tea_seeds' },
        { name: 'thermal:frost_melon', seed: 'thermal:frost_melon_seeds' },
        { name: 'minecraft:dandelion' },
        { name: 'minecraft:poppy' },
        { name: 'minecraft:blue_orchid' },
        { name: 'minecraft:allium' },
        { name: 'minecraft:azure_bluet' },
        { name: 'minecraft:red_tulip' },
        { name: 'minecraft:orange_tulip' },
        { name: 'minecraft:white_tulip' },
        { name: 'minecraft:pink_tulip' },
        { name: 'minecraft:oxeye_daisy' },
        { name: 'minecraft:cornflower' },
        { name: 'minecraft:lily_of_the_valley' },
        { name: 'minecraft:wither_rose' },
        { name: 'minecraft:pink_petals' },
        { name: 'minecraft:sunflower' },
        { name: 'minecraft:lilac' },
        { name: 'minecraft:rose_bush' },
        { name: 'minecraft:peony' },
        { name: 'minecraft:sugar_cane' },
        { name: 'minecraft:cactus' }
    ].forEach(crop => {
        event.recipes.gtceu.large_farm(id(`${crop.name.split(':')[1]}${(!crop.name.startsWith('minecraft')) ? '_' + crop.name.split(':')[0] : ''}_harvest`))
            .notConsumable(`8x ${(crop.seed) ? crop.seed : crop.name}`)
            .itemOutputs(`16x ${crop.name}`)
            .chancedOutput(`8x ${(crop.seed) ? crop.seed : crop.name}`, 5000, 0)
            .daytime()
            .duration(800);

        event.recipes.gtceu.crop_greenhouse(id(`${crop.name.split(':')[1]}${(!crop.name.startsWith('minecraft')) ? '_' + crop.name.split(':')[0] : ''}_harvest_no_fertilizer`))
            .notConsumable(`8x ${(crop.seed) ? crop.seed : crop.name}`)
            .inputFluids('minecraft:water 100')
            .itemOutputs(`16x ${crop.name}`)
            .chancedOutput(`8x ${(crop.seed) ? crop.seed : crop.name}`, 5000, 0)
            .duration(600)
            .EUt(global.vha['lv'])
            .circuit(0);

        event.recipes.gtceu.crop_greenhouse(id(`${crop.name.split(':')[1]}${(!crop.name.startsWith('minecraft')) ? '_' + crop.name.split(':')[0] : ''}_harvest_bone_meal`))
            .notConsumable(`8x ${(crop.seed) ? crop.seed : crop.name}`)
            .chancedInput('minecraft:bone_meal', 7500, -500)
            .inputFluids('minecraft:water 100')
            .itemOutputs(`32x ${crop.name}`)
            .chancedOutput(`16x ${(crop.seed) ? crop.seed : crop.name}`, 5000, 0)
            .duration(600)
            .EUt(global.vha['lv'])
            .circuit(1);

        event.recipes.gtceu.crop_greenhouse(id(`${crop.name.split(':')[1]}${(!crop.name.startsWith('minecraft')) ? '_' + crop.name.split(':')[0] : ''}_harvest_compost`))
            .notConsumable(`8x ${(crop.seed) ? crop.seed : crop.name}`)
            .chancedInput('thermal:compost', 7500, -500)
            .inputFluids('minecraft:water 100')
            .itemOutputs(`48x ${crop.name}`)
            .chancedOutput(`24x ${(crop.seed) ? crop.seed : crop.name}`, 5000, 0)
            .duration(600)
            .EUt(global.vha['lv'])
            .circuit(2);

        event.recipes.gtceu.crop_greenhouse(id(`${crop.name.split(':')[1]}${(!crop.name.startsWith('minecraft')) ? '_' + crop.name.split(':')[0] : ''}_harvest_fertilizer`))
            .notConsumable(`8x ${(crop.seed) ? crop.seed : crop.name}`)
            .chancedInput('gtceu:fertilizer', 7500, -500)
            .inputFluids('minecraft:water 100')
            .itemOutputs(`64x ${crop.name}`)
            .chancedOutput(`32x ${(crop.seed) ? crop.seed : crop.name}`, 5000, 0)
            .duration(600)
            .EUt(global.vha['lv'])
            .circuit(3);
    });

});