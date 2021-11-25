import { Timeslot } from './types'
import { handleRequest } from './utils'

export default function getTimeslots(
  vendorSlug: string,
  durationId: string,
  serviceId: string,
  calendarId?: string,
  apiUrl: string = 'https://api.nalp.ch',
): Promise<Timeslot[]> {
  const url = `${apiUrl}/api/v2/vendors/${vendorSlug}/timeslots/`

  const queryParams = {
    duration: durationId,
    service: serviceId,
  }
  if (calendarId) {
    queryParams['calendar'] = calendarId
  }
  const params = new URLSearchParams(queryParams)
  return fetch(url + '?' + params.toString())
    .then(handleRequest(200))
    .then((data) =>
      data.map(
        (timeslot): Timeslot => ({
          id: timeslot.id,
          start: new Date(timeslot.start),
          end: new Date(timeslot.end),
          duration: timeslot.duration,
          anonymous: timeslot.anonymous,
          preferred: timeslot.preferred,
          mode: timeslot.mode,
          locationType: timeslot.locationType,
          serviceId: timeslot.service,
          calendarId: timeslot.calendar,
          durationId: timeslot.durationId,
          date: timeslot.date,
        }),
      ),
    )
    .catch((reason) => {
      console.error(reason)

      throw reason
    })
}
