
console.log("connected")

$(document).ready(()=>{
    $(".book-apt-btn").click(()=>{
        console.log("button clicked")
        $("#model-container").css('display','inline-flex')
    })
    $(".close").click(()=>{
        console.log("button clicked")
        $("#model-container").css('display','none')
    })
})