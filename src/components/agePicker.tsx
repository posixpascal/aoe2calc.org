import React, {ReactNode} from "react";

import {Select} from "antd";
import {Civilization} from "../models/civilization";
import {CivilizationManager} from "../models/civilizationManager";
import {CivIcon} from "./civIcon";
import {Age} from "../models/age";
import {AgeManager} from "../models/ageManager";
import {AgeIcon} from "./ageIcon";

const {Option} = Select;

interface IAgePickerComponent {
    current: Age,
    onChange: Function;
}

export const AgePicker = ({current, onChange}: IAgePickerComponent) => {
    const ages = AgeManager.getAgesList();

    const filterOption = (input: string, option: any) => {
        return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const updateAge = (ageName:string) => {
        onChange(AgeManager.byName(ageName));
    };

    return <Select
        showSearch
        filterOption={filterOption}
        style={{width: '100%'}}
        placeholder="Select a civilization"
        defaultValue={current.name}
        onChange={updateAge}
        optionLabelProp="label"
    >
        {ages.map((age: Age) => {
            return <Option value={age.name.toLowerCase()} label={age.label}>
                <AgeIcon age={age} size={16}/>
                {age.label}
            </Option>
        })}
    </Select>
};