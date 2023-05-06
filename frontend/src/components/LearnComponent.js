import React from 'react';

// Import Quicksand font
import '../fonts/quicksand.css';

const LearnComponent = () => {
  return (

      <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '40%', minHeight: '60vh', textAlign: 'center', backgroundColor: '#89CBF0', borderRadius: 18, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', color: '#FFFFFF', fontFamily: 'Quicksand, sans-serif' }}>
          <h2>What do you want to learn about?</h2>
          <form style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40%', margin: '10px auto' }}>
              <input type="text" placeholder="Enter your answer" style={{ width: '70%', borderRadius: 11, height: '60px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center', fontFamily: 'Quicksand, sans-serif', border: 'none', outline: 'none' }} />
            </div>
            <button type="submit" style={{ backgroundColor: '#CEE1EC', color: '#FFFFFF', width: '20%', height: '40px', border: 'none', borderRadius: 11, fontFamily: 'Quicksand, sans-serif' }}>
              Submit
            </button>
          </form>
          <h3 style={{ marginTop: '50px' }}>Choose difficulty:</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 20%', marginTop: '10px' }}>
            <button style={{ backgroundColor: '#CEE1EC', color: '#FFFFFF', width: '30%', height: '60px', border: 'none', borderRadius: 11, fontFamily: 'Quicksand, sans-serif' }}>Easy</button>
            <button style={{ backgroundColor: '#CEE1EC', color: '#FFFFFF', width: '30%', height: '60px', border: 'none', borderRadius: 11, fontFamily: 'Quicksand, sans-serif' }}>Medium</button>
            <button style={{ backgroundColor: '#CEE1EC', color: '#FFFFFF', width: '30%', height: '60px', border: 'none', borderRadius: 11, fontFamily: 'Quicksand, sans-serif' }}>Hard</button>
          </div>
        </div>
      </div>

  );
};

export default LearnComponent;
