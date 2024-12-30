StartupEvents.registry('item', event => {
    
    //geodes
    ['diamond', 'emerald', 'ruby', 'sapphire', 'quartzite', 'topaz', 'amethyst'].forEach(type => {
        event.create(`${type}_geode`)
            .displayName(`${type.charAt(0).toUpperCase() + type.slice(1)} Geode`)
            .texture(`kubejs:item/resource_gen/geodes/${type}_geode`);
        event.create(`cracked_${type}_geode`)
            .displayName(`Cracked ${type.charAt(0).toUpperCase() + type.slice(1)} Geode`)
            .texture(`kubejs:item/resource_gen/geodes/cracked_${type}_geode`);
    });

    event.create(`certus_quartz_geode`)
        .displayName(`Certus Quartz Geode`)
        .texture(`kubejs:item/resource_gen/geodes/certus_quartz_geode`);

    event.create(`cracked_certus_quartz_geode`)
        .displayName(`Cracked Certus Quartz Geode`)
        .texture(`kubejs:item/resource_gen/geodes/cracked_certus_quartz_geode`);

    event.create(`green_sapphire_geode`)
        .displayName(`Green Sapphire Geode`)
        .texture(`kubejs:item/resource_gen/geodes/green_sapphire_geode`);

    event.create(`cracked_green_sapphire_geode`)
        .displayName(`Cracked Green Sapphire Geode`)
        .texture(`kubejs:item/resource_gen/geodes/cracked_green_sapphire_geode`);

    event.create(`blue_topaz_geode`)
        .displayName(`Blue Topaz Geode`)
        .texture(`kubejs:item/resource_gen/geodes/blue_topaz_geode`);

    event.create(`cracked_blue_topaz_geode`)
        .displayName(`Cracked Blue Topaz Geode`)
        .texture(`kubejs:item/resource_gen/geodes/cracked_blue_topaz_geode`);

    //plant balls
    ['plants', 'roots', 'seeds', 'compost'].forEach(type => {
        event.create(`ball_${type}`)
            .displayName(`Ball of ${type.charAt(0).toUpperCase() + type.slice(1)}`)
            .texture(`kubejs:item/resource_gen/plant_balls/ball_${type}`);
    });

    //scan results
    event.create('undetermined_scan_file')
        .displayName('Scan Result: Undetermined')
        .texture('kubejs:item/resource_gen/undetermined_scan_result');

    ['skystone', 'pollucite', 'lepidolite', 'bastnasite'].forEach(type => {
        event.create(`${type}_scan_file`)
            .displayName(`Scan Result: ${type.charAt(0).toUpperCase() + type.slice(1)} Meteorite`)
            .texture(`kubejs:item/resource_gen/${type}_scan_result`);

        event.create(`${type}_meteorite`)
            .displayName(`${type.charAt(0).toUpperCase() + type.slice(1)} Meteorite`)
            .texture(`kubejs:item/resource_gen/${type}_meteorite`);
    });

    event.create('cargo_drone')
        .displayName('Cargo Drone')
        .texture('kubejs:item/resource_gen/drone_test');

});

StartupEvents.registry('block', event => {

    //Coagulated blocks
    ['iron', 'copper', 'quartz'].forEach(type => {
        event.create(`coagulated_${type}_mixture`)
            .displayName(`Coagulated ${type.charAt(0).toUpperCase() + type.slice(1)} Mixture`)
            .hardness(5)
            .resistance(5)
            .material('stone')
            .requiresTool(true)
            .tagBlock("mineable/pickaxe")
            .textureAll(`kubejs:block/resource_gen/coagulated_${type}_mixture`);
    });
    
    event.create('coagulated_lava')
        .displayName('Coagulated Lava')
        .hardness(5)
        .resistance(5)
        .material('stone')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureAll('kubejs:block/resource_gen/coagulated_lava');

    event.create('reflective_casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(5/15)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/resource_gen/reflective_casing');

});