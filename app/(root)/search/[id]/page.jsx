import Search from "../_components/Search";

export async function generateMetadata(props) {
    const id = await props.params.id;
    const decodedId = id ? decodeURIComponent(id) : '';

    return {
        title: decodedId ? `Search Results - ${decodedId.toUpperCase()}` : 'Search',
        description: decodedId ? `Viewing search results for ${decodedId}` : 'Search page',
    };
}

export default async function Page(props) {
    const params = await props.params;
    
    return (
        <Search params={params} />
    );
}
