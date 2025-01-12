ServerEvents.recipes(event => {

    const milling = function(input, output, duration){
        event.custom({
            "type": "create:milling",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "processingTime": duration,
            "results": [
                {
                    "item": output
                }
            ]
        });
    };



    milling('minecraft:gold_ore', 'thermal:gold_dust', 250);
    milling('minecraft:iron_ore', 'thermal:iron_dust', 250);
    milling('minecraft:copper_ore', 'thermal:copper_dust', 250);
    milling('thermal:tin_ore', 'thermal:tin_dust', 250);
    milling('thermal:nickel_ore', 'thermal:nickel_dust', 250);
    
});
