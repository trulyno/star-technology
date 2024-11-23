
let uselessItems = [];
let removable = Boolean;

function unify(type, regex) {
    ServerEvents.tags('item', (event) => {
        // Initialize some variables
        
        let rodObjects = event.get(`forge:${type}`).getObjectIds();
        let rodTypes = [];
        let failedItems = [];
        let rods = [];


        rodObjects.forEach((o) => {
            rods.push(Item.of(o).getId())
        })
        console.log(rods)
        // Adds every subtag of #forge:rods to rodTypes

        rods.forEach((i) => {
            if(regex.test(i)) {
                let mat = i.slice(i.indexOf(":") + 1, i.lastIndexOf("_"));
                if (!rodTypes.includes(`forge:${type}/${mat}`)) {
                    rodTypes.push(`forge:${type}/${mat}`);
                }
            }
        });
        console.log(rodTypes)

        // Removes Non-GT items from tags that contain a GT item.

        rodTypes.forEach((tag) => {
            console.log(tag)
            let itemObjects = event.get(tag.replace('#', '')).getObjectIds();
            let items = [];
            itemObjects.forEach(item => {
                items.push(Item.of(item).getId())
            })
        
            items.forEach((i) => {
                // This code runs for every item.
        
                if (/^gtceu:.*/.test(i)) {
                    // If the item is from GregTech, mark other items in this tag for removal
                    removable = true;
                } else {
                    // If the item isn't from GregTech, mark it as a 'failed item'
                    failedItems.push(i);
                }
            });
            if (removable) {
                // If the tag was marked for removal, remove all 'failed items'
        
                failedItems.forEach((failedItem) => {
                        event.removeAllTagsFrom(failedItem);
                });
                failedItems.forEach(i => {
                    uselessItems.push(i)
                })

                removable = false
                
            }
            failedItems = []
        });
    });

    ServerEvents.recipes(event => {
        uselessItems.forEach(item => {
            event.remove({ output: item })
        })
        uselessItems = []
    })
} 

unify('rods', /.*/);
unify('plates', /.*/);
unify('ingots', /.*/);
unify('nuggets', /.*/);
unify('storage_blocks', /.*/);
unify('gears', /.*/);

