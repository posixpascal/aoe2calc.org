import {ISettings} from "../interface";
import React, {useState} from "react";
import {Button, Descriptions, Divider, Empty, Tag} from "antd";
import {Wrapper} from "../styles/wrapper";
import {CalculatorRow} from "./calculatorRow";
import {PaddedTop} from "../styles/paddedTop";
import {UnitManager} from "../models/unitManager";
import {TotalResourcesNeeded} from "./totalResourcesNeeded";
import {UnitIcon} from "./unitIcon";
import {BuildingIcon} from "./buildingIcon";
import {pluralize} from "../utils";
import {ResourcesList} from "./resourcesList";
import {VillagerRequirements} from "./villagerRequirements";

interface IUnitsComponent {
    settings: ISettings
}

export const Units = ({settings}: IUnitsComponent) => {
    const buildings = UnitManager.getUnitsByBuildings();
    const [production, setProduction] = useState(1);
    return <div>
        {Object.keys(buildings).map((buildingName) => {
            const building = buildings[buildingName];
            return <div key={buildingName}>
                <h1>{buildingName}</h1>
                {building.units.map((unit: any) => {
                    return <div>
                        <h3>
                            <UnitIcon unit={unit} size={48}/> {unit.label} (<ResourcesList resources={unit.baseCost}
                                           multiplier={(1 * production) / unit.creationTime}/>per Second)

                        </h3>
                        <h5>
                            <VillagerRequirements resources={unit.baseCost}
                                                  multiplier={(1 * production) / unit.creationTime}/>
                        </h5>
                        <Divider dashed/>
                    </div>
                })}
            </div>
        })}
    </div>
};