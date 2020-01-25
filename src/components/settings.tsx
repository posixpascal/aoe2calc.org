import React from "react";
import {useState} from "react";
import {IResourceSet, ISettings} from "../interface";
import {Descriptions, Icon, Switch} from "antd";
import {CivPicker} from "./civPicker";
import {Civilization} from "../models/civilization";
import {TeamPicker} from "./teamPicker";
import {AgePicker} from "./agePicker";
import {Age} from "../models/age";
import {StartingResourcesPicker} from "./startingResourcesPicker";

interface ISettingsComponent {
    settings: ISettings,
    onChange: Function;
}

export const Settings = ({settings, onChange} : ISettingsComponent) => {
    const setCiv = (civ:Civilization) => {
        settings.civilization = civ;
        onChange(settings);
    };

    const setTeam = (team:Civilization[]) => {
        settings.team = team;
        onChange(settings);
    };

    const toggleNomadStart = () => {
        settings.isNomadStart = !settings.isNomadStart;
        onChange(settings);
    };

    const toggleAllTech = () => {
        settings.isAllTech = !settings.isAllTech;
        onChange(settings);
    };

    const setAge = (age: Age) => {
        settings.startingAge = age;
        onChange(settings);
    };

    const setStartingResources = (resources:IResourceSet) => {
        settings.startingResources = resources;
        onChange(settings);
    };

    return <div>
        <Descriptions title="Game Settings" bordered>
            <Descriptions.Item span={3} label="Civilization">
                <CivPicker current={settings.civilization} onChange={setCiv}/>
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Your Teammates">
                <TeamPicker current={settings.team} onChange={setTeam}/>
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Nomad Start">
                <Switch
                    onChange={toggleNomadStart}
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked={settings.isNomadStart}
                />
            </Descriptions.Item>
            <Descriptions.Item span={3} label="All Techs">
                <Switch
                    onChange={toggleAllTech}
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked={settings.isAllTech}
                />
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Starting Age">
                <AgePicker current={settings.startingAge} onChange={setAge}/>
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Starting Resources">
                <StartingResourcesPicker current={settings.startingResources} onChange={setStartingResources}/>
            </Descriptions.Item>
        </Descriptions>
    </div>
};