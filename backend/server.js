const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Aslack", "location": "Mars"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2017", "yearTo": "2018", "place": "7N Mars", "comment": "Idle"}, {"yearFrom": "2009", "yearTo": "2010", "place": "The coffee shop", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1972", "yearTo": "2001", "place": "Le Cole du Vie", "comment": "Studying"}, {"yearFrom": "2001", "yearTo": "2004", "place": "Barista academy", "comment": "Made coffee"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('Ahh something bad happened', err)
  }

  logger.info(`Ok Aslack is listening on ${port}`)
});
