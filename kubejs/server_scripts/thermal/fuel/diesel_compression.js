ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:diesel').energy(250000)
  })
  
  ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:kerosene').energy(500000)
  })

  ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:gasoline').energy(750000)
  })

  ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:lpg').energy(1000000)
  })