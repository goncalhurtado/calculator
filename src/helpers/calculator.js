// import { value, setValue } from "../App.jsx"

export function btnNumber(e, value, setValue) {
    setValue(value + e.target.value)
}

export function btnPlus(e, value, setValue) {
    e.target.value = "*";
    setValue(value + e.target.value)
}

export function btnC(e, setValue) {
    e.preventDefault()
    setValue(setValue = "")
}

export function equal(e, value, setValue) {
    e.preventDefault()
        // if (e.target.value === undefined) {
        //     return console.log("vacio");
        // }
        // if (setValue === undefined) {
        //     return console.log("vacio");
        // }

    setValue(eval(value))
}