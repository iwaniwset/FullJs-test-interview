const { User } = require ('../models/index')
const { comparePass } = require ('../helpers/bcryptjs')
const { generateToken} = require ('../helpers/jwt')
const { OAuth2Client } = require ('google-auth-library')
const { response } = require('express')

class UserController {
    static register(req, res) {
        let { email, password} = req.body
        User.create({
            email, password
        })
        .then(response => {
            console.log(req.body, "<<<< ini req.body");
            res.status(201).json({
                id: response.id,
                email: response.email,
                msg: "register success"
            })
        })
        .catch(err => {
            console.log(err, "register error");
            res.status(500).json({
                err: "internal server error"
            })
        })
    }

    static login (req, res){
        const { email, password } = req.body;
        User.findOne({ //cek user berdasarkan email
            where: {email}
        })
        .then(user => {
            if(!user) throw {msg : "invalid email or password"} // jika tidak ditemukan throw error
            let comparePassword = comparePass(password, user.password )
            if(!comparePassword) throw {msg : "invalid email or password"}
            let payload = {
                id: user.id,
                email: user.email
            }
            let token = generateToken(payload)
            res.status(200).json({
                token
            })
        })
        .catch(err=>{
            console.log(err, "login error");
            res.status(500).json({
                err:err.msg || "internal server error "
            })
        })

    }

    static loginGoogle(req, res){
        let email = null
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
        client.verifyIdToken({
            idToken: req.body.tokenGoogle,
            audience: process.env.GOOGLE_CLIENT_ID,
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            email = payload.email
            
            return User.findOne({
                where: { email }
            })
        })
        .then(user => {
            if (user) return user
            else {
                return User.create({
                    email : email,
                    password: 'googlePassword'
                })
            }
        })
        .then(user =>{
            let newPayload = {
                email: user.email,
                id: user.id
            }
            let token = generateToken(newPayload)
            res.status(200).json({
                token
            })
        })
        .catch(err => {
            console.log(err, "register error");
            res.status(500).json({
                err: "internal server error"
            })
        })
    }
    /*
    findOne user cari yang sama berdasarkan email
    if user exist cek password bcrypts ==> match (success login)

    */

}

module.exports = UserController