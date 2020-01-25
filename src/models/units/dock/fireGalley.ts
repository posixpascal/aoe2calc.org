import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {FireShip} from "./fireShip";
import {DockUnit} from "../dockUnit";

export class FireGalley extends DockUnit {
    public label = "Fire Galley";
    public name = "fireGalley";
    public creationTime = 60;
    public icon = "203_50730";
    public baseCost: IResourceSet = {
        "wood": 75,
        "gold": 45
    }
}