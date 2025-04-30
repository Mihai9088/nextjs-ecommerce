"use client";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Charts = ({
  data: { salesData },
}: {
  data: { salesData: { month: string; totalSales: number }[] };
}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={salesData}>
        <XAxis
          dataKey="month"
          stroke="#3B82F6"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#3B82F6"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value}`}
        />
        <Line
          type="monotone"
          dataKey="totalSales"
          stroke="#3B82F6"
          strokeWidth={2}
          dot={{ r: 4, fill: "#ffffff" }}
          activeDot={{ r: 6, fill: "#ffffff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Charts;
