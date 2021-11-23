enum LocationType {
  VIRTUAL,
  TELEPHONE,
  ON_SITE,
}

enum BookMode {
  REQUEST, // appointment must be accepted by the vendor
  BOOK, // appointment is booked immediately
}

export type Timeslot = {
  id: string
  start: Date
  end: Date
  duration: number
  anonymous: boolean
  preferred: boolean
  mode: BookMode
  locationType: LocationType
  calendarId: string
  serviceId: string
  durationId: string
  date: string
}

export type Appointment = {
  id: string
  start: Date
  end: Date
  minutes: number
  mode: BookMode
  locationType: LocationType
}

export type TaC = {
  id: string
  url: string
  required: boolean
}

export type ServiceDuration = {
  id: string
  minutes: number
  locationType: LocationType
}
export type Service = {
  id: string
  name: string
  durations: ServiceDuration[]
}
export type Calendar = {
  id: string
  name: string
  services: string[]
}
export type Vendor = {
  slug: string
  tacs: TaC[]
  services: Service[]
  calendars: Calendar[]
}
