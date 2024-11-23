
let uselessItems = [];
let removable = Boolean;

function unify(type, regex) {
    ServerEvents.tags('item', (event) => {
        // Initialize some variables
        
        let itemObjects = event.get(`forge:${type}`).getObjectIds();
        let types = [];
        let failedItems = [];
        let items = [];


        itemObjects.forEach((o) => {
            items.push(Item.of(o).getId())
        })
        console.log(items)
        // Adds every subtag of #forge:items to types

        items.forEach((i) => {
            if(regex.test(i)) {
                let mat = i.slice(i.indexOf(":") + 1, i.lastIndexOf("_"));
                if (!types.includes(`forge:${type}/${mat}`)) {
                    types.push(`forge:${type}/${mat}`);
                }
            }
        });
        console.log(types)

        // Removes Non-GT items from tags that contain a GT item.

        types.forEach((tag) => {
            console.log(tag)
            let itemObjects = event.get(tag.replace('#', '')).getObjectIds();
            let items2 = [];
            itemObjects.forEach(item => {
                items2.push(Item.of(item).getId())
            })
        
            items2.forEach((i) => {
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
unify('dusts', /.*/);

