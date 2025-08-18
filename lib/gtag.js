export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export function event(action, params={}){if(!GA_ID)return;if(typeof window!=='undefined'&&window.gtag){window.gtag('event',action,params);}}
