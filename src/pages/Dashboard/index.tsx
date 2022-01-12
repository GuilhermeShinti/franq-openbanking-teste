import { useEffect, useState } from "react"
import { Content } from "../../components/Content";
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
        const jsonStocks = [
            {
                "IBOVESPA": {
                    "name": "BM&F BOVESPA",
                    "location": "Sao Paulo, Brazil",
                    "points": 103482.65,
                    "variation": 1.51
                },
                "IFIX": {
                    "name": "Índice de Fundos de Investimentos Imobiliários B3",
                    "location": "Sao Paulo, Brazil",
                    "points": 2752.33,
                    "variation": 0.01
                },
                "NASDAQ": {
                    "name": "NASDAQ Stock Market",
                    "location": "New York City, United States",
                    "points": 15112.66,
                    "variation": 1.14
                },
                "DOWJONES": {
                    "name": "Dow Jones Industrial Average",
                    "location": "New York City, United States",
                    "points": 36165.06,
                    "variation": 0.27
                },
                "CAC": {
                    "name": "CAC 40",
                    "location": "Paris, French",
                    "points": 7183.38,
                    "variation": 0.95
                },
                "NIKKEI": {
                    "name": "Nikkei 225",
                    "location": "Tokyo, Japan",
                    "points": 28222.48,
                    "variation": -0.9
                }
            }
        ]

        const jsonCurrencies = [
            {
                "source": "BRL",
                "USD": {
                    "name": "Dollar",
                    "buy": 5.5809,
                    "sell": 5.5809,
                    "variation": -1.554
                },
                "EUR": {
                    "name": "Euro",
                    "buy": 6.3458,
                    "sell": 6.3452,
                    "variation": -1.179
                },
                "GBP": {
                    "name": "Pound Sterling",
                    "buy": 7.5962,
                    "sell": null,
                    "variation": -1.318
                },
                "ARS": {
                    "name": "Argentine Peso",
                    "buy": 0.0538,
                    "sell": null,
                    "variation": -1.748
                },
                "CAD": {
                    "name": "Canadian Dollar",
                    "buy": 4.4345,
                    "sell": null,
                    "variation": -0.857
                },
                "AUD": {
                    "name": "Australian Dollar",
                    "buy": 4.0244,
                    "sell": null,
                    "variation": -1.062
                },
                "JPY": {
                    "name": "Japanese Yen",
                    "buy": 0.0483,
                    "sell": null,
                    "variation": -1.748
                },
                "CNY": {
                    "name": "Renminbi",
                    "buy": 0.8756,
                    "sell": null,
                    "variation": -1.521
                },
                "BTC": {
                    "name": "Bitcoin",
                    "buy": 253206.753,
                    "sell": 253206.753,
                    "variation": 2.625
                }
            }
        ]

        const jsonBitcoin = [
            {
                "blockchain_info": {
                    "name": "Blockchain.info",
                    "format": [
                        "USD",
                        "en_US"
                    ],
                    "last": 42806.04,
                    "buy": 42806.04,
                    "sell": 42806.04,
                    "variation": 2.635
                },
                "coinbase": {
                    "name": "Coinbase",
                    "format": [
                        "USD",
                        "en_US"
                    ],
                    "last": 42824.88,
                    "variation": 2.716
                },
                "bitstamp": {
                    "name": "BitStamp",
                    "format": [
                        "USD",
                        "en_US"
                    ],
                    "last": 42806.84,
                    "buy": 42814.2,
                    "sell": 42800,
                    "variation": 2.647
                },
                "foxbit": {
                    "name": "FoxBit",
                    "format": [
                        "BRL",
                        "pt_BR"
                    ],
                    "last": 351098.91,
                    "variation": -1.885
                },
                "mercadobitcoin": {
                    "name": "Mercado Bitcoin",
                    "format": [
                        "BRL",
                        "pt_BR"
                    ],
                    "last": 239913.66996,
                    "buy": 239913.6966,
                    "sell": 240643.99993,
                    "variation": 0.857
                }
            }
        ]

        // await api.get('finance').then(
        //     response => {
        //         const {bitcoin, currencies, stocks} = response.data.results
        //         const filtered = Object.values(currencies[0]).filter(f => typeof f === 'object') as ICurrency[];
        //         setCurrencies(filtered);    
        //         setStocks(Object.values(stocks[0]));
        //         setBitcoin(Object.values(bitcoin[0]));
        //     }
        // )

        setStocks(Object.values(jsonStocks[0]));
        const filtered = Object.values(jsonCurrencies[0]).filter(f => typeof f === 'object') as ICurrency[];
        setCurrencies(filtered);
        setBitcoin(Object.values(jsonBitcoin[0]));
        
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