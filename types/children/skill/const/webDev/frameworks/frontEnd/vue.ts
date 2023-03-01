import { INode } from '~~/types/core'
import { NodeItemLabelType } from '~~/types/core/node/item/label/type'

export const Nuxt: INode = {
  item: {
    exp: 75,
    type: NodeItemType.Skill,
    sublabels: [{ name: '4', type: NodeItemLabelType.Since }],
    label: { name: 'Nuxt' },
    background: { src: '/assets/img/nuxt2.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const VueJS: INode = {
  item: {
    exp: 70,
    type: NodeItemType.Skill,
    sublabels: [{ name: '2018-09', type: NodeItemLabelType.Since }],
    label: { name: 'Vue.js' },
    background: { src: '/assets/img/vuejs.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const Vuetify: INode = {
  item: {
    exp: 85,
    type: NodeItemType.Skill,
    sublabels: [{ name: '2020-01', type: NodeItemLabelType.Since }],
    label: { name: 'Vuetify' },
    background: { src: '/assets/img/vuetify.png' },
    colors: { primary: '#1867c0', secondary: '#1697f6', hover: '#aeddff' }
  }
}

export const IViewUI: INode = {
  item: {
    exp: 40,
    type: NodeItemType.Skill,
    sublabels: [{ name: '1', type: NodeItemLabelType.Years }],
    label: { name: 'IView UI' },
    background: { src: '/assets/img/iview.png' },
    colors: { primary: '#296af6', secondary: '#50cee5', hover: '#85efbe' }
  }
}
