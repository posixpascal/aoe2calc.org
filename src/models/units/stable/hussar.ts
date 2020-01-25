import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {LightCavalry} from "./lightCavalry";

export class Hussar extends LightCavalry {
    public label = "Hussar";
    public name = "hussar";
    public creationTime = 30;
    public icon = "103_50730";
    public baseCost: IResourceSet = {
        "food": 80
    }
}