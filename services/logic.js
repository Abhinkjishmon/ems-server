const db = require('./db')

//get all-emp
const allEmployees = () => {
    return db.Employee.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    employees: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: "No data is available"
                }
            }
        }
    )
}

module.exports = {
    allEmployees
}