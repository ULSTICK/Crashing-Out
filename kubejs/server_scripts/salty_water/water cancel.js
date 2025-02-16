ItemEvents.rightClicked('minecraft:glass_bottle', event => event.cancel()) 
ItemEvents.rightClicked('survive:filled_canteen', event => event.cancel())
ItemEvents.rightClicked('survive:canteen', event => event.cancel())

ItemEvents.firstRightClicked('minecraft:glass_bottle', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.item.count--;
    e.server.scheduleInTicks(0, () => e.player.give('kubejs:salty_water_bottle'));
    e.cancel();
})

ItemEvents.firstRightClicked('minecraft:glass_bottle', e => {
    const {block} = e.target;
    if(!block || block.id != 'survive:purified_water' && block.id != 'minecraft:still_water') return;
    e.item.count--;
    e.server.scheduleInTicks(0, () => e.player.give('kubejs:salty_water_bottle'));
    e.cancel();
})

ItemEvents.rightClicked('survive:canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.rightClicked('survive:canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'survive:purified_water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.rightClicked('survive:filled_canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.rightClicked('survive:filled_canteen', e => {
    const {block} = e.target;
    if(!block || block.id != 'survive:purified_water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

BlockEvents.rightClicked(event => {
    let player = event.player;
    let block = event.block;

    // Check if the block is the centrifuge and if the player is holding an empty bottle
    if (block.id == "thermal:machine_centrifuge" && player.getMainHandItem().id == "minecraft:glass_bottle") {

        // Get the block entity at this position
        let blockEntity = block.getEntity();

        if (blockEntity) {
            console.log("Block entity found!");

            // Try accessing the tank inventory from the block entity
            let tankInventory = blockEntity.getTankInv();

            if (tankInventory) {
                console.log("Tank inventory found!");

                // Get the fluid in the first tank
                let fluidStack = tankInventory.getFluidInTank(0); // Get fluid in the first tank
                let amount = fluidStack.amount;

                if (amount >= 1000) {
                    console.log("Enough purified water found! Dispensing bottle...");

                    // Give the player a filled bottle with purified water
                    event.item.count--
                    event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
                    event.entity.runCommandSilent('give @p minecraft:potion{Potion:"survive:purified_water"}');

                    // Drain 1000mb of purified water from the tank
                    tankInventory.drain(1000);
                } else {
                    console.log("Not enough purified water in the centrifuge! Current amount: " + amount + "mb");
                }
            } else {

                console.log("No tank inventory found!");
            }
        } else {
            console.log("No block entity found!");
        }
    }
});

/* ItemEvents.rightClicked('cold_sweat:waterskin', event => event.cancel())

ItemEvents.firstRightClicked('cold_sweat:waterskin', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.rightClicked('thirst:terracotta_bowl', event => event.cancel())

ItemEvents.firstRightClicked('thirst:terracotta_bowl', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
}) */