export function btnC(e, setValue) {
    e.preventDefault()
    setValue(setValue = "")
}

export function btnCE(e, value, setValue) {
    e.preventDefault()

    if (value === "Infinity" || value === "NaN") {
        value = "";
        setValue(value = "")
        return
    }

    setValue(value.slice(0, -1))
}