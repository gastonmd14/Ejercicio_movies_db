module.exports = (sequelize, datatypes) => {

    let alias = "Actor_Pelicula"

    let cols = {

        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        actor_id: {
            type: datatypes.INTEGER,            
        },

        movie_id: {
            type: datatypes.INTEGER,            
        },  
    }

    let config = {
        tableName: "actor_movie",
        timestamps: false
    }

    let Actor_Pelicula = sequelize.define(alias, cols, config);

    Actor_Pelicula.associate = function(models) {		
        Actor_Pelicula.belongsToMany(models.Pelicula, {
            as: "pelicula",	
            through: "movies",			
            foreignKey: "actor_movie_id",	
            otherkey: "movie_id",
            timestamps: false
        })

        Actor_Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            through: "actors",					
            foreignKey: "actor_movie_id",
            otherkey: "actor_id",
            timestamps: false
        })

    };

    return Actor_Pelicula;
    
};