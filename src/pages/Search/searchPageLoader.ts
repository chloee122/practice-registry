import { PackageType } from "../../api/types/PackageType";
import { getPackages } from "../../api/queries/api";

interface searchPageLoaderResult{
  searchResult: PackageType[]
}

const searchPageLoader = async({request}: {request: Request}): Promise<searchPageLoaderResult> => {
        const { searchParams } = new URL(request.url);
        const searchTerm = searchParams.get("text");
        if (!searchTerm) throw new Error("a search term must be provided");
        const searchResult = await getPackages(searchTerm);
        return {searchResult}
      }

export default searchPageLoader
