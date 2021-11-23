import { Vendor, TaC, Service, ServiceDuration, Calendar } from './types'

export default function getVendor(
  vendorSlug: string,
  apiUrl: string = 'https://api.nalp.ch',
): Promise<Vendor> {
  const url = `${apiUrl}/api/v2/vendors/${vendorSlug}/`
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .then(
      (data): Vendor => ({
        slug: data.slug,
        tacs: data.tacs.map(
          (tac): TaC => ({
            id: tac.id,
            url: tac.url,
            required: tac.required,
          }),
        ),
        services: data.serviceGroups.reduce((acc, group) => {
          acc = acc.concat(
            group.services.map(
              (service): Service => ({
                id: service.id,
                name: service.name,
                durations: service.durations.map(
                  (duration): ServiceDuration => ({
                    id: duration.id,
                    minutes: duration.duration,
                    locationType: duration.locationType,
                  }),
                ),
              }),
            ),
          )
          return acc
        }, []),
        calendars: data.calendars.map(
          (calendar): Calendar => ({
            id: calendar.id,
            name: calendar.name,
            services: calendar.services,
          }),
        ),
      }),
    )
    .catch((reason) => {
      console.error(reason)

      throw reason
    })
}
