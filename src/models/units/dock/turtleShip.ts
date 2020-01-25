import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";

export class TurtleShip extends DockUnit {
    public label = "Turtle Ship";
    public name = "turtleShip";
    public creationTime = 50;
    public icon = "116_50730";
    public baseCost: IResourceSet = {
        "wood": 180,
        "gold": 180
    }
}