import { useLoaderData } from 'react-router-dom';

function useCustomLoaderData() {
  const data = useLoaderData();
  return data;
}

export default useCustomLoaderData;