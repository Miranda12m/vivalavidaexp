import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from 'react-bootstrap';

function InstagramEmbed() {
  const [instaData, setInstaData] = useState([]);

  async function getInstaFeed() {
    const token = 'IGQWRQTENSc2tBbm94YUE1M0dHMEUxZAkJzUnduenBhLVNXaTZAQdFQ4UG9rT1NTSVlHNlVCLWpKWExVd0lkNkxtcFNvSGx3V3VsQUVyYXRvY0VLUFU1ZA3RXcVhldDctSXV3RXlad2hCVlprT3V3eHNUb2szYUU4MFkZD';
    const fields = "caption,media_url,media_type,permalink,timestamp";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
     
    try {
      const { data } = await axios.get(url);
      setInstaData(data.data); // Assuming the media data is in the 'data' property
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
    }
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <>
    <Container>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Instagram Gallery</h2>
      <div className="row">
        {instaData.slice(0, 9).map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              {item.media_type === 'VIDEO' ? (
                <video className="card-img-top" controls>
                  <source src={item.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img className="card-img-top" src={item.media_url} alt={item.caption} />
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
    </>
  );
}

export default InstagramEmbed;

