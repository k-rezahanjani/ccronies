import React from 'react';
// import data from "/data/founders.json"
import Card from '@/components/Card';
import { useLocale, useTranslations } from 'next-intl';

const FoundersList = () => {
  const t = useTranslations('About_Us');

  const founders = t.raw('founders');

  const locale = useLocale()
  const isRight = locale === 'fa';

  return (
    <div className={`flex ${isRight ? 'justify-row-reverse text-right flex-row-reverse' : 'justify-row text-left'} justify-between gap-4 md:flex-col md:items-center`}>
      {founders.map((founder) => (
        <Card
          key={founder.id}
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
