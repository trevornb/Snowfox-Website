import raw from './stores.json'

export type AnblStore = {
  type: string
  store: string
  address: string
  town: string
  products: string
}

export type BoardStore = {
  store: string
  address: string
  town: string
  products: string
  number: string
}

export type StoreData = {
  anbl: AnblStore[]
  nslc: BoardStore[]
  pei: BoardStore[]
}

export const storeData = raw as StoreData
