import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class TransportShip extends DockUnit {
    public label = "Transport Ship";
    public name = "transportShip";
    public creationTime = 45;
    public icon = "095_50730";
    public baseCost: IResourceSet = {
        "wood": 125
    }
}