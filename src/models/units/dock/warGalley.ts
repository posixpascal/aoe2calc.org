import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {Galley} from "./galley";

export class WarGalley extends Galley {
    public label = "War Galley";
    public name = "warGalley";
    public creationTime = 36;
    public icon = "025_50730";
    public baseCost: IResourceSet = {
        "wood": 90,
        "gold": 30
    }
}