ServerEvents.recipes(event => {
    const fillCanteen = (liquid, start, end) => {
        // sets recipe name
        const name = liquid.split(':')[1];
        const id = `filling_${name}_${end}`;

        // sets input, uses an empty canteen if start is 0
        const input = start === 0
            ? Item.of('survive:canteen')
            : Item.of(
                'survive:filled_canteen',
                `{DrinksLeft:${start},Potion:"${liquid}"}`
            ).strongNBT();

        // sets output
        const output = Item.of(
            'survive:filled_canteen',
            `{DrinksLeft:${end},Potion:"${liquid}"}`
        ).strongNBT();

        // main filling recipe
        event.recipes.create.filling(
            output,
            [Fluid.of(liquid, 1000), input]
        ).id(id);
    };

    fillCanteen('minecraft:water', 0, 1);
    fillCanteen('minecraft:water', 1, 2);
    fillCanteen('minecraft:water', 2, 3);

    fillCanteen('survive:purified_water', 0, 1);
    fillCanteen('survive:purified_water', 1, 2);
    fillCanteen('survive:purified_water', 2, 3);
});
