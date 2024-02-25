export interface User{
    id :number;
    firstName :string;
    lastName :string;
    email :string;
    token :string;
    password :string;
    roles:Role[];
}

export interface Role{
    name :string;
    autorities:Authoritie[];
}

export interface Authoritie{
    name:string;
}

