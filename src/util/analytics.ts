import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(process.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX');
};

export const sendPageView = (pathname: string) => {
  ReactGA.send({ hitType: 'pageview', page: pathname });
};

export const sendEvent = (category: string, action: string, label: string, params?: any) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
