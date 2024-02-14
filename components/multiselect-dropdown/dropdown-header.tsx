import SelectedCharacterBubble from "./selected-character-bubble";
import { ChevronDown } from "lucide-react";
import {
    useSearchedCharacter,
    useSelectedCharacters,
} from "@/lib/store/api-store";

const DropdownHeader = ({ DropdownRef }: { DropdownRef: any }) => {
    return (
        <div className="p-1 flex items-center max-w-[500px] w-full min-h-[44px] border rounded-xl">
            <div className="flex gap-2 flex-wrap">
                <SelectedCharacters />
                <SearchInput />
            </div>
            <CloseButton DropdownRef={DropdownRef} />
        </div>
    );
};

export default DropdownHeader;

// File Scoped Components

const SelectedCharacters = () => {
    const selectedCharacters = useSelectedCharacters().selectedCharacters;
    return (
        <div className="flex gap-2 flex-wrap">
            {selectedCharacters.map(data => SelectedCharacterBubble(data))}
        </div>
    );
};

const SearchInput = () => {
    const setSearchedCharacter = useSearchedCharacter().setSearchedCharacter;
    return (
        <>
            <label
                htmlFor="search"
                className="sr-only"
            >
                Search
            </label>
            <input
                id="search"
                type="text"
                onChange={e => setSearchedCharacter(e.target.value)}
            />
        </>
    );
};
const CloseButton = ({
    DropdownRef,
}: {
    DropdownRef: React.RefObject<HTMLDivElement>;
}) => {
    const DropdownStateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (DropdownRef.current?.getAttribute("data-state") === "closed") {
            DropdownRef.current?.setAttribute("data-state", "open");
            DropdownRef.current?.setAttribute("aria-expanded", "true");
        } else {
            DropdownRef.current?.setAttribute("data-state", "closed");
            DropdownRef.current?.setAttribute("aria-expanded", "false");
        }
        e.currentTarget.firstElementChild?.classList.toggle("rotate-180");
    };

    return (
        <button
            aria-label="open dropdown"
            onClick={DropdownStateHandler}
            className="ml-auto mr-2"
        >
            <ChevronDown
                aria-hidden
                className={`shrink-0 text-slate-600 transition-transform duration-500`}
                size={24}
                stroke="currentColor"
            />
        </button>
    );
};
