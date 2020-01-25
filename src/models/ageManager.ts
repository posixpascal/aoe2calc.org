import {IAge, ICivilization, IDict} from "../interface";
import {Aztecs} from "./civs/aztecs";
import {Civilization} from "./civilization";
import {Italians} from "./civs/italians";
import {Celts} from "./civs/celts";
import {Spanish} from "./civs/spanish";
import {Age} from "./age";
import {FeudalAge} from "./ages/feudalAge";
import {ImperialAge} from "./ages/imperialAge";
import {DarkAge} from "./ages/darkAge";
import {CastleAge} from "./ages/castleAge";

export class AgeManager {
    static AGES: IDict<Age> = {
        "dark": new DarkAge(),
        "feudal": new FeudalAge(),
        "castle": new CastleAge(),
        "imperial": new ImperialAge()
    };

    static getAgesList() {
        const ages: Age[] = [];
        for (let ageName in this.AGES) {
            if (!this.AGES.hasOwnProperty(ageName)){
                continue;
            }

            ages.push(this.AGES[ageName]);
        }
        return ages;
    };

    static byName(ageName: IAge | string): Age {
        return this.AGES[ageName];
    }
}