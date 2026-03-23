const db = require('../../db');

class DirectorsController {
    async getAllDirectors(req, res) {
        try {
            const directors = await db.query(
                `SELECT full_name, birth_year, id FROM directors
                ORDER BY id
                `,
            );
            res.status(200).json(directors.rows);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new DirectorsController();
