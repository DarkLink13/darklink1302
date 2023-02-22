import { INode } from '~~/types/core'

export const Nuxt: INode = {
  item: {
    type: NodeItemType.Skill,

    label: { name: 'Nuxt' },
    background: { src: '/assets/nuxt2.png', ...IconDefault },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const VueJS: INode = {
  item: {
    type: NodeItemType.Skill,

    label: { name: 'Vue.js' },
    background: { src: '/assets/vuejs.png', ...IconDefault },
    colors: { primary: '#2b475e', secondary: '#078876', hover: '#00c68f' }
  }
}

export const Vuetify: INode = {
  item: {
    type: NodeItemType.Skill,

    label: { name: 'Vuetify' },
    background: { src: '/assets/vuetify.png', ...IconDefault },
    colors: { primary: '#1867c0', secondary: '#1697f6', hover: '#aeddff' }
  }
}
