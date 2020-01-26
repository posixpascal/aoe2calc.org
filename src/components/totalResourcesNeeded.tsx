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

interface ITotalResourcesNeeded {
    rows: any;
    rounding?:boolean;
}

export const TotalResourcesNeeded = ({rounding = true, rows = {}}: ITotalResourcesNeeded) => {
    const totalBaseCost : any = {};

    rows.forEach((row:any) => {
        for (let resName in row.unit.baseCost){
            if (typeof totalBaseCost[resName] === "undefined"){
                totalBaseCost[resName] = 0;
            }
            totalBaseCost[resName] += (row.unit.baseCost[resName] * row.production) / row.unit.creationTime;
        }
    });

    const units = (<>
        {rows.map((row:any) => {
            return <Tag key={row.id} color="blue">{row.production} <UnitIcon unit={row.unit} size={16}/> {row.unit.label} </Tag>
        })}
    </>);

    return <div style={{marginTop: "50px", marginBottom: "15px"}}>
        <Descriptions title={<>To sustain permanent production of {units} — You'll need to put</>}>
            <Descriptions.Item>
                <VillagerRequirements rounding={rounding} resources={totalBaseCost} multiplier={1} />
            </Descriptions.Item>
        </Descriptions>
    </div>
};