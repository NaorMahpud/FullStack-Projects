import axios from "axios"

const checkToken = async (token) => {
    try {
        const { data } = await axios.get('http://localhost:7000/cinema/auth/checkToken', {
            headers: {
                Authorization: `${token}`
            }
        })
        return data
    } catch (error) {
        return error
    }
}

export { checkToken }