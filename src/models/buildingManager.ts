import {ICivilization, IDict} from "../interface";
import {Building} from "./building";
import {Monastery} from "./buildings/monastery";
import {TownCenter} from "./buildings/townCenter";
import {Krepost} from "./buildings/krepost";
import {Dock} from "./buildings/dock";
import {Barrack} from "./buildings/barrack";
import {ArcheryRange} from "./buildings/archeryRange";
import {Stable} from "./buildings/stable";
import {Castle} from "./buildings/castle";
import {Market} from "./buildings/market";
import {SiegeWorkshop} from "./buildings/siegeWorkshop";

export class BuildingManager {
    static BUILDINGS: IDict<Building> = {
        "townCenter": new TownCenter(),
        "barrack": new Barrack(),
        "stable": new Stable(),
        "monastery": new Monastery(),
        "castle": new Castle(),
        "dock": new Dock(),
        "krepost": new Krepost(),
        "archeryRange": new ArcheryRange(),
        "siegeWorkshop": new SiegeWorkshop(),
        "market": new Market()
    };

    static getBuildingsList() {
        const buildings: Building[] = [];
        for (let buildingName in this.BUILDINGS) {
            if (!this.BUILDINGS.hasOwnProperty(buildingName)) {
                continue;
            }

            buildings.push(this.BUILDINGS[buildingName]);
        }

        return buildings;
    }

    static byName(buildingName: string): Building {
        return this.BUILDINGS[buildingName];
    }
}