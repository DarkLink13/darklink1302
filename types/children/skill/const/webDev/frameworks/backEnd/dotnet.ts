import { INode } from '~~/types/core'

export const DotNet: INode = {
  item: {
    id: 'dotnet',
    exp: 45,
    sublabels: [{ name: '2', type: NodeItemLabelType.Years }, { name: '4.8', type: NodeItemLabelType.Version }],
    type: NodeItemType.Skill,
    label: { value: 'ASP.NET Framefork' },
    background: { src: '/assets/img/dotnet.png' },
    colors: { primary: '#572b8a', secondary: '#027fbc', hover: '#2c98bd' }
  }
}
