const coding = ["python", "ruby", "javascript", "java"];

coding.forEach(function( item ){
    // console.log(item)
});

// arr1.forEach(( item ) =>  console.log(item));

arr1.forEach((item, index, arr ) => {
    console.log(item, index, arr)
    arr.push(2);
})

const myarr = [
    {
        language: "javascript",
        filetype: "js"
    },
    {
        language: "java",
        filetype: "java"
    },
    {
        language: "python",
        filetype: "py"
    },
    {
        language: "c++",
        filetype: "cpp"
    }
]

myarr.forEach(({language, filetype}) => {console.log(language, filetype)})