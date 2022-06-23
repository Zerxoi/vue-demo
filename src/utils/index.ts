type Option = {
    el: string
}

const useBase64 = (option: Option): Promise<{ baseUrl: string }> => {
    return new Promise((resolve) => {
        onMounted(() => {
            let imgEl: HTMLImageElement = document.querySelector(option.el) as HTMLImageElement
            imgEl.onload = () => {
                resolve({ baseUrl: base64(imgEl) })
            }

            const base64 = (imgEl: HTMLImageElement): string => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                canvas.width = imgEl.width
                canvas.height = imgEl.height
                ctx?.drawImage(imgEl, 0, 0, canvas.width, canvas.height)
                return canvas.toDataURL('image/png')
            }
        })
    })
}

export {
    useBase64
}