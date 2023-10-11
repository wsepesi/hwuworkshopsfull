import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { LogbookEntryNoId } from "@/lib/types"
import { useState } from "react"

const AddInfo = () => {
    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleMsgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleClick = async () => {
        const newEntry: LogbookEntryNoId = {
            name: name,
            date: new Date().toISOString().split('T')[0],
            message: message,
        }
        const res = await fetch('/api/add_entry', {
            method: 'POST',
            body: JSON.stringify(newEntry),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status !== 200) {
            alert("Error adding entry")
        }
        alert("Entry added!")
        setName("")
        setMessage("")
    }

    return(
        <>
        <Card className="w-[40vw]">
            <CardHeader>
                <CardTitle>Add to Logbook</CardTitle>
                <CardDescription>Leave a message on this page!</CardDescription>
            </CardHeader>
            <CardContent>
                <Input placeholder="Name" onChange={handleNameChange} value={name} />
                <Input placeholder="Message" onChange={handleMsgChange} value={message} />
            </CardContent>
            <CardFooter>
                <div className="flex min-w-full justify-between">
                    <Button>Cancel</Button>
                    <Button onClick={handleClick}>Submit</Button>
                </div>
            </CardFooter>
        </Card>
        </>
    )
}
export default AddInfo