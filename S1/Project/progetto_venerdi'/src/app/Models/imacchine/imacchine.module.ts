export type Root = Macchina[]

export interface Macchina {
  brand: string
  brandLogo: string
  model: string
  modelImage: string
  year: number
  price: number
  available: boolean
}
