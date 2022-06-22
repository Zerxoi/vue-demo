type Name = {
    name: string
}

export const axios = (url: string): Promise<Name[]> => {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setTimeout(() => {
                    resolve(JSON.parse(xhr.responseText))
                }, 2000)
            }
        }
        xhr.send(null)
    })
}