/* ServerEvents.recipes(event => {
    function filling(output, fillInput) {
  event.shapeless(output.strongNBT(), [
          'thirstcanteen:leather_canteen_full',
          fillInput.strongNBT()

      ]).replaceIngredient('thirstcanteen:leather_canteen_full', 'minecraft:glass_bottle').damageIngredient(Item.of('thirstcanteen:leather_canteen_full').ignoreNBT, -1)
}  

filling(Item.of('thirstcanteen:leather_canteen_full', {Purity:3}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'))
filling(Item.of('thirstcanteen:leather_canteen_full', {Purity:2}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}'))
filling(Item.of('thirstcanteen:leather_canteen_full', {Purity:1}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:1}'))
filling(Item.of('thirstcanteen:leather_canteen_full', {Purity:0}), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}'))

}) */

ServerEvents.recipes(event => {

    event.shapeless(
        'minecraft:glass_bottle', [
            Item.of('thirstcanteen:leather_canteen_full', {Purity:3}),
            Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}')
        ]
    )
    .damageIngredient(Item.of('thirstcanteen:leather_canteen_full', {Purity:3}), 1)

})