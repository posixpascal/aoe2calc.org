import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {StableUnit} from "../stableUnit";

export class Knight extends StableUnit {
    public label = "Knight";
    public name = "knight";
    public creationTime = 30;
    public icon = "001_50730";
    public baseCost: IResourceSet = {
        "food": 60,
        "gold": 75
    };

    public category = ["stable", "knight", "cavalry"];
}