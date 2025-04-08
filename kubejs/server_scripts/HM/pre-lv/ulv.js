// packmode: hard

ServerEvents.recipes(event => {

    ['cinder_block','polished_cinder_block','cinder_bricks'].forEach(t=>{
        event.remove({id: `dustrial_decor:${t}`});
    });

    event.recipes.gtceu.fluid_solidifier('cinder_block')
        .itemInputs('gtceu:wrought_iron_frame')
        .inputFluids('gtceu:concrete 1000')
        .itemOutputs('dustrial_decor:cinder_block')
        .duration(400)
        .EUt(4);

    event.recipes.create.splashing('dustrial_decor:polished_cinder_block','dustrial_decor:cinder_block');

    event.recipes.gtceu.assembler('cinder_bricks')
        .itemInputs('4x dustrial_decor:polished_cinder_block')
        .inputFluids('gtceu:concrete 100')
        .itemOutputs('4x dustrial_decor:cinder_bricks')
        .duration(80)
        .EUt(2);

});