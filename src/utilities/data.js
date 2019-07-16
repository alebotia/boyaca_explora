import { data } from '../info/boyaca'

export const getMunicipalityByDaneCode = (filterId) => {
  try {
  	return data.find(
        t => t.dane_code === parseInt(filterId, 10)
      ); 
  }
  catch(err){
    return undefined;
  }
}

export const firstLetterUpper = (text) => {	
	let temp = text.toString().toLowerCase();	
	return temp.charAt(0).toUpperCase() + temp.slice(1);
}