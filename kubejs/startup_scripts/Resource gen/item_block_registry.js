StartupEvents.registry('item', event => {
    
    //geodes
    ['Diamond', 'Emerald', 'Ruby', 'Sapphire', 'Quartzite', 'Topaz', 'Spessartine', `Certus_Quartz`, `Green_Sapphire`
        ,`Blue_Topaz`,`Apatite`, `Monazite`].forEach(type => {
        event.create(`${type.toLowerCase()}_geode`)
            .displayName(`${type.replace(/_/g, ' ')} Geode`)
            .texture(`kubejs:item/resource_gen/geodes/${type.toLowerCase()}_geode`);
        // event.create(`cracked_${type}_geode`)
        //     .displayName(`Cracked ${type.charAt(0).toUpperCase() + type.slice(1)} Geode`)
        //     .texture(`kubejs:item/resource_gen/geodes/cracked_${type}_geode`);
    });

//     //plant balls
//     ['plants', 'roots', 'seeds', 'compost'].forEach(type => {
//         event.create(`ball_${type}`)
//             .displayName(`Ball of ${type.charAt(0).toUpperCase() + type.slice(1)}`)
//             .texture(`kubejs:item/resource_gen/plant_balls/ball_${type}`);
//     });

//     //scan results
//     event.create('undetermined_scan_file')
//         .displayName('Scan Result: Undetermined')
//         .texture('kubejs:item/resource_gen/undetermined_scan_result');

//     ['skystone', 'pollucite', 'lepidolite', 'bastnasite'].forEach(type => {
//         event.create(`${type}_scan_file`)
//             .displayName(`Scan Result: ${type.charAt(0).toUpperCase() + type.slice(1)} Meteorite`)
//             .texture(`kubejs:item/resource_gen/${type}_scan_result`);

//         event.create(`${type}_meteorite`)
//             .displayName(`${type.charAt(0).toUpperCase() + type.slice(1)} Meteorite`)
//             .texture(`kubejs:item/resource_gen/${type}_meteorite`);
//     });

//     event.create('cargo_drone')
//         .displayName('Cargo Drone')
//         .texture('kubejs:item/resource_gen/drone_test');

// });

// StartupEvents.registry('block', event => {

//     //Coagulated blocks
//     ['iron', 'copper', 'quartz'].forEach(type => {
//         event.create(`coagulated_${type}_mixture`)
//             .displayName(`Coagulated ${type.charAt(0).toUpperCase() + type.slice(1)} Mixture`)
//             .hardness(5)
//             .resistance(5)
//             .material('stone')
//             .requiresTool(true)
//             .tagBlock("mineable/pickaxe")
//             .textureAll(`kubejs:block/resource_gen/coagulated_${type}_mixture`);
//     });
    
//     event.create('coagulated_lava')
//         .displayName('Coagulated Lava')
//         .hardness(5)
//         .resistance(5)
//         .material('stone')
//         .requiresTool(true)
//         .tagBlock("mineable/pickaxe")
//         .textureAll('kubejs:block/resource_gen/coagulated_lava');

//     event.create('reflective_casing')
//         .hardness(10)
//         .resistance(1)
//         .lightLevel(5/15)
//         .soundType('metal')
//         .requiresTool(true)
//         .tagBlock("mineable/pickaxe")
//         .tagBlock('minecraft:needs_iron_tool')
//         .textureAll('kubejs:block/resource_gen/reflective_casing');

});