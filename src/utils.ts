import { Appointment } from './types'

export const transposeAppointment = (data): Appointment => ({
  id: data.id,
  start: new Date(data.start),
  end: new Date(data.end),
  minutes: data.duration,
  mode: data.variant,
  locationType: data.locationType,
  isCanceled: data.canceled || data.rejected,
  isAccepted: data.accepted,
})

export const handleRequest = (okStatus: number) => (res: Response) => {
  if (res.status !== okStatus) {
    throw new Error('Bad response from server')
  }
  return res.json()
}
