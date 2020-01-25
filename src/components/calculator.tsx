import {ISettings} from "../interface";
import React, {useState} from "react";
import {Button, Divider, Empty} from "antd";
import {Wrapper} from "../styles/wrapper";
import {CalculatorRow} from "./calculatorRow";
import {PaddedTop} from "../styles/paddedTop";
import {UnitManager} from "../models/unitManager";
import {TotalResourcesNeeded} from "./totalResourcesNeeded";

interface ICalculatorComponent {
    settings: ISettings,
    addRow: any;
    deleteRow: any;
    updateRow: any;
}

export const Calculator = ({settings, updateRow, deleteRow, addRow}: ICalculatorComponent) => {
    const rows = settings.calculatorRows;
    return <PaddedTop>
        {rows.length == 0 && <div>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
                   description={<>No units added yet. <br/>Click the button below to add a unit and get an estimate on
                       how many resources you'll need to sustain production.</>}
            >
                <Button onClick={addRow} type="primary">Add Unit</Button>
            </Empty>
        </div>}

        {rows.length > 0 && <div>
            {rows.map((row: any) => {
                return <CalculatorRow
                    onUpdate={updateRow}
                    onDelete={deleteRow}
                    key={row.id}
                    settings={settings}
                    row={row}/>
            })}
            <Button onClick={addRow} type="primary">Add Unit</Button>
            <Divider />
            <TotalResourcesNeeded rows={rows} />
        </div>}

    </PaddedTop>
};