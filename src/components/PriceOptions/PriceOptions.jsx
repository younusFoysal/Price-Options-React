import PriceOption from "../PriceOption/PriceOption.jsx";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30.00,
            "features": [
                "Access to cardio area",
                "Basic workout equipment",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 50.00,
            "features": [
                "Access to cardio and weightlifting areas",
                "Full range of workout equipment",
                "Locker room access",
                "Group fitness classes"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 80.00,
            "features": [
                "Access to all gym facilities",
                "Personal training sessions",
                "Sauna and spa access",
                "Nutritional guidance",
                "Towel service"
            ]
        }
    ]



    return (
        <div className="m-12">

            <h2 className="text-5xl text-center mb-7">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>


        </div>
    );
};

export default PriceOptions;