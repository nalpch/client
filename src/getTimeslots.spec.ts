import { expect } from 'chai'
import getTimeslots from './getTimeslots'

describe('getTimeslots', () => {
  it('should list all timeslots', () => {
    return getTimeslots('martin', '43', '75').then(([ts0, ts1]) => {
      expect(ts0.id).to.equal('NzUtXy00My0xNjM3NzQzNTAwLUJPT0s=')
      expect(ts0.start).to.equalDate(new Date('2021-11-24T09:45:00+01:00'))
      expect(ts0.end).to.equalDate(new Date('2021-11-24T09:45:00+01:00'))
      expect(ts0.mode).to.equal('BOOK')
      expect(ts0.locationType).to.equal('VIRTUAL')
      expect(ts0.duration).to.equal(60)
      expect(ts0.durationId).to.equal(43)
      expect(ts0.serviceId).to.equal(75)
      expect(ts0.calendarId).to.equal(null)
      expect(ts0.anonymous).to.equal(true)
      expect(ts0.preferred).to.equal(false)

      expect(ts1.id).to.equal('NzUtXy00My0xNjM3NzQ0NDAwLUJPT0s=')
    })
  })
})
