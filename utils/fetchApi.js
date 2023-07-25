import axios from 'axios'

export const baseUrl ='https://bayut.p.rapidapi.com'


  export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'aee3eae3eemsh088ef7eec58696ap10b202jsne6a3e8902193',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}