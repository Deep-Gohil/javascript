export const handlePost = async (data) => {
    let request = await fetch(`http://localhost:3000/user/`, {
        method: `POST`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    let response = await request.json()
}

export const getData = async () => {
    let request = await fetch(`http://localhost:3000/user/`)
    let response = await request.json()
    
} 