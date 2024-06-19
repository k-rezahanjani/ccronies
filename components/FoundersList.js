import React from 'react';
import { useFounders } from '../app/hooks/useFounders';
import Card from '@/components/Card';

const FoundersList = () => {
  const { founders, loading } = useFounders();

  if (loading) {
    return <h2 className="animate-bounce text-3xl">Loading...</h2>;
  }

  return (
    <div className="flex flex-row justify-between gap-4 md:flex-col md:items-center">
      {loading && <h3 className='animate-bounce text-3xl'>Loading...</h3>}
      {founders.map((founder) => (
        <Card
          key={founder._id}
          image={founder.imageUrl}
          name={founder.name}
          title={founder.title}
          description={founder.description}
        />
      ))}
    </div>
  );
};

export default FoundersList;
