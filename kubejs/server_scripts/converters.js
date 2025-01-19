
ServerEvents.recipes(event => {

    event.remove({ output: /gtceu:.*_energy_converter/ });
    
    
    converterType('1a','single'),converterType('4a','quadruple'),converterType('8a','octal'),converterType('16a','hex')
    
    function converterType(amps,thickness){

        converter('lv','soul_infused')
        converter('mv','signalum')
        converter('hv','lumium')
        converter('ev','enderium')
        converter('iv','shellite')
        converter('luv','twinite')
        converter('zpm','dragonsteel')
        converter('uv','prismalium')
        converter('uhv','stellarium')
        converter('uev','ancient_runicalium')

    function converter(tier,superconductor){

        event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
            '   ',
            'WCW',
            'WSW'
        ], {
            W: `gtceu:${superconductor}_${thickness}_wire`,
            C: `#gtceu:circuits/${tier}`,
            S: `gtceu:${tier}_machine_hull`
        });

    }
    }  
});