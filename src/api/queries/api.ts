import { PackageDetailsType } from "../types/PackageDetailsType"
import { PackageType } from "../types/PackageType"

interface PackagesResponse{
    objects: {
        package: {
            name: string,
            version: string,
            description: string,
            keywords?: string[]
        }
    }[]
}

export const getPackages = async(term:string):Promise<PackageType[]> => {
    const response = await fetch(`http://registry.npmjs.com/-/v1/search?text=${term}&size=10`, {
        method: "GET"
    })
    const data = await response.json() as PackagesResponse
    return data.objects
}

export const getPackageDetails = async(packageName: string): Promise<PackageDetailsType> => {
    const response = await fetch(`https://registry.npmjs.org/${packageName}`, {method: "GET"})
    const data = await response.json() as PackageDetailsType
    const packageDetails = {name: data.name, description: data.description, maintainers: data.maintainers, license: data.license, homepage: data.homepage}
    return packageDetails
}

const FIXED_PACKAGES = ["react", "typescript", "redux"]
export const getFixedPackages = async():Promise<PackageDetailsType[]> => {
    const requests = FIXED_PACKAGES.map(async(pk) => await fetch(`https://registry.npmjs.org/${pk}`, {method: "GET"}))
    const responses = await Promise.all(requests)
    const data = await Promise.all(responses.map(async res => await res.json() as PackageDetailsType))
    return data
}