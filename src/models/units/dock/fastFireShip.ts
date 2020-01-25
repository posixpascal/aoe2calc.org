import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {FireGalley} from "./fireGalley";

export class FastFireShip extends FireGalley {
    public label = "Fast Fire Ship";
    public name = "fastFireShip";
    public creationTime = 36;
    public icon = "085_50730";
    public baseCost: IResourceSet = {
        "wood": 75,
        "gold": 45
    }
}