import { Schema, model } from "mongoose";

const datos = new Schema({
    title: String,
    description: String,
    done:{
        type: Boolean,
        default:false
    }
});

export default model('datos', datos)