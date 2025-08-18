import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '01/09',
    tradeDepot: 4000,
    veenocks: 8300,
    biswal: 2400,
  },
  {
    name: '02/09',
    tradeDepot: 3000,
    veenocks: 1398,
    biswal: 5100,
  },
  {
    name: '03/09',
    tradeDepot: 2000,
    veenocks: 9800,
    biswal: 2290,
  },
  {
    name: '04/09',
    tradeDepot: 2780,
    veenocks: 3908,
    biswal: 8400,
  },
  {
    name: '05/09',
    tradeDepot: 1890,
    veenocks: 4800,
    biswal: 2181,
  },
  {
    name: '06/09',
    tradeDepot: 6090,
    veenocks: 3800,
    biswal: 7300,
  },
  {
    name: '08/09',
    tradeDepot: 3490,
    veenocks: 8700,
    biswal: 5500,
  },
];

const Barchart = () => {
  return (
    <div className="w-full h-full text-xs">
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: '500',
            color: 'black',
          }}
          barCategoryGap="10%"
          barGap={5}
          barSize={15}
        >
          <CartesianGrid vertical={false} horizontal={true} stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{
              fontSize: 11,
              width: 100,
              height: 20,
              textAnchor: 'middle',
              fill: '#6B7280',
              fontStyle: 'normal',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
              color: '#f7f8f9',
            }}
            tickLine={false}
            axisLine={true}
          />
          <YAxis
            tick={{
              fontSize: 14,
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
            }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              background: '#f4f5f7',
              border: 'none',
              borderRadius: '8px',
              padding: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              color: 'black',
              fontSize: '12px',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
            }}
            labelStyle={{ display: 'none' }}
            cursor={{ fill: 'transparent' }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '12px',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
              display: 'flex',
              justifyContent: 'center',
              gap: '25px',
              color: 'black',
            }}
            content={(props) => {
              const { payload } = props;
              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                  }}
                >
                  {payload?.map((entry, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: entry.color,
                        }}
                      />
                      <span
                        style={{
                          color: 'black',
                          fontSize: '12px',
                          fontFamily: 'Mulish, sans-serif',
                          fontWeight: '500',
                        }}
                      >
                        {entry.value}
                      </span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Bar
            dataKey="veenocks"
            name="Veenocks"
            fill="#8884d8"
            activeBar={
              <Rectangle
                stroke="purple"
                strokeWidth="2"
                radius={[50, 50, 0, 0]}
              />
            }
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="tradeDepot"
            name="Trade Depot"
            fill="#82ca9d"
            activeBar={
              <Rectangle
                stroke="green"
                strokeWidth="2"
                radius={[50, 50, 0, 0]}
              />
            }
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="biswal"
            name="Biswal"
            fill="#FAAB3C"
            activeBar={
              <Rectangle
                stroke="orange"
                strokeWidth="2"
                radius={[50, 50, 0, 0]}
              />
            }
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
