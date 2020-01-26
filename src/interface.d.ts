import {Civilization} from "./models/civilization";
import {Age} from "./models/age";

export interface IResourceSet {
    [resource: IResource]:number;
}

export interface IDict<Civilization> {
    [civName:string]: Civilization
}

export type IAge = "dark" | "feudal" | "castle" | "imperial";
export type IResource = string | "wood" | "food" | "gold" | "stone";
export type ICivilization = "britons" | "byzantines" | "celts" | "chinese" | "goths" | "japanese" |
    "mongols" | "persians" | "saracens" | "teutons" | "turks" | "aztecs" | "huns" | "koreans" | "mayans" | "spanish" |
    "incas" | "indians" | "italians" | "magyars" | "slavs" | "berbers" | "ethiopians" | "malians" | "portuguese" |
    "burmese" | "khmer" | "malay" | "vietnamese" | "bulgarians" | "cumans" | "lithuanians" | "tatars"


export interface ISettings {
    civilization: Civilization;
    startingResources: IResourceSet,
    preferRounding: boolean;
    startingAge: Age,
    isNomadStart: boolean,
    isAllTech: boolean,
    population: number,
    team: Civilization[],
    calculatorRows: any[]
}