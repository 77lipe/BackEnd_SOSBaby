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
  if(!TWILIO_ACCOUNT_SID || !TWILIO_API_KEY_SID || !TWILIO_API_KEY_SECRET){
    return console.error(error);
  }else{

    const token = new AccessToken(
      TWILIO_ACCOUNT_SID,
      TWILIO_API_KEY_SID,
      TWILIO_API_KEY_SECRET,
      {user}
    )

    const videoGrant = new VideoGrant({room})
    token.addGrant(videoGrant)

    return token.toJwt
  }
}