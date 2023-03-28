import { CSS } from '../../../languages'
import { INode } from '~~/types/core'

export const VueJS: INode = {
  item: {
    id: 'vuejs',
    exp: 85,
    type: NodeItemType.Skill,
    sublabels: [{ value: '4', type: NodeItemLabelType.Years }, { value: '2,3', type: NodeItemLabelType.Version }],
    label: { value: 'Vue.js' },
    background: { src: '/assets/img/vuejs.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  },
  children: [NodeJS, Typescript, HTML, CSS]
}

export const Vuex: INode = {
  item: {
    id: 'vuex',
    exp: 75,
    type: NodeItemType.Skill,
    sublabels: [{ value: '3', type: NodeItemLabelType.Years }],
    label: { value: 'Vuex' },
    background: { src: '/assets/img/vuex.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const VueRouter: INode = {
  item: {
    id: 'vuerouter',
    exp: 75,
    type: NodeItemType.Skill,
    sublabels: [{ value: '3', type: NodeItemLabelType.Years }],
    label: { value: 'VueRouter' },
    background: { src: '/assets/img/vuerouter.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const Nuxt: INode = {
  item: {
    id: 'nuxt',
    exp: 90,
    type: NodeItemType.Skill,
    sublabels: [{ value: '4', type: NodeItemLabelType.Years }, { value: '2.x', type: NodeItemLabelType.Version }],
    label: { value: 'Nuxt' },
    background: { src: '/assets/img/nuxt2.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  },
  children: [VueJS, VueRouter, Vuex, SSR]
}

export const Nuxt3: INode = {
  item: {
    id: 'nuxt3',
    exp: 80,
    type: NodeItemType.Skill,
    sublabels: [{ value: '1', type: NodeItemLabelType.Years }, { value: '3', type: NodeItemLabelType.Version }],
    label: { value: 'Nuxt3' },
    background: { src: '/assets/img/nuxt3.png' },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  },
  children: [VueJS, TailwindCSS, SSR]
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
  },
  children: [MaterialDesign]
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
