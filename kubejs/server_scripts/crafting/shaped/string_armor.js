ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:string_helmet', 1),
        [
            'SSS',
            'S S'
        ],
        {
            S: '#forge:string'
        }
    )
    event.shaped(
        Item.of('kubejs:string_chestplate', 1),
        [
            'S S',
            'SSS',
            'SSS'
        ],
        {
            S: '#forge:string'
        }
    )
    event.shaped(
        Item.of('kubejs:string_leggings', 1),
        [
            'SSS',
            'S S',
            'S S'
        ],
        {
            S: '#forge:string'
        }
    )
    event.shaped(
        Item.of('kubejs:string_boots', 1),
        [
            'S S',
            'S S'
        ],
        {
            S: '#forge:string'
        }
    )
});