import { atom } from 'recoil'
import { Post } from '../Interface/DataPost'

export const postAtom = atom<Post[]>({
    key:'posts',
    default: []
})