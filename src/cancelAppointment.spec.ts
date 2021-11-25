import { expect } from 'chai'
import cancelAppointment from './cancelAppointment'

describe('cancelAppointment', () => {
  it('should cancel an appointment by appointment.id', () => {
    return cancelAppointment(
      'martin',
      '6c505d87-a39c-494d-888e-e0fed165b3d2',
    ).then((a1) => {
      expect(a1.id).to.equal('6c505d87-a39c-494d-888e-e0fed165b3d2')
      expect(a1.isCanceled).to.equal(true)
    })
  })
})
