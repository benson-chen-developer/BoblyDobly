import React from 'react'

export const Icons = ({width, height, icon}) => {
    if(icon === "Share") return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path fill="#41505F" d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22" />
    </svg>

    if(icon === "Print") return <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height} viewBox="0 0 24 24">
        <path fill="#41505F" d="M18 7H6V3h12zm0 5.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287M16 19v-4H8v4zm2 2H6v-4H2v-6q0-1.275.875-2.137T5 8h14q1.275 0 2.138.863T22 11v6h-4z" />
    </svg>

    if(icon === "Generate Report") return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path fill="#fff" d="M6 23H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1" opacity="0.25" />
        <path fill="#fff" d="M14 23h-4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1" />
        <path fill="#fff" d="M22 23h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1" opacity="0.5" />
    </svg>

    if(icon === "visa") return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
        <path fill="#506FD9" d="M26.117 14.628s.422 2.067.517 2.5h-1.855l.889-2.417c-.011.017.183-.506.294-.828zM32 6.222v19.556a2.67 2.67 0 0 1-2.667 2.667H2.666a2.67 2.67 0 0 1-2.667-2.667V6.222a2.67 2.67 0 0 1 2.667-2.667h26.667A2.67 2.67 0 0 1 32 6.222M8.472 20.178l3.511-8.622H9.622l-2.183 5.889l-.239-1.194l-.778-3.967c-.128-.55-.522-.706-1.011-.728H1.817l-.039.172a8.8 8.8 0 0 1 2.344.95l1.989 7.5zm5.245.011l1.4-8.633h-2.233l-1.394 8.633zm7.772-2.822c.011-.983-.589-1.733-1.872-2.35c-.783-.395-1.261-.661-1.261-1.067c.011-.367.406-.745 1.283-.745a3.8 3.8 0 0 1 1.661.328l.2.094l.306-1.867a5.6 5.6 0 0 0-2-.367c-2.206 0-3.756 1.178-3.767 2.855c-.017 1.239 1.111 1.928 1.956 2.344c.861.422 1.156.7 1.156 1.072c-.011.578-.7.844-1.339.844c-.889 0-1.367-.139-2.095-.461l-.294-.139l-.311 1.939c.522.239 1.489.45 2.489.461c2.344.005 3.872-1.156 3.889-2.944zm7.844 2.822l-1.8-8.633h-1.728c-.533 0-.939.156-1.167.717l-3.317 7.917h2.344s.383-1.067.467-1.294h2.867c.067.306.267 1.294.267 1.294z" />
    </svg>

    if(icon === "Fixed Expenses") return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path fill="#41505F" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z" />
    </svg>

    if(icon === "Periodic Expenses") return <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height} viewBox="0 0 24 24">
        <path fill="#41505F" d="M6 20q-1.65 0-2.825-1.175T2 16V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v8q0 1.65-1.175 2.825T18 20zM6 8h12q.55 0 1.05.125t.95.4V8q0-.825-.587-1.412T18 6H6q-.825 0-1.412.588T4 8v.525q.45-.275.95-.4T6 8m-1.85 3.25l11.125 2.7q.225.05.45 0t.425-.2l3.475-2.9q-.275-.375-.7-.612T18 10H6q-.65 0-1.137.338t-.713.912" />
    </svg>

    if(icon === "Variable Expenses") return <svg xmlns="http://www.w3.org/2000/svg" wwidth={width} height={height} viewBox="0 0 20 20">
        <path fill="#41505F" d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2H0zm1 3h18v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm6 2v2h6V7z" />
    </svg>
}
