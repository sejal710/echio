// import React,{useState,useEffect} from 'react';
// import Navbar from '../container/Navbar';
// import styles from '../css/home.module.css'
// import RangeSlider from '../container/RangeSlider';
// import InfoCard from '../container/InfoCard';

// const HomePage = () => {

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://echio.onrender.com/data');
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   return <div>
//     <Navbar />
//     <div className={styles.home}>
//       <div className={styles.filter}>

//     <div className={styles.popularityDiv}>
//       <div className={styles.title}>POPULARITY</div>
//       <div className={styles.checkboxes}>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Nano
//         </label>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Micro
//         </label>
//         <label>
//           <input type={styles.checkboxes} type='checkbox'/>
//           Macro
//         </label>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Custom
//         </label>
//       </div>
//     </div>

//     <RangeSlider />

//     <div className={styles.popularityDiv}>
//       <div className={styles.title}>CAMPAIGN PRERFRENCE</div>
//       <div className={styles.checkboxes}>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Barter
//         </label>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Auto
//         </label>
//       </div>
//     </div>

//     <div className={styles.popularityDiv}>
//       <div className={styles.title}>PLATFORM</div>
//       <div className={styles.checkboxes}>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Instagram
//         </label>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Youtube
//         </label>
//       </div>
//     </div>

//     <div className={styles.popularityDiv}>
//       <div className={styles.title}>CATEGORIES</div>
//       <div className={styles.checkboxes}>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Auto & vehical
//         </label>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Animation
//         </label>
//         <label>
//           <input type={styles.checkboxes} type='checkbox'/>
//           Agriculture & Alied Sector 
//         </label>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Beauty
//         </label>
//         <label>
//           <input type={styles.checkboxes}  type='checkbox' />
//           Blogs & Travel
//         </label>
//       </div>
//     </div>

//       </div>
//       <div className={styles.data}>
//       {
//           data && data.map((el,i) => <InfoCard data={el} key={i}/> )
//         }
//       </div>
//      </div>
//   </div>;
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import Navbar from '../container/Navbar';
import styles from '../css/home.module.css';
import InfoCard from '../container/InfoCard';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState({
    popularity: {
      nano: false,
      micro: false,
      macro: false,
      custom: false,
    },
    campaignPreference: {
      barter: false,
      auto: false,
    },
    platform: {
      instagram: false,
      youtube: false,
    },
    categories: {
      autoVehical: false,
      animation: false,
      agriculture: false,
      beauty: false,
      blogsTravel: false,
    },
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    try {
      const filterQueryParams = Object.keys(filters).map((category) => {
        const categoryFilters = filters[category];
        const categoryFilterQueryParams = Object.keys(categoryFilters)
          .filter((key) => categoryFilters[key])
          .map((key) => `${key}=true`)
          .join('&');
        return `${category}=${categoryFilterQueryParams}`;
      });

      const apiUrl = `https://echio.onrender.com/data?${filterQueryParams.join('&')}`;

      const response = await fetch(apiUrl);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCheckboxChange = (category, filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [filter]: !prevFilters[category][filter],
      },
    }));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.filter}>
          <div className={styles.popularityDiv}>
            <div className={styles.title}>POPULARITY</div>
            <div className={styles.checkboxes}>
              <label>
                <input
                  type="checkbox"
                  checked={filters.popularity.nano}
                  onChange={() => handleCheckboxChange('popularity', 'nano')}
                />
                Nano
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.popularity.micro}
                  onChange={() => handleCheckboxChange('popularity', 'micro')}
                />
                Micro
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.popularity.macro}
                  onChange={() => handleCheckboxChange('popularity', 'macro')}
                />
                Macro
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.popularity.custom}
                  onChange={() => handleCheckboxChange('popularity', 'custom')}
                />
                Custom
              </label>
            </div>
          </div>

          <div className={styles.popularityDiv}>
            <div className={styles.title}>CAMPAIGN PREFERENCE</div>
            <div className={styles.checkboxes}>
              <label>
                <input
                  type="checkbox"
                  checked={filters.campaignPreference.barter}
                  onChange={() => handleCheckboxChange('campaignPreference', 'barter')}
                />
                Barter
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.campaignPreference.auto}
                  onChange={() => handleCheckboxChange('campaignPreference', 'auto')}
                />
                Auto
              </label>
            </div>
          </div>

          <div className={styles.popularityDiv}>
            <div className={styles.title}>PLATFORM</div>
            <div className={styles.checkboxes}>
              <label>
                <input
                  type="checkbox"
                  checked={filters.platform.instagram}
                  onChange={() => handleCheckboxChange('platform', 'instagram')}
                />
                Instagram
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.platform.youtube}
                  onChange={() => handleCheckboxChange('platform', 'youtube')}
                />
                Youtube
              </label>
            </div>
          </div>

          <div className={styles.popularityDiv}>
            <div className={styles.title}>CATEGORIES</div>
            <div className={styles.checkboxes}>
              <label>
                <input
                  type="checkbox"
                  checked={filters.categories.autoVehical}
                  onChange={() => handleCheckboxChange('categories', 'autoVehical')}
                />
                Auto & vehical
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.categories.animation}
                  onChange={() => handleCheckboxChange('categories', 'animation')}
                />
                Animation
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.categories.agriculture}
                  onChange={() => handleCheckboxChange('categories', 'agriculture')}
                />
                Agriculture & Alied Sector
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.categories.beauty}
                  onChange={() => handleCheckboxChange('categories', 'beauty')}
                />
                Beauty
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.categories.blogsTravel}
                  onChange={() => handleCheckboxChange('categories', 'blogsTravel')}
                />
                Blogs & Travel
              </label>
            </div>
          </div>
        </div>
        <div className={styles.data}>
          {
            !data && <h1>Loading......</h1>
          }
          {data &&
            data.map((el, i) => <InfoCard data={el} key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


