type LogbookEntry = {
    id: number;
    name: string;
    date: string;
    message: string;
}

type LogbookEntryNoId = Omit<LogbookEntry, 'id'>;

export type { LogbookEntry, LogbookEntryNoId };