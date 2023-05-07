import { useState } from "react";
import '../fonts/quicksand.css';

const WebsitePage = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [liked, setLiked] = useState(null);

  const handleYesClick = () => {
    setLiked(true);
    setShowOverlay(true);
  };

  const handleNoClick = () => {
    setLiked(false);
    setShowOverlay(true);
  };

  return (
    <>
    <div style={{ width: '100%', height: '70%', flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Quicksand, sans-serif' }}>
      <div style={{ width: '80%', height: '70%', backgroundColor: '#89CBF0', border: 'none', overflow: 'hidden', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '18px' }}>
        <h2 style={{ backgroundColor: '#89CBF0', color: '#FFFFFF', borderRadius: '18px 18px 0 0', padding: '10px 20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>Retrieve Name</h2>
        <div style={{ display: 'flex', height: '80%' }}>
          <div style={{ width: '70%', overflowY: 'auto', padding: '20px', paddingRight: '10px', borderRight: '1px solid #CCCCCC' }}>
            {props.article}
          </div>
          <div style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingTop: "50px" }}>
            <div style={{ borderLeft: '1px solid #7F9B9E' }}></div> {/* Vertical grey line */}
            <h3 style={{ color: '#FFFFFF' }}>Do you like this text?</h3>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '50px', width: '60%', height: "40%" }}>
              <button onClick={handleYesClick} style={{ width: '70%', height: "30%", fontSize: '1.2rem', borderRadius: '10px', border: 'none' }}>Yes</button>
              <button onClick={handleNoClick} style={{ width: '70%', height: "30%", fontSize: '1.2rem', borderRadius: '10px', border: 'none' }}>No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {showOverlay && (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '30%', height: '20%', backgroundColor: '#89CBF0', border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {liked ? (
        <p style={{ color: '#FFFFFF', textAlign: 'center', width: '80%', fontFamily: 'Quicksand' }}>Do you want to have a quiz based on it?</p>
      ) : (
        <p style={{ color: '#FFFFFF', textAlign: 'center', width: '80%', fontFamily: 'Quicksand' }}>You did not like the text. We'll improve it!</p>
      )}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
        <button onClick={() => {
          setShowOverlay(false)
          props.setArticleDone(true)
          }} style={{ width: '20%', height: "30px", fontSize: '1.2rem', borderRadius: '10px', border: 'none', backgroundColor: '#CEE1EC', marginRight: '10px', fontFamily: 'Quicksand' }}>Yes</button>
        <button onClick={() => {
          setShowOverlay(false)
          props.setArticleDone(true)
          }} style={{ width: '20%', height: "30px", fontSize: '1.2rem', borderRadius: '10px', border: 'none', backgroundColor: '#CEE1EC', marginLeft: '10px', fontFamily: 'Quicksand' }}>No</button>
      </div>
    </div>
  </div>
)}






                </>



  );
};

export default WebsitePage;
