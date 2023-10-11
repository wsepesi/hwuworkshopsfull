import { LogbookEntry, LogbookEntryNoId } from "@/lib/types"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Props = {
    data: LogbookEntry[]
}

const LogbookTable = (props: Props) => {
    const { data } = props as { data: LogbookEntryNoId[] }

    return(
        <Table>
            <TableCaption>Logbook</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID #</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Message</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((entry, key) => {
                    return (
                        <TableRow key={key}>
                            <TableCell className="font-medium">{key}</TableCell>
                            <TableCell>{entry.name}</TableCell>
                            <TableCell>{entry.date}</TableCell>
                            <TableCell className="text-right">{entry.message}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default LogbookTable