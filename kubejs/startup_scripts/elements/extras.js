
GTCEuStartupEvents.registry('gtceu:element', event => {
    
    const elem = global.elementFunction(event);

    elem('mystery', -1, -1, '?');

});