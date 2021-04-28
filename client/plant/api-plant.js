export const create = async(plant)=> {
    console.log('Called create api-plant')
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

export const read = async(params, signal)=> {
    try {
        let response=await fetch('/api/v1/plants'+params.plantId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch(err){
        console.log(err)
    }
}
