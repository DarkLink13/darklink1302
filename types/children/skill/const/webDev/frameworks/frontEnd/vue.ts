import { INode } from '~~/types/core'
import { NodeItemLabelType } from '~~/types/core/node/item/label/type'

export const Nuxt: INode = {
  item: {
    id: 'nuxt',
    exp: 90,
    type: NodeItemType.Skill,
    sublabels: [{ value: '4', type: NodeItemLabelType.Years }],
    label: { value: 'Nuxt' },
    background: { src: '/assets/img/nuxt2.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const VueJS: INode = {
  item: {
    id: 'vuejs',
    exp: 85,
    type: NodeItemType.Skill,
    sublabels: [{ value: '4', type: NodeItemLabelType.Years }],
    label: { value: 'Vue.js' },
    background: { src: '/assets/img/vuejs.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const Vuetify: INode = {
  item: {
    id: 'vuetify',
    exp: 85,
    type: NodeItemType.Skill,
    sublabels: [{ value: '3', type: NodeItemLabelType.Years }],
    label: { value: 'Vuetify' },
    background: { src: '/assets/img/vuetify.png' },
    colors: { primary: '#1867c0', secondary: '#1697f6', hover: '#aeddff' }
  }
}

export const IViewUI: INode = {
  item: {
    id: 'iviewui',
    exp: 40,
    type: NodeItemType.Skill,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }],
    label: { value: 'IView UI' },
    background: { src: '/assets/img/iview.png' },
    colors: { primary: '#296af6', secondary: '#50cee5', hover: '#85efbe' }
  }
}
