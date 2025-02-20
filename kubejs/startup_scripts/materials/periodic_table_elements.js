// priority: 200

GTCEuStartupEvents.registry('gtceu:material', event => {

    const element = global.periodicTableElement;

    // Ingots
    element('zirconium', 'ingot');
    element('tellurium', 'ingot');
    element('polonium', 'ingot');
    element('astatine', 'ingot');
    element('hafnium', 'ingot');
    element('seaborgium', 'ingot');
    element('flerovium', 'ingot');
    element('rhenium', 'ingot');

    // Dusts
    element('selenium', 'dust');
    element('strontium', 'dust');
    element('thallium', 'dust');

    // Liquids


    // Gasses
    // periodicTableElement('iodine', 'gas');
    element('oganesson', 'gas');

});