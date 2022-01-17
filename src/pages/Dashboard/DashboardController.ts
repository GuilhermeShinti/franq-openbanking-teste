import { useEffect, useState } from "react"
import { IBitcoin } from "../../interfaces/IBitcoin";
import { ICurrency } from "../../interfaces/ICurrency";
import { IIndex } from "../../interfaces/IIndex";
import { api } from "../../services/api";

export const useDashboardController = () => {
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

    return {
        currencies,
        stocks,
        bitcoins
    }
}