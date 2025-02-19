
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('utopian_akreyrium')
        .fluid()
        .element(GTElements.get('akreyrium'))
        .color(0xFFFFFF);
    
    event.create('dense_electron_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('akreyrium'))

    event.create('dense_muon_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('akreyrium'))

    event.create('dense_tau_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('akreyrium'))

    event.create('sparse_electron_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('akreyrium'))

    event.create('sparse_muon_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('akreyrium'))

    event.create('sparse_tau_akreyrium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get('akreyrium'))

    event.create('lepton_sparse_akreyrium')
        .fluid()
        .element(GTElements.get('akreyrium'))
        .color(0x6E6E87);

    event.create('gritty_akreyrium')
        .fluid()
        .element(GTElements.get('akreyrium'))
        .color(0x464655);

    event.create('akreyrium_pcb_graphite_nanoparticle_coolant')
        .fluid()
        .color(0x676763);

});