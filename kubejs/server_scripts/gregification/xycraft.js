
ServerEvents.recipes(event => {

    event.replaceInput({mod: 'xycraft_world'}, 'xycraft:aluminum_ingot', 'gtceu:aluminium_ingot');
    event.replaceInput({mod: 'xycraft_world'}, '#forge:ingots/aluminum', 'gtceu:aluminium_ingot');
    event.remove({input: 'xycraft_world:aluminum_nugget'});
    event.remove({output: 'xycraft_world:aluminum_nugget'});
    event.remove([{output: 'xycraft_world:aluminum_storage'}, {output: 'xycraft_world:aluminum_bricks'}]);
    event.remove([{id: 'xycraft_world:shaped/aluminum_bricks_cloud_red'}, {id: 'xycraft_world:shaped/aluminum_bricks_cloud_red_r'},
    {id: 'xycraft_world:shaped/aluminum_bricks_cloud_blue'}, {id: 'xycraft_world:shaped/aluminum_bricks_cloud_blue_r'},
    {id: 'xycraft_world:shaped/aluminum_bricks_cloud_green'}, {id: 'xycraft_world:shaped/aluminum_bricks_cloud_green_r'},
    {id: 'xycraft_world:shaped/aluminum_bricks_cloud_light'}, {id: 'xycraft_world:shaped/aluminum_bricks_cloud_light_r'},
    {id: 'xycraft_world:shaped/aluminum_bricks_cloud_dark'}, {id: 'xycraft_world:shaped/aluminum_bricks_cloud_dark_r'}]);
    event.replaceInput({output: 'xycraft_world:glass_viewer_immortal'}, 'gtceu:aluminium_ingot', 'gtceu:aluminium_nugget');
    event.replaceInput({output: /xycraft_world:glass_viewer_phantom.*/}, 'minecraft:phantom_membrane', 'gtceu:carbon_fibers');
    event.replaceInput({output: /xycraft_world:immortal_stone.*/}, 'gtceu:aluminium_ingot', 'gtceu:aluminium_nugget');  
    event.shaped(Item.of('5x xycraft_world:aluminum_storage'), [
        'NCN',
        'CNC',
        'NCN'
    ], {
        N: 'gtceu:aluminium_nugget',
        C: 'minecraft:calcite'
    });

    event.shaped(Item.of('2x xycraft_world:aluminum_bricks'), [
        'NC',
        'CN'
    ], {
        N: 'gtceu:aluminium_nugget',
        C: 'minecraft:calcite'
    });
    event.shaped(Item.of('4x xycraft_world:kivi'), [
        'BD',
        'DB'
    ], {
        B: 'minecraft:basalt',
        D: 'minecraft:deepslate'
    });

});