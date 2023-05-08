import React from 'react'

function WheatherComponent(props) {
    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes('d');

    const getTime = (timeStamp) =>{
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`;
    }

    console.log(weather);
  return (
    <div className='mt-5'>
        <h1 className="text-xl mb-5">Details of the location:</h1>
        <h1>City Name: {`${weather?.name}, ${weather?.sys.country}`}</h1>
        <h2>Temperature: {`${weather?.main?.temp}°C`}</h2>
        <h2>Humidity: {`${weather?.main?.humidity}%`}</h2>
        <h2>Wind Speed: {`${weather?.wind?.speed} mph`}</h2>
        <h2>Wind Direction: {`${weather?.wind?.deg}°`}</h2>
        <h2>Description: {`${weather?.weather[0]?.description}`}</h2>
        <p>{isDay ? "Sunset": "Sunrise"}</p>

        {/* <img src={weather?.weather[0]?.icon} alt={weather?.weather[0]?.description} /> */}
    </div>
  )
}

export default WheatherComponent