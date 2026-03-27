import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

const TinyBarChart = ({ ratings }) => {

    const sortedData = [...ratings].reverse();

    return (
        <div style={{ width: '100%', height: 300, minWidth: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={sortedData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >

                    <XAxis type="number" /> 

                    <YAxis 
                        dataKey="name" 
                        type="category" 
                        tick={{ fill: '#64748b', fontSize: 14 }} 
                        width={60}
                    />

                    <Bar 
                        dataKey="count" 
                        fill="#ff9800" 
                        radius={[0, 4, 4, 0]} 
                        barSize={20} 
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TinyBarChart;