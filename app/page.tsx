"use client";
import { useEffect } from "react";
// Store
import { useCharacters } from "@/lib/store/api-store";
// Components
// Utils
import { fetcher } from "@/lib/utils/fetch";
import MultiselectDropdown from "@/components/multiselect-dropdown/multiselect-dropdown";
export default function Home() {
    const setCharacters = useCharacters().setCharacters;
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetcher(
                "https://rickandmortyapi.com/api/character"
            );
            setCharacters(data.results);
        };
        fetchData();
    }, []);
    return (
        <main className="flex flex-col items-center gap-2 p-5 w-full">
            <h1 className="text-xl font-semibold">Multiselect Auto Complete Dropdown</h1>
            <MultiselectDropdown />
        </main>
    );
}
