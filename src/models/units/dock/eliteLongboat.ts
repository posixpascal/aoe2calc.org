import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {Longboat} from "./longboat";

export class EliteLongboat extends Longboat {
    public label = "Elite Longboat";
    public name = "eliteLongboat";
    public creationTime = 25;
    // randomly choose male and female version
    public icon = Math.random() > 0.5 ? "015_50730" : "016_50730";
    public baseCost: IResourceSet = {
        "food": 50
    }
}