import React, {ReactNode} from "react";

import {Select} from "antd";
import {Civilization} from "../models/civilization";
import {CivilizationManager} from "../models/civilizationManager";
import {CivIcon} from "./civIcon";

const {Option} = Select;

interface ICivPickerComponent {
    current: Civilization,
    onChange: Function;
}

export const CivPicker = ({current, onChange}: ICivPickerComponent) => {
    const civs = CivilizationManager.getCivilizationsList();

    const filterOption = (input: string, option: any) => {
        return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const updateCiv = (civName:string) => {
        onChange(CivilizationManager.byName(civName));
    };

    return <Select
        showSearch
        filterOption={filterOption}
        style={{width: '100%'}}
        placeholder="Select a civilization"
        defaultValue={current.name}
        onChange={updateCiv}
        optionLabelProp="label"
    >
        {civs.map((civ: Civilization) => {
            return <Option value={civ.name.toLowerCase()} label={civ.name}>
                <CivIcon civ={civ} size={16}/>
                {civ.name}
            </Option>
        })}
    </Select>
};