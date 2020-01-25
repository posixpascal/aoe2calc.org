import {ICivilization, IDict} from "../interface";
import {Villager} from "./units/townCenter/villager";
import {Knight} from "./units/stable/knight";
import {Unit} from "./unit";
import {Cavalier} from "./units/stable/cavalier";
import {Paladin} from "./units/stable/paladin";
import {Berserk} from "./units/castle/berserk";
import {Mangudai} from "./units/castle/mangudai";
import {Militia} from "./units/barrack/militia";
import {ManAtArms} from "./units/barrack/manAtArms";
import {LongSwordsman} from "./units/barrack/longSwordsman";
import {TwoHandedSwordsman} from "./units/barrack/twoHandedSwordsman";
import {Longboat} from "./units/dock/longboat";
import {Longbowman} from "./units/castle/longbowman";
import {Archer} from "./units/archeryRange/archer";
import {Crossbowman} from "./units/archeryRange/crossbowman";
import {Spearman} from "./units/barrack/spearman";
import {Pikeman} from "./units/barrack/pikeman";
import {Janissary} from "./units/castle/janissary";
import {Mameluke} from "./units/castle/mameluke";
import {FishingShip} from "./units/dock/fishingShip";
import {WarGalley} from "./units/dock/warGalley";
import {TradeCog} from "./units/dock/tradeCog";
import {TradeCart} from "./units/market/tradeCart";
import {Monk} from "./units/monastery/monk";
import {BombardCannon} from "./units/siegeWorkshop/bombardCannon";
import {Trebuchet} from "./units/castle/trebuchet";
import {ChuKoNu} from "./units/castle/chuKoNu";
import {TeutonicKnight} from "./units/castle/teutonicKnight";
import {Arbalest} from "./units/archeryRange/arbalest";
import {BatteringRam} from "./units/siegeWorkshop/batteringRam";
import {CappedRam} from "./units/siegeWorkshop/cappedRam";
import {SiegeRam} from "./units/siegeWorkshop/siegeRam";
import {Galleon} from "./units/dock/galleon";
import {Galley} from "./units/dock/galley";
import {Champion} from "./units/barrack/champion";
import {WoadRaider} from "./units/castle/woadRaider";
import {Skirmisher} from "./units/archeryRange/skirmisher";
import {EliteSkirmisher} from "./units/archeryRange/eliteSkirmisher";
import {Scorpion} from "./units/siegeWorkshop/scorpion";
import {HeavyScorpion} from "./units/siegeWorkshop/heavyScorpion";
import {Camel} from "./units/stable/camel";
import {HeavyCamel} from "./units/stable/heavyCamel";
import {CavalryArcher} from "./units/archeryRange/cavalryArcher";
import {HeavyCavalryArcher} from "./units/archeryRange/heavyCavalryArcher";
import {ScoutCavalry} from "./units/stable/scoutCavalry";
import {LightCavalry} from "./units/stable/lightCavalry";
import {Samurai} from "./units/castle/samurai";
import {WarElephant} from "./units/castle/warElephant";
import {Petard} from "./units/castle/petard";
import {FireShip} from "./units/dock/fireShip";
import {FastFireShip} from "./units/dock/fastFireShip";
import {Huskarl} from "./units/castle/huskarl";
import {Cataphract} from "./units/castle/cataphract";
import {EliteGenitour} from "./units/archeryRange/eliteGenitour";
import {Genitour} from "./units/archeryRange/genitour";
import {ImperialSkirmisher} from "./units/archeryRange/imperialSkirmisher";
import {Slinger} from "./units/archeryRange/slinger";
import {Condottiero} from "./units/barrack/condottiero";
import {EagleScout} from "./units/barrack/eagleScout";
import {EagleWarrior} from "./units/barrack/eagleWarrior";
import {EliteEagleWarrior} from "./units/barrack/eliteEagleWarrior";
import {Halberdier} from "./units/barrack/halberdier";
import {Arambai} from "./units/castle/arambai";
import {BallistaElephant} from "./units/castle/ballistaElephant";
import {Boyar} from "./units/castle/boyar";
import {CamelArcher} from "./units/castle/camelArcher";
import {Conquistador} from "./units/castle/conquistador";
import {ElephantArcher} from "./units/castle/elephantArcher";
import {Gbeto} from "./units/castle/gbeto";
import {GenoeseCrossbowman} from "./units/castle/genoeseCrossbowman";
import {JaguarWarrior} from "./units/castle/jaguarWarrior";
import {Kamayuk} from "./units/castle/kamayuk";
import {KarambitWarrior} from "./units/castle/karambitWarrior";
import {MagyarHuszar} from "./units/castle/magyarHuszar";
import {OrganGun} from "./units/castle/organGun";
import {PlumedArcher} from "./units/castle/plumedArcher";
import {RattanArcher} from "./units/castle/rattanArcher";
import {ShotelWarrior} from "./units/castle/shotelWarrior";
import {Tarkan} from "./units/castle/tarkan";
import {ThrowingAxeman} from "./units/castle/throwingAxeman";
import {WarWagon} from "./units/castle/warWagon";
import {EliteBoyar} from "./units/castle/elite/eliteBoyar";
import {EliteArambai} from "./units/castle/elite/eliteArambai";
import {EliteSamurai} from "./units/castle/elite/eliteSamurai";
import {EliteLongbowman} from "./units/castle/elite/eliteLongbowman";
import {EliteChuKoNu} from "./units/castle/elite/eliteChuKoNu";
import {EliteKamayuk} from "./units/castle/elite/eliteKamayuk";
import {EliteCataphract} from "./units/castle/elite/eliteCataphract";
import {EliteTarkan} from "./units/castle/elite/eliteTarkan";
import {EliteMagyarHuszar} from "./units/castle/elite/eliteMagyarHuszar";
import {EliteThrowingAxeman} from "./units/castle/elite/eliteThrowingAxeman";
import {EliteCamelArcher} from "./units/castle/elite/eliteCamelArcher";
import {EliteWarWagon} from "./units/castle/elite/eliteWarWagon";
import {EliteHuskarl} from "./units/castle/elite/eliteHuskarl";
import {EliteWoadRaider} from "./units/castle/elite/eliteWoadRaider";
import {EliteGenoeseCrossbowman} from "./units/castle/elite/eliteGenoeseCrossbowman";
import {EliteOrganGun} from "./units/castle/elite/eliteOrganGun";
import {EliteKarambitWarrior} from "./units/castle/elite/eliteKarambitWarrior";
import {EliteJanissary} from "./units/castle/elite/eliteJanissary";
import {EliteRattanArcher} from "./units/castle/elite/eliteRattanArcher";
import {EliteJaguarWarrior} from "./units/castle/elite/eliteJaguarWarrior";
import {EliteConquistador} from "./units/castle/elite/eliteConquistador";
import {EliteElephantArcher} from "./units/castle/elite/eliteElephantArcher";
import {EliteMameluke} from "./units/castle/elite/eliteMameluke";
import {EliteMangudai} from "./units/castle/elite/eliteMangudai";
import {ElitePlumedArcher} from "./units/castle/elite/elitePlumedArcher";
import {EliteBallistaElephant} from "./units/castle/elite/eliteBallistaElephant";
import {EliteGbeto} from "./units/castle/elite/eliteGbeto";
import {EliteShotelWarrior} from "./units/castle/elite/eliteShotelWarrior";
import {EliteTeutonicKnight} from "./units/castle/elite/eliteTeutonicKnight";
import {EliteWarElephant} from "./units/castle/elite/eliteWarElephant";
import {Caravel} from "./units/dock/caravel";
import {DemolitionRaft} from "./units/dock/demolitionRaft";
import {DemolitionShip} from "./units/dock/demolitionShip";
import {HeavyDemolitionShip} from "./units/dock/heavyDemolitionShip";
import {EliteCannonGalleon} from "./units/dock/eliteCannonGalleon";
import {EliteCaravel} from "./units/dock/eliteCaravel";
import {EliteLongboat} from "./units/dock/eliteLongboat";
import {EliteTurtleship} from "./units/dock/eliteTurtleship";
import {FireGalley} from "./units/dock/fireGalley";
import {TurtleShip} from "./units/dock/turtleShip";
import {TransportShip} from "./units/dock/transportShip";
import {Missionary} from "./units/monastery/missionary";
import {Onager} from "./units/siegeWorkshop/onager";
import {SiegeOnager} from "./units/siegeWorkshop/siegeOnager";
import {SiegeTower} from "./units/siegeWorkshop/siegeTower";
import {BattleElephant} from "./units/stable/battleElephant";
import {EliteBattleElephant} from "./units/stable/eliteBattleElephant";
import {Hussar} from "./units/stable/hussar";
import {ImperialCamel} from "./units/stable/imperialCamel";
import {HandCannoneer} from "./units/archeryRange/handCannoneer";

