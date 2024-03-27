import type { PackageSummary } from "../../api/types/PackageSummary";
import { searchPackages } from "../../api/queries/api";

export interface searchLoaderResult{
  searchResults: PackageSummary[]
}

const searchLoader = async({request}: {request: Request}): Promise<searchLoaderResult> => {
        const { searchParams } = new URL(request.url);
        const searchTerm = searchParams.get("text");
        if (!searchTerm) throw new Error("a search term must be provided");
        const searchResults = await searchPackages(searchTerm);
        return {searchResults}
      }

export default searchLoader
