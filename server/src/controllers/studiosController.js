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
}

module.exports = new StudiosController();
