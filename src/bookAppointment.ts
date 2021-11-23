import { Appointment } from './types'

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
    .then((res) => {
      if (res.status !== 200) {
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .then(
      (data): Appointment => ({
        id: data.id,
        start: new Date(data.start),
        end: new Date(data.end),
        minutes: data.duration,
        mode: data.variant,
        locationType: data.locationType,
      }),
    )
    .catch((reason) => {
      console.error(reason)

      throw reason
    })
}
