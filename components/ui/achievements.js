import React from 'react'
import { Card, Carousel } from './apple-cards-carousel';

export default function Achievements({data}) {

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
      ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-primary dark:text-neutral-200">
                Achievements
            </h2>
            <Carousel items={cards} />
        </div>
    )
}

