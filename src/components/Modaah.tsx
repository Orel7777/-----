import styled from 'styled-components';
import { GrAchievement, GrDeploy } from "react-icons/gr";
import Form from './Form';
import { useState } from 'react';
import Button from './Button';

const Modaah = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <StyledModaah className="py-16" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          שירותי הקליניקה
        </h2>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="video-card">
            <div className="video-container">
              <video
                className="service-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video_7.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">עיסוי מקצועי</h3>
              <p>מגוון טיפולי עיסוי מותאמים אישית</p>
            </div>
          </div>

          <div className="video-card">
            <div className="video-container">
              <video
                className="service-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video_2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">עיסוי הריון</h3>
              <p>טיפול עדין ומותאם במיוחד</p>
            </div>
          </div>

          <div className="video-card">
            <div className="video-container">
              <video
                className="service-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video_10.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-overlay">
              <h3 className="text-xl font-semibold">פיסול פנים טבעי</h3>
              <p>מיניליפט ויוגה פייס</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-white/10 rounded-xl p-8 shadow-sm hover:bg-white/20 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-white">עיסויים</h3>
              <div className="icon-container">
                <GrDeploy className="achievement-icon" />
              </div>
            </div>
            <ul className="space-y-3 text-white/90">
              <li>• עיסוי רקמות-עמוק</li>
              <li>• עיסוי שוודי/משולב</li>
              <li>• עיסוי תאילנדי</li>
              <li>• עיסוי הריון</li>
              <li>• עיסוי רפואי</li>
            </ul>
          </div>

          <div className="backdrop-blur-sm bg-white/10 rounded-xl p-8 shadow-sm hover:bg-white/20 transition-all relative">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-white">פיסול פנים טבעי</h3>
              <div className="icon-container">
                <GrAchievement className="achievement-icon" />
              </div>
            </div>
            <ul className="space-y-3 text-white/90">
              <li>• עיסוי פנים מיניליפט</li>
              <li>• יוגה פייס</li>
              <li>• טיפול פנים הוליסטי</li>
              <li>• עיסוי פנים מפנק</li>
              <li>• טיפול זוהר טבעי</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button onClick={handleOpenForm}>לתיאום תור</Button>
        </div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledModaah>
  );
};

const StyledModaah = styled.section`
  .video-card {
    position: relative;
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    padding: 8px;
    background: rgba(255, 255, 255, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);

      .service-video {
        transform: scale(1.03);
      }

      .text-overlay {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.3));
        padding-bottom: 2rem;
      }
    }
  }

  .video-container {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;

    .service-video {
      width: 95%;
      height: 95%;
      margin: 2.5%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
      border-radius: 8px;
    }
  }

  .text-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
    color: white;
    transition: all 0.3s ease;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
      opacity: 0.95;
    }
  }

  .icon-container {
    display: inline-flex;
    animation: floatAndRotate 3s ease-in-out infinite;
  }

  .achievement-icon {
    width: 24px;
    height: 24px;
    color: white;
    filter: invert(1);
  }

  @keyframes floatAndRotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .video-card {
      height: 300px;
    }

    .text-overlay {
      padding: 1.5rem;
      
      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export default Modaah;

