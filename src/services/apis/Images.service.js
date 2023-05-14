import axiosInstance from '../../config/axios.config';
import UrlLibrary from '../../libraries/urls.library';

function convertImageApiToImageGame(imageApi) {
  return {
    id: imageApi,
    name: imageApi,
    url: imageApi,
  };
}

export default function GetImagesToPlay() {
  return axiosInstance.get(UrlLibrary.imageUrl).then((response) => {
    console.log(response);

    return response.data.map(convertImageApiToImageGame);
  });
}
