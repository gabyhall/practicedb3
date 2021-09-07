const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
require('./db/connection');
const userRouter = require('./users/users.routes');
const postRouter = require('./posts/posts.routes')
app.use(userRouter);
app.use(postRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});