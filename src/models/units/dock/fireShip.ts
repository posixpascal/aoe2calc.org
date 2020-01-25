import {IResourceSet} from "../../../interface";
import {Unit} from "../../unit";
import {DockUnit} from "../dockUnit";
import {FireGalley} from "./fireGalley";

export class FireShip extends FireGalley {
    public label = "Fire Ship";
    public name = "fireShip";
    public creationTime = 36;
    public icon = "086_50730";
}