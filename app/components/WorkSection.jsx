'use client';

import React, { useEffect, useState } from 'react';
import Subnavbar from './Subnavbar';
import WorkCard from './WorkCard';
import { worksData } from '@/public/constants';
import { LayoutGroup, motion } from 'framer-motion';


const WorkSection = () => {
    const [label, setLabel] = useState('all');
    const [workData, setWorkData] = useState(worksData);

    useEffect(() => {
        let filterWorkData = worksData.filter((data) =>
            data.categories.includes(label)
        );
        setWorkData(filterWorkData);
    }, [label]);

    return (
        <div>
            <section className='my-5 flex items-center justify-center '>
                <Subnavbar setLabel={setLabel} label={label} />
            </section>


            <motion.div layout className='flex items-start justify-center flex-wrap gap-4'>
                <LayoutGroup>
                    {workData.map((data) => (
                        <WorkCard
                            id={data.id}
                            key={data.id}
                            heading={data.heading}
                            desc={data.desc}
                            imageUrl={data.imageUrl}
                            clubs={data.clubs}
                            categories={data.categories.slice(1)}
                        />
                    ))}
                </LayoutGroup>
            </motion.div>
        </div>
    );
};

export default WorkSection;
