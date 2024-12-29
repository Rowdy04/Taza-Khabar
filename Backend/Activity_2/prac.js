const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("Are you Trying me?");
    res.render('index',{text: "Hello World"});
});

const useRouter = require('./routes/user');
const postRouter = require('./routes/posts');
app.use('/user', useRouter);
app.use('/posts', postRouter);
app.listen(3005);