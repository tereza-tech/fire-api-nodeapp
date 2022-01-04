import {fakeGitHubMiddleware} from './fire';
import { join } from'path';
import express from 'express';

    
   fakeGitHubMiddleware()
      
     
    const app = express();
    const port = 3000;
    
    //app.use(express.static(join(__dirname, 'public')));
    app.use(express.static('./dist'));
    
    app.listen(port, () => console.log(`App running on ${port}.`));

    
app.use(express.static(join(__dirname, 'public')));
app.use(express.static('./dist'));

app.listen(port, () => console.log(`App running on ${port}.`));


