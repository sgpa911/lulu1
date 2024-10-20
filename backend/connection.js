const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://sgpa911:Atlas321@cluster0.l1351.mongodb.net/luluDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('Database is connected')
}).catch((error)=>{
    console.log('Error in connection')
})