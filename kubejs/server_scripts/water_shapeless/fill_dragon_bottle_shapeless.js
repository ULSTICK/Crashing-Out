ServerEvents.recipes(event => {
  function filling(output, fillInput) {
    event.shapeless(output.strongNBT(), [
      'thirstcanteen:dragon_bottle',            
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT(),
      fillInput.strongNBT()
    ]).replaceIngredient('thirstcanteen:dragon_bottle', '8x minecraft:glass_bottle')
  }

  filling(Item.of('thirstcanteen:dragon_bottle_full', {Damage:0,Purity:3}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'))
  filling(Item.of('thirstcanteen:dragon_bottle_full', {Damage:0,Purity:2}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}'))
  filling(Item.of('thirstcanteen:dragon_bottle_full', {Damage:0,Purity:1}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:1}'))
  filling(Item.of('thirstcanteen:dragon_bottle_full', {Damage:0,Purity:0}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}'))

  })