ServerEvents.recipes(event => {
    event.shaped(
    Item.of('thirstcanteen:military_bottle'),
    [
        " AB",
        "ACA",
        "AAA"
    ],
    {
      A: '#forge:ingots/steel',
      B: 'minecraft:string',
      C: 'minecraft:green_dye'
    }
  )
})