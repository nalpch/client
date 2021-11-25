import { expect } from 'chai'
import nalpApi from '.'

describe('api integration', () => {
  it('should instantiate', async () => {
    const api = new nalpApi('martin')

    const vendor = await api.getVendor()
    const service = vendor.services[0]
    const duration = service.durations[2]
    const [ts0, ...rest] = await api.getTimeslots({
      durationId: duration.id,
      serviceId: service.id,
    })

    const appointment = await api.bookAppointment({
      timeslotId: ts0.id,
      name: 'My Name',
      email: 'myemail@nalp.ch',
      tel: null,
      note: 'looking forward!',
      tacs: [],
    })

    expect(appointment.minutes).to.equal(60)

    const canceledAppointment = await api.cancelAppointment({
      appointmentId: appointment.id,
    })

    expect(canceledAppointment.isCanceled).to.equal(true)
  })
})
