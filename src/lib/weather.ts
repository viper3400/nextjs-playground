'use server'

export async function getTemperature() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.00&longitude=7.46&hourly=temperature_2m&current_weather=true&forecast_days=1&timezone=Europe%2FBerlin';
    const temperature = await fetch(url, { cache: 'no-store' })

    if (!temperature.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
    
      return temperature.json();
}
