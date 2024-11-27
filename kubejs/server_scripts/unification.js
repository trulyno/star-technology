
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
            // Convert the items to string IDs because if you don't nothing works
            items.push(Item.of(o).getId());
        })

        items.forEach((i) => {
            // Checks for the blacklisted items regex; items that should be skipped to avoid errors
            if(regex.test(i)) {
                // Skip out the characters before the : and after the last _; the material
                let mat = i.slice(i.indexOf(":") + 1, i.lastIndexOf("_"));
                // Push the type into the types folder to avoid duplicates (When there's more than one rod with the same tag)
                if (!types.includes(`forge:${type}/${mat}`)) {
                    types.push(`forge:${type}/${mat}`);
                }
            }
        });
        console.log(types)

        types.forEach((tag) => {
            // Creates a variable with all of the items in the tag
            let itemObjects = event.get(tag.replace('#', '')).getObjectIds();
            let items2 = [];
            // Converts items to string ids because again, if you don't everything breaks)
            itemObjects.forEach(item => {
                items2.push(Item.of(item).getId());
            })
            items2.forEach((i) => {
                // If the item is from GT, mark the tag for unification
                if (/^gtceu:.*/.test(i)) {
                    removable = true;
                } else {
                    // If the item isn't from GregTech, mark it as a 'failed item'
                    failedItems.push(i);
                }
            });
            if (removable) {
                // If the tag was marked for removal, remove all 'failed items' and their recipes
        
                failedItems.forEach((failedItem) => {
                        event.removeAllTagsFrom(failedItem);
                }); 
                console.log(`cleaned up tag ${tag}`);
    
                failedItems.forEach(i => {
                    uselessItems.push(i)
                });

                removable = false;
                
            } else {
            console.log(`skipped unification of tag ${tag}`);
            }
            failedItems = [];
        });
    });

    ServerEvents.recipes(event => {
        uselessItems.forEach(item => {
            // remove recipes for items whos tags were remove
            event.remove({ output: item });
        })
        uselessItems = [];
    })
} 

unify('rods', /.*/);
unify('plates', /.*/);
unify('ingots', /.*/);
unify('nuggets', /.*/);
unify('storage_blocks', /.*/);
unify('gears', /.*/);
unify('dusts', /.*/);

