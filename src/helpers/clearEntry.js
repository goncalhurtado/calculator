export function btnC(e, setValue) {
    e.preventDefault()
    setValue(setValue = "")
}

export function btnCE(e, value, setValue) {
    e.preventDefault()
    setValue(value.slice(0, -1))
}