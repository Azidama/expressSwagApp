const magicalString = (n: number): number => {

    if (n === 0) return 0;
    if (n <= 3) return 1;

    const s = [1, 2, 2];
    let next = 1; // Next number (alternates between 1 and 2)
    let count = 1; // number of 1s
    let i = 2; // Start at index 2 to start generating the string

    while (s.length < n) {
        const size = s[i]; // Current group size of 1 or 2
        for (let j = 0; j < size; j++) {
            s.push(next);
            if (next === 1) count++;
            if (s.length === n) break; // Stop if we reach n/required length
        }
        // Flip between 1 and 2
        if(next === 1) next = 2
        else if(next === 2) next = 1
        i++;
    }

    console.log('magic string:', s)
    return count;
}
magicalString(30)