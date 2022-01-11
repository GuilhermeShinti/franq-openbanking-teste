import { useEffect, useState } from "react"
import { api } from "../../services/api";

export function Dashboard() {
    const [currencies, setCurrencies] = useState<[]>([]);
    const [stocks, setStocks] = useState<[]>([]);
    const [bitcoin, setBitcoin] = useState<[]>([]);

    const getFinances = async () => {
        await api.get('finance?key=32dac969').then(
            response => {
                const {bitcoin, currencies, stocks} = response.data.results
                setCurrencies(currencies);
                setStocks(stocks);
                setBitcoin(bitcoin);
            }
        )
    }

    useEffect(() => {
        getFinances();
    })

    return (
        <>
            {
                Object.keys(stocks).map(stock => 
                    (
                        <div>stock.name</div>
                    )
                )
            }
        </>
    )
}