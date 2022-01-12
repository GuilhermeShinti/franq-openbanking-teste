import { useEffect, useState } from "react"
import { Content } from "../../components/Content";
import { api } from "../../services/api";
import { Container } from "./styles";

interface IIndex {
    name: string,
    location: string,
    points: number,
    variation: number,
}

interface ICurrency {
    name: string,
    buy: number,
    sell: number,
    variation: number,
}

interface IBitcoin {
    name: string,
    last: number,
    format: string[],
    variation: number,
}

export function Dashboard() {
    const [currencies, setCurrencies] = useState<ICurrency[]>([]);
    const [stocks, setStocks] = useState<IIndex[]>([]);
    const [bitcoins, setBitcoin] = useState<IBitcoin[]>([]);

    const getFinances = async () => {
        await api.get('finance').then(
            response => {
                const {bitcoin, currencies, stocks} = response.data.results
                // const filtered = Object.values(currencies[0]).filter(f => typeof f === 'object') as ICurrency[];
                // setCurrencies(filtered);    
                setStocks(Object.values(stocks[0]));
                setBitcoin(Object.values(bitcoin[0]));
            }
        )
    }

    useEffect(() => {
        getFinances();
    }, [])

    return (
        <Content>
            <Container>
                <h2>Stocks</h2>
                <hr></hr>
                <ul className="stocks">
                {
                    stocks.map(index => 
                        (
                            <li key={index.name}>
                                <div>
                                    <strong>{index.name}</strong>
                                    <p className="location">{index.location}</p>
                                </div>
                                <div className="values">
                                    <span className={`variation ${+index.variation > 0 ? 'positive' : 'negative'}`}>{index.variation}</span>
                                    <span className="points">{index.points}</span>
                                </div>
                                
                            </li>
                        )
                    )
                }
                </ul>

                <h2>Currencies</h2>
                <hr></hr>
                <ul className="currencies">
                {
                    currencies.map(currency => 
                        (
                            <li key={currency.name}>
                                <div>
                                    <strong>{currency.name}</strong>
                                </div>
                                <div className="values">
                                    <span className={`variation ${+currency.variation > 0 ? 'positive' : 'negative'}`}>{currency.variation}</span>
                                    <span className="points">BRL {currency.buy}</span>
                                </div> 
                            </li>
                        )
                    )
                }
                </ul>       
                <h2>Bitcoin</h2>
                <hr></hr>
                <ul className="bitcoin">
                {
                    bitcoins.map(bitcoin => 
                        (
                            <li key={bitcoin.name}>
                                <div>
                                    <strong>{bitcoin.name}</strong>
                                </div>
                                <div className="values">
                                    <span className={`variation ${+bitcoin.variation > 0 ? 'positive' : 'negative'}`}>{bitcoin.variation}</span>
                                    <span className="last">{`${bitcoin.format[0]} ${+bitcoin.last}`}</span>
                                </div>
                                
                            </li>
                        )
                    )
                }
                </ul>          
            </Container>
        </Content>
    )
}