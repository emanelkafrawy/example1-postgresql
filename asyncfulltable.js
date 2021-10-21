const client = require("./connection.js");

execute()
async function execute(){
    try{
        await client.connect();
        console.log("connected successfully")
        // client.query("insert into users values($1 , $2, $3, $4)", [210,"emv", "evlk", "cvairo"])
        const {rows} = await client.query("select * from users ")//parameter way
        console.table(rows)


    }
    catch(err){
        console.log(err);
    }
    finally{
        // await client.end();
        console.log("disconnect");
    }
}