const sharp = require("sharp");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var delayInMilliseconds = 2000; //2 second


rl.question("Do you want to get meta information of file samar.jpeg? type yes or no: ", function(userReq) {
    if(userReq && userReq === 'no') {
        setTimeout(function() {
            rl.question("Please enter X dimension to edit image: ", function(xDim) {
                rl.question("Please enter Y dimension to edit image: ", function(yDim) {
                    console.log(`Your request is ${userReq}, X dimension is ${xDim} and Y dimension is ${yDim}`);
                    setTimeout(function() {
                        resizeImage(Number(xDim), Number(yDim))
                      }, delayInMilliseconds+1000);
                    rl.close();
                });
            });
        }, delayInMilliseconds-1000);
    } else if(userReq && userReq === 'yes'){
        getMetadata()
        setTimeout(function() {
            rl.question("Please enter X dimension to edit image: ", function(xDim) {
                rl.question("Please enter Y dimension to edit image: ", function(yDim) {
                    console.log(`Your request is ${userReq}, X dimension is ${xDim} and Y dimension is ${yDim}`);
                    setTimeout(function() {
                        resizeImage(Number(xDim), Number(yDim))
                      }, delayInMilliseconds+1000);
                    rl.close();
                });
            });
        }, delayInMilliseconds);

    } else {
        rl.close();
        process.exit(0);
    }
});

// Get metadata
async function getMetadata() {
    try {
      const metadata = await sharp("samar.jpg").metadata();
      console.log(`All information of file samar.jpg`);
      console.log(metadata);
    } catch (error) {
      console.log(`An error occurred during processing: ${error}`);
    }
}

// Resize image
async function resizeImage(xDim, yDim) {
    try {
      await sharp("samar.jpg")
        .resize({
          width: xDim,
          height: yDim,
        })
        .toFile("samar-resized.jpg");
    } catch (error) {
      console.log(error);
    }
  }
//getMetadata()