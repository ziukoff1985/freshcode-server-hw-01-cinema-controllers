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

    async getMovieById(req, res) {
        try {
            const { movieId } = req.params;
            const movie = await db.query(
                `
                SELECT movies.title, movies.year, movies.id, movies.poster, genres.title AS genre, studios.title AS studio 
                FROM movies
                JOIN genres ON movies.genreid = genres.id
                JOIN studios ON movies.studioid = studios.id
                WHERE movies.id=$1
                `,
                [movieId],
            );
            if (movie.rows.length === 0) {
                return res.status(404).send('Movie not found');
            }
            res.status(200).json(movie.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new MoviesController();
