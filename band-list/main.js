// create an array of your top five favorite bands (at least 5)
// write a function that takes an array of bands as an argument and logs each name to the consol

const bands = ["Queen", "Against Me!", "The Shins", "Paul Simon", "Protest the Hero"]

const bandLog = (bandsArray) => {
    for (let band of bandsArray) {
        console.log(band)
    }
}

bandLog(bands)