export interface IHeaderLinks {
  title: string
  link: string
}

export interface IFooterLinks {
  title: string
  link: string
}

export interface IFooterImages {
  link: string
}

export interface IDicoverMenu {
  link: string
  title: string
}

export interface IHotRadios {
  picUrl: string
  name: string
  position: string
  url: string
}

interface IArtists {
  name: string
  type: number
  url: string
  id?: number
  dataPath?: string
}

export interface IArtistCategories {
  title: string
  area: number
  artists: IArtists[]
}
