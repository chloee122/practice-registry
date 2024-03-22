import { getFixedPackages } from "../../api/queries/api"
import { PackageDetailsType } from "../../api/types/PackageDetailsType"

export interface homePageLoaderResults {
    fixedPackagesDetails: PackageDetailsType[]
}

export const homePageLoader = async(): Promise<homePageLoaderResults>=> {
const fixedPackagesDetails = await getFixedPackages()
return {fixedPackagesDetails}
}
