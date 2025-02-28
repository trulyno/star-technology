
GTCEuStartupEvents.registry('gtceu:element', event => {
    
    const elem = global.elementFunction(event);

    elem('purified_naquadah', 1, 1, 'Nq-');
    elem('echo_r', -1, -1, 'Ec');

});