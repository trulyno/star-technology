ServerEvents.recipes(event => {
    event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "item": "ex_nihilo:dust"
      }
    ],
    "processingTime": 350
    })
  })