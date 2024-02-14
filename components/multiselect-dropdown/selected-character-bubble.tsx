import React from "react";
// Store
import { useSelectedCharacters } from "@/lib/store/api-store";
import { X } from "lucide-react";
const SelectedCharacterBubble = (data: Character) => {
    const selectedCharacters =
        useSelectedCharacters.getState().selectedCharacters;
    return (
        selectedCharacters && (
            <div
                key={data.id}
                className="flex items-center gap-2 border rounded-lg px-2 py-1 bg-slate-200"
            >
                <p>{data.name}</p>
                <RemoveButton data={data} />
            </div>
        )
    );
};

export default SelectedCharacterBubble;

const RemoveButton = ({ data }: { data: Character }) => {
    const removeCharacter = useSelectedCharacters().removeCharacter;
    return (
        <button
            aria-label="remove"
            onClick={() => removeCharacter(data)}
        >
            <X
                aria-hidden
                size={20}
                className="bg-slate-400 text-white rounded-md"
            />
        </button>
    );
};
