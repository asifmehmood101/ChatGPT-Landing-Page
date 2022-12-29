import React from 'react';
import { UseCasesHero } from '../components/UseCasesHero';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { DataArray as StaticDataArray } from '../Utility/DummyData';
import Pagination from 'rc-pagination';
import { UseCase } from '../components/UseCase';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const UseCases = () => {
  const [perPage, setPerPage] = React.useState(6);
  const [size, setSize] = React.useState(perPage);
  const [currentPage, setCurrentpage] = React.useState(1);

  const PerPageChange = (value) => {
    setSize(value);

    const newPerPage = Math.ceil(StaticDataArray.length / value);

    if (currentPage > newPerPage) {
      setCurrentpage(newPerPage);
    }
  };

  const sliceDataPerPage = (current, pageSize) => {
    //  currently using Mock Data
    return StaticDataArray.slice((current - 1) * pageSize, current * pageSize);
  };

  const paginationChanged = (page, pageSize) => {
    setCurrentpage(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <button className='rc-pagination-item-link'>
          <FiChevronLeft size={16} />
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button className='rc-pagination-item-link'>
          <FiChevronRight size={16} />
        </button>
      );
    }
    return originalElement;
  };

  return (
    <div>
      <UseCasesHero />
      <Feature
        heading='List of use-Cases'
        subtitle='ChatGPT is a cutting-edge natural language processing (NLP) model
        developed by OpenAI.'
      />
      <div className='showCase-container'>
        {sliceDataPerPage(currentPage, size).map(
          ({ id, title, subtitle, Link, image, videoSrc }) => {
            return (
              <UseCase
                id={id}
                title={title}
                subtitle={subtitle}
                Link={Link}
                image={image}
                videoSrc={videoSrc}
              />
            );
          },
        )}
        <Pagination
          onChange={paginationChanged}
          current={currentPage}
          pageSize={size}
          total={StaticDataArray.length}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        />
      </div>

      <Footer />
    </div>
  );
};
