import { Jenkis } from './softwareEngineer'
import { INode } from '~~/types/core'

export * from './algorithmDev'
export * from './graphicDesigner'
export * from './webDev'

export const Skill: INode = {
  item: {
    id: 'skill',
    type: NodeItemType.Root,
    icon: {
      key: 'carbon:skill-level'
    },
    colors: {
      primary: '#281b62',
      secondary: '#403084',
      hover: '#5a48b5'
    }
  },
  children: [
    { item: FrontEnd.item, children: [Angular2, AngularJS, Nuxt3, Nuxt, VueJS, React, KnockoutJS] },
    { item: FullStack.item, children: [Nx, NodeJS, DotNet, Hugo] },
    { item: SoftwareEngineer.item, children: [Git, OS, IDE, Docker, Jenkis, NGinx] },
    { item: BackEnd.item, children: [Django, DotNet, NestJS, NodeJS] },
    { item: GraphicDesigner.item, children: [undefined, AdobePhotoshop, undefined, ThreeDsMax, undefined, Inkscape] },
    AlgorithmDev
  ]
}
