import * as ds from "@devicescript/core"


const cd = await new ds.CloudAdapter()

cd.onJson.subscribe((data) => {
    console.log("data: "+ data)
})

setInterval(async () => {
    //await cd.uploadJson(JSON.stringify({"topic": "1111", "data": "ledon"}),'')
}, 5000)

