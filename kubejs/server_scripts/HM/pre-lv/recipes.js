ServerEvents.recipes(event => {

//Pre-Cobble Gen
    
    //Flarnt Tool
    [{mod:'minecraft',material:'wooden'},{mod:'minecraft',material:'stone'},{mod:'gtceu',material:'flint'}].forEach(type=>{
    ['mortar','pickaxe','shovel','axe','sword','knife','hoe'].forEach(tool=>{
        event.remove({output: `${type.mod}:${type.material}_${tool}`})
    });
    });

    event.shapeless(Item.of('minecraft:stick'), [
        '#forge:tools/saws','#minecraft:wooden_slabs'
    ]);

    event.shaped(Item.of('gtceu:flisnt_axe'), [
        'FT',
        'ST'
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });

    event.shaped(Item.of('gtceu:flisnt_saw'), [
        'FS',
        'FT'
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });

    event.shaped(Item.of('gtceu:flisnt_knife'), [
        'F',
        'T'
    ], {
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });

    event.shaped(Item.of('gtceu:flisnt_shovel'), [
        '  F',
        ' TS',
        'T  '
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });

    event.shaped(Item.of('gtceu:flisnt_pickaxe'), [
        'FFF',
        'RTS',
        ' T '
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood',
        R: 'kubejs:flint_shard'
    });

    event.shaped(Item.of('gtceu:flisnt_sword'), [
        ' F ',
        ' F ',
        ' T '
    ], {
        F: 'minecraft:flint',
        T: '#forge:rods/wood'
    });

    event.shaped(Item.of('gtceu:flisnt_hammer'), [
        'FCF',
        'CFC',
        'STS'
    ], {
        S: '#forge:string',
        F: 'minecraft:flint',
        T: '#forge:rods/wood',
        C: '#forge:cobblestone'
    });
   
    event.shaped(Item.of('exnihilosequentia:wooden_crook'), [
        'TT',
        'ST',
        ' T'
    ], {
        S: '#forge:string',
        T: '#forge:rods/wood'
    });

    event.shaped(Item.of('gtceu:flisnt_file'), [
        ' FQ',
        'FQF',
        'TFS'
    ], {
        S: '#forge:string',
        F: 'kubejs:flint_shard',
        T: '#forge:rods/wood',
        Q: 'gtceu:quartzite_gem'
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

    event.remove({id: /^exnihilosequentia:ens_.*_sieve/})
    event.shaped(Item.of('exnihilosequentia:jungle_sieve'), [
        'S S',
        'SFS',
        'NRN'
    ], {
        S: 'minecraft:jungle_slab',
        F: 'gtceu:wood_frame',
        N: 'minecraft:jungle_fence',
        R: '#forge:string'
    });

    event.remove({output: 'gtceu:matchbox'});
    event.shaped(Item.of('gtceu:matchbox'), [
        'RRR',
        'TST',
        ' B '
    ], {
        R: '#forge:string',
        T: '#forge:rods/wooden',
        S: 'farmersdelight:straw',
        B: 'minecraft:bowl'
    });

    event.remove({id: 'minecraft:flint_and_steel'});
    event.shapeless(Item.of('minecraft:flint_and_steel'), [
        'gtceu:steel_ring', 'minecraft:flint'
    ]);
    
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
    event.shapeless(Item.of('farmersdelight:straw'),[
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

    //Bricks
    event.remove({ id: 'minecraft:stone_bricks'});
    [{ output: 'minecraft:bricks'},{ output: 'gtceu:firebricks'},{ output: 'gtceu:coke_oven_bricks'},{ output: 'minecraft:mud_bricks'}].forEach(r=>{
        event.remove({output: `${r.output}`});
    });

    [{type: '', modItem: 'minecraft', modBlock: 'minecraft'},{type: 'coke_oven_', modItem: 'gtceu', modBlock: 'gtceu'},{type: 'fire', modItem: 'gtceu', modBlock: 'gtceu'},
        {type: 'stone_', modItem: 'kubejs', modBlock: 'minecraft'},{type: 'mud_', modItem: 'kubejs', modBlock: 'minecraft'}].forEach(brick=>{
        event.shaped(Item.of(`${brick.modBlock}:${brick.type}bricks`, 2),[
            'BBB',
            'BCB',
            'BBB'
        ], {
            B: `${brick.modItem}:${brick.type}brick`,
            C: 'gtceu:concrete_bucket'
        });
        event.shaped(Item.of(`${brick.modBlock}:${brick.type}bricks`, 2),[
            'BBB',
            'BCB',
            'BBB'
        ], {
            B: `${brick.modItem}:${brick.type}brick`,
            C: {
                'type': 'forge:partial_nbt',
                'item': 'woodenbucket:wooden_bucket',
                'nbt': {
                  'Fluid': {
                    Amount:1000,FluidName:'gtceu:concrete'
                  }
                }
              }
        });
    });
        event.shaped(Item.of('kubejs:reinforced_stone_bricks'), [
            'NHN',
            'NBN',
            'NFN'
        ], {
            N: 'minecraft:iron_nugget',
            B: 'minecraft:stone_bricks',
            H: '#forge:tools/hammers',
            F: '#forge:tools/files'
        });
        
        event.shaped(Item.of('kubejs:mud_brick',4), [
            'CCC',
            'CMC',
            'CCC'
        ], {
            C: 'kubejs:packed_mud_ball',
            M: 'gtceu:brick_wooden_form'
        }).keepIngredient('gtceu:brick_wooden_form');
    
        event.shapeless(Item.of('kubejs:stone_brick'), [
            '#forge:tools/files','minecraft:stone'
        ]);

    event.remove({ output: 'minecraft:stonecutter'})
    
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

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
          {
            "item": "minecraft:packed_mud"
          }
        ],
        "result": [
          {
            "count": 4,
            "item": "kubejs:packed_mud_ball"
          }
        ],
        "tool": {
          "item": "minecraft:bowl"
        }
    });

    event.remove({output: 'minecraft:furnace'});
    event.shaped(Item.of('minecraft:furnace'), [
        'SCS',
        'CFC',
        'MMM'
    ], {
        S: 'minecraft:cobblestone_slab',
        C: 'minecraft:cobblestone',
        F: 'minecraft:campfire',
        M: 'minecraft:mud_bricks'
    });

    event.remove({output: 'minecraft:campfire'});
    event.shaped(Item.of('minecraft:campfire'), [
        'BTB',
        'TST',
        'LLL'
    ], {
        T: '#balm:wooden_rods',
        S: 'farmersdelight:straw',
        B: 'farmersdelight:tree_bark',
        L: '#minecraft:logs'
    });

    //Adjusted Recipes
    event.remove({output: '#exnihilosequentia:crucibles'});
    event.remove({output: '#exnihilosequentia:barrels'});
    event.remove({output: 'woodenbucket:wooden_bucket'});
    event.remove({id: 'gtceu:shaped_fluid_container/treated_wood_planks'});
    event.shaped(Item.of('exnihilosequentia:jungle_barrel'), [
        'S S',
        'SRS',
        'SBS'
    ], {
        S: 'minecraft:jungle_slab',
        B: 'woodenbucket:wooden_bucket',
        R: 'gtceu:sticky_resin'
    });

    event.shaped(Item.of('woodenbucket:wooden_bucket'), [
        'B B',
        'BRB',
        'TBT'
    ], {
        T: 'gtceu:wood_bolt',
        B: 'farmersdelight:tree_bark',
        R: 'gtceu:sticky_resin'
    });

    event.shapeless(Item.of('gtceu:wood_bolt', 2), [
        '#forge:tools/saws','minecraft:stick'
    ]);

    event.remove({id:'minecraft:clay'})
    event.recipes.gtceu.primitive_mixer('clay')
        .itemInputs('exnihilosequentia:dust')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('minecraft:clay')
        .duration(160);

    event.recipes.gtceu.primitive_mixer('mud')
        .itemInputs('minecraft:dirt')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('minecraft:mud')
        .duration(160);

    event.shaped(Item.of('gtceu:wood_gear'), [
        'BBB',
        'BSB',
        'BBB'
    ], {
        B: 'gtceu:wood_bolt',
        S: '#minecraft:wooden_slabs'
    });

    event.shaped(Item.of('gtceu:ulv_primitive_mixer'), [
        'GCG',
        'CBC',
        'GCG'
    ], {
        G: 'gtceu:wood_gear',
        C: 'minecraft:cobblestone',
        B: 'exnihilosequentia:jungle_barrel'
    });
    
    event.remove({output: 'gtceu:compressed_coke_clay'})
    event.remove({id: 'gtceu:shapeless/fireclay_dust'})
    event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust');
    event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball');
    event.recipes.create.pressing('kubejs:mud_brick', 'kubejs:packed_mud_ball');
    event.recipes.create.pressing('gtceu:compressed_coke_clay', 'kubejs:coke_clay_dust');

    //Metalurgy Rework via Create
    event.remove({id: /^create:pressing.*_ingot/})
    event.remove({output: /^create_new_age.*wire/})
    const GTMetals = ['lead','raw_electrum','tin','zinc','bronze','brass','nickel','pig_iron']
    const MinecraftMetals = ['iron','copper','gold']
    const MetalInc = ['iron','copper','gold','lead','raw_electrum','tin','bronze','brass','pig_iron']
    GTMetals.forEach(type => {
        event.recipes.create.pressing([Item.of(`gtceu:${type}_plate`).withChance(0.5)],`gtceu:${type}_ingot`);
    });
    MinecraftMetals.forEach(type => {
        event.recipes.create.pressing([Item.of(`gtceu:${type}_plate`).withChance(0.5)],`minecraft:${type}_ingot`);
    });
    MetalInc.forEach(type => {
        event.recipes.create.cutting([`gtceu:${type}_rod`,Item.of(`gtceu:${type}_rod`).withChance(0.9)],`gtceu:${type}_plate`);
        event.recipes.create.pressing([Item.of(`gtceu:${type}_ring`).withChance(0.95)],`gtceu:${type}_rod`);
        event.recipes.create.pressing([Item.of(`gtceu:${type}_foil`).withChance(0.95)],`gtceu:${type}_plate`);
        event.recipes.create.cutting([`gtceu:${type}_bolt`,Item.of(`gtceu:${type}_bolt`).withChance(0.9)],`gtceu:${type}_rod`);
        event.recipes.create.pressing([Item.of(`gtceu:${type}_screw`).withChance(0.75)],`gtceu:${type}_bolt`);
    });

    const SEQLRod = ['iron','copper','gold','lead','raw_electrum','tin','bronze','brass','pig_iron'];
    const SEQDPlates = ['iron','copper','gold','lead','raw_electrum','tin','bronze','brass','pig_iron'];
    const SEQGear = ['iron','lead','raw_electrum','bronze','pig_iron'];
    const SEQSmGear = ['iron','raw_electrum','bronze','pig_iron'];
    const SEQRotor = ['iron','copper','lead','raw_electrum','bronze','pig_iron'];
    const SEQSpring = ['iron','copper','gold','lead','tin'];
    const SEQSmSpring = ['iron','copper','gold','lead','tin'];
    const SEQWire = ['iron','copper','gold','lead','tin'];
    const SEQFiWire = ['copper','gold','lead','tin','zinc'];
    const SEQCable = ['iron','copper','gold','lead','tin'];

	//L.Rod deploying
        SEQLRod.forEach(type => {
	    let inter = 'kubejs:incomplete_long_metal_rod' 
	    event.recipes.create.sequenced_assembly([
	    	Item.of(`gtceu:long_${type}_rod`).withChance(1),
	    ], `gtceu:${type}_rod`, [ 
	    	event.recipes.createDeploying(inter, [inter, `gtceu:${type}_rod`]),
	    	event.recipes.createPressing(inter, inter),
	    ]).transitionalItem(inter).loops(1)
        });
    
	//D.Plate deploying
        SEQDPlates.forEach(type => {
	    let inter = 'kubejs:incomplete_double_metal_plate'
	    event.recipes.create.sequenced_assembly([
	    	Item.of(`gtceu:double_${type}_plate`).withChance(1),
	    ], `gtceu:${type}_plate`, [ 
	    	event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
	    	event.recipes.createPressing(inter, inter),
	    ]).transitionalItem(inter).loops(1)
        });
    
	//Gear deploying
        SEQGear.forEach(type => {
	    let inter = 'kubejs:incomplete_metal_gear'
	    event.recipes.create.sequenced_assembly([
	    	Item.of(`gtceu:${type}_gear`).withChance(1),
	    ], `gtceu:${type}_plate`, [ 
            event.recipes.createDeploying(inter, [inter, `gtceu:${type}_rod`]),
            event.recipes.createPressing(inter, inter),
            event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
	    ]).transitionalItem(inter).loops(4)
        });
    
	//SmGear deploying
        SEQSmGear.forEach(type => {
        let inter = 'kubejs:incomplete_small_metal_gear'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:small_${type}_gear`).withChance(1),
        ], `gtceu:${type}_plate`, [ 
            event.recipes.createDeploying(inter, [inter, `gtceu:${type}_rod`]),
            event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
        ]).transitionalItem(inter).loops(2)
        });
    
	//Rotor deploying
        SEQRotor.forEach(type => {
        let inter = 'kubejs:incomplete_metal_rotor'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:${type}_rotor`).withChance(1),
        ], `gtceu:${type}_ring`, [ 
            event.recipes.createDeploying(inter, [inter, `gtceu:${type}_plate`]),
            event.recipes.createPressing(inter, inter),
            event.recipes.createDeploying(inter, [inter, `gtceu:${type}_screw`]),
        ]).transitionalItem(inter).loops(4)
        });
    
	//Spring deploying
        SEQSpring.forEach(type => {
        let inter = 'kubejs:incomplete_metal_spring'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:${type}_spring`).withChance(1),
        ], `gtceu:long_${type}_rod`, [ 
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(4)
        });
    
	//SmSpring deploying
        SEQSmSpring.forEach(type => {
        let inter = 'kubejs:incomplete_small_metal_spring'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:small_${type}_spring`).withChance(1),
        ], `gtceu:long_${type}_rod`, [ 
            event.recipes.createPressing(inter, inter),
            event.recipes.createCutting(inter, inter),
        ]).transitionalItem(inter).loops(4)
        });
    
	//Wire deploying
        SEQWire.forEach(type => {
        let inter = 'kubejs:incomplete_metal_single_wire'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:${type}_single_wire`).withChance(1),
        ], `gtceu:${type}_plate`, [ 
            event.recipes.createDeploying(inter, [inter, '#forge:tools/wire_cutters']),
            event.recipes.createCutting(inter, inter),
        ]).transitionalItem(inter).loops(2)
        });
    
	//F.Wire deploying
        SEQFiWire.forEach(type => {
        let inter = 'kubejs:incomplete_metal_fine_wire'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:fine_${type}_wire`).withChance(1),
        ], `gtceu:${type}_foil`, [ 
            event.recipes.createDeploying(inter, [inter, '#forge:tools/wire_cutters']),
            event.recipes.createCutting(inter, inter),
        ]).transitionalItem(inter).loops(2)
        });
    
    //Cable Single deploying
        SEQCable.forEach(type => {
        let inter = 'kubejs:incomplete_metal_cable'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:${type}_single_cable`).withChance(1),
        ], `gtceu:${type}_single_wire`, [
            event.recipes.createFilling(inter, [Fluid.of('gtceu:rubber', 72), inter]),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(2)
        });
    
    //Cable Double deploying
        SEQCable.forEach(type => {
        let inter = 'kubejs:incomplete_metal_cable'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:${type}_double_cable`).withChance(1),
        ], `gtceu:${type}_double_wire`, [
            event.recipes.createFilling(inter, [Fluid.of('gtceu:rubber', 72), inter]),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(4)
        });
    
    //Cable Double deploying
        SEQCable.forEach(type => {
        let inter = 'kubejs:incomplete_metal_cable'
        event.recipes.create.sequenced_assembly([
            Item.of(`gtceu:${type}_quadruple_cable`).withChance(1),
        ], `gtceu:${type}_quadruple_wire`, [
            event.recipes.createFilling(inter, [Fluid.of('gtceu:rubber', 72), inter]),
            event.recipes.createPressing(inter, inter),
        ]).transitionalItem(inter).loops(8)
        });

    //Create Recipes
    event.shapeless(Item.of('gtceu:wood_plate', 2), [
        '#forge:tools/files','#minecraft:planks','#minecraft:planks'
    ]);

    event.shaped(Item.of('create:andesite_casing'), [
        'PMP',
        'AFA',
        'PHP'
    ], {
        P: 'gtceu:wood_plate',
        M: '#forge:tools/mallets',
        A: 'create:andesite_alloy',
        F: 'gtceu:wood_frame',
        H: '#forge:tools/hammers'
    });
    
    event.shaped(Item.of('gtceu:primitive_workshop'), [
        'QAQ',
        'FCF',
        'RRR'
    ], {
        Q: 'gtceu:quartzite_gem',
        A: 'create:andesite_alloy',
        F: 'gtceu:wood_frame',
        C: 'create:andesite_casing',
        R: 'minecraft:redstone_block'
    });

    event.shaped(Item.of('create:piston_extension_pole',3), [
        'P',
        'A',
        'P'
    ], {
        P: 'gtceu:wood_plate',
        A: 'create:andesite_alloy'
    });

    event.recipes.gtceu.primitive_workshop('mechanical_press')
        .itemInputs('create:andesite_casing','create:piston_extension_pole','4x gtceu:wood_gear',
            '6x minecraft:redstone','minecraft:anvil','4x create:andesite_alloy')
        .itemOutputs('create:mechanical_press')
        .duration(100);

    event.recipes.gtceu.primitive_workshop('hand_crank')
        .itemInputs('gtceu:wood_gear','3x gtceu:wood_plate','gtceu:sticky_resin','create:andesite_alloy',
            'minecraft:stick'
        )
        .itemOutputs('create:hand_crank')
        .duration(40);

//Post Cobble-Gen, Pre-Circuit

})