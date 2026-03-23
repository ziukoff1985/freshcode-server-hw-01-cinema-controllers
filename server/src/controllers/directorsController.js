const db = require('../../db');

class DirectorsController {
    async getAllDirectors(req, res) {
        try {
            const directors = await db.query(
                `SELECT full_name, birth_year, death_year, id FROM directors
                ORDER BY id
                `,
            );
            res.status(200).json(directors.rows);
        } catch (error) {
            console.log(error);
        }
    }

    async getDirectorById(req, res) {
        try {
            const { directorId } = req.params;
            const director = await db.query(
                `
                SELECT directors.id, directors.full_name, directors.birth_year, directors.death_year, directors.photo, countries.description AS country
                FROM directors
                JOIN countries ON directors.countryid = countries.id
                WHERE directors.id=$1
                `,
                [directorId],
            );
            if (director.rows.length === 0) {
                return res.status(404).send('Director not found');
            }
            res.status(200).json(director.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new DirectorsController();
