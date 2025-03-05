  
/* ItemEvents.modification(event => {

   event.modify('pamhc2foodcore:saltitem', item => {
      item.foodProperties = food => {
      food.effect('survive:thirst', 600, 0, 1)    
    } 

    event.modify('extra_food_items:spidereyesoup', item => {
      item.foodProperties = food => {
        food.hunger(5)
        food.saturation(3)
    }
  })

  })
})*/

ItemEvents.modification(event => {
  event.modify("pamhc2foodcore:saltitem", item => {
    item.setFoodProperties(food => {
      food.alwaysEdible()
      food.effect("survive:thirst", 600, 1, 1)
    })
  })

  event.modify("extra_food_items:spidereyesoup", item => {
    item.setFoodProperties(food => {
      food.alwaysEdible()
      food.hunger(4.0)
      food.saturation(0.25)
    })
  })
})