ServerEvents.recipes(event => {
    event.shaped(
    Item.of('thirstcanteen:dragon_bottle'),
    [
      " A ",
      "BCB",
      "DED"
    ],
    {
      A: 'minecraft:dragon_head',
      B: 'minecraft:string',
      C: 'minecraft:conduit',
      D: 'minecraft:shulker_shell',
      E: '#forge:ingots/steel'
    }
  )
})
