
ServerEvents.recipes(event => {

    const dust1 = 'mysticalagriculture:inferium_essence';
    const dust2 = 'mysticalagriculture:prudentium_essence';
    const dust3 = 'mysticalagriculture:tertium_essence';
    const dust4 = 'mysticalagriculture:imperium_essence';
    const dust5 = 'mysticalagriculture:supremium_essence';
    const dust6 = 'mysticalagriculture:awakened_supremium_essence';
    const dust7 = 'mysticalagradditions:insanium_essence';

    event.recipes.gtceu.essence_enchancing('inferium_ench')
        .itemInputs(dust1)
        .itemOutputs(dust2)
        .duration(1000)
        .EUt(400);

    event.recipes.gtceu.essence_enchancing('prudentium_ench')
        .itemInputs(dust2)
        .itemOutputs(dust3)
        .duration(1000)
        .EUt(1024);

    event.recipes.gtceu.essence_enchancing('tertium_ench')
        .itemInputs(dust3)
        .itemOutputs(dust4)
        .duration(1000)
        .EUt(6400);

    event.recipes.gtceu.essence_enchancing('imperium_ench')
        .itemInputs(dust4)
        .itemOutputs(dust5)
        .duration(1000)
        .EUt(15000);

    event.recipes.gtceu.essence_enchancing('supremium_ench')
        .itemInputs(dust5)
        .itemOutputs(dust6)
        .duration(1000)
        .EUt(100000);

    event.recipes.gtceu.essence_enchancing('awakened_supremium_ench')
        .itemInputs(dust6)
        .itemOutputs(dust7)
        .duration(1000)
        .EUt(250000);
});