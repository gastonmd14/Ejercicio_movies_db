module.exports = (sequelize, datatypes) => {

    let alias = "Genero"

    let cols = {

        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: datatypes.STRING
        },

        ranking: {
            type: datatypes.INTEGER
        },

        active: {
            type: datatypes.INTEGER
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {		
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",					
            foreignKey: "genre_id"	
        }			
    )};

	return Genero;

};