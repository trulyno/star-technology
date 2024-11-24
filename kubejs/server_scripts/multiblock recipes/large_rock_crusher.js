
ServerEvents.recipes(event => {

    event.recipes.gtceu.large_rock_crusher('basalt')
        .notConsumable('minecraft:basalt')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:basalt')
        .duration(16)
        .EUt(240);

    event.recipes.gtceu.large_rock_crusher('blackstone')
        .notConsumable('minecraft:blackstone')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:blackstone')
        .duration(16)
        .EUt(7);

    event.recipes.gtceu.large_rock_crusher('red_granite')
        .notConsumable('gtceu:red_granite')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('gtceu:red_granite')
        .duration(16)
        .EUt(960);

    event.recipes.gtceu.large_rock_crusher('andesite')
        .notConsumable('minecraft:andesite')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:andesite')
        .duration(16)
        .EUt(60);

    event.recipes.gtceu.large_rock_crusher('granite')
        .notConsumable('minecraft:granite')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:granite')
        .duration(16)
        .EUt(60);

    event.recipes.gtceu.large_rock_crusher('stone')
        .notConsumable('minecraft:stone')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:stone')
        .duration(16)
        .EUt(60);

    event.recipes.gtceu.large_rock_crusher('marble')
        .notConsumable('gtceu:marble')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('gtceu:marble')
        .duration(16)
        .EUt(240);

    event.recipes.gtceu.large_rock_crusher('cobblestone')
        .notConsumable('minecraft:cobblestone')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:cobblestone')
        .duration(16)
        .EUt(60);

    event.recipes.gtceu.large_rock_crusher('diorite')
        .notConsumable('minecraft:diorite')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:diorite')
        .duration(16)
        .EUt(60);

    event.recipes.gtceu.large_rock_crusher('obsidian')
        .notConsumable('minecraft:redstone')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:obsidian')
        .duration(16)
        .EUt(240);

    event.recipes.gtceu.large_rock_crusher('deepslate')
        .notConsumable('minecraft:deepslate')
        .notConsumableFluid('minecraft:water 1000')
        .notConsumableFluid('minecraft:lava 1000')
        .itemOutputs('minecraft:deepslate')
        .duration(16)
        .EUt(960);

});