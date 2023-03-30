import { INode } from '~~/types/core'

export const Metallica: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'metallica',
    label: { value: 'Metallica' },
    background: { src: '/assets/img/metallica.png' },
    colors: { primary: '#828282', secondary: '#999999', hover: '#c3c3c3' }
  }
}

export const A7x: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'a7x',
    label: { value: 'Avenged Sevenfold' },
    background: { src: '/assets/img/a7x.png' },
    colors: {
      primary: '#3636b8',
      secondary: '#5051cd',
      hover: '#8889dc'
    }
  }
}

export const Aa: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'aa',
    label: { value: 'Asking Alexandria' },
    background: { src: '/assets/img/aa.png' },
    colors: {
      primary: '#52206a',
      secondary: '#944dad',
      hover: '#a688dd'
    }
  }
}

export const Bmth: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'bmth',
    label: { value: 'Bring me the Horizont' },
    background: { src: '/assets/img/bmth.png' },
    colors: {
      primary: '#3638c1',
      secondary: '#d02b40',
      hover: '#87ffff'
    }
  }
}

export const Soad: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'aa',
    label: { value: 'System of a Down' },
    background: { src: '/assets/img/soad.png' },
    colors: {
      primary: '#fda172',
      secondary: '#f7d100',
      hover: '#f7e771'
    }
  }
}

export const Slipknot: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'sipknot',
    label: { value: 'Slipknot' },
    background: { src: '/assets/img/slipknot.png' },
    colors: {
      primary: '#920118',
      secondary: '#b60000',
      hover: '#f76464'
    }
  }
}

export const Rock: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'rock',

    icon: { key: 'icon-park-twotone:rock-gesture' },
    colors: {
      primary: '#a50044',
      secondary: '#d02b40',
      hover: '#c3484d'
    }
  },
  children: [Metallica, A7x, Aa, Bmth, Slipknot, Soad]
}
