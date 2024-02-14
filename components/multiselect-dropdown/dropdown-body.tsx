import React, { forwardRef, HTMLAttributes} from "react";
import CharacterContainer from "./character-container";
import { useCharacters } from "@/lib/store/api-store";
import { Loader2 } from "lucide-react";
const DropdownBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    (props, ref) => {
        const characters = useCharacters().characters;
        return (
            <div
                {...props}
                ref={ref}
                aria-expanded="false"
                data-state="closed"
                className={`flex flex-col max-w-[500px] w-full h-[450px] overflow-y-scroll border rounded-md gap-2 data-[state=closed]:hidden`}
            >
                {characters.length > 0 ? <Characters /> : <Loading />}
            </div>
        );
    }
);

DropdownBody.displayName = "DropdownBody";
export default DropdownBody;

const Characters = () => {
    const characters = useCharacters().characters;
    return characters.map(data => (
        <CharacterContainer
            key={data.id}
            data={data}
        />
    ));
};
const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-full border gap-2">
            <p className="text-lg">Loading...</p>
            <Loader2
                className="animate-spin"
                aria-hidden
            />
        </div>
    );
};
