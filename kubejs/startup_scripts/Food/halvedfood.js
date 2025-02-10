ItemEvents.modification(event => {
    event.modify(/.*/, item => { // Modify all items
        if (item.foodProperties) { // Check if the item is food
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.70)); // Scale hunger to x% of original value, min 1
            food.saturationModifier = food.saturationModifier * 0.75; // Scale saturation to x% of original value
            console.log(`Modified food: ${item.id}`);
        }
    });
});
