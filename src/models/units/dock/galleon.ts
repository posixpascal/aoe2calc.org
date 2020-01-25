import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {WarGalley} from "./warGalley";

export class Galleon extends WarGalley {
    public label = "Galleon";
    public name = "galleon";
    public creationTime = 36;
    public icon = "060_50730";
    public baseCost: IResourceSet = {
        "wood": 90,
        "gold": 30
    }
}