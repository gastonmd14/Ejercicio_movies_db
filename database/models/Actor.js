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

	return Actor;

};