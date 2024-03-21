import { PackageDetailsType } from "../types/PackageDetailsType"

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



export const getPackages = async(term:string):Promise<PackagesResponse> => {
    const response = await fetch(`http://registry.npmjs.com/-/v1/search?text=${term}&size=10`, {
        method: "GET"
    })
    const data = await response.json() as PackagesResponse
    return data
}

export const getPackageDetails = async(packageName: string): Promise<PackageDetailsType> => {
    const response = await fetch(`https://registry.npmjs.org/${packageName}`, {method: "GET"})
    const {name, description, maintainers, license, homepage} = await response.json() as PackageDetailsType
    return {name, description, maintainers, license, homepage}
}

