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

    if (player.getMainHandItem().id == "exdeorum:porcelain_bucket") {
        let blockEntity = block.getEntity();
        if (!blockEntity) {
            console.log("No block entity found!");
            return;
        }

        console.log(`Block entity found: ${blockEntity}`);

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

        let fluidStack = tankInventory.getFluidInTank(0);
        if (!fluidStack || fluidStack.isEmpty()) {
            console.log("Tank is empty!");
            return;
        }

        let fluidId = fluidStack.getFluid().toString(); // Convert fluid to string
        let amount = fluidStack.amount;

        console.log(`Fluid found: ${fluidId}, Amount: ${amount}mb`);

        if (fluidId.includes("PurifiedWater") && amount >= 1000) {
            console.log("Purified water found! Filling the bucket...");

            event.item.count--;
            event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
            event.entity.runCommandSilent('give @p kubejs:porcelain_purified_water_bucket');

            // Importing FluidStack properly
            let FluidStack = Java.type("net.minecraftforge.fluids.FluidStack");
            let drained = tankInventory.drain(new FluidStack(fluidStack.getFluid(), 1000), true);

            if (drained.amount > 0) {
                console.log("Fluid drained successfully!");
            } else {
                console.log("Failed to drain fluid from the tank!");
            }
        } else {
            console.log("Not enough purified water or wrong fluid!");
        }
    }
});


BlockEvents.rightClicked(event => {
    let player = event.player;
    let block = event.block;

    if (player.getMainHandItem().id == "minecraft:glass_bottle") {
        
        let blockEntity = block.getEntity();
        if (!blockEntity) {
            console.log("No block entity found!");
            return;
        }

        console.log(`Block entity found: ${blockEntity}`);

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

        let fluidStack = tankInventory.getFluidInTank(0);
        if (!fluidStack || fluidStack.isEmpty()) {
            console.log("Tank is empty!");
            return;
        }

        let fluidId = fluidStack.getFluid().toString(); // Convert fluid to string
        let amount = fluidStack.amount;

        console.log(`Fluid found: ${fluidId}, Amount: ${amount}mb`);

        if (fluidId.includes("PurifiedWater") && amount >= 1000) {
            console.log("Purified water found! Filling the bucket...");

            event.item.count--;
            event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
            event.entity.runCommandSilent('give @p minecraft:potion{Potion:"survive:purified_water"}');

            // Drena 1000mb do tanque corretamente
            tankInventory.drain({ amount: 1000 }, true);
            
        } else {
            console.log("Not enough purified water or wrong fluid!");
        }
    }
});