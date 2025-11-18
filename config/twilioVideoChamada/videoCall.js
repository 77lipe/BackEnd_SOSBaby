import dotenv from "dotenv"
import twilio from "twilio"

dotenv.config()

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_API_KEY_SID,
  TWILIO_API_KEY_SECRET
} = process.env

const { jwt } = twilio
const { AccessToken } = jwt
const { VideoGrant } = AccessToken

export function generateCallToken(user, room){
  //console.log(user);
  if(!TWILIO_ACCOUNT_SID || !TWILIO_API_KEY_SID || !TWILIO_API_KEY_SECRET){
    return console.error(error);
  }else{

    const identity = `${user.id_Usuario}|${user.nome_Usuario}` 

    const token = new AccessToken(
      TWILIO_ACCOUNT_SID,
      TWILIO_API_KEY_SID,
      TWILIO_API_KEY_SECRET,
      {identity}
    )

    const videoGrant = new VideoGrant({room})
    token.addGrant(videoGrant)

    return {
      token: token.toJwt(),
      indentity: identity,
      Room: room
    } 
  }
}