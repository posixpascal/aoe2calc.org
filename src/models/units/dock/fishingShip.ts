import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class FishingShip extends DockUnit {
    public label = "Fishing Ship";
    public name = "fishingShip";
    public creationTime = 40;
    public icon = "024_50730";
    public baseCost: IResourceSet = {
        "wood": 75
    }
}