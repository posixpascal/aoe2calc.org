import {ISettings} from "./interface";
import {CivilizationManager} from "./models/civilizationManager";
import {AgeManager} from "./models/ageManager";

export const DEFAULT_SETTINGS : ISettings = {
    civilization: CivilizationManager.byName("aztecs"),
    preferRounding: true,
    startingResources: {
        'food': 300,
        'wood': 200,
        'gold': 200,
        'stone': 200
    },
    startingAge: AgeManager.byName("dark"),
    isNomadStart: false,
    isAllTech: false,
    population: 200,
    calculatorRows: [],
    team: [
        CivilizationManager.byName('aztecs'),
        CivilizationManager.byName('spanish'),
        CivilizationManager.byName('italians'),
        CivilizationManager.byName('celts')
    ],
};