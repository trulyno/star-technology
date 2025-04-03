// //Commented Out for HM

// ServerEvents.recipes(event => {

//     event.shaped('gtceu:ulv_barrel',[
//         'ABA',
//         'ACA',
//         'ADA'],{
//         A: '#forge:stripped_logs',
//         B: 'minecraft:chest',
//         C: 'woodenbucket:wooden_bucket',
//         D: '#minecraft:wooden_slabs'
//     });

//     event.shaped('gtceu:ulv_stone_barrel',[
//         'ABA',
//         'ACA',
//         'ADA'],{
//             A: '#forge:stone',
//             B: 'minecraft:chest',
//             C: 'minecraft:bucket',
//             D: 'minecraft:stone_slab'
//     });

//      function sbarrel(output,fluidcons,nconsfluid,circ){
//         event.recipes.gtceu.stone_barrel(`${output}`)
//             .notConsumableFluid(`${nconsfluid}`)
//             .inputFluids(`${fluidcons} 1000`)
//             .itemOutputs(`${output}`)
//             .circuit(circ)
//             .duration(15);
//     }
//     sbarrel('minecraft:cobblestone','minecraft:water','minecraft:lava','')
//     sbarrel('minecraft:obsidian','minecraft:lava','minecraft:water',1)
//     sbarrel('minecraft:blackstone','exnihilosequentia:witch_water','minecraft:lava','')

//         event.recipes.gtceu.stone_barrel(`gtceu:tempered_glass`)
//             .itemInputs(`minecraft:glass`)
//             .inputFluids(`minecraft:lava 1000`)
//             .itemOutputs(`gtceu:tempered_glass`)
//             .duration(600);

    // const compost = [
    //     'minecraft:hanging_roots','minecraft:pumpkin_pie','minecraft:string','minecraft:apple', 'minecraft:pumpkin','minecraft:mangrove_roots', 'minecraft:big_dripleaf',
    //     'minecraft:spore_blossom','minecraft:vine', 'minecraft:lily_pad','minecraft:sweet_berries','minecraft:red_mushroom','exnihilosequentia:grass_seeds', 'minecraft:brown_mushroom',
    //     'minecraft:spider_eye','minecraft:melon_slice','minecraft:sugar_cane','minecraft:fern','minecraft:bamboo', 'exnihilosequentia:mycelium_spores', 'minecraft:bread',
    //     'minecraft:glow_berries','minecraft:cactus','exnihilosequentia:silkworm', '#minecraft:flowers', '#forge:seeds', '#forge:crops', '#minecraft:saplings', '#minecraft:leaves'
    // ]
    // compost.forEach(type => {
    //     const id = type.slice(type.indexOf(':')+1)
    //     event.recipes.gtceu.barrel_composting(`${id}_composting`)
    //         .itemInputs(`4x ${type}`)
    //         .itemOutputs('minecraft:dirt')
    //         .duration(15);
    // });

    // function transformation(output,ncItem){
    //     event.recipes.gtceu.barrel_transformation(`${output}`)
    //         .notConsumable(`${ncItem}`)
    //         .inputFluids('minecraft:water 1000')
    //         .outputFluids(`${output} 1000`)
    //         .duration(400);
    // }

//     transformation('exnihilosequentia:sea_water','#minecraft:smelts_to_glass')
//     transformation('exnihilosequentia:witch_water','exnihilosequentia:mycelium_spores')
// });