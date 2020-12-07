module.exports = (sequelize, datatypes) => {

    let alias = "Actor"

    let cols = {

        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        first_name: {
            type: datatypes.STRING
        },

        last_name: {
            type: datatypes.STRING
        },

        rating: {
            type: datatypes.DECIMAL
        },

        favorite_movie_id: {
            type: datatypes.INTEGER
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {		
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",					
            through: "actor_movie",
            foreignKey: "actor_id",
            otherkey: "movie_id",
            timestamps: false
        }			
    )};

	return Actor;

};