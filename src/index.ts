import getTimeslots from './getTimeslots'
import getVendor from './getVendor'
import bookAppointment from './bookAppointment'
import cancelAppointment from './cancelAppointment'

type getTimeslotProps = {
  durationId: string
  serviceId: string
  calendarId?: string
}
type bookAppointmentProps = {
  timeslotId: string
  name: string
  email?: string
  tel?: string
  note: string
  tacs: string[]
}
type cancelAppointmentProps = {
  appointmentId: string
}
type Options = {
  endpont?: string
}
export default class API {
  private apiUrl
  private vendorSlug

  constructor(vendorSlug: string, options?: Options) {
    this.apiUrl = options?.endpont ?? 'https://api.nalp.ch'
    this.vendorSlug = vendorSlug
  }

  getTimeslots({ durationId, serviceId, calendarId }: getTimeslotProps) {
    return getTimeslots(
      this.vendorSlug,
      durationId,
      serviceId,
      calendarId,
      this.apiUrl,
    )
  }
  bookAppointment({
    timeslotId,
    name,
    email,
    tel,
    note,
    tacs,
  }: bookAppointmentProps) {
    return bookAppointment(
      this.vendorSlug,
      timeslotId,
      name,
      email,
      tel,
      note,
      tacs,
      this.apiUrl,
    )
  }
  cancelAppointment({ appointmentId }: cancelAppointmentProps) {
    return cancelAppointment(this.vendorSlug, appointmentId, this.apiUrl)
  }
  getVendor() {
    return getVendor(this.vendorSlug, this.apiUrl)
  }
}
