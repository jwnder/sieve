
function sieve(max) {
    // Make array of length max and fill with true
    const sieve = new Array(max).fill(true)

    // Iterate from 2 until square root of max
    for (let i = 2; i < Math.sqrt(max); i++) {
        // If the number is labelled a prime then we can start at i^2 and mark every multiple of i
        // from there as NOT a prime
        if (sieve[i]) {
        for (let j = Math.pow(i, 2); j < max; j += i) {
            sieve[j] = false
        }
        }
    }

    // Now we can reduce our sieve to only the Prime indexes that are true
    return sieve.reduce((primes, isPrime, i) => {
        if (isPrime && i > 1) {
        primes.push(i)
        }

        return primes
    }, [])
}

function medians(arr) {
    if (arr.length % 2 == 0) {
        let n = arr.length / 2;
        return [arr[n-1], arr[n]];
    } else {
        let n = parseInt(arr.length / 2);
        return [arr[n]];
    }
}

module.exports = {sieve, medians};
