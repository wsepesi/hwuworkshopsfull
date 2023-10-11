import type { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { LogbookEntryNoId } from '@/lib/types'
import { createClient } from '@supabase/supabase-js'
import { env } from 'process'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const entry = req.body as LogbookEntryNoId
    const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL as string, env.NEXT_PRIVATE_SUPABASE_KEY as string)
    
    const { data, error } = await supabase
    .from('logbook_final')
    .insert([
        {
            name: entry.name,
            date: entry.date,
            message: entry.message,
        },
        ])
    .select()

    if (error) {
        res.status(500).json({ error: error.message })
    }
    else {
        res.status(200).json(data)
    }
}  
