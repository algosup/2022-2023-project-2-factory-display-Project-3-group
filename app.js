import express from 'express';
import mangoose from 'mongoose';
import path from 'path';



mangoose.connect('mongodb://jacobi-test-server:4SWaWGVEAP8lIl1j707x8cv1kIaN6StERsBHBeEYasnfW20lnQgBYKGAH96ooau7u0KLp1S73oVhACDb4mMFRw==@jacobi-test-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@jacobi-test-server', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
()=>console.log('connected to db')); 


const app = express();
app.use(express.static('Public'));



    app.get('/', (req, res) => {
        // res.send('Hello World!')
        const htmlPath = path.resolve('Public/HTML/index.html');
        res.sendFile
        (htmlPath);
      });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);





