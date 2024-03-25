export interface PackageDetails{
    name: string,
    description: string,
    maintainers: {
        name:string,
        email: string
    }[],
    license: string,
    homepage: string
}