import React, {ReactNode} from "react";

import {Select} from "antd";
import {Civilization} from "../models/civilization";
import {CivilizationManager} from "../models/civilizationManager";
import {CivIcon} from "./civIcon";
import {Age} from "../models/age";
import {AgeManager} from "../models/ageManager";
import {AgeIcon} from "./ageIcon";
import {Unit} from "../models/unit";
import {UnitIcon} from "./unitIcon";
import {UnitManager} from "../models/unitManager";

const {Option, OptGroup} = Select;

interface IUnitPickerComponent {
    current: Unit,
    onChange: Function;
}

export const UnitPicker = ({current, onChange}: IUnitPickerComponent) => {
    const buildings = UnitManager.getUnitsByBuildings();

    const filterOption = (input: string, option: any) => {
        return option.props.children.find((child:any) => {
            if (!child || !child.props || !child.props.label){
                return false;
            }
            return child.props.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        });
    };

    const updateUnit = (unitName:string) => {
        onChange(UnitManager.byName(unitName));
    };

    return <Select
        showSearch
        filterOption={filterOption}
        style={{width: '180px'}}
        placeholder="Select a unit"
        defaultValue={current.name}
        onChange={updateUnit}
        optionLabelProp="label"
    >
        {Object.keys(buildings).map((buildingName: any, index) => {
            const building = buildings[buildingName];
            return <OptGroup key={buildingName} label={buildingName}>
                {building.units.map((unit: Unit) => {
                    return <Option key={unit.name} value={unit.name} label={unit.label}>
                        <UnitIcon unit={unit} size={32}/>
                        {unit.label}
                    </Option>
                })}
            </OptGroup>
        })}
    </Select>
};