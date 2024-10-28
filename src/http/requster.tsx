import axios from "axios"
import { ResponseContainer } from "./BaseApi"

export const MAIN_URL = "http://127.0.0.1:8000"


export enum P {
    Operations = "/operations/get_all_operations"
}

export async function requestGet<R>(url: string): Promise<ResponseContainer<R>> {
    return await axios.get(MAIN_URL + url).then((r) => {
        return r as unknown as ResponseContainer<R>
    }).catch((e) => {
        return e
    })
}