export class UnitManager {
    static UNITS: IDict<Unit> = {
        "villager": new Villager(),
        "knight": new Knight(),
        "cavalier": new Cavalier(),
        "paladin": new Paladin(),
        "militia": new Militia(),
        "manAtArms": new ManAtArms(),
        "longSwordsman": new LongSwordsman(),
        "twoHandedSwordsman": new TwoHandedSwordsman(),
        "longboat": new Longboat(),
        "archer": new Archer(),
        "crossbowman": new Crossbowman(),
        "spearman": new Spearman(),
        "pikeman": new Pikeman(),
        "fishingShip": new FishingShip(),
        "warGalley": new WarGalley(),
        "monk": new Monk(),
        "tradeCog": new TradeCog(),
        "tradeCart": new TradeCart(),
        "bombardCannon": new BombardCannon(),
        "trebuchet": new Trebuchet(),
        "arbalest": new Arbalest(),
        "batteringRam": new BatteringRam(),
        "cappedRam": new CappedRam(),
        "siegeRam": new SiegeRam(),
        "galleon": new Galleon(),
        "galley": new Galley(),
        "champion": new Champion(),
        "skirmisher": new Skirmisher(),
        "eliteSkirmisher": new EliteSkirmisher(),
        "scorpion": new Scorpion(),
        "heavyScorpion": new HeavyScorpion(),
        "camel": new Camel(),
        "heavyCamel": new HeavyCamel(),
        "cavalryArcher": new CavalryArcher(),
        "heavyCavalryArcher": new HeavyCavalryArcher(),
        "scoutCavalry": new ScoutCavalry(),
        "lightCavalry": new LightCavalry(),
        "petard": new Petard(),
        "fireShip": new FireShip(),
        "fastFireShip": new FastFireShip(),
        "eliteGenitour": new EliteGenitour(),
        "genitour": new Genitour(),
        "imperialSkirmisher": new ImperialSkirmisher(),
        "slinger": new Slinger(),
        "condottiero": new Condottiero(),
        "eagleScout": new EagleScout(),
        "eagleWarrior": new EagleWarrior(),
        "eliteEagleWarrior": new EliteEagleWarrior(),
        "halberdier": new Halberdier(),
        "arambai": new Arambai(),
        "ballistaElephant": new BallistaElephant(),
        "boyar": new Boyar(),
        "camelArcher": new CamelArcher(),
        "cataphract": new Cataphract(),
        "chuKoNu": new ChuKoNu(),
        "conquistador": new Conquistador(),
        "elephantArcher": new ElephantArcher(),
        "gbeto": new Gbeto(),
        "genoeseCrossbowman": new GenoeseCrossbowman(),
        "huskarl": new Huskarl(),
        "jaguarWarrior": new JaguarWarrior(),
        "janissary": new Janissary(),
        "kamayuk": new Kamayuk(),
        "karambitWarrior": new KarambitWarrior(),
        "longbowman": new Longbowman(),
        "magyarHuszar": new MagyarHuszar(),
        "mameluke": new Mameluke(),
        "mangudai": new Mangudai(),
        "organGun": new OrganGun(),
        "plumedArcher": new PlumedArcher(),
        "rattanArcher": new RattanArcher(),
        "samurai": new Samurai(),
        "shotelWarrior": new ShotelWarrior(),
        "tarkan": new Tarkan(),
        "teutonicKnight": new TeutonicKnight(),
        "throwingAxeman": new ThrowingAxeman(),
        "warElephant": new WarElephant(),
        "warWagon": new WarWagon(),
        "woadRaider": new WoadRaider(),

        "eliteArambai": new EliteArambai(),
        "eliteBallistaElephant": new EliteBallistaElephant(),
        "eliteBoyar": new EliteBoyar(),
        "eliteCamelArcher": new EliteCamelArcher(),
        "eliteCataphract": new EliteCataphract(),
        "eliteChuKoNu": new EliteChuKoNu(),
        "eliteConquistador": new EliteConquistador(),
        "eliteElephantArcher": new EliteElephantArcher(),
        "eliteGbeto": new EliteGbeto(),
        "eliteGenoeseCrossbowman": new EliteGenoeseCrossbowman(),
        "eliteHuskarl": new EliteHuskarl(),
        "eliteJaguarWarrior": new EliteJaguarWarrior(),
        "eliteJanissary": new EliteJanissary(),
        "eliteKamayuk": new EliteKamayuk(),
        "eliteKarambitWarrior": new EliteKarambitWarrior(),
        "eliteLongbowman": new EliteLongbowman(),
        "eliteMagyarHuszar": new EliteMagyarHuszar(),
        "eliteMameluke": new EliteMameluke(),
        "eliteMangudai": new EliteMangudai(),
        "eliteOrganGun": new EliteOrganGun(),
        "elitePlumedArcher": new ElitePlumedArcher(),
        "eliteRattanArcher": new EliteRattanArcher(),
        "eliteSamurai": new EliteSamurai(),
        "eliteShotelWarrior": new EliteShotelWarrior(),
        "eliteTarkan": new EliteTarkan(),
        "eliteTeutonicKnight": new EliteTeutonicKnight(),
        "eliteThrowingAxeman": new EliteThrowingAxeman(),
        "eliteWarElephant": new EliteWarElephant(),
        "eliteWarWagon": new EliteWarWagon(),
        "eliteWoadRaider": new EliteWoadRaider(),
        "caravel": new Caravel(),
        "demolitionRaft": new DemolitionRaft(),
        "demolitionShip": new DemolitionShip(),
        "heavyDemolitionShip": new HeavyDemolitionShip(),
        "eliteCannonGalleon": new EliteCannonGalleon(),
        "eliteCaravel": new EliteCaravel(),
        "eliteLongboat": new EliteLongboat(),
        "eliteTurtleship": new EliteTurtleship(),
        "fireGalley": new FireGalley(),
        "turtleShip": new TurtleShip(),
        "transportShip": new TransportShip(),
        "missionary": new Missionary(),
        "onager": new Onager(),
        "siegeOnager": new SiegeOnager(),
        "siegeTower": new SiegeTower(),
        "battleElephant": new BattleElephant(),
        "eliteBattleElephant": new EliteBattleElephant(),
        "hussar": new Hussar(),
        "imperialCamel": new ImperialCamel(),
        "handCannoneer": new HandCannoneer()
    };

    static getUnitsList() {
        const units: Unit[] = [];
        for (let unitName in this.UNITS) {
            if (!this.UNITS.hasOwnProperty(unitName)) {
                continue;
            }

            units.push(this.UNITS[unitName]);
        }
        return units;
    }

    static getUnitsByBuildings() {
        const buildings : any = {};
        for (let unitName in this.UNITS) {
            if (!this.UNITS.hasOwnProperty(unitName)) {
                continue;
            }

            const unit : Unit = this.UNITS[unitName];
            if (!buildings.hasOwnProperty(unit.building.name)){
                buildings[unit.building.name] = {
                    building: unit.building,
                    units: []
                };
            }

            buildings[unit.building.name].units.push(unit);
        }
        return buildings;
    }

    static byName(unitName: string): Unit {
        return this.UNITS[unitName];
    }
}