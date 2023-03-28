import { INode } from '~~/types/core'
export * from './adobephotoshop'
export * from './inkscape'
export * from './threedsmax'

export const GraphicDesigner: INode = {
  item: {
    type: NodeItemType.Position,
    id: 'graphicdesigner',
    icon: {
      key: 'carbon:color-palette'
    },
    colors: {
      primary: '#ec0567',
      secondary: '#e97bac',
      hover: '#efc3c3'
    }
  }
}
