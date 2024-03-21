import { Params } from "react-router-dom"
import { getPackageDetails } from "../../api/queries/api"
import { PackageDetailsType } from "../../api/types/PackageDetailsType"

export interface productPageLoaderResult {
    packageDetails: PackageDetailsType
}

export const productPageLoader = async({params}: {params: Params}):Promise<productPageLoaderResult> => {
    const packageName = params.name
    if (!packageName) throw new Error("A package name must be provided!")
    const packageDetails = await getPackageDetails(packageName)
    return {packageDetails}
}


