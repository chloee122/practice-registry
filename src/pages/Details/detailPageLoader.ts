import { Params } from "react-router-dom"
import { getPackageDetails } from "../../api/queries/api"
import { PackageDetailsType } from "../../api/types/PackageDetailsType"

export interface detailPageLoaderResult {
    packageDetails: PackageDetailsType
}

export const detailPageLoader = async({params}: {params: Params}):Promise<detailPageLoaderResult> => {
    const packageName = params.name
    if (!packageName) throw new Error("A package name must be provided!")
    const packageDetails = await getPackageDetails(packageName)
    return {packageDetails}
}


