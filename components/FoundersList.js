import React from 'react';
import data from "/data/founders.json"
import Card from '@/components/Card';

const FoundersList = () => {
  return (
    <div className="flex flex-row justify-between gap-4 md:flex-col md:items-center">
      {data.founders.map((founder) => (
        <Card
          key={founder._id}
          image={founder.imageURL}
          name={founder.name}
          title={founder.title}
          description={founder.description}
        />
      ))}
    </div>
  );
};

export default FoundersList;
