import {ICivilization, IDict} from "../interface";
import {Aztecs} from "./civs/aztecs";
import {Civilization} from "./civilization";
import {Italians} from "./civs/italians";
import {Celts} from "./civs/celts";
import {Spanish} from "./civs/spanish";
import {Koreans} from "./civs/koreans";
import {Mayans} from "./civs/mayans";
import {Ethiopians} from "./civs/ethiopians";
import {Malay} from "./civs/malay";
import {Malians} from "./civs/malians";
import {Portuguese} from "./civs/portuguese";
import {Lithuanians} from "./civs/lithuanians";
import {Byzantines} from "./civs/byzantines";
import {Britons} from "./civs/britons";
import {Chinese} from "./civs/chinese";
import {Goths} from "./civs/goths";
import {Japanese} from "./civs/japanese";
import {Mongols} from "./civs/mongols";
import {Persians} from "./civs/persians";
import {Saracens} from "./civs/saracens";
import {Teutons} from "./civs/teutons";
import {Turks} from "./civs/turks";
import {Huns} from "./civs/huns";
import {Incas} from "./civs/incas";
import {Indians} from "./civs/indians";
import {Magyars} from "./civs/magyars";
import {Slavs} from "./civs/slavs";
import {Berbers} from "./civs/berbers";
import {Burmese} from "./civs/burmese";
import {Khmer} from "./civs/khmer";
import {Vietnamese} from "./civs/vietnamese";
import {Bulgarians} from "./civs/bulgarians";
import {Cumans} from "./civs/cumans";
import {Tatars} from "./civs/tatars";

export class CivilizationManager {
    static CIVILIZATIONS: IDict<Civilization> = {
        "aztecs": new Aztecs(),
        "spanish": new Spanish(),
        "celts": new Celts(),
        "italians": new Italians(),
        "britons": new Britons(),
        "byzantines": new Byzantines(),
        "chinese": new Chinese(),
        "goths": new Goths(),
        "japanese": new Japanese(),
        "mongols": new Mongols(),
        "persians": new Persians(),
        "saracens": new Saracens(),
        "teutons": new Teutons(),
        "turks": new Turks(),
        "huns": new Huns(),
        "koreans": new Koreans(),
        "mayans": new Mayans(),
        "incas": new Incas(),
        "indians": new Indians(),
        "magyars": new Magyars(),
        "slavs": new Slavs(),
        "berbers": new Berbers(),
        "ethiopians": new Ethiopians(),
        "malians": new Malians(),
        "portuguese": new Portuguese(),
        "burmese": new Burmese(),
        "khmer": new Khmer(),
        "malay": new Malay(),
        "vietnamese": new Vietnamese(),
        "bulgarians": new Bulgarians(),
        "cumans": new Cumans(),
        "lithuanians": new Lithuanians(),
        "tatars": new Tatars()
    };

    static getCivilizationsList() {
        const civs: Civilization[] = [];
        for (let civName in this.CIVILIZATIONS) {
            if (!this.CIVILIZATIONS.hasOwnProperty(civName)) {
                continue;
            }

            civs.push(this.CIVILIZATIONS[civName]);
        }
        return civs;
    }

    static byName(civName: string | ICivilization): Civilization {
        return this.CIVILIZATIONS[civName];
    }
}