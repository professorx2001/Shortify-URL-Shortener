import { nanoid } from 'nanoid';
import { URL } from '../models/url.model.js';

async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({err : "URL is required!!!"})
    const shortId = nanoid(8);
    await URL.create({
        shortId,
        originalUrl : body.url,
        visitHistory : []
    })
    return res.json({id : shortId})
}

async function handleVisitHistory(req, res) {
    try {
        const shortId = req.params.shortId;

        // Find and update the URL entry by shortId
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: { 
                    visitHistory : {
                        timestamp : Date.now()
                    }
                 }
            }
            // { new: true }  // Return the updated document
        );

        if (!entry) {
            return res.status(404).send("URL not found");
        }
        // Redirect to the original URL
        res.redirect(entry.originalUrl);

    } catch (error) {
        console.error("Error handling visit history:", error);
        res.status(500).send("Server error");
    }
}

async function handleGetVisitHistoryCount(req, res) {
    try {
        const shortId = req.params.shortId;

        // Find the document by shortId
        const entry = await URL.findOne({ shortId });

        // If no entry is found, return a 404
        if (!entry) {
            return res.status(404).send("URL not found");
        }

        // Get the length of the visitHistory array
        const visitCount = entry.visitHistory.length;

        // Send the count as response
        res.json({ visitCount });
    } catch (error) {
        console.error("Error fetching visit history count:", error);
        res.status(500).send("Server error");
    }
}

export { 
    handleGenerateNewShortURL,
    handleVisitHistory,
    handleGetVisitHistoryCount,
 }