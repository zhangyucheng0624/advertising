import ajax from './ajax.js'
import sha1 from 'sha1'
const user = 'http://userapisit.topmediacloud.net/vehUser/v1';
const equipment = 'http://busiapisit.topmediacloud.net/vehad/v1';
export const reqverifyCode = () => ajax(`${user}/verifyCode`);
export const reqLogin = (userName,password,code) => ajax(`${user}/login?userName=${userName}&password=${sha1(password)}&code=${code}`,{},'POST');
export const reqPersonage = () => ajax(`${user}/amUserInfo`);
export const reqAdMats = () => ajax(`${equipment}/adMats?token=${JSON.parse(localStorage.token)}`);
export const reqVehStatistics = () => ajax(`${equipment}/vehStatistics?token=${JSON.parse(localStorage.token)}`);
export const reqPlayStatsInfo = () => ajax(`${equipment}/playStatsInfo?token=${JSON.parse(localStorage.token)}`);
export const reqDistVehPercents = () => ajax(`${equipment}/distVehPercents?token=${JSON.parse(localStorage.token)}`);
export const reqAccountDet = () => ajax(`${equipment}/accountDet?token=${JSON.parse(localStorage.token)}`);
export const reqvehHeatDistr = () => ajax(`${equipment}/vehHeatDistr?token=${JSON.parse(localStorage.token)}`);
