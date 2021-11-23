import { expect } from 'chai'
import getVendor from './getVendor'

describe('getVendor', () => {
  it('should get a vendor', () => {
    return getVendor('martin').then((vendor) => {
      expect(vendor.slug).to.equal('martin')
      expect(vendor.tacs).to.deep.equal([
        {
          id: 'NALP_TAC',
          required: true,
          url: 'https://nalp.ch/tos',
        },
      ])
      expect(vendor.services).to.deep.equal([
        {
          id: 75,
          name: 'Tech Talk',
          durations: [
            {
              id: 44,
              minutes: 15,
              locationType: 'VIRTUAL',
            },
            {
              id: 42,
              minutes: 30,
              locationType: 'VIRTUAL',
            },
            {
              id: 43,
              minutes: 60,
              locationType: 'VIRTUAL',
            },
            {
              id: 98,
              minutes: 120,
              locationType: 'VIRTUAL',
            },
          ],
        },
        {
          id: 76,
          name: 'Coffee & Cake',
          durations: [
            {
              id: 71,
              minutes: 30,
              locationType: 'VIRTUAL',
            },
            {
              id: 72,
              minutes: 60,
              locationType: 'VIRTUAL',
            },
            {
              id: 74,
              minutes: 120,
              locationType: 'VIRTUAL',
            },
          ],
        },
        {
          id: 131,
          name: 'Call',
          durations: [
            {
              id: 157,
              minutes: 30,
              locationType: 'TELEPHONE',
            },
          ],
        },
      ])
      expect(vendor.slug).to.equal('martin')
    })
  })
})
