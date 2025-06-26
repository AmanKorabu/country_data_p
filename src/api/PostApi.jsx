import axios from "axios"
const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

export const getCountryData=()=>{
    return api.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,tld,currencies,languages,borders");
};
export const getCountryIndData=(name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,capital,flags,population,region,subregion,tld,currencies,languages,borders`);
};