import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // console.log(req.headers);
        const page = parseInt(req.headers.page);
        const user = req.headers.user;
        // let { page, user } = req.query
        if (!page)
            page = 1;

        const limit = parseInt(11);

        const skip = (page - 1) * limit;

        const response = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await response.json();
        if (response.status === 200) {

            const d = data.slice(skip, skip + 10);
            res.json(d).status(200);
        }
        else {
            res.json(data).status(400);
        }


    } catch (error) {
        res.send("error").status(400);
        console.log(error);
    }

});

export default router;