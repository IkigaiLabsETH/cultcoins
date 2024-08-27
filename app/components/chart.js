import React from 'react';

const Chart = () => {
  return (
    <div>
      <style>
        {`
          #dexscreener-embed {
            position: relative;
            width: 100%;
            padding-bottom: 125%;
            border: 1px solid red; /* Temporary border for debugging */

          }
          @media(min-width: 1400px) {
            #dexscreener-embed {
              padding-bottom: 65%;
            }
          }
          #dexscreener-embed iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: 0;
          }
        `}
      </style>
      <div id="dexscreener-embed">
        <iframe 
          src="https://dexscreener.com/solana/Gn1gr15MH9uafz4WGQRjL2QxQ7v2eqZgXvjCTfL3JuBT?embed=1&theme=dark" 
          title="Dex Screener"
        ></iframe>
      </div>
    </div>
  );
};

export default Chart;