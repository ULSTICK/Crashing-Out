ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('forge:shears', 'extra_food_items:invarshears')
    event.add('c:shears', 'extra_food_items:invarshears')
    event.add('bookshelf:shears', 'extra_food_items:invarshears')
    event.add('forge:tools/invar', 'extra_food_items:invarshears')
    event.add('forge:buckets/empty', 'exdeorum:porcelain_bucket')
})