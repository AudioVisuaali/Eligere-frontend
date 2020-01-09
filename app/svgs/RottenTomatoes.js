import React from 'react';

const innerHTML = `
<metadata id="metadata3396">
<rdf:RDF>
  <cc:Work rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
    <dc:title />
  </cc:Work>
</rdf:RDF>
</metadata>
<g id="layer1" fill="#f93208">
<path
  id="path3412"
  d="m20.154 40.829c-28.149 27.622-13.657 61.011-5.734 71.931 35.254 41.954 92.792 25.339 111.89-5.9071 4.7608-8.2027 22.554-53.467-23.976-78.009z"
/>
<path
  id="path3471"
  d="m39.613 39.265 4.7778-8.8607 28.406-5.0384 11.119 9.2082z"
/>
</g>
<g id="layer2">
<path
  id="path3437"
  d="m39.436 8.5696 8.9682-5.2826 6.7569 15.479c3.7925-6.3226 13.79-16.316 24.939-4.6684-4.7281 1.2636-7.5161 3.8553-7.7397 8.4768 15.145-4.1697 31.343 3.2127 33.539 9.0911-10.951-4.314-27.695 10.377-41.771 2.334 0.009 15.045-12.617 16.636-19.902 17.076 2.077-4.996 5.591-9.994 1.474-14.987-7.618 8.171-13.874 10.668-33.17 4.668 4.876-1.679 14.843-11.39 24.448-11.425-6.775-2.467-12.29-2.087-17.814-1.475 2.917-3.961 12.149-15.197 28.625-8.476z"
  fill="#02902e"
/>
</g>
`;

const RottenTomatoes = () => (
  <svg
    id="svg3390"
    viewBox="0 0 138.75 141.25"
    version="1.1"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: innerHTML }}
  ></svg>
);

export default RottenTomatoes;
