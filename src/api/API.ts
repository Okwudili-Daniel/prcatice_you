import axios from "axios";

const url: string = "http://localhost:3000";


export const copyToRight = async (data: any) => {
  try {
    return axios.post(`${url}/data`, data);
  } catch (error) {
    console.log(error);
  }
};

export const copyToRead = async () => {
  try {
    return axios.get(`${url}/reading`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};


export const getVideo =async (search: string) =>{
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: search,
    part: 'snippet,id',
    regionCode: 'NG',
    maxResults: '10',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '516ef8bb4cmsh93cc012cca22a36p13ed77jsn37375adccc35',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	// const response = await axios.request(options);
	// localStorage.setItem("youtube-v31", JSON.stringify(response.data));

  const responseData = await axios.request(options);

  let dataSearched = `${search}`;

  const response = {
    data: {
      [dataSearched]: responseData.data.items,
    },
  };

  console.log("done!", responseData.data.items);

    copyToRight(response);
    
	return response.data
} catch (error) {
	console.error(error);
}
}