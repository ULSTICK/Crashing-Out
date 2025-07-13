StartupEvents.registry('item', event => {
    event.create('zombie_jerky').food(food => {
        food
            .hunger(4)
            .saturation(1) // This value does not directly translate to saturation points gained
            // The real value can be assumed to be:
            // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
            .effect('minecraft:poison', 20, 1, 0.25)
            .fastToEat() // Like dried kelp
            .meat() // Dogs are willing to eat it
    })

    event.create('monster_mash').food(food => {
        food
            .hunger(5)
            .saturation(1)
            .effect('minecraft:poison', 20, 1, 0.1)
            .meat() // Dogs are willing to eat it
    })

    event.create('bug_broth').food(food => {
        food
            .hunger(7)
            .saturation(1)
            .effect('minecraft:poison', 20, 1, 0.05)
            .meat() // Dogs are willing to eat it
    })

    event.create('enderios').food(food => {
        food
            .hunger(11)
            .saturation(1)
    })
});