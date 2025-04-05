ItemEvents.modification(event => {
  event.modify('extra_food_items:invarshears', item => {
    item.maxDamage = 450
  })
})