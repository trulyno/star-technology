
GTCEuStartupEvents.registry('gtceu:element', event => {
    
    const elem = global.elementFunction(event);

    elem('mystery', -1, -1, '?');
    elem('skystone', -1, -1, 'Sk');
    elem('fluix', -1, -1, 'Fl');

});