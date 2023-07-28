# Canvas Drawing

This repository contains a simple HTML, CSS, and JavaScript project that allows you to draw a letter "P" on a canvas and then download the corresponding color data as hexadecimal values.

## How to Use

1. Access the hosted application at [https://tubular-sunshine-9a3d02.netlify.app/](https://tubular-sunshine-9a3d02.netlify.app/).

2. You will see a canvas on the page displaying the letter "P" in brown on a yellow background.

3. Click on the "Download As Hex" button to generate a text file containing the hexadecimal representation of the colors in the canvas.

4. The generated text file, named "Hex_data.txt," will be downloaded to your device.

## Canvas Drawing

The letter "P" is drawn on the canvas using the HTML5 `<canvas>` element and JavaScript. The script defines a `draw()` function that sets up the canvas and renders the letter "P" using a serif font in the center.

## Generating Hexadecimal Data

The `generateHex()` function is responsible for extracting the color information from the canvas and converting it into hexadecimal format. The canvas data is obtained using the `getImageData()` method, which returns an array of color values for each pixel. These color values are then converted into hexadecimal format (0xRRGGBBAA) and stored in the `Total` variable.

## Downloading Hexadecimal Data

The `downloadHex()` function takes the generated hexadecimal data from the `Total` variable, creates a text file using the `Blob` object, and initiates a download link for the file. When you click on the "Download As Hex" button, the text file with the hexadecimal color data will be downloaded to your device.

## Hosted Application

You can access the deployed application by visiting [https://tubular-sunshine-9a3d02.netlify.app/](https://tubular-sunshine-9a3d02.netlify.app/).