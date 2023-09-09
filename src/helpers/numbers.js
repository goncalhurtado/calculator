export function btnNumber(e, value, setValue) {
    if (value === undefined) {
        setValue(value = "")
    }
    if (e.target.value === undefined) {
        setValue(e.target.value = "")
    }
    setValue(value + e.target.value)
}