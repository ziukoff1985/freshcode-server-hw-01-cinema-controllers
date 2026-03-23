const db = require('../../db');

class MoviesController {
    async getAllMovies(req, res) {
        try {
            const movies = await db.query(
                `
                SELECT title, year, id, poster
                FROM movies
                ORDER BY id
                `,
            );
            res.status(200).json(movies.rows);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new MoviesController();
