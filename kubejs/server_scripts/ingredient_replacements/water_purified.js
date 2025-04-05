ServerEvents.recipes(event => {
  event.replaceInput(
    { input: 'minecraft:water' }, // Arg 1: the filter
    'minecraft:water',            // Arg 2: the item to replace
    '#forge:drinkable_water'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )
})