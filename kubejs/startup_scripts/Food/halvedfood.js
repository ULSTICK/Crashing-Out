ItemEvents.modification(event => {
    event.modify(/.*/, item => { // Modify all items
        if (item.foodProperties) { // Check if the item is food
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.60)); // Scale hunger to x% of original value, min 1
            food.saturationModifier = food.saturationModifier * 0.5; // Scale saturation to x% of original value
            // console.log(`Modified food: ${item.id}`);
        }
    });
    // Further reduce the effectiveness of pamshc2foodcore:stock
    event.modify('pamshc2foodcore:stock', item => {
        if (item.foodProperties) {
            const food = item.foodProperties;
            food.nutrition = Math.max(1, Math.floor(food.nutrition * 0.3)); // Reduce to 30% of original, min 1
            food.saturationModifier = food.saturationModifier * 0.2; // Reduce to 20% of original
        }
    });
});