import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function InstagramEmbed() {
  const [instaData, setInstaData] = useState([]);

  async function getInstaFeed() {
    const token = 'token';
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
  const trimCaption = (caption) => {
    return caption.length > 70 ? `${caption.substring(0, 70)}...` : caption;
  };
  return (
    <>
    <style>
      {`
        .mdbs-card {
          position: relative;
          overflow: hidden;
          border-radius: 2%;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
        }

        .mdbs-card:hover::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 33%;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.7));
          transition: opacity 0.3s ease, z-index 0.5s ease;
        }

        .caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px;
          color: #fff;
          opacity: 0; /* Inicialmente, el texto del caption no es visible */
          transition: opacity 0.3s ease, z-index 0.5s ease; /* Añadir transición para suavizar la aparición/desaparición */
          z-index: -1; /* Posicionar por debajo del sombreado inicialmente */
        }

        .mdbs-card:hover .caption-overlay {
          opacity: 1; /* Hacer visible el texto del caption al hacer hover */
          z-index: 1; /* Posicionar por encima del sombreado */
        }

        .gallery-item {
          cursor: pointer;
          text-decoration: none; /* Eliminar subrayado del enlace */
          color: inherit; /* Heredar color del texto del padre */
        }
      `}
    </style>
        <br></br><br></br><br></br>
    <Container>
      <div className="container mt-4" >
        <h1 className="text-center mb-4" data-aos="fade-right"><strong>Instagram Gallery</strong></h1>
        <br></br><br></br>
        <div className="row">
          {instaData.slice(0, 9).map((item) => (
            <div key={item.id} className="col-md-4 mb-4" data-aos="fade-up">
              <a href={item.permalink} target="_blank" rel="noopener noreferrer" className="gallery-item">
                <div className="card mdb-card mdbs-card">
                  {item.media_type === 'VIDEO' ? (
                    <video autoPlay muted controls>
                      <source src={item.media_url} type="video/mp4" style={{ borderRadius: "2%" }} />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={item.media_url} alt={item.caption} style={{ borderRadius: "2%" }} />
                  )}
                  <div className="caption-overlay">
                    {trimCaption(item.caption)}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </>
  );
}

export default InstagramEmbed;

