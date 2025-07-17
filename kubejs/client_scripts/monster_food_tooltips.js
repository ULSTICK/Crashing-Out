ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:zombie_jerky', (item, advanced, text) => {
        text.add(1, Text.darkgreen("Has a chance to deal slight damage upon eating."));
    });
    event.addAdvanced('kubejs:monster_mash', (item, advanced, text) => {
        text.add(1, Text.darkgreen("Has a small chance to deal slight damage upon eating."));
    });
    event.addAdvanced('kubejs:bug_broth', (item, advanced, text) => {
        text.add(1, Text.darkgreen("Has a very small chance to deal slight damage upon eating."));
    });
});
