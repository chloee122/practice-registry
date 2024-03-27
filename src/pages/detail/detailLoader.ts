import { Params } from "react-router-dom"
import { getPackage } from "../../api/queries/api"
import type { PackageDetails } from "../../api/types/PackageDetails"

export interface detailLoaderResult {
    details: PackageDetails
}

export const detailLoader = async({params}: {params: Params}):Promise<detailLoaderResult> => {
    const {name} = params
    if (!name) throw new Error("A package name must be provided!")
    const details = await getPackage(name)
    return {details}
}


