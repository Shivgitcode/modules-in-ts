export function add(x, y) {
    return x + y;
}
export function sample(num) {
    const idx = Math.floor(Math.random() * num.length);
    return num[idx];
}
