import { useEffect, useState } from 'react';
import { client } from '@/creative-cronies/lib/client';
import { groq } from 'next-sanity';

export const useFounders = () => {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFounders = async () => {
      try {
        const query = groq`*[_type == 'founders']{name, _id, title, "imageUrl": image.asset->url, description}`;
        const data = await client.fetch(query);
        setFounders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchFounders();
  }, []);

  return { founders, loading };
};
