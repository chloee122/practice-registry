import { getFeaturedPackages } from "../../api/queries/api"
import type { PackageDetails } from "../../api/types/PackageDetails"

export interface homeLoaderResults {
    featuredPackages: PackageDetails[]
}

export const homePageLoader = async(): Promise<homeLoaderResults>=> {
const featuredPackages = await getFeaturedPackages()
return {featuredPackages: featuredPackages}
}
