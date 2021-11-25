# Nalp.ch Api Client

A nalp.ch api client for booking appointments.

## Install

```sh
npm install --save @nalpch/client
```

This client uses fetch. Make sure to include a polyfill (e.g. [cross-fetch](https://github.com/lquixada/cross-fetch))

## Usage

```javascript
import nalpchClient from '@nalpch/client'

const nalpClient = new nalpchClient('slug') // slug.nalp.ch
const { durations, services, calendars, tacs } = await nalpClient.getVendor()
const timeslots = await nalpClient.getTimeslots({
  durationId: duration[0].id,
  serviceId: service[0].id,
  calendarId: calendars[0].id, // only required if vendor forces calendar selection
})
const appointment = await api.bookAppointment({
  timeslotId: timeslots[0].id,
  name: 'My Name',
  email: 'myemail@nalp.ch', // tel or email or both
  tel: null, // required if vendor.locationType === 'TELEPHONE'
  note: 'looking forward!', // will be visible for customer and vendor
  tacs: tacs.filter((tac) => tac.required).map((tac) => tac.id), // users have to accept terms and conditions
})

await api.cancelAppointment({ appointmentId: appointment.id })
```

## Identifiers

Take note that any id is to be treated as a random string. Ids can change without any notice.

## Types

Have a look at the type definitions in [types.ts](src/types.ts)
