ServerEvents.recipes(event => {
  event.replaceInput(
    { input: 'minecraft:bucket' }, // Arg 1: the filter
    'minecraft:bucket',            // Arg 2: the item to replace
    '#c:empty_buckets'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

    event.replaceInput(
    { input: 'minecraft:bucket' }, // Arg 1: the filter
    'minecraft:bucket',            // Arg 2: the item to replace
    '#forge:buckets/empty'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

});


