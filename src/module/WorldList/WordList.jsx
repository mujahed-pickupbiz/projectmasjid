import React, { useEffect, useState } from 'react';
import wordList from '../../module/WorldList/worddata.json';

const WordList = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const combinedData = [
      { title: 'Top destinations', data: wordList.hotelList1 },
      { title: 'Top countries & regions', data: wordList.hotelList2 },
      { title: 'Support & FAQs', data: wordList.usefulLinks },
      { title: 'For suppliers, affiliates and the media', data: wordList.businessOpportunities },
      { title: 'Policies', data: wordList.legalInfo },
      { title: 'Other information', data: wordList.companyInfo }
    ];
    setAllItems(combinedData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  text-sm ">
      {allItems.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4 ">
          <div className="font-semibold text-lg">{category.title}</div>
          <div className="  ">
            <table className="min-w-full">
    
              <tbody className='text-blue-400 font-bold'>
                {category.data.map((item, index) => (
                  <a key={index} href="">
                 {/* <td className="py-2 px-4"></td> */}
                 <a className='block p-2 hover:underline ' style={{fontFamily:"-moz-initial"}} href="">{item}</a>
                 </a>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordList;
