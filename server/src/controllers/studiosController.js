const db = require('../../db');

class StudiosController {
    async getAllStudios(req, res) {
        try {
            const studios = await db.query(
                `SELECT id, title, logo 
                FROM studios
                ORDER BY id
                `,
            );
            res.status(200).json(studios.rows);
        } catch (error) {
            console.log(error);
        }
    }

    async getStudioById(req, res) {
        try {
            const { studioId } = req.params;
            const studio = await db.query(
                `
                SELECT studios.id, studios.title, studios.logo, countries.description AS country, locations.city AS city
                FROM studios
                JOIN locations ON studios.locationid = locations.id
                JOIN countries ON locations.countryid = countries.id
                WHERE studios.id=$1
                `,
                [studioId],
            );
            if (studio.rows.length === 0) {
                return res.status(404).send('Studio not found');
            }
            res.status(200).json(studio.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new StudiosController();
