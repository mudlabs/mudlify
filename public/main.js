import color from "color-name";

function Wait(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    });
};

async function Hi() {
    const pending = await Wait(2000);
    console.log("Welcome to Mudlify. Here's the RGB value for blueviolet.", color.blueviolet);
};

Hi()
.then(() => console.log("Done"))
.catch((e) => console.error(e));