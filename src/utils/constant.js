export const LOGO_URL ="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGO="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png"

export const API_KEY={
method: 'GET',
headers:{ 
  Authorization:'Bearer'+ process.env.REACT_APP_TMDB_KEY,
  accept: 'application/json'}
};

export const POSTERURL="https://image.tmdb.org/t/p/w500";


export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg";


export const SUPPORTED_LANGUAGE=[{identifer:"en",name:"English"},{identifer:"hindi",name:"Hindi"},{identifer:"spanish",name:"Spanish"}]

