module.exports = (sequelize, datatypes) => {

    let alias = "Pelicula"

    let cols = {

        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: datatypes.STRING
        },

        rating: {
            type: datatypes.DECIMAL
        },

        awards: {
            type: datatypes.INTEGER
        },

        release_date: {
            type: datatypes.DATE
        },
        
        length: {
            type: datatypes.INTEGER
        },

        genre_id: {
            type: datatypes.INTEGER
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function(models) {		
        Pelicula.belongsTo(models.Genero, {
            as: "genero",					
            foreignKey: "genre_id"	
        })

    Pelicula.belongsToMany(models.Actor, {
        as: "actores",					
        through: "actor_movie",
        foreignKey: "movie_id",
        otherkey: "actor_id",
        timestamps: false
    })	
    };

    
       

	return Pelicula;

};