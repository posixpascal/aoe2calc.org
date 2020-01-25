import {IResourceSet} from "../../../../interface";
import {Unit} from "../../../unit";
import {PlumedArcher} from "../plumedArcher";

export class ElitePlumedArcher extends PlumedArcher {
    public label = "Elite Plumed Archer";
    public name = "elitePlumedArcher";
    public baseCost: IResourceSet = {
        "wood": 35,
        "gold": 35
    }
}