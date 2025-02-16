// Modify the event handler for right-clicking the centrifuge

/* BlockEvents.rightClicked(event => {
    let player = event.player;
    let block = event.block;

    // Check if the block is the centrifuge and if the player is holding an empty bottle
    if (block.id == "thermal:machine_centrifuge" && player.getMainHandItem().id == "exdeorum:porcelain_bucket") {

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
                let fluidId = fluidStack.id;
                let amount = fluidStack.amount;

                console.log(`Fluido encontrado: ${fluidId}, Quantidade: ${amount}mb`);

                if (fluidId == "survive:purified_water" && amount >= 1000) {
                    console.log("Enough purified water found! Dispensing bottle...");

                    // Give the player a filled bottle with purified water
                    event.item.count--
                    event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
                    event.entity.runCommandSilent('give @p kubejs:porcelain_purified_water_bucket');

                    // Drain 1000mb of purified water from the tank
                    tankInventory.drain(1000, true);
                } else {
                    console.log("Not enough purified water in the centrifuge! Current amount: " + amount + "mb");
                }
            } else {
                event.cancel
                console.log("No tank inventory found!");
            }
        } else {
            console.log("No block entity found!");
        }
    }
}); */
 
BlockEvents.rightClicked(event => {
    let player = event.player;
    let block = event.block;

    // Ensure the player is holding an empty porcelain bucket
    if (player.getMainHandItem().id == "exdeorum:porcelain_bucket") {
        
        let blockEntity = block.getEntity();
        if (!blockEntity) {
            console.log("No block entity found!");
            return;
        }

        console.log(`Block entity found: ${blockEntity}`);

        // Check if the block entity has a fluid inventory
        if (typeof blockEntity.getTankInv !== "function") {
            console.log("Block entity does not support fluid handling!");
            return;
        }

        let tankInventory = blockEntity.getTankInv();
        if (!tankInventory) {
            console.log("No tank inventory found!");
            return;
        }

        console.log("Tank inventory found!");

        // Get fluid from the first tank slot
        let fluidStack = tankInventory.getFluidInTank(0);
        if (!fluidStack || fluidStack.isEmpty()) {
            console.log("Tank is empty!");
            return;
        }

        // Get the fluid object and its amount
        let fluid = fluidStack.getFluid();
        let amount = fluidStack.amount;

        // Extract fluid ID by using the fluid's unique identifier
        let fluidId = fluid.getRegistryName().toString();  // Get the fluid ID as a string
        console.log(`Fluid found: ${fluidId}, Amount: ${amount}mb`);

        // Ensure the fluid is 'survive:purified_water' and there's at least 1000mb
        if (fluidId == "survive:purified_water" && amount >= 1000) {
            console.log("Purified water found! Filling the bucket...");

            // Remove the empty bucket from the player
            event.item.count--;

            // Give the player a porcelain bucket with purified water
            event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
            event.entity.runCommandSilent('give @p kubejs:porcelain_purified_water_bucket');

            // Drain 1000mb of purified water from the tank
            let amountToDrain = 1000;

            // Create a new FluidStack with the fluid to drain
            let fluidToDrain = new FluidStack(fluid, amountToDrain);

            // Attempt to drain the fluid and update the tank inventory
            let success = tankInventory.drain(fluidToDrain, true); // Pass `true` to actually drain the fluid

            if (success) {
                console.log("Fluid drained successfully!");
            } else {
                console.log("Failed to drain fluid from the tank!");
            }
        } else {
            console.log("Not enough purified water or wrong fluid!");
        }
    }
});




/* tankInventory.drain(1000) 
com.stereowalker.survive.world.level.material.PurifiedWaterFluid$Source@7fac91fb
*/



// Modify the event handler for right-clicking the centrifuge
/* BlockEvents.rightClicked(event => {
    let player = event.player;
    let block = event.block;

    // Check if the block is the centrifuge and if the player is holding an empty bottle
    if (block.id == "exdeorum:oak_barrel" && player.getMainHandItem().id == "exdeorum:porcelain_bucket") {

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
                    event.entity.runCommandSilent('give @p kubejs:porcelain_purified_water_bucket');

                    // Drain 1000mb of purified water from the tank
                    tankInventory.drain(1000);
                } else {
                    console.log("Not enough purified water in the centrifuge! Current amount: " + amount + "mb");
                }
            } else {
                event.cancel
                console.log("No tank inventory found!");
            }
        } else {
            console.log("No block entity found!");
        }
    }
}); */

///////////////////////////////////////////// bottle /////////////////////////////////////////////////////////////////////

