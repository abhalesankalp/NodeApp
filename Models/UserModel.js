const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema =  new Schema({
    EmployeeID:{
        type: String,
        required: true,
        unique: true,
        trim : true,
        minLength: 1
    },
    FirstName:{
        type: String,
        required: true,
        unique: false,
        trim : true,
        minLength: 3
    },
    LastName:{
        type: String,
        required: true,
        unique: false,
        trim : true,
        minLength: 3
    },
    Address:{
        type: String,
        required: true,
        unique: false,
        trim : true,
        minLength: 3
    },
    UserRole:{
        RoleID: {
                type: Number,
                required: true,
                unique: false,
                trim : true,
                minLength: 1
        },
        RoleName: {
                type: String,
                required: true,
                unique: false,
                trim : true,
                minLength: 1
        }
    }
    },{
        timestamps : true,
    });

const User = Mongoose.model('User',userSchema);
module.exports = User;
