ServerEvents.tags('item', event => {
    event.add('gtceu:circuits/zpm', 'kubejs:draconic_wetware_microchip_processor');
    event.add('gtceu:circuits/uv', 'kubejs:draconic_wetware_processor');
    event.add('gtceu:circuits/uhv', 'kubejs:draconic_wetware_processor_assembly');
    event.add('gtceu:circuits/uev', 'kubejs:draconic_wetware_processor_computer');
    event.add('gtceu:circuits/uiv', 'kubejs:draconic_wetware_processor_mainframe');
    event.add('gtceu:circuits/uev', 'kubejs:wetware_based_runic_neuroloom');
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

    ['diamond', 'emerald', 'ruby', 'sapphire', 'quartzite', 'topaz', 'spessartine', 'certus_quartz', 'green_sapphire'
        ,'blue_topaz','apatite', 'monazite'].forEach(type => {
        event.add('gtceu:geode', `kubejs:${type}_geode`);
        // event.add('gtceu:cracked_geode', `kubejs:cracked_${type}_geode`);
    });

    event.add('gtceu:coal_dusts', 'gtceu:charcoal_dust');
    event.add('gtceu:coal_dusts', 'gtceu:coal_dust');
    event.add('gtceu:coal_blocks', 'minecraft:coal_block');
    event.add('gtceu:coal_blocks', 'gtceu:charcoal_block');

});

ServerEvents.tags('item', event=>{
    const thermal = [
        /thermal:signalum.*/,
        /thermal:lumium.*/,
        /thermal:enderium.*/,
        /thermal:apatite.*/,
        /thermal:cinnabar.*/,
        /thermal:tin.*/,
        /thermal:lead.*/,
        /thermal:silver.*/,
        /thermal:nickel.*/,
        /thermal:bronze.*/,
        /thermal:electrum.*/,
        /thermal:invar.*/,
        /thermal:ruby.*/,
        /thermal:sapphire.*/,
        /thermal:iron.*/,
        /thermal:gold.*/,
        /thermal:copper.*/,
        /thermal:netherite.*/,
        /thermal:diamond.*/,
        /thermal:emerald.*/,
        /thermal:quartz.*/,
        /thermal:sulfur.*/,
        /thermal:ender_pearl.*/
    ]
    const thermal_extra = [
        'thermal_extra:obsidian_dust',
        'thermal_extra:amethyst_dust',
        'thermal_extra:soul_infused_dust',
        'thermal_extra:shellite_dust',
        'thermal_extra:twinite_dust',
        'thermal_extra:dragonsteel_dust',
        'thermal_extra:zinc_dust',
        'thermal:sawdust',
        /thermal_extra:.*_nugget/,
        /thermal_extra:.*_ingot/,
        /thermal_extra:.*_block/,
        /thermal_extra:.*_plate/,
        /thermal_extra:.*_rod/,
        /thermal_extra:.*_gear/
    ]
    const Exnihilo = [
        /exnihilosequentia:.*_ingot/,
        /exnihilosequentia:.*_nugget/
    ]
    const Create = [
        /create:zinc_.*/,
        /create:copper.*/,
        /create:iron.*/,
        /create:brass.*/,
        'create:powdered_obsidian'
    ]

    thermal.forEach((item)=> {
        event.removeAllTagsFrom(`${item}`)
    });
    thermal_extra.forEach((item)=> {
        event.removeAllTagsFrom(`${item}`)
    });
    Exnihilo.forEach((item)=> {
        event.removeAllTagsFrom(`${item}`)
    });
    Create.forEach((item)=> {
        event.removeAllTagsFrom(`${item}`)
    });
});

ServerEvents.tags('block', event => {

    event.add('minecraft:mineable/pickaxe', /xtonesreworked:glaxx_block_.*/);

    const targets = [
        /^laserio:.*/,
        /^create:.*/,
        /^solarflux:.*/,
        /^pipez:.*/,
        /^kubejs:.*/,
        /^thermal:.*/,
        /^fluxnetworks:.*/,
        /^modularrouters:.*/,
        /^trashcans:.*/
    ]
    targets.forEach(target => event.add('forge:mineable/wrench', target))

    event.remove('mineable/pickaxe', [
        'gtceu:ulv_barrel'
    ]);
    event.add('mineable/axe', [
        'gtceu:ulv_barrel'
    ]);
    event.add('mineable/pickaxe', [
        'travelanchors:travel_anchor'
    ]);
    
});