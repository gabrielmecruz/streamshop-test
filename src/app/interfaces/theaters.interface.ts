export interface Theaters {
  address: string,
  addressComplement: string,
  id: string,
  eventId: string,
  name: string,
  rooms: TheaterRooms[]
}

export interface TheaterRooms {
  name: string,
  sessions: [{
    price: number,
    time: string
  }],
  types: Array<string>
}
