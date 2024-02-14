import React, { useRef } from "react";
import DropdownHeader from "./dropdown-header";
import DropdownBody from "./dropdown-body";

const MultiselectDropdown = () => {
    const BodyRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <DropdownHeader DropdownRef={BodyRef} />
            <DropdownBody ref={BodyRef} />
        </>
    );
};

export default MultiselectDropdown;
