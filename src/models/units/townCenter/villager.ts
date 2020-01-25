import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {TownCenterUnit} from "../townCenterUnit";

export class Villager extends TownCenterUnit {
    public label = "Villager";
    public name = "villager";
    public creationTime = 25;
    // randomly choose male and female version
    public icon = Math.random() > 0.5 ? "015_50730" : "016_50730";
    public baseCost: IResourceSet = {
        "food": 50
    }

    public gatherRateOf(resName:string){
        switch (resName) {
            case "food":
                return 0.33;
            case "gold":
                return 0.379;
            case "wood":
                return 0.388;
            case "stone":
                return 0.359;
        }
        return 0;
    }
}