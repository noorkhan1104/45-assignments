// Your own array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// use your list to print a series of statements about these items. such as "i would like to own a Honda motorcycle".

let transportation : string[] = ["BMW", "Dodge","Porsche","bugatti"]

transportation.forEach(name => {
    console.log ( `"i would like to own a ${name}"`)
})