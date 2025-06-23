ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:diesel').energy(256000)
})

ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:kerosene').energy(320000)
})

ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:gasoline').energy(400000)
})

ServerEvents.recipes(event => {
    event.recipes.thermal.compression_fuel('pneumaticcraft:lpg').energy(500000)
})