// Draw character
function draw() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(247, 247, 114)";
    ctx.fillRect(0, 0, 16, 34);
    ctx.fillStyle = "crimson";
    
    ctx.font = "25px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("P", canvas.width / 2, canvas.height / 2);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  draw();
});

//Generate hex

let Total = "";
function generateHex() {
    let k=15;
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, 16, 34);
  console.log(imageData);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const red = imageData.data[i].toString(16);

    const green = imageData.data[i + 1].toString(16).padStart(2, "0");
    const blue = imageData.data[i + 2].toString(16).padStart(2, "0");
    const alpha = imageData.data[i + 3].toString(16).padStart(2, "0");
    const hex = `0x${red}${green}${blue}${alpha}`;
    Total = Total + hex + "\t";
    if(i%k==0&&i!==0){
        Total=Total+"\n"
    }

  }
  downloadHex();
}
//Download
function downloadHex() {
  const blob = new Blob([Total], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.getElementById("button");
  downloadLink.href = url;
  downloadLink.download = "Hex_data.txt";
}

