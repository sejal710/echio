import React,{useState,useEffect} from 'react';
import Navbar from '../container/Navbar';
import styles from '../css/home.module.css'
import RangeSlider from '../container/RangeSlider';
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

  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
  
    const apiUrl = `https://echio.onrender.com/data`;
  
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const filterData = () => {
    if (!data) {
      setFilteredData(null);
      return;
    }

    const filtered = data.filter((item) => {
      // Apply your filter conditions here based on the selected filters
      const popularityFilters = Object.keys(filters.popularity);
      const campaignPreferenceFilters = Object.keys(filters.campaignPreference);
      const platformFilters = Object.keys(filters.platform);
      const categoriesFilters = Object.keys(filters.categories);

      // Check if the item matches the selected filters
      const isPopularityMatch = popularityFilters.some(
        (filter) => filters.popularity[filter] && item.popularity === filter
      );
      const isCampaignPreferenceMatch = campaignPreferenceFilters.some(
        (filter) => filters.campaignPreference[filter] && item.campaignPreference === filter
      );
      const isPlatformMatch = platformFilters.some(
        (filter) => filters.platform[filter] && item.platform === filter
      );
      const isCategoriesMatch = categoriesFilters.some(
        (filter) => filters.categories[filter] && item.categories.includes(filter)
      );

      // Return true if all filters match, otherwise false
      return (
        isPopularityMatch &&
        isCampaignPreferenceMatch &&
        isPlatformMatch &&
        isCategoriesMatch
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after applying filters
  };


  const handleCheckboxChange = (category, filter) => {
    console.log(filter)
  };
  return <div>
    <Navbar />
    <div className={styles.home}>
      <div className={styles.filter}>

    <div className={styles.popularityDiv}>
      <div className={styles.title}>POPULARITY</div>
      <div className={styles.checkboxes}>
        <label>
          <input type={styles.checkboxes}  type='checkbox'
          checked={filters.popularity.nano}
          onChange={() => handleCheckboxChange('Popularity', 'nano')} />
          Nano
        </label>
        <label>
          <input type={styles.checkboxes}  type='checkbox' 
          checked={filters.popularity.micro}
          onChange={() => handleCheckboxChange('Popularity', 'micro')}/>
          Micro
        </label>
        <label>
          <input type={styles.checkboxes} type='checkbox'
          checked={filters.popularity.micro}
          onChange={() => handleCheckboxChange('Popularity', 'macro')}/>
          Macro
        </label>
        <label>
          <input type={styles.checkboxes}  type='checkbox' 
          checked={filters.popularity.custom}
          onChange={() => handleCheckboxChange('Popularity', 'custom')}/>
          Custom
        </label>
      </div>
    </div>

    <RangeSlider />

    <div className={styles.popularityDiv}>
      <div className={styles.title}>CAMPAIGN PRERFRENCE</div>
      <div className={styles.checkboxes}>
        <label>
          <input type={styles.checkboxes}  type='checkbox'
          checked={filters.campaignPreference.barter}
          onChange={() => handleCheckboxChange('Campaign Preference', 'barter')}
           />
          Barter
        </label>
        <label>
          <input type={styles.checkboxes}  type='checkbox' 
          checked={filters.campaignPreference.auto}
          onChange={() => handleCheckboxChange('Campaign Preference', 'auto')}
          />
          Auto
        </label>
      </div>
    </div>

    <div className={styles.popularityDiv}>
      <div className={styles.title}>PLATFORM</div>
      <div className={styles.checkboxes}>
        <label>
          <input type={styles.checkboxes}  type='checkbox' />
          Instagram
        </label>
        <label>
          <input type={styles.checkboxes}  type='checkbox' />
          Youtube
        </label>
      </div>
    </div>

    <div className={styles.popularityDiv}>
      <div className={styles.title}>CATEGORIES</div>
      <div className={styles.checkboxes}>
        <label>
          <input type={styles.checkboxes}  type='checkbox' />
          Auto & vehical
        </label>
        <label>
          <input type={styles.checkboxes}  type='checkbox' />
          Animation
        </label>
        <label>
          <input type={styles.checkboxes} type='checkbox'/>
          Agriculture & Alied Sector 
        </label>
        <label>
          <input type={styles.checkboxes}  type='checkbox' />
          Beauty
        </label>
        <label>
          <input type={styles.checkboxes}  type='checkbox' />
          Blogs & Travel
        </label>
      </div>
    </div>

      </div>
      <div className={styles.data}>
      {
          data && data.map((el,i) => <InfoCard data={el} key={i}/> )
        }
      </div>
     </div>
  </div>;
};

export default HomePage;



