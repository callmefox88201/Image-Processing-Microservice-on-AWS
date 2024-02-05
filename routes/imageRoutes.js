import express from 'express';
import path from 'path';
import {filterImageFromURL, deleteLocalFiles, showLocalFile} from '../util/util.js';

export const router = express.Router();

router.get("/", async (req, res)=> {
    let image_url = req.query.image_url;

    if (!image_url) {
        return res.status(400).send(`image_url is required!`);
    }

    const fileExtension = path.extname(image_url).toLowerCase();

    if (fileExtension !== '.jpg' && fileExtension !== '.jpeg' && fileExtension !== '.png') {
        return res.status(422).send(`Unsupported file type`);
    }

    const imageFiltered = filterImageFromURL(image_url);

    imageFiltered
        .then(outpath => {
            showLocalFile(res, outpath);
            deleteLocalFiles([outpath]);
        }).catch((reason) => {
            res.status(400).send(`Something went wrong<br>${reason}`);
        })
})