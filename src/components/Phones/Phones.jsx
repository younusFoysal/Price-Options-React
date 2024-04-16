import {useEffect, useState} from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';



const Phones = () => {

    const [phones, setPhones] = useState([]);

    //loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            //.then(data => setPhones(data.data.data))
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneWithFakeData);
                setPhones(phoneWithFakeData);
                setLoading(false);
            })

    }, []);

    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            {
                loading && <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
            }






            <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Tooltip></Tooltip>

                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>


        </div>
    );
};

export default Phones;