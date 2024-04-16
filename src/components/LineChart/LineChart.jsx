import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {

    const subjectMarksData = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 88 },
        { id: 2, name: "Bob", mathMarks: 70, physicsMarks: 65, chemistryMarks: 75 },
        { id: 3, name: "Charlie", mathMarks: 90, physicsMarks: 85, chemistryMarks: 92 },
        { id: 4, name: "David", mathMarks: 65, physicsMarks: 60, chemistryMarks: 70 },
        { id: 5, name: "Joy", mathMarks: 75, physicsMarks: 68, chemistryMarks: 80 },
        { id: 6, name: "Frank", mathMarks: 80, physicsMarks: 75, chemistryMarks: 85 },
        { id: 7, name: "Grace", mathMarks: 95, physicsMarks: 90, chemistryMarks: 98 },
        { id: 8, name: "Henry", mathMarks: 60, physicsMarks: 55, chemistryMarks: 65 },
        { id: 9, name: "Ivy", mathMarks: 88, physicsMarks: 82, chemistryMarks: 90 },
        { id: 10, name: "Jack", mathMarks: 72, physicsMarks: 68, chemistryMarks: 78 }
    ];



    return (
        <div className="w-1/2 mx-auto">
            <LChart width={500} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"></XAxis>
                <Line dataKey="mathMarks" stroke="red"></Line>
                <Line dataKey="physicsMarks" stroke="blue"></Line>
                <Line dataKey="chemistryMarks" stroke="yellow"></Line>
                <YAxis></YAxis>

            </LChart>
        </div>
    );
};

export default LineCharts;