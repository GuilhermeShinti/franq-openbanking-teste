import { useEffect, useState } from "react"
import { Content } from "../../components/Content";
import { IBitcoin } from "../../interfaces/IBitcoin";
import { ICurrency } from "../../interfaces/ICurrency";
import { IIndex } from "../../interfaces/IIndex";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Dashboard() {
    const [currencies, setCurrencies] = useState<ICurrency[]>([]);
    const [stocks, setStocks] = useState<IIndex[]>([]);
    const [bitcoins, setBitcoin] = useState<IBitcoin[]>([]);

    const getFinances = async () => {
        await api.get('finance').then(
            response => {
                const {bitcoin, currencies, stocks} = response.data.results
                const filtered = Object.values(currencies).filter(f => typeof f === 'object');
                setCurrencies(filtered as ICurrency[]);    
                setStocks(Object.values(stocks));
                setBitcoin(Object.values(bitcoin));
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