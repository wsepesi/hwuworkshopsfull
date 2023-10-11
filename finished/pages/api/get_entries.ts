import type { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { LogbookEntry } from '@/lib/types'
import { createClient } from '@supabase/supabase-js'
import { env } from 'process'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LogbookEntry[]>
) {
    const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL as string, env.NEXT_PRIVATE_SUPABASE_KEY as string)
   
    let { data: logbook_final, error } = await supabase
    .from('logbook_final')
    .select('*')

    if (error) {
        res.status(500)
    }
    else {
        res.status(200).json(logbook_final as LogbookEntry[])
    }
}
