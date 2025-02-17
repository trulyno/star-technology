ServerEvents.tags('item', event => {
    event.add('gtceu:circuits/zpm', 'kubejs:draconic_wetware_microchip_processor');
    event.add('gtceu:circuits/uv', 'kubejs:draconic_wetware_processor');
    event.add('gtceu:circuits/uhv', 'kubejs:draconic_wetware_processor_assembly');
    event.add('gtceu:circuits/uev', 'kubejs:draconic_wetware_processor_computer');
    event.add('gtceu:circuits/uiv', 'kubejs:draconic_wetware_processor_mainframe');
    event.add('gtceu:circuits/uev', 'kubejs:wetware_based_runic_neuroloom')
    event.remove('minecraft:planks', 'gtceu:treated_wood_planks');

    const knifeTagRemove = ['netherite','flint','iron','diamond','golden']    
    knifeTagRemove.forEach((item)=> {
        event.remove('forge:tools/knives',`farmersdelight:${item}_knife`)
    });
    
    event.add('exnihilosequentia:mesh', 'exnihilosequentia:string_mesh');
    event.add('exnihilosequentia:mesh', 'exnihilosequentia:flint_mesh');
    event.add('exnihilosequentia:mesh', 'exnihilosequentia:iron_mesh');
    event.add('exnihilosequentia:mesh', 'exnihilosequentia:diamond_mesh');
    event.add('exnihilosequentia:mesh', 'exnihilosequentia:emerald_mesh');
    event.add('exnihilosequentia:mesh', 'exnihilosequentia:netherite_mesh');

    ['diamond', 'emerald', 'ruby', 'sapphire', 'quartzite', 'topaz', 'spessartine', `certus_quartz`, `green_sapphire`
        ,`blue_topaz`,`apatite`, `monazite`].forEach(type => {
        event.add('gtceu:geode', `kubejs:${type}_geode`);
        // event.add('gtceu:cracked_geode', `kubejs:cracked_${type}_geode`);
    });

    event.add('gtceu:coal_dusts', 'gtceu:charcoal_dust');
    event.add('gtceu:coal_dusts', 'gtceu:coal_dust');
    event.add('gtceu:coal_blocks', 'minecraft:coal_block');
    event.add('gtceu:coal_blocks', 'gtceu:charcoal_block');

});

ServerEvents.tags('item', event=>{
    const plates = [
        
    ]
    const dust = [
        
    ]
    const ingots = [
        'thermalendergy:melodium_ingot',
        'thermalendergy:prismalium_ingot',
        'thermalendergy:stellarium_ingot'
    ]
    const blocks = [
        'thermalendergy:melodium_block',
        'thermalendergy:prismalium_block',
        'thermalendergy:stellarium_block'
    ]
    const nuggets = [
        'thermalendergy:melodium_nugget',
        'thermalendergy:prismalium_nugget',
        'thermalendergy:stellarium_nugget'
    ]
    const gems = [

    ]

    dust.forEach((item)=> {
        event.removeAllTagsFrom(`${item}`)
    });
    blocks.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    ingots.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    plates.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    gems.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    nuggets.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
});

ServerEvents.tags('fluid', event=>{
    const nc_fluids =[
        
    ];
    const mis = [
      
    ];
    nc_fluids.forEach((fluids) => {
      mis.forEach((tag) => {
        event.removeAllTagsFrom(`${fluids}`),
        event.removeAllTagsFrom(`${fluids}${tag}`)
      })
    })

});