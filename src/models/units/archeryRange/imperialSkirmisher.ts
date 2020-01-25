import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {EliteSkirmisher} from "./eliteSkirmisher";

export class ImperialSkirmisher extends EliteSkirmisher {
    public label = "Imperial Skirmisher";
    public name = "imperialSkirmisher";
    public creationTime = 22;
    public icon = "229_50730";
    public baseCost: IResourceSet = {
        "food": 25,
        "wood": 35
    }
}