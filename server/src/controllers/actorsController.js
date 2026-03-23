const db = require('../../db');

class ActorsController {
    async getAllActors(req, res) {
        try {
            const actors = await db.query(
                `SELECT full_name, birth_year, id FROM actors
                ORDER BY id
                `,
            );
            res.status(200).json(actors.rows);
        } catch (error) {
            console.log(error);
        }
    }

    async getActorById(req, res) {
        try {
            const { actorId } = req.params;
            const actor = await db.query(
                `
                SELECT actors.id, actors.full_name, actors.birth_year, actors.death_year, actors.photo, countries.description AS country
                FROM actors
                JOIN countries ON actors.countryid = countries.id
                WHERE actors.id = $1
                `,
                [actorId],
            );
            res.status(200).json(actor.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ActorsController();
