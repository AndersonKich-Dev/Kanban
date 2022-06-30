import "dotenv/config";
import prismaClient from '../prisma'
import passport from 'passport'
import { Strategy, ExtractJwt } from'passport-jwt'

const authSecret:any = process.env.AUTHSECRET;

export default function getJwtStrategy() {
   const params = {
       secretOrKey: authSecret,
       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
   }

   const strategy = new Strategy(params, (payLoad, done) => {
       prismaClient.user.findFirst({
           where: {
               id: payLoad.id
           }
       })
       .then(user => {
           done(null, user ? {...payLoad} : false)
       })
       .catch(err => {
           done(err, false)
       })
   });
        
   passport.use(strategy)
       
   return {
       authenticate: () => passport.authenticate('jwt', {session: false})
   }
}


