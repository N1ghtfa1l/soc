import { P, requestGet } from "../../requster";
import { GetIntroResp } from "./introInter";



export function getIntro() {
    return requestGet<GetIntroResp[]>(P.Operations).then((resp) => resp.data)
}