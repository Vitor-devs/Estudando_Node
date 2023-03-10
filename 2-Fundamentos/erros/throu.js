const x = "10"

if (!Number.isInteger(x)){
    throw new Error("Esse número passado não é inteiro")
} else {
    console.log("Esse número é inteiro")
}