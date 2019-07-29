type Position = {
  Long: number,
  Lat: number
}

export interface Site {
  SiteId: string,
  Name: string,
  Address: string
  OpeningHours: string,
  Position: Position
};