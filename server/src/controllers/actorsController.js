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
                WHERE actors.id=$1
                `,
                [actorId],
            );
            res.status(200).json(actor.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }

    async createActor(req, res) {
        try {
            const { full_name, birth_year, death_year, photo, country } =
                req.body;
            console.log(req.body);
            const newActor = await db.query(
                `
                INSERT INTO actors (full_name, birth_year, death_year, photo, countryid)
                VALUES ($1, $2, $3, $4, (SELECT id FROM countries WHERE description=$5))
                RETURNING *
                `,
                [full_name, birth_year, death_year, photo, country],
            );
            res.status(201).json(newActor.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }

    async updateActor(req, res) {
        try {
            const { id, full_name, birth_year, death_year, photo, country } =
                req.body;
            const updatedActor = await db.query(
                `
                UPDATE actors
                SET full_name=$2, birth_year=$3, death_year=$4, photo=$5, countryid=
                (SELECT id FROM countries WHERE description=$6)
                WHERE id=$1
                RETURNING *
                `,
                [id, full_name, birth_year, death_year, photo, country],
            );
            res.status(200).json(updatedActor.rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ActorsController();
