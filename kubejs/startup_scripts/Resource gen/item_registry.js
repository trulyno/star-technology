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

    //cluster
    ['coal', 'gold', 'lapis', 'pentlandite', 'realgar', 'silver', 'stibnite'].forEach(type => {
        event.create(`${type}_cluster`)
            .displayName(`${type.charAt(0).toUpperCase() + type.slice(1)} Ore Cluster`)
            .texture(`kubejs:item/resource_gen/clusters/${type}_cluster`);
    });

});