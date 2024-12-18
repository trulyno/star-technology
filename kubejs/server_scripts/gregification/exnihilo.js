
ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('flux_sieve')
        .itemInputs('gtceu:aluminium_frame', '4x gtceu:stainless_steel_plate', 'gtceu:item_filter')
        .itemOutputs('exmachinis:flux_sieve')
        .duration(600)
        .EUt(120);

    event.recipes.gtceu.assembler('gold_upgrade')
        .itemInputs('gtceu:silicon_plate', '#gtceu:circuits/hv', '16x gtceu:electrum_foil')
        .itemOutputs('exmachinis:gold_upgrade')
        .duration(600)
        .EUt(250);

    event.recipes.gtceu.assembler('diamond_upgrade')
        .itemInputs('gtceu:silicon_plate', '#gtceu:circuits/ev', '16x gtceu:stainless_steel_foil')
        .itemOutputs('exmachinis:diamond_upgrade')
        .duration(600)
        .EUt(1280);

    event.recipes.gtceu.assembler('netherite_upgrade')
        .itemInputs('gtceu:silicon_plate', '#gtceu:circuits/iv', '4x minecraft:netherite_ingot')
        .itemOutputs('exmachinis:netherite_upgrade')
        .duration(600)
        .EUt(5200);

    event.recipes.gtceu.assembler('flint_mesh')
        .itemInputs('exnihilosequentia:string_mesh', '6x minecraft:flint')
        .itemOutputs('exnihilosequentia:flint_mesh')
        .duration(300)
        .EUt(22);

    event.recipes.gtceu.assembler('iron_mesh')
        .itemInputs('exnihilosequentia:flint_mesh', '16x gtceu:wrought_iron_foil')
        .itemOutputs('exnihilosequentia:iron_mesh')
        .duration(300)
        .EUt(78);

    event.recipes.gtceu.assembler('diamond_mesh')
        .itemInputs('exnihilosequentia:iron_mesh', '16x #forge:dusts/diamond')
        .itemOutputs('exnihilosequentia:diamond_mesh')
        .duration(300)
        .EUt(345);

    event.recipes.gtceu.assembler('emerald_mesh')
        .itemInputs('exnihilosequentia:diamond_mesh', '16x #forge:dusts/emerald')
        .itemOutputs('exnihilosequentia:emerald_mesh')
        .duration(300)
        .EUt(1024);

    event.recipes.gtceu.assembler('netherite_mesh')
        .itemInputs('exnihilosequentia:emerald_mesh', '4x minecraft:netherite_ingot')
        .itemOutputs('exnihilosequentia:netherite_mesh')
        .duration(300)
        .EUt(4096);

    event.recipes.gtceu.forge_hammer('gravel_to_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu.forge_hammer('sand_to_dust')
        .itemInputs('minecraft:sand')
        .itemOutputs('exnihilosequentia:dust')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu.macerator('crushed_blackstone')
        .itemInputs('minecraft:blackstone')
        .itemOutputs('exnihilosequentia:crushed_blackstone')
        .duration(10)
        .EUt(8);

});