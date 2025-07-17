createStringConnection("db_products","giovanna","9876")

function createStringConnection(databaseName,user,pass){
    console.log( `conect: DBCCONNECT;user=${user};pass=${pass};initial_database=${databaseName} `)
}