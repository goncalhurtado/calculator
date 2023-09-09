// import { value, setValue } from "../App.jsx"

export function btnNumber(e, value, setValue) {
    if (value === undefined) {
        setValue(value = "")
    }
    if (e.target.value === undefined) {
        setValue(e.target.value = "")
    }
    setValue(value + e.target.value)
}

export function btnC(e, setValue) {
    e.preventDefault()
    setValue(setValue = "")
}

export function btnCE(e, value, setValue) {
    e.preventDefault()
    setValue(value.slice(0, -1))
}

export function equal(e, value, setValue) {
    if (value === "*" || value === "/" || value === "%" || value === "+" || value === "-") {
        value = "";
        setValue(value = "")
        return
    }
    try {
        setValue(eval(value).toString())
    } catch (error) {

        setValue(value = "");
    }

}


export function btnOperation(e, value, setValue) {

    if (e.target.value === "X") {
        e.target.value = "*"
    }
    if (e.target.value === "÷") {
        e.target.value = "/"
    }
    setValue(value + e.target.value)
}