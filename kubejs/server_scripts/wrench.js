ServerEvents.tags('block', e => {
    const targets = [
        /^laserio:.*/,
        /^create:.*/,
        /^solarflux:.*/,
        /^pipez:.*/,
        /^kubejs:.*/,
        /^thermal:.*/,
        /^fluxnetworks:.*/,
        /^modularrouters:.*/,
        /^trashcans:.*/
    ]
    targets.forEach(target => e.add('forge:mineable/wrench', target))
})