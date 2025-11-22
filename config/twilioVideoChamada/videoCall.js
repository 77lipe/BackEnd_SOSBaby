import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_API_KEY_SID,
  TWILIO_API_KEY_SECRET
} = process.env;

const { jwt } = twilio;
const { AccessToken } = jwt;
const { VideoGrant } = AccessToken;

export function generateCallToken(identity, room) {

  if (!TWILIO_ACCOUNT_SID || !TWILIO_API_KEY_SID || !TWILIO_API_KEY_SECRET){
    console.error("Erro: credenciais Twilio ausentes!");
    return null;
  }

  const token = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY_SID,
    TWILIO_API_KEY_SECRET,
    { identity }
  );

  const videoGrant = new VideoGrant({ room });
  token.addGrant(videoGrant);

  return {
    token: token.toJwt(),
    identity,
    room
  };
}
