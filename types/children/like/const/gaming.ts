import { INode } from '../../../core'
export const ResidentEvil: INode = {
  item: {
    id: 'residentevil',
    exp: 70,
    type: NodeItemType.Like,
    background: { src: '/assets/img/residentevil.png' },
    sublabels: [{ value: '4, 7: Biohazard, 8: Village', type: NodeItemLabelType.Version }],
    colors: {
      primary: '#920118',
      secondary: '#b60000',
      hover: '#f76464'
    }
  }
}
export const DarkSiders: INode = {
  item: {
    id: 'darksiders',
    exp: 80,
    type: NodeItemType.Like,
    background: { src: '/assets/img/darksiders.png' },
    sublabels: [{ value: '1,2,3', type: NodeItemLabelType.Version }],
    colors: {
      primary: '#fda172',
      secondary: '#f7d100',
      hover: '#f7e771'
    }
  }
}

export const TLOZ: INode = {
  item: {
    id: 'tloz',
    exp: 100,
    type: NodeItemType.Like,
    background: { src: '/assets/img/tloz.png' },
    sublabels: [{ value: "Link's Awakening, Ocarina of Time, Majora's Mask, The Wind Waker, The Minish Cap, Twilight Princess, Skyward Sword, Breath of the Wild", type: NodeItemLabelType.Version }],
    colors: {
      primary: '#52206a',
      secondary: '#944dad',
      hover: '#a688dd'
    }
  }
}

export const LikeGaming: INode = {
  item: {
    type: NodeItemType.Like,
    id: 'gaming',
    icon: { key: 'mdi:gamepad-variant-outline' },
    colors: {
      primary: '#52206a',
      secondary: '#944dad',
      hover: '#a688dd'
    }
  },
  children: [undefined, DarkSiders, undefined, ResidentEvil, undefined, TLOZ]
}
