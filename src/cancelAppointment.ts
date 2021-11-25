import { Appointment } from './types'
import { handleRequest, transposeAppointment } from './utils'

export default function cancelAppointment(
  vendorSlug: string,
  appointmentId: string,
  apiUrl: string = 'https://api.nalp.ch',
): Promise<Appointment> {
  const url = `${apiUrl}/api/v2/appointments/${appointmentId}/cancel/`
  return fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleRequest(200))
    .then(transposeAppointment)
    .catch((reason) => {
      console.error(reason)

      throw reason
    })
}
