import { create } from "zustand";

// Characters Store
interface useCharactersProps {
    characters: Character[];
    setCharacters: (characters: Character[]) => void;
}
export const useCharacters = create<useCharactersProps>(set => ({
    characters: [] as Character[],
    setCharacters: (characters: Character[]) => set({ characters }),
}));

// Selected Characters Store
interface useSelectedCharactersProps {
    selectedCharacters: Character[];
    addCharacter: (character: Character) => void;
    removeCharacter: (character: Character) => void;
}

export const useSelectedCharacters = create<useSelectedCharactersProps>(
    set => ({
        selectedCharacters: [] as Character[],
        addCharacter: (character: Character) =>
            set(state => ({
                selectedCharacters: !state.selectedCharacters.includes(
                    character
                )
                    ? [...state.selectedCharacters, character]
                    : state.selectedCharacters,
            })),
        removeCharacter: (character: Character) => {
            set(state => ({
                selectedCharacters: state.selectedCharacters.filter(
                    data => data.id !== character.id
                ),
            }));
        },
    })
);

// Searched Character Store
interface useSearchedCharacterProps {
    searchedCharacter: string;
    setSearchedCharacter: (searchedCharacter: string) => void;
}
export const useSearchedCharacter = create<useSearchedCharacterProps>(set => ({
    searchedCharacter: "" as string,
    setSearchedCharacter: (searchedCharacter: string) =>
        set({ searchedCharacter }),
}));
