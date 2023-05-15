import axiosInstance from '../../config/axios.config';
import UrlLibrary from '../../libraries/urls.library';

function convertImageApiToImageGame(imageApi) {
  return {
    id: imageApi.fields?.image?.uuid,
    url: imageApi.fields?.image?.url,
    name: imageApi.fields?.image?.title,
  };
}

export default function GetImagesToPlay() {
  return axiosInstance.get(UrlLibrary.imageUrl)
    .then((response) => {
      if (response.data?.entries) {
        return response.data.entries.map(convertImageApiToImageGame);
      }

      return [];
    });
}
