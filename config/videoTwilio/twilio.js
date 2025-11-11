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

