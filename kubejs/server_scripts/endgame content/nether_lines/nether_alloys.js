
ServerEvents.recipes(event => {

    const gas =['_gas','']
    const material = ['mythrylimyn','magmadamantite','estartium']
    gas.forEach(g=>{
    material.forEach(m=>{
        event.remove({id: `gtceu:vacuum_freezer/${m}`});
        event.remove({id: `gtceu:vacuum_freezer/cool_hot_${m}_ingot`});
        event.remove({id: `gtceu:alloy_blast_smelter/${m}${g}`});
    })});

    event.recipes.gtceu.extractor('nether_star_concentrate')
        .itemInputs('minecraft:nether_star')
        .outputFluids('gtceu:nether_star_concentrate 144')

    event.recipes.gtceu.hellforge('mythrylimyn')
        .inputFluids('gtceu:mythril 720')
        .inputFluids('gtceu:osmium 288')
        .inputFluids('gtceu:tantalum 288')
        .inputFluids('gtceu:iridium 144')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('gtceu:argon_plasma 1440')
        .inputFluids('gtceu:utopian_akreyrium 10000')
        .outputFluids('gtceu:molten_mythrylimyn 1440')

    event.recipes.gtceu.hellforge('magmadamantite')
        .inputFluids('gtceu:adamantine 576')
        .inputFluids('gtceu:neutronium 144')
        .inputFluids('gtceu:tungsten 432')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('gtceu:magmatic_plasma 1152')
        .inputFluids('gtceu:utopian_akreyrium 8000')   
        .outputFluids('gtceu:molten_magmadamantite 1152')

    event.recipes.gtceu.hellforge('estartium')
        .inputFluids('gtceu:nether_star_concentrate 576')
        .inputFluids('gtceu:estalt 288')
        .inputFluids('gtceu:pure_netherite 288')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('')
        .inputFluids('gtceu:oxygen_plasma 1152')
        .inputFluids('gtceu:utopian_akreyrium 8000')
        .outputFluids('gtceu:molten_estartium 1152')
    });