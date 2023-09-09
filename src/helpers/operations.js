export function btnOperation(e, value, setValue) {

    if (e.target.value === "X") {
        e.target.value = "*"
    }
    if (e.target.value === "÷") {
        e.target.value = "/"
    }
    if (value === "*" || value === "/" || value === "%" || value === "++" || value === "--" || value === "Infinity" || value === "Nan") {
        value = "";
        setValue(value = "")
        return
    }
    setValue(value + e.target.value)
}

export function equal(e, value, setValue) {
    if (value === "*" || value === "/" || value === "%" || value === "+" || value === "-" || value === "Infinity" || value === "Nan") {
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