  ItemEvents.modification(event => {
    event.modify('minecraft:potion', item => {
      craftingRemainder: 'minecraft:glass_bottle'
    })
})  