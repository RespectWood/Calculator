export function multiply(a: number[]){
    let sum = a[0]
    for (let i = 1; i < a.length; i++){
        sum *= a[i];
    }
    return sum
}

export function add(a: number, b: number) {
    return a + b
}