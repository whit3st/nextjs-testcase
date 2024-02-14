import React from "react";
// Store
import {
    useSelectedCharacters,
    useSearchedCharacter,
} from "@/lib/store/api-store";
import Image from "next/image";
const CharacterContainer = ({ data }: { data: Character }) => {
    const searchedCharacter = useSearchedCharacter().searchedCharacter;
    const isHidden = () =>
        !data.name.toLowerCase().includes(searchedCharacter.toLowerCase()) &&
        "hidden";
    return (
        <section
            className={`flex gap-2 border-b p-2 items-center ${isHidden()}`}
            key={data.id}
        >
            <Checkbox data={data} />
            <Avatar data={data} />
            <aside className="flex flex-col items-start h-full">
                <HighlightedName name={data.name} />
                <Episodes data={data} />
            </aside>
        </section>
    );
};

export default CharacterContainer;

// File Scoped Components
const Checkbox = ({ data }: { data: Character }) => {
    const addCharacter = useSelectedCharacters().addCharacter;
    const removeCharacter = useSelectedCharacters().removeCharacter;
    const characters = useSelectedCharacters().selectedCharacters;
    const CheckboxClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!characters.includes(data) && e.currentTarget.checked) {
            addCharacter(data);
        } else {
            removeCharacter(data);
        }
    };
    return (
        <input
            type="checkbox"
            checked={characters.includes(data)}
            onChange={CheckboxClickHandler}
        />
    );
};

const Avatar = ({ data }: { data: Character }) => {
    return (
        <Image
            alt={data.name}
            src={data.image}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="rounded-lg"
        />
    );
};
const HighlightedName = ({ name }: { name: string }) => {
    const searchedCharacter = useSearchedCharacter().searchedCharacter;
    // If there is no searched character, return the name
    if (!searchedCharacter) return <h2 className="font-normal">{name}</h2>;

    // If there is a searched character, return the name with the searched character highlighted
    const regex = new RegExp(searchedCharacter, "gi");
    const highlightedName = name.replace(regex, match => `<b>${match}</b>`);

    return <h2 dangerouslySetInnerHTML={{ __html: highlightedName }}></h2>;
};

const Episodes = ({ data }: { data: Character }) => {
    return (
        <p className="text-xs text-slate-500">{data.episode.length} episodes</p>
    );
};
