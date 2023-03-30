import { INode } from '~~/types/core'

export const CalvinHarris: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'calvinharris',
    label: { value: 'Calvin Harris' },
    background: { src: '/assets/img/calvinharris.png' },
    colors: {
      primary: '#3636b8',
      secondary: '#5051cd',
      hover: '#8889dc'
    }
  }
}

export const MartinGarrix: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'martingarrix',
    label: { value: 'Martin Garrix' },
    background: { src: '/assets/img/martingarrix.png' },
    colors: {
      primary: '#1d532f',
      secondary: '#1a6e37',
      hover: '#018e37'
    }
  }
}

export const DavidGuetta: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'davidguetta',
    label: { value: 'David Guetta' },
    background: { src: '/assets/img/davidguetta.png' },
    colors: {
      primary: '#fda172',
      secondary: '#f7d100',
      hover: '#f7e771'
    }
  }
}

export const Skrillex: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'skrillex',
    label: { value: 'Skrillex' },
    background: { src: '/assets/img/skrillex.png' },
    colors: {
      primary: '#920118',
      secondary: '#b60000',
      hover: '#f76464'
    }
  }
}

export const Ee: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'ee',
    icon: { key: 'majesticons:adjustments-line' },
    colors: {
      primary: '#3636b8',
      secondary: '#5051cd',
      hover: '#8889dc'
    }
  },
  children: [undefined, CalvinHarris, MartinGarrix, undefined, DavidGuetta, Skrillex]
}
