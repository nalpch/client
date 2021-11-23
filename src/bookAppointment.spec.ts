import { expect } from 'chai'
import bookAppointment from './bookAppointment'

describe('bookAppointment', () => {
  it('should book an appointment by timeslot.id', () => {
    return bookAppointment(
      'martin',
      'NzUtXy00My0xNjM3NzQzNTAwLUJPT0s',
      'Martin Eigenmann',
      'customeremail@gmail.com',
      '+41790000000',
      'I am looking forward',
      ['NALP_TAC'],
    ).then((a1) => {
      expect(a1.id).to.equal('6c505d87-a39c-494d-888e-e0fed165b3d2')
      expect(a1.start).to.equalTime(new Date('2021-11-26T14:15:00+01:00'))
      expect(a1.end).to.equalTime(new Date('2021-11-26T15:15:00+01:00'))
      expect(a1.mode).to.equal('BOOK')
      expect(a1.locationType).to.equal('VIRTUAL')
      expect(a1.minutes).to.equal(60)
    })
  })
})
