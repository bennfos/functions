const add = (max, ...numbers) => {
    let sum = 0    
    for (num of numbers) {
        sum += num
    }
    if (sum > max) {
        return 0
    } else { 
        return sum
    }
}

const sum1 = add(100000, 82, 34, 12, 345, 234, 23)

console.log(sum1)


const sentence = (...words) => {
    return words.join(" ")
}

const message1 = sentence("Hey ", "Steve, ", "how'd ", "I ", "do? ", "Did ", "I ", "do ", "okay? ", "Huh? ", "Did ", "I? ")


console.log(message1)