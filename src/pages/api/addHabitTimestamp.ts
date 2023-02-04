import { NextApiRequest, NextApiResponse } from 'next'
import { DoistWebhookReqBodyShape } from 'types'
import { checkIfDoist, validateSig } from 'server/common/todoist'
import { buffer } from 'micro'
import { prisma } from 'server/db/client'

export const config = {
    api: {
        bodyParser: false,
    },
}

// handler has to return 200 if its coming from doist to prevent them from retrying

const addHabitTimestampHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const isDoist = checkIfDoist(req)

    if (!isDoist) {
        return res.status(405).json({ message: 'Not allowed' })
    }

    const rawBody = await buffer(req)
    const sigHeader = req.headers['x-todoist-hmac-sha256'] || ''

    const isValid = await validateSig(sigHeader, rawBody)

    if (!isValid) {
        return res.status(200).json({ message: 'Invalid signature' })
    }

    const body = JSON.parse(rawBody.toString())

    // const ctx = await createContext({ req, res })
    // const caller = appRouter.createCaller(ctx)

    const parsedBody = DoistWebhookReqBodyShape.passthrough().safeParse(body)

    if (!parsedBody.success) {
        return res.status(200).json({ message: 'Invalid request body', error: parsedBody.error })
    }

    const { event_data } = parsedBody.data

    // TODO add aditional check for userID, parsedBody is ready

    try {
        await prisma.timestamp.create({
            data: {
                habitId: event_data.id,
            },
        })

        res.status(200).json({ message: 'Success' })
    } catch (e) {
        console.error(e)
        res.status(200).json({ message: 'Resource not found in database' })
    }
}

export default addHabitTimestampHandler