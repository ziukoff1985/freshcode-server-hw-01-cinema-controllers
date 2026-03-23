-- ALTER TABLE movies_actors
-- DROP CONSTRAINT movies_actors_actorid_fkey;

-- ALTER TABLE movies_actors
-- DROP CONSTRAINT movies_actors_movieid_fkey;

-- ALTER TABLE movies_actors
-- ADD CONSTRAINT movies_actors_actorid_fkey
-- FOREIGN KEY (actorid) REFERENCES actors
-- ON DELETE CASCADE
-- ON UPDATE CASCADE;

-- ALTER TABLE movies_actors
-- ADD CONSTRAINT movies_actors_movieid_fkey
-- FOREIGN KEY (movieid) REFERENCES movies
-- ON DELETE CASCADE
-- ON UPDATE CASCADE;

-- ALTER TABLE movies_directors
-- DROP CONSTRAINT movies_directors_directorid_fkey;

-- ALTER TABLE movies_directors
-- DROP CONSTRAINT movies_directors_movieid_fkey;

-- ALTER TABLE movies_directors
-- ADD CONSTRAINT movies_directors_directorid_fkey
-- FOREIGN KEY (directorid) REFERENCES directors
-- ON DELETE CASCADE
-- ON UPDATE CASCADE;

-- ALTER TABLE movies_directors
-- ADD CONSTRAINT movies_directors_movieid_fkey
-- FOREIGN KEY (movieid) REFERENCES movies
-- ON DELETE CASCADE
-- ON UPDATE CASCADE;
