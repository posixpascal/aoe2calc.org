import {ISettings} from "../interface";
import React, {useState} from "react";
import {Button, Card, Descriptions, Divider, Empty, Icon, InputNumber, Tag} from "antd";
import {Wrapper} from "../styles/wrapper";
import {CivPicker} from "./civPicker";
import {UnitPicker} from "./unitPicker";
import {Unit} from "../models/unit";
import {UnitIcon} from "./unitIcon";
import {ResourcesList} from "./resourcesList";
import {UnitManager} from "../models/unitManager";
import {VillagerRequirements} from "./villagerRequirements";
import {pluralize} from "../utils";
import {BuildingIcon} from "./buildingIcon";

interface ICalculatorRowComponent {
    settings: ISettings,
    row: any,
    onDelete: any;
    onUpdate: any;
}

export const CalculatorRow = ({onUpdate, onDelete, settings, row = {}}: ICalculatorRowComponent) => {
    const setUnit = (unit: Unit) => {
        row = {...row, unit};
        onUpdate(row);
    };

    const updateProduction = (productionBuildings: number) => {
        row = {...row, production: productionBuildings};
        onUpdate(row);
    };


    const cardExtra = (<Button size="small" type="danger" onClick={() => onDelete(row)}>
        <Icon type="delete"/>
    </Button>);
    return <div style={{marginTop: "50px", marginBottom: "15px"}}>
        <Descriptions bordered title={
            <>{cardExtra} To permanently create <Tag color="blue"><UnitIcon unit={row.unit} size={16}/> {row.unit.label} </Tag>
                 from &nbsp;<Tag color={"blue"}> <BuildingIcon building={row.unit.building} size={16} /> {row.production} {pluralize(row.unit.building.name, row.production)} </Tag>
                you need
            </>
        }>
            <Descriptions.Item label="Unit">
                <UnitPicker current={row.unit} onChange={setUnit}/>
            </Descriptions.Item>
            <Descriptions.Item label="Production">
                <InputNumber size="large" min={1} step={1} max={100000} defaultValue={row.production}
                             onChange={(value: any) => updateProduction(value)}/>
            </Descriptions.Item>
            <Descriptions.Item label={"Cost"}>
                1x <UnitIcon unit={row.unit} size={24}/> <strong>{row.unit.label}</strong> = <ResourcesList
                resources={row.unit.baseCost}/> every {row.unit.creationTime}s
                <Divider/>
                {row.production > 0 && <div>
                    {row.production}x <UnitIcon unit={row.unit} size={24}/>
                    <strong>{row.unit.label}</strong> = <ResourcesList resources={row.unit.baseCost}
                                                                       multiplier={(1 * row.production) / row.unit.creationTime}/> per
                    second
                    <span style={{padding: "0 10px"}}>/</span><span style={{color: "#999"}}><ResourcesList
                    resources={row.unit.baseCost}
                    multiplier={row.production}/> every {row.unit.creationTime}s</span>
                </div>}
            </Descriptions.Item>
            <Descriptions.Item label={"To sustain put"}>
                <VillagerRequirements resources={row.unit.baseCost} multiplier={(1 * row.production) / row.unit.creationTime}/>
            </Descriptions.Item>
        </Descriptions>
    </div>
};