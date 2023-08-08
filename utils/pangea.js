import axios from 'axios'

const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_PANGEA_TOKEN}`,
  'Content-Type': 'application/json'
}

export const createAudit = (messageOld, messageRedacted) => {
  return axios.post(
    'https://audit.aws.us.pangea.cloud/v1/log',
    {
      config_id: process.env.NEXT_PUBLIC_PANGEA_AUDIT_CONFIG_ID,
      event: {
        message: messageRedacted,
        new: messageRedacted,
        old: messageOld,
      },
      verbose: false
    },
    { headers }
  );
}

export const getAudits = () => {
  return axios.post(
    'https://audit.aws.us.pangea.cloud/v1/search',
    {
      config_id: process.env.NEXT_PUBLIC_PANGEA_AUDIT_CONFIG_ID,
    },
    { headers }
  );
}

export const redact = (text) => {
  return axios.post(
    'https://redact.aws.us.pangea.cloud/v1/redact',
    { text },
    { headers }
  )
} 

