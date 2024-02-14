declare interface Origin {
    name: string;
    url: string;
}

declare interface Location {
    name: string;
    url: string;
}

declare interface Episode {
    [index: number]: string;
}

declare interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: Episode[];
    url: string;
    created: string;
}
