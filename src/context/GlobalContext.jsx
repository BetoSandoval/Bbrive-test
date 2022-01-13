import { createContext } from "react";

const initialState = {
    users: [
        {
            id: 1,
            img: 'https://bit.ly/dan-abramov',
            name: 'Dan Abramov',
            phone: '5652829',
            email: 'danabramov@gmail.com'
        },
        {
            id: 2,
            img: "https://reqres.in/img/faces/7-image.jpg",
            name: "Michael Lawson",
            phone: '565345345',
            email: "michael.lawson@reqres.in",
        },
        {
            "id": 3,
            img: "https://reqres.in/img/faces/8-image.jpg",
            name: "Lindsay Ferguson",
            phone: '56234343',
            email: "lindsay.ferguson@reqres.in",
        },
        {
            "id": 4,
            img: "https://reqres.in/img/faces/9-image.jpg",
            name: "Tobias Funke",
            phone: '6435456',
            email: "tobias.funke@reqres.in",
        }
    ]
}

export const GlobalContext = createContext( initialState );

export const ContextProvider = ( { children } ) => {
    return(
        <GlobalContext>
            {children}
        </GlobalContext>
    )
}