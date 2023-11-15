import { atom } from "recoil"



interface UtilAtom1 {
    tradeTabs: boolean
}
 

export const utilsAtom1 = atom<UtilAtom1>({
    key: "UTILITY-1",
    default: {
        tradeTabs: true
    }
})

