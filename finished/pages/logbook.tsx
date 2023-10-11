import { useEffect, useState } from "react"

import Link from "next/link"
import { LogbookEntry } from "@/lib/types"
import LogbookTable from "@/components/LogbookTable"

const Logbook = () => {
    const [data, setData] = useState<LogbookEntry[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/get_entries", { method: "GET" })
            const data = await res.json()
            setData(data)
        }
        setLoading(true)
        fetchData().then(() =>
            setLoading(false)
        )
    }, [])
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex w-[80vw] flex-col items-center justify-center">
                <h1>Logbook</h1>
                {loading ? <p>Loading...</p> : <LogbookTable data={data}/>}
                <Link href="/">Back to home</Link>
            </div>
        </div>
    )
}

export default Logbook