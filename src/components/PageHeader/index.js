import React from 'react';
import './index.scss';

import { AiTwotonePrinter } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";

const PageHeader = (props) => {
  return (
    <section className='SectionHeader'>
        <h2>{props.title}</h2>

        {props.headerAttributttes ? (
            <div className='HeaderAttributes'>
                <button>
                    <HiDownload className='BtnIcon' />
                    Download
                </button>
                <button>
                    <AiTwotonePrinter className='BtnIcon' />
                    Print Reservation list
                </button>
            </div>
        ) : null}
        
    </section>
  );
}

export default PageHeader;
