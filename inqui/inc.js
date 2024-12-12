function key(t) {
    if (typeof t !== 'string') {
        throw new Error('Input must be a string');
    }
    return t.length;
}

try {
    const t = "Hello, World!";
    const k = key(t);
    console.log(k); // Outputs: 13
} catch (error) {
    console.error(error.message);
}
