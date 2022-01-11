import { useEffect, useState } from "react"
import { api } from "../../services/api";

interface IIndexes {
    IBOVESPA: IIndex
    IFIX: IIndex
    NASDAQ: IIndex
    DOWJONES: IIndex
    CAC: IIndex,
    NIKKEI: IIndex
}

interface IIndex {
    name: string,
    location: string,
    points: number,
    variation: number,
}

export function Dashboard() {
    const [currencies, setCurrencies] = useState({});
    const [stocks, setStocks] = useState<IIndex[]>([]);
    const [bitcoin, setBitcoin] = useState({});

    const getFinances = async () => {
        await api.get('finance').then(
            response => {
                const {bitcoin, currencies, stocks} = response.data.results
                setCurrencies(currencies);
                setStocks(Object.values(stocks[0]));
                setBitcoin(bitcoin);
            }
        )
    }

    useEffect(() => {
        getFinances();
    }, [])

    return (
        <>
            {
                stocks.map(index => 
                    (
                        <div key={index.name}>
                            {index.name}
                        </div>
                    )
                )
            }
        </>
    )
}