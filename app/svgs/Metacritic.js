import React from 'react';

const innerHTML = `
<metadata id="metadata4524">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
        <dc:title/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs id="defs4522">
    <linearGradient inkscape:collect="always" id="linearGradient910">
      <stop style="stop-color:#3c638a;stop-opacity:1" offset="0" id="stop906"/>
      <stop id="stop857" offset="0.45437196" style="stop-color:#003366;stop-opacity:1"/>
      <stop style="stop-color:#00264b;stop-opacity:1" offset="1" id="stop908"/>
    </linearGradient>
    <linearGradient inkscape:collect="always" id="linearGradient4552">
      <stop style="stop-color:#ffd739;stop-opacity:1;" offset="0" id="stop4548"/>
      <stop id="stop862" offset="0.49206755" style="stop-color:#f1c204;stop-opacity:1"/>
      <stop style="stop-color:#c49d00;stop-opacity:1" offset="1" id="stop4550"/>
    </linearGradient>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4552" id="linearGradient4554" x1="-107.5547" y1="-34.348618" x2="-24.387714" y2="48.818363" gradientUnits="userSpaceOnUse" gradientTransform="translate(124.65509,51.960954)"/>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient910" id="linearGradient912" x1="23.37508" y1="22.186954" x2="95.517799" y2="94.329674" gradientUnits="userSpaceOnUse"/>
  </defs>
  <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1680" inkscape:window-height="1027" id="namedview4520" showgrid="false" inkscape:zoom="6.2511687" inkscape:cx="48.611599" inkscape:cy="63.293974" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer2"/>
  <g inkscape:groupmode="layer" id="layer2" inkscape:label="vector" style="display:inline">
    <circle style="opacity:1;fill:url(#linearGradient4554);fill-opacity:1;stroke:none;stroke-width:0.124;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0" id="path4528" cy="59" cx="59" r="59"/>
    <circle style="opacity:1;fill:#003366;fill-opacity:1;stroke:url(#linearGradient912);stroke-width:3.84905648;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="path835" cx="59" cy="59" r="49.07547"/>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:13.99656773px;line-height:21.86963844px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';letter-spacing:-0.02624355px;word-spacing:0px;display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.87478548px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" x="-38.255219" y="104.57529" id="text1516" transform="matrix(0.65147301,-0.65147301,0.7674915,0.7674915,0,0)"><tspan sodipodi:role="line" id="tspan1514" x="-38.255219" y="104.57529" style="fill:#ffffff;fill-opacity:1;stroke-width:0.87478548px">metacritic</tspan></text>
    <path style="display:inline;opacity:1;fill:#fffff5;fill-opacity:1;stroke:none;stroke-width:0.42215329;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 46,37 C 34.538168,31.379754 22.640377,45.008915 25.5,56.5 l -5,-4.5 -9,9 34,34 L 56,84.5 36.5,65 C 28.014787,56.514787 37.515748,46.015748 46,54.5 L 66,74.5 76.5,64 57,44.5 C 48.513064,36.013064 58.016951,25.516951 66.5,34 L 86.5,54 97,43.5 73,19.5 C 60.302662,6.8026621 40.891805,23.280685 46,37 Z" id="path1518" inkscape:connector-curvature="0" sodipodi:nodetypes="cccccccccccccccc"/>
  </g>
`;

const MetaCritic = () => (
  <svg
    version="1.1"
    id="svg4518"
    viewBox="0 0 118 118"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: innerHTML }}
  ></svg>
);

export default MetaCritic;
