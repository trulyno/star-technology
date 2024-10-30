ServerEvents.recipes(event => {

    function crush(output, input){
    event.shapeless(
        Item.of(output, 1),[input, '#forge:tools/hammers']
    )}

    crush('gtceu:granite_dust','exnihilosequentia:crushed_granite')
    crush('gtceu:andesite_dust','exnihilosequentia:crushed_andesite')
    crush('gtceu:diorite_dust','exnihilosequentia:crushed_diorite')

})