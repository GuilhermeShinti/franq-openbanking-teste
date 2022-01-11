import { useEffect, useState } from "react"
import { api } from "../../services/api";

export function Dashboard() {
    const [currencies, setCurrencies] = useState<[]>([]);
    const [stocks, setStocks] = useState<[]>([]);
    const [bitcoins, setBitcoins] = useState<[]>([]);

    const getFinances = async () => {
        await api.get('finance?key=32dac969').then(response => console.log(response.data))
    }

    useEffect(() => {
        getFinances();
    })

    return (
        <></>
    )
}