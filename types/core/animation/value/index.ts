import { IAnimationValueFill } from './fill'
import { IAnimationValueOpacity } from './opacity'
import { IAnimationValueTransform } from './transform'

export interface IAnimationValue {
    transform: IAnimationValueTransform;
    opacity: IAnimationValueOpacity[]
    fill: IAnimationValueFill[]
}
