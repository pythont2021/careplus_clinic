
console.log("connected")

$(document).ready(()=>{
    $(".book-apt-btn").click(()=>{
        console.log("button clicked")
        $("#model-container").css('transform','translate(-50%, -50%) scale(1)')
    })
    $(".close").click(()=>{
        console.log("button clicked")
        $("#model-container").css('transform','translate(-50%, -50%) scale(0)')
    })
})