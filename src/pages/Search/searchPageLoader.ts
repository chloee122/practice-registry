import { PackageType } from "../../api/types/PackageType";
import { getPackages } from "../../api/queries/api";

const searchPageLoader = async({request}: {request: Request}) => {
        const { searchParams } = new URL(request.url);
        const searchTerm = searchParams.get("text");
        if (!searchTerm) throw new Error("a search term must be provided");
        const data = await getPackages(searchTerm);
        return data.objects as PackageType[];
      }

export default searchPageLoader
