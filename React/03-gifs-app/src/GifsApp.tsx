import { GifList } from "./gifs/components/GifList";
import { PreviousSearchs } from "./gifs/components/PreviousSearchs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";
import { useState } from 'react';

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);
    const handleTermClicked = (term: string) => {
        console.log({ term });
    };

    const handleSearch = (query: string) => {
        console.log({ query });
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gifs perfecto" />
            {/* Search */}
            <SearchBar placeholder="Buscar Gifs..."
                onQuery={handleSearch} />
            {/** Busquedas previas */}
            <PreviousSearchs previousSearchs={previousTerms} onlabelClicked={handleTermClicked} />
            {/** Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
};