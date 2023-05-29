const express=require("express")

let app=express()
// app.get("/",(req,res)=>{
//     res.send("let them be")
// })


// app.listen(5000,(err)=>{
//     if(err){
//         throw err
//     }else {
//         console.log("server is running on 5000")
//     }
// })





// app.get("/",users,(req,res)=>{
//     console.log("this is app.get")
//     res.send("<h2>hiiiiii</h2>")
// })
// function users(req,res,next){
//     console.log("this is middleware ,this is logged before app.get")
//     next()
// }

// app.listen(5000,(err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("server is running")
//     }
// })

// app.use(users)

// app.get("/",(req,res)=>{
//     console.log("this is app.get")
//     res.send("<h3>may be</h3>")
// })
//     app.get("/admin",(req,res)=>{
//         console.log("this is admin")
//         res.send("<h1>admin</h1>")
//     })
//     function users(res,req,next){
//         console.log("this is middleware this is logged before")
//         next()
//     }
//     app.listen(5000,(err)=>{
//         if(err){
//              throw err
    //     }else {
    //         console.log("server is running")
    //     }
    // })                                               making users globally available so we can use it anywhere



    // app.use("/resource",auth,(req,res,next)=>{
    //     console.log("this is application level middleware")
    //     next()
    // })

    // app.get("/resource",(req,res)=>{
    //     console.log("endpoint")
    // })
    // function auth(req,res,next){
    //     console.log("this is auth")
    //     next()
    // }
    // app.listen(5000,(err)=>{
    //     if(err){
    //         throw err
    //     }else{
    //         console.log("server is running on 5000")
    //     }
    // })                                                  (this is Application level middleware) 
    
    //   app.use(express.static(__dirname+"/public"))

    // app.get("/",(req,res)=>{
    //     res.sendFile(__dirname+"/views/index.html")
    // })

    // app.use((req,res)=>{
    //     res.sendFile(__dirname+"/views/404.html")
    // })
    // app.listen(5000,(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     else {
    //         console.log("server is running on 5000")
    //     }
    // })                                                      we have to mention path here bcoz we're not using path here


    const path=require("path")
    app.use(express.static(path.join(__dirname,"/public")))

    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"/views/index.html"))
 })

     app.use((req,res)=>{
         res.sendFile(path.join(__dirname,"/views/404.html"))
     })
     app.listen(5000,(err)=>{
         if(err){
            throw err
         }
        else {
            console.log("server is running on 5000")
        }
    })                                                        using path 
    