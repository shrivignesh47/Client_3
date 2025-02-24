import React, { useEffect, useState } from 'react';
import '../Styles/Updates.css';
import ShinyText from '../components/ShinyText/ShinyText';

export default function Updates() {
  const [updateText, setUpdateText] = useState('');

  // Function to fetch data from Google Sheets
  const fetchData = async () => {
    const sheetId = '1b7web2lBSweoh3SyHrUeLuxDgbgJ0lzb-LyRskM2ojk'; // Your Google Sheets ID
    const range = 'Updates!A1'; // The range you want to fetch from

    // Google Sheets API URL with your API key
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=AIzaSyAAqb3DVZpY8K0kRu65iqPjPUW61n71Jto`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Google Sheets Data:', data); // Log the raw data for debugging

      // Check if data is available and update state
      if (data.values && data.values[0] && data.values[0][0]) {
        setUpdateText(data.values[0][0]); // Assuming the text is in the first cell (A1)
      } else {
        console.error('No data found in the specified range.');
      }
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
    }
  };

  // Fetch data when the component is mounted
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Scrolling Update Text with customized background color */}
      <div className="bg-[rgb(49,16,2)] text-white text-sm py-0 px-4 w-full">
        <div className="overflow-hidden whitespace-nowrap">
          <p className="animate-marquee inline-block">
            <ShinyText text={updateText ? updateText : 'Loading updates...'} disabled={false} speed={3} className="custom-class fabril-fatface text-2xl" />
          </p>
        </div>
      </div>
    </div>
  );
}
