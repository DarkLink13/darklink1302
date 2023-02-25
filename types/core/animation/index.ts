import { IAnimationValue } from './value'

export * from './value'
export type IAnimation = {
    [key in string]: IAnimationValue
}
