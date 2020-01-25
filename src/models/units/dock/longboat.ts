import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class Longboat extends DockUnit {
    public label = "Longboat";
    public name = "longboat";
    public creationTime = 25;
    public icon = "040_50730";
    public baseCost: IResourceSet = {
        "wood": 85,
        "gold": 43
    }
}