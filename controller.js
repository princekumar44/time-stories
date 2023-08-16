
import http from 'http';
import { getLatestStories } from './stories.js';

const server = http.createServer(async (req, res) => {
    if (req.url === '/getTimeStories') {
        try {
            const latestStories = await getLatestStories();
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(latestStories));
        } catch (error) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});