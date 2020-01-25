import React, {useState} from 'react';
import "./App.css";
import {Button, PageHeader, Tag} from "antd";
import {DEFAULT_SETTINGS} from "./config";
import {Settings} from "./components/settings";
import {Calculator} from "./components/calculator";
import {HeaderBar} from "./components/headerBar";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import MenuBar from "./components/menuBar";
import {Wrapper} from "./styles/wrapper";
import {UnitManager} from "./models/unitManager";
import {Units} from "./components/units";

function App() {
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);


    const addRow = () => {
        setSettings({...settings, calculatorRows: [...settings.calculatorRows, {
            id: settings.calculatorRows.length,
            unit: UnitManager.byName("villager"),
            production: 1
        }]})
    };

    const deleteRow = (row: any) => {
        setSettings({...settings, calculatorRows: [...settings.calculatorRows].filter(r => r.id !== row.id)});
    };

    const updateRow = (row: any) => {
        setSettings({...settings, calculatorRows: [...settings.calculatorRows].map(r => {
            if (r.id === row.id){
                return {...r, ...row}
            }
            return r;
        })});
    };

    return (
        <Router>
            <div className="App">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    title="AOE II Calculator"
                    subTitle={
                        <Tag color="blue">alpha</Tag>
                    }
                    extra={[
                        <Button key="1" type="primary">
                            New Sheet
                        </Button>,
                        <Button key="2">Share</Button>,
                    ]}
                >
                </PageHeader>
                <MenuBar/>
                <Wrapper>
                    <Route exact path={"/"}>
                        <Redirect to={"/calc"}/>
                    </Route>
                    <Route exact path={"/units"}>
                        <Units settings={settings} />
                    </Route>
                    <Route exact path={"/calc"}>
                        <HeaderBar settings={settings}/>
                        <Calculator settings={settings} addRow={addRow} deleteRow={deleteRow} updateRow={updateRow}/>
                    </Route>
                    <Route exact path={"/settings"}>
                        <Settings settings={settings} onChange={setSettings}/>
                    </Route>
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;
