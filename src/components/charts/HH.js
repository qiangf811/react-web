// import React from "react";
// import {
//   G2,
//   Chart,
//   Geom,
//   Axis,
//   Tooltip,
//   Coord,
//   Label,
//   Legend,
//   View,
//   Guide,
//   Shape,
//   Facet,
//   Util
// } from "bizcharts";

// class Donutrose extends React.Component {
//   render() {
//     const data = [
//       {
//         year: "2001",
//         population: 41.8
//       },
//       {
//         year: "2002",
//         population: 38
//       },
//       {
//         year: "2003",
//         population: 33.7
//       },
//       {
//         year: "2004",
//         population: 30.7
//       },
//       {
//         year: "2005",
//         population: 25.8
//       },
//       {
//         year: "2006",
//         population: 31.7
//       },
//       {
//         year: "2007",
//         population: 33
//       },
//       {
//         year: "2008",
//         population: 46
//       },
//       {
//         year: "2009",
//         population: 38.3
//       },
//       {
//         year: "2010",
//         population: 28
//       },
//       {
//         year: "2011",
//         population: 42.5
//       },
//       {
//         year: "2012",
//         population: 30.3
//       }
//     ];

//     return (
//       <div>
//         <Chart
//           data={data}
//           height={300}
//           width={400}
//           background={{ fill: '#fff', fillOpacity: '0' }}
//           plotBackground={{ fill: '#fff', fillOpacity: '0' }}
//           padding={[0, 60, 0, 60]}
//         >
//           <Coord type="polar" innerRadius={0.2} />
//           <Tooltip />
//           <Legend
//             position="right"
//             offsetY={-window.innerHeight / 2 + 180}
//             offsetX={-160}
//           />
//           <Geom
//             type="interval"
//             color="year"
//             position="year*population"
//           />
//         </Chart>
//       </div>
//     );
//   }
// }

// export default Donutrose;

import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class Basiccolumn extends React.Component {
  render() {
    const data = [
      {
        year: "1951 年",
        sales: 38
      },
      {
        year: "1952 年",
        sales: 52
      },
      {
        year: "1956 年",
        sales: 41
      },
      {
        year: "1957 年",
        sales: 15
      },
      {
        year: "1958 年",
        sales: 48
      },
      {
        year: "1959 年",
        sales: 38
      },
      {
        year: "1960 年",
        sales: 38
      },
      {
        year: "1962 年",
        sales: 38
      }
    ];
    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <div>
        <Chart
          data={data}
                    height={300}
                    width={400}
                    background={{ fill: '#fff', fillOpacity: '0' }}
                    plotBackground={{ fill: '#fff', fillOpacity: '0' }}
                    padding={[0, 60, 0, 60]}
        >
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            style={{borderRadius:'50%',background:'red'}}
            position="year*sales" />
        </Chart>
      </div>
    );
  }
}

export default Basiccolumn;
