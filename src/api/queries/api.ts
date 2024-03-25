import { PackageDetails } from "../types/PackageDetails";
import { PackageSummary } from "../types/PackageSummary";


interface SearchResponse{
    objects: {
        package: {
            name: string;
            version: string;
            description: string;
            keywords?: string[]
        }
    }[]
}

export const searchPackages = async(term:string):Promise<PackageSummary[]> => {
    const res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${term}&size=10`)
    const data: SearchResponse = await res.json() 
    return data.objects.map(({package: {name, description, version, keywords}} ) => {return {
        name, description, version, keywords
    }})
}
  

export const getPackage = async(packageName: string): Promise<PackageDetails> => {
    const res = await fetch(`https://registry.npmjs.org/${packageName}`)
    const data= await res.json() 
    return data as PackageDetails
}

const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"]
export const getFeaturedPackages = async():Promise<PackageDetails[]> => {
    const promises = FEATURED_PACKAGES.map(async(pk) => (await fetch(`https://registry.npmjs.org/${pk}`)).json())
    const data = await Promise.all(promises)
    return data
}