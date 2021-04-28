export const create = async(plant)=> {
    try {
        let response = await fetch('/api/v1/plants/', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(plant)
        })
        return await response.json()
    } catch (err){
        console.log(err)
    }
}

export const list = async(signal)=> {
    try {
        let response = await fetch('/api/v1/plants', {
            method: 'GET',
            signal: signal,
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}
