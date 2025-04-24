if (global.packmode !== 'hard'){
    (() => {

ServerEvents.recipes(event => {
const id = global.id
    event.shaped('gtceu:ulv_barrel',[
        'ABA',
        'ACA',
        'ADA'],{
        A: '#forge:stripped_logs',
        B: 'minecraft:chest',
        C: 'woodenbucket:wooden_bucket',
        D: '#minecraft:wooden_slabs'
    }).id('start:shaped/ulv_barrel');

    event.shaped('gtceu:ulv_stone_barrel',[
        'ABA',
        'ACA',
        'ADA'],{
            A: '#forge:stone',
            B: 'minecraft:chest',
            C: 'minecraft:bucket',
            D: 'minecraft:stone_slab'
    }).id('start:shaped/ulv_stone_barrel');

    const sbarrel = (output, fluidcons, nconsfluid, circ) => {
        event.recipes.gtceu.stone_barrel(id(`${output}`))
            .notConsumableFluid(`${nconsfluid}`)
            .inputFluids(`${fluidcons} 1000`)
            .itemOutputs(`minecraft:${output}`)
            .circuit(circ)
            .duration(15);
    }

    sbarrel('cobblestone','minecraft:water','minecraft:lava','')
    sbarrel('obsidian','minecraft:lava','minecraft:water',1)
    sbarrel('blackstone','exnihilosequentia:witch_water','minecraft:lava','')

    event.recipes.gtceu.stone_barrel(id(`tempered_glass`))
        .itemInputs(`minecraft:glass`)
        .inputFluids(`minecraft:lava 1000`)
        .itemOutputs(`gtceu:tempered_glass`)
        .duration(600);

const barrel = (output, item, fluid) => {
    event.recipes.gtceu.barrel(id(`${output.split(':')[1]}`))
        .itemInputs(`${item}`)
        .inputFluids(`${fluid} 1000`)
        .itemOutputs(`${output}`)
        .duration(15);
}

barrel('minecraft:clay','exnihilosequentia:dust','minecraft:water')
barrel('minecraft:mud','minecraft:dirt','minecraft:water')
barrel('minecraft:pointed_dripstone','exnihilosequentia:crushed_dripstone','minecraft:water')
barrel('minecraft:brown_mushroom_block','exnihilosequentia:mycelium_spores','exnihilosequentia:witch_water')
barrel('minecraft:red_mushroom_block','minecraft:brown_mushroom_block','exnihilosequentia:witch_water')
barrel('minecraft:soul_sand','#minecraft:smelts_to_glass','exnihilosequentia:witch_water')
barrel('minecraft:soul_soil','minecraft:coarse_dirt','exnihilosequentia:witch_water')
barrel('minecraft:blackstone','minecraft:cobblestone','exnihilosequentia:witch_water')
barrel('minecraft:slime_block','minecraft:red_mushroom_block','exnihilosequentia:witch_water')
barrel('minecraft:tube_coral_block','exnihilosequentia:tube_coral_larva','exnihilosequentia:sea_water')
barrel('minecraft:brain_coral_block','exnihilosequentia:brain_coral_larva','exnihilosequentia:sea_water')
barrel('minecraft:bubble_coral_block','exnihilosequentia:bubble_coral_larva','exnihilosequentia:sea_water')
barrel('minecraft:fire_coral_block','exnihilosequentia:fire_coral_larva','exnihilosequentia:sea_water')
barrel('minecraft:horn_coral_block','exnihilosequentia:horn_coral_larva','exnihilosequentia:sea_water')

const compost = [
    'minecraft:hanging_roots','minecraft:pumpkin_pie','minecraft:string','minecraft:apple', 'minecraft:pumpkin','minecraft:mangrove_roots', 'minecraft:big_dripleaf',
    'minecraft:spore_blossom','minecraft:vine', 'minecraft:lily_pad','minecraft:sweet_berries','minecraft:red_mushroom','exnihilosequentia:grass_seeds', 'minecraft:brown_mushroom',
    'minecraft:spider_eye','minecraft:melon_slice','minecraft:sugar_cane','minecraft:fern','minecraft:bamboo', 'exnihilosequentia:mycelium_spores', 'minecraft:bread',
    'minecraft:glow_berries','minecraft:cactus','exnihilosequentia:silkworm', '#minecraft:flowers', '#forge:seeds', '#forge:crops', '#minecraft:saplings', '#minecraft:leaves'
]
compost.forEach(type => {
    event.recipes.gtceu.barrel_composting(id(`${type.split(':')[1]}_composting`))
        .itemInputs(`4x ${type}`)
        .itemOutputs('minecraft:dirt')
        .duration(15);
});

    const transformation = (output, ncItem) => {
        event.recipes.gtceu.barrel_transformation(id(`${output.split(':')[1]}`))
            .notConsumable(`${ncItem}`)
            .inputFluids('minecraft:water 1000')
            .outputFluids(`${output} 1000`)
            .duration(400);
    }

    transformation('exnihilosequentia:sea_water','#minecraft:smelts_to_glass')
    transformation('exnihilosequentia:witch_water','exnihilosequentia:mycelium_spores')
});
})()
}