import React, {ReactNode} from "react";

import {Select} from "antd";
import {Civilization} from "../models/civilization";
import {CivilizationManager} from "../models/civilizationManager";
import {CivIcon} from "./civIcon";

const {Option} = Select;

interface ITeamPickerComponent {
    current: Civilization[];
    onChange: Function;
}

export const TeamPicker = ({current, onChange}: ITeamPickerComponent) => {
    const civs = CivilizationManager.getCivilizationsList();

    const filterOption = (input: string, option: any) => {
        return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const updateTeam = (civNames: string[]) => {
        console.log(civNames);
        const team = civNames.map((civName: string) => CivilizationManager.byName(civName));
        console.log(team);
        onChange(team);
    };

    return <Select
        showSearch
        mode="multiple"
        filterOption={filterOption}
        style={{width: '100%'}}
        placeholder="Select your teams civilizations"
        defaultValue={current.map(civ => civ.name.toLowerCase())}
        onChange={updateTeam}
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