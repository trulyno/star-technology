
StartupEvents.registry('item', event => {

    const circuitTiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv'/*, 'uxv', 'opv'*/];

    let tier_capitalized;
    circuitTiers.forEach(tier => {
        if(tier == 'luv') {
            tier_capitalized = 'LuV';
        }
        else if (tier == 'opv') {
            tier_capitalized = 'OpV';
        }
        else {
            tier_capitalized = tier.toUpperCase();
        };
        event.create(`${tier}_universal_circuit`)
            .texture(`kubejs:item/universal_circuits/${tier}_universal_circuit`)
            .displayName(`${tier_capitalized} Universal Circuit`)
            .tooltip('§o§7For use with AE2 autocrafting');
    });

});