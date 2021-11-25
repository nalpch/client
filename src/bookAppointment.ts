import { Appointment } from './types'
import { transposeAppointment, handleRequest } from './utils'

export default function bookAppointment(
  vendorSlug: string,
  timeslotId: string,
  name: string,
  email: string,
  tel: string,
  note: string,
  tacs: string[],
  apiUrl: string = 'https://api.nalp.ch',
): Promise<Appointment> {
  const url = `${apiUrl}/api/v2/vendors/${vendorSlug}/book/`
  return fetch(url, {
    method: 'post',
    body: JSON.stringify({
      id: timeslotId,
      email,
      name,
      tel,
      note,
      tacs,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleRequest(200))
    .then(transposeAppointment)
    .catch((reason) => {
      console.error(reason)

      throw reason
    })
}
