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

	return Pelicula;

